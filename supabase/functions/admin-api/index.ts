import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://eletromays.com.br',
  'https://www.eletromays.com.br',
  'https://eletromays.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin || '') 
    ? origin! 
    : ALLOWED_ORIGINS[0];
  
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Vary': 'Origin',
  };
}

// Simple HMAC verification
async function verifyToken(token: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const expectedSig = await crypto.subtle.sign('HMAC', key, encoder.encode(token));
  const expectedSigB64 = btoa(String.fromCharCode(...new Uint8Array(expectedSig)));
  return signature === expectedSigB64;
}

// Admin middleware - validates session
async function requireAdmin(
  req: Request,
  supabase: ReturnType<typeof createClient>,
  sessionSecret: string
): Promise<{ valid: boolean; error?: string; email?: string }> {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return { valid: false, error: 'Token não fornecido' };
  }

  // Validate token format
  const parts = token.split('.');
  if (parts.length !== 2) {
    return { valid: false, error: 'Token inválido' };
  }

  const [tokenValue, signature] = parts;
  const isValid = await verifyToken(tokenValue, signature, sessionSecret);

  if (!isValid) {
    return { valid: false, error: 'Token inválido' };
  }

  // Check session in database
  const { data: session, error: sessionError } = await supabase
    .from('admin_sessions')
    .select('*')
    .eq('token', token)
    .gt('expires_at', new Date().toISOString())
    .maybeSingle();

  if (sessionError || !session) {
    return { valid: false, error: 'Sessão inválida ou expirada' };
  }

  return { valid: true, email: session.email };
}

// Sanitize input
function sanitizeString(str: string | null | undefined): string {
  if (!str) return '';
  return String(str).trim().slice(0, 1000);
}

// Validate UUID
function isValidUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const sessionSecret = Deno.env.get('SESSION_SECRET')!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const url = new URL(req.url);
  const resource = url.searchParams.get('resource');
  const id = url.searchParams.get('id');

  console.log(`[admin-api] ${req.method} ${resource}${id ? `/${id}` : ''}`);

  // Validate admin session for ALL requests
  const authResult = await requireAdmin(req, supabase, sessionSecret);
  if (!authResult.valid) {
    console.log(`[admin-api] Unauthorized: ${authResult.error}`);
    return new Response(
      JSON.stringify({ error: authResult.error }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  console.log(`[admin-api] Authorized admin: ${authResult.email}`);

  try {
    // CLIENTS RESOURCE
    if (resource === 'clients') {
      // GET /clients - List all clients
      if (req.method === 'GET' && !id) {
        const search = url.searchParams.get('search') || '';
        const status = url.searchParams.get('status') || '';
        const page = parseInt(url.searchParams.get('page') || '1');
        const limit = Math.min(parseInt(url.searchParams.get('limit') || '50'), 100);
        const offset = (page - 1) * limit;

        let query = supabase
          .from('admin_clients')
          .select('*', { count: 'exact' });

        if (search) {
          const searchTerm = `%${sanitizeString(search)}%`;
          query = query.or(`name.ilike.${searchTerm},email.ilike.${searchTerm},company.ilike.${searchTerm}`);
        }

        if (status) {
          query = query.eq('status', sanitizeString(status));
        }

        const { data, error, count } = await query
          .order('created_at', { ascending: false })
          .range(offset, offset + limit - 1);

        if (error) {
          console.error('[admin-api] Error fetching clients:', error);
          return new Response(
            JSON.stringify({ error: 'Erro ao buscar clientes' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ 
            data, 
            pagination: { 
              total: count || 0, 
              page, 
              limit, 
              pages: Math.ceil((count || 0) / limit) 
            } 
          }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // GET /clients/:id - Get single client
      if (req.method === 'GET' && id) {
        if (!isValidUUID(id)) {
          return new Response(
            JSON.stringify({ error: 'ID inválido' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { data, error } = await supabase
          .from('admin_clients')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) {
          console.error('[admin-api] Error fetching client:', error);
          return new Response(
            JSON.stringify({ error: 'Erro ao buscar cliente' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (!data) {
          return new Response(
            JSON.stringify({ error: 'Cliente não encontrado' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ data }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // POST /clients - Create client
      if (req.method === 'POST') {
        let body;
        try {
          body = await req.json();
        } catch {
          return new Response(
            JSON.stringify({ error: 'Dados inválidos' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const name = sanitizeString(body.name);
        const email = sanitizeString(body.email);
        const phone = sanitizeString(body.phone);
        const company = sanitizeString(body.company);
        const status = sanitizeString(body.status) || 'active';
        const notes = sanitizeString(body.notes);

        // Validate required fields
        if (!name || name.length < 2) {
          return new Response(
            JSON.stringify({ error: 'Nome é obrigatório (mínimo 2 caracteres)' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return new Response(
            JSON.stringify({ error: 'Email válido é obrigatório' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { data, error } = await supabase
          .from('admin_clients')
          .insert({ name, email, phone, company, status, notes })
          .select()
          .single();

        if (error) {
          console.error('[admin-api] Error creating client:', error);
          return new Response(
            JSON.stringify({ error: 'Erro ao criar cliente' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log(`[admin-api] Client created: ${data.id}`);

        return new Response(
          JSON.stringify({ data }),
          { status: 201, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // PUT /clients/:id - Update client
      if (req.method === 'PUT' && id) {
        if (!isValidUUID(id)) {
          return new Response(
            JSON.stringify({ error: 'ID inválido' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        let body;
        try {
          body = await req.json();
        } catch {
          return new Response(
            JSON.stringify({ error: 'Dados inválidos' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const updates: Record<string, string> = {};
        
        if (body.name !== undefined) {
          const name = sanitizeString(body.name);
          if (name.length < 2) {
            return new Response(
              JSON.stringify({ error: 'Nome deve ter no mínimo 2 caracteres' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
          updates.name = name;
        }
        
        if (body.email !== undefined) {
          const email = sanitizeString(body.email);
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(
              JSON.stringify({ error: 'Email inválido' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
          updates.email = email;
        }
        
        if (body.phone !== undefined) updates.phone = sanitizeString(body.phone);
        if (body.company !== undefined) updates.company = sanitizeString(body.company);
        if (body.status !== undefined) updates.status = sanitizeString(body.status);
        if (body.notes !== undefined) updates.notes = sanitizeString(body.notes);

        if (Object.keys(updates).length === 0) {
          return new Response(
            JSON.stringify({ error: 'Nenhum campo para atualizar' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { data, error } = await supabase
          .from('admin_clients')
          .update(updates)
          .eq('id', id)
          .select()
          .maybeSingle();

        if (error) {
          console.error('[admin-api] Error updating client:', error);
          return new Response(
            JSON.stringify({ error: 'Erro ao atualizar cliente' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        if (!data) {
          return new Response(
            JSON.stringify({ error: 'Cliente não encontrado' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log(`[admin-api] Client updated: ${id}`);

        return new Response(
          JSON.stringify({ data }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // DELETE /clients/:id - Delete client
      if (req.method === 'DELETE' && id) {
        if (!isValidUUID(id)) {
          return new Response(
            JSON.stringify({ error: 'ID inválido' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error } = await supabase
          .from('admin_clients')
          .delete()
          .eq('id', id);

        if (error) {
          console.error('[admin-api] Error deleting client:', error);
          return new Response(
            JSON.stringify({ error: 'Erro ao excluir cliente' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        console.log(`[admin-api] Client deleted: ${id}`);

        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // DASHBOARD STATS
    if (resource === 'dashboard' && req.method === 'GET') {
      // Get client stats
      const { count: totalClients } = await supabase
        .from('admin_clients')
        .select('*', { count: 'exact', head: true });

      const { count: activeClients } = await supabase
        .from('admin_clients')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      // Get recent clients
      const { data: recentClients } = await supabase
        .from('admin_clients')
        .select('id, name, email, created_at')
        .order('created_at', { ascending: false })
        .limit(5);

      return new Response(
        JSON.stringify({
          data: {
            totalClients: totalClients || 0,
            activeClients: activeClients || 0,
            pendingReports: 0, // Placeholder
            openTickets: 0, // Placeholder
            recentClients: recentClients || []
          }
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Recurso não encontrado' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[admin-api] Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
