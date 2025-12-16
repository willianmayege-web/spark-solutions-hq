-- Create admin sessions table for managing admin login sessions
CREATE TABLE public.admin_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    token TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Create index for token lookups
CREATE INDEX idx_admin_sessions_token ON public.admin_sessions(token);
CREATE INDEX idx_admin_sessions_expires_at ON public.admin_sessions(expires_at);

-- Enable RLS
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;

-- No public access - only service role can access this table
-- (accessed via edge functions with service role key)

-- Create login_attempts table for rate limiting
CREATE TABLE public.admin_login_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip_address TEXT NOT NULL,
    email TEXT,
    success BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for rate limiting queries
CREATE INDEX idx_admin_login_attempts_ip ON public.admin_login_attempts(ip_address, created_at);

-- Enable RLS
ALTER TABLE public.admin_login_attempts ENABLE ROW LEVEL SECURITY;

-- No public access - only service role

-- Create clients table for admin management (example)
CREATE TABLE public.admin_clients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    status TEXT NOT NULL DEFAULT 'active',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_clients ENABLE ROW LEVEL SECURITY;

-- No public access - managed via admin API

-- Function to clean expired sessions
CREATE OR REPLACE FUNCTION public.clean_expired_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    DELETE FROM public.admin_sessions WHERE expires_at < now();
END;
$$;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_admin_clients_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger for auto-updating updated_at
CREATE TRIGGER update_admin_clients_timestamp
BEFORE UPDATE ON public.admin_clients
FOR EACH ROW
EXECUTE FUNCTION public.update_admin_clients_updated_at();