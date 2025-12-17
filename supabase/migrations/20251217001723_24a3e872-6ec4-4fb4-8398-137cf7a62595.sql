-- Add deny-all RLS policies for admin tables (defense-in-depth)

-- Policy for admin_clients: deny all public access
CREATE POLICY "No public access to admin_clients"
ON public.admin_clients
FOR ALL
USING (false);

-- Policy for admin_sessions: deny all public access
CREATE POLICY "No public access to admin_sessions"
ON public.admin_sessions
FOR ALL
USING (false);

-- Policy for admin_login_attempts: deny all public access
CREATE POLICY "No public access to admin_login_attempts"
ON public.admin_login_attempts
FOR ALL
USING (false);