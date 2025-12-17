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
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Vary': 'Origin',
  };
}

// Rate limiting settings
const MAX_LOGIN_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

interface LoginRequest {
  email: string;
  password: string;
}

// Generate secure random token
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Simple HMAC-like signature for token validation
async function signToken(token: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(token));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function verifyToken(token: string, signature: string, secret: string): Promise<boolean> {
  const expectedSig = await signToken(token, secret);
  return signature === expectedSig;
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validate password (basic check)
function isValidPassword(password: string): boolean {
  return typeof password === 'string' && password.length >= 1 && password.length <= 128;
}

// Sanitize input
function sanitizeString(str: string): string {
  return str.trim().slice(0, 500);
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
  const adminEmail = Deno.env.get('ADMIN_EMAIL')!;
  const adminPassword = Deno.env.get('ADMIN_PASSWORD')!;
  const sessionSecret = Deno.env.get('SESSION_SECRET')!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const url = new URL(req.url);
  const action = url.searchParams.get('action');
  const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                   req.headers.get('cf-connecting-ip') || 
                   'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  console.log(`[admin-auth] Action: ${action}, IP: ${clientIP}`);

  try {
    // LOGIN
    if (action === 'login' && req.method === 'POST') {
      // Check rate limiting
      const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
      const { data: attempts, error: attemptsError } = await supabase
        .from('admin_login_attempts')
        .select('id')
        .eq('ip_address', clientIP)
        .eq('success', false)
        .gte('created_at', windowStart);

      if (attemptsError) {
        console.error('[admin-auth] Error checking rate limit:', attemptsError);
      }

      if (attempts && attempts.length >= MAX_LOGIN_ATTEMPTS) {
        console.log(`[admin-auth] Rate limit exceeded for IP: ${clientIP}`);
        return new Response(
          JSON.stringify({ error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Parse and validate body
      let body: LoginRequest;
      try {
        body = await req.json();
      } catch {
        return new Response(
          JSON.stringify({ error: 'Dados inválidos' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const email = sanitizeString(body.email || '');
      const password = body.password || '';

      // Validate inputs
      if (!isValidEmail(email) || !isValidPassword(password)) {
        // Log failed attempt (don't reveal which field failed)
        await supabase.from('admin_login_attempts').insert({
          ip_address: clientIP,
          email: email.slice(0, 100),
          success: false
        });

        return new Response(
          JSON.stringify({ error: 'Credenciais inválidas' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validate credentials (constant-time comparison would be ideal)
      const isValidCredentials = email.toLowerCase() === adminEmail.toLowerCase() && password === adminPassword;

      // Log attempt
      await supabase.from('admin_login_attempts').insert({
        ip_address: clientIP,
        email: email.slice(0, 100),
        success: isValidCredentials
      });

      if (!isValidCredentials) {
        console.log(`[admin-auth] Failed login attempt for: ${email.slice(0, 50)}`);
        return new Response(
          JSON.stringify({ error: 'Credenciais inválidas' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Clean expired sessions
      await supabase.rpc('clean_expired_sessions').catch(() => {});

      // Create new session
      const token = generateToken();
      const signature = await signToken(token, sessionSecret);
      const sessionToken = `${token}.${signature}`;
      const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

      const { error: insertError } = await supabase.from('admin_sessions').insert({
        token: sessionToken,
        email: email.toLowerCase(),
        ip_address: clientIP,
        user_agent: userAgent.slice(0, 500),
        expires_at: expiresAt.toISOString()
      });

      if (insertError) {
        console.error('[admin-auth] Error creating session:', insertError);
        return new Response(
          JSON.stringify({ error: 'Erro ao criar sessão' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`[admin-auth] Successful login for admin`);

      return new Response(
        JSON.stringify({ 
          success: true, 
          token: sessionToken,
          expiresAt: expiresAt.toISOString()
        }),
        { 
          status: 200, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
          } 
        }
      );
    }

    // LOGOUT
    if (action === 'logout' && req.method === 'POST') {
      const authHeader = req.headers.get('authorization');
      const token = authHeader?.replace('Bearer ', '');

      if (token) {
        await supabase.from('admin_sessions').delete().eq('token', token);
        console.log('[admin-auth] Session invalidated');
      }

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ME (Check session)
    if (action === 'me' && req.method === 'GET') {
      const authHeader = req.headers.get('authorization');
      const token = authHeader?.replace('Bearer ', '');

      if (!token) {
        return new Response(
          JSON.stringify({ authenticated: false, role: 'guest' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validate token format
      const parts = token.split('.');
      if (parts.length !== 2) {
        return new Response(
          JSON.stringify({ authenticated: false, role: 'guest' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const [tokenValue, signature] = parts;
      const isValid = await verifyToken(tokenValue, signature, sessionSecret);

      if (!isValid) {
        return new Response(
          JSON.stringify({ authenticated: false, role: 'guest' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Check session in database
      const { data: session, error: sessionError } = await supabase
        .from('admin_sessions')
        .select('*')
        .eq('token', token)
        .gt('expires_at', new Date().toISOString())
        .maybeSingle();

      if (sessionError || !session) {
        return new Response(
          JSON.stringify({ authenticated: false, role: 'guest' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ 
          authenticated: true, 
          role: 'admin',
          email: session.email,
          expiresAt: session.expires_at
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Ação não encontrada' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[admin-auth] Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
