import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

type AdminRole = 'admin' | 'guest';

interface AdminAuthState {
  authenticated: boolean;
  role: AdminRole;
  email: string | null;
  loading: boolean;
  expiresAt: string | null;
}

interface AdminAuthContextType extends AdminAuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

const TOKEN_KEY = 'admin_session_token';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AdminAuthState>({
    authenticated: false,
    role: 'guest',
    email: null,
    loading: true,
    expiresAt: null,
  });

  // Check session status
  const checkSession = useCallback(async () => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    
    if (!token) {
      setState({
        authenticated: false,
        role: 'guest',
        email: null,
        loading: false,
        expiresAt: null,
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('admin-auth', {
        body: null,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        method: 'GET',
      });

      // Parse URL params for action
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-auth?action=me`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();

      if (result.authenticated) {
        setState({
          authenticated: true,
          role: 'admin',
          email: result.email || null,
          loading: false,
          expiresAt: result.expiresAt || null,
        });
      } else {
        // Invalid session, clear token
        sessionStorage.removeItem(TOKEN_KEY);
        setState({
          authenticated: false,
          role: 'guest',
          email: null,
          loading: false,
          expiresAt: null,
        });
      }
    } catch (error) {
      console.error('Error checking session:', error);
      sessionStorage.removeItem(TOKEN_KEY);
      setState({
        authenticated: false,
        role: 'guest',
        email: null,
        loading: false,
        expiresAt: null,
      });
    }
  }, []);

  // Login
  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-auth?action=login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || 'Erro ao fazer login' };
      }

      if (result.success && result.token) {
        // Store in sessionStorage (cleared when browser closes)
        sessionStorage.setItem(TOKEN_KEY, result.token);
        
        setState({
          authenticated: true,
          role: 'admin',
          email: email,
          loading: false,
          expiresAt: result.expiresAt || null,
        });

        return { success: true };
      }

      return { success: false, error: 'Resposta inválida do servidor' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Erro de conexão. Tente novamente.' };
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    const token = sessionStorage.getItem(TOKEN_KEY);

    try {
      if (token) {
        await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-auth?action=logout`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      sessionStorage.removeItem(TOKEN_KEY);
      setState({
        authenticated: false,
        role: 'guest',
        email: null,
        loading: false,
        expiresAt: null,
      });
    }
  }, []);

  // Check session on mount
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  // Check session expiry
  useEffect(() => {
    if (state.expiresAt) {
      const expiresAt = new Date(state.expiresAt).getTime();
      const now = Date.now();
      const timeUntilExpiry = expiresAt - now;

      if (timeUntilExpiry > 0) {
        const timer = setTimeout(() => {
          logout();
        }, timeUntilExpiry);

        return () => clearTimeout(timer);
      }
    }
  }, [state.expiresAt, logout]);

  return (
    <AdminAuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        refresh: checkSession,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}

// Get token for API calls
export function getAdminToken(): string | null {
  return sessionStorage.getItem(TOKEN_KEY);
}
