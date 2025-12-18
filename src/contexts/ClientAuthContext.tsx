/**
 * Contexto de autenticação do cliente
 * MVP: Usa dados mock para desenvolvimento, preparado para integração com backend
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ClientProfile, PLAN, PLAN_STATUS, PlanType, PlanStatusType } from '@/types/plans';

interface ClientAuthState {
  isAuthenticated: boolean;
  profile: ClientProfile | null;
  loading: boolean;
}

interface ClientAuthContextType extends ClientAuthState {
  login: (email: string) => Promise<boolean>;
  logout: () => void;
  setMockProfile: (profileKey: string) => void;
}

const ClientAuthContext = createContext<ClientAuthContextType | undefined>(undefined);

// Mock de perfis para desenvolvimento/teste
const MOCK_PROFILES: Record<string, ClientProfile> = {
  'essencial@teste.com': {
    clientId: 'client-001',
    email: 'essencial@teste.com',
    name: 'Cliente Essencial',
    plan: PLAN.ESSENCIAL,
    planStatus: PLAN_STATUS.ACTIVE,
  },
  'performance@teste.com': {
    clientId: 'client-002',
    email: 'performance@teste.com',
    name: 'Cliente Performance',
    plan: PLAN.PERFORMANCE,
    planStatus: PLAN_STATUS.ACTIVE,
  },
  'gestao@teste.com': {
    clientId: 'client-003',
    email: 'gestao@teste.com',
    name: 'Cliente Gestão',
    plan: PLAN.GESTAO_MERCADO,
    planStatus: PLAN_STATUS.ACTIVE,
  },
  'inadimplente@teste.com': {
    clientId: 'client-004',
    email: 'inadimplente@teste.com',
    name: 'Cliente Inadimplente',
    plan: PLAN.PERFORMANCE,
    planStatus: PLAN_STATUS.PAST_DUE,
  },
  'cancelado@teste.com': {
    clientId: 'client-005',
    email: 'cancelado@teste.com',
    name: 'Cliente Cancelado',
    plan: PLAN.GESTAO_MERCADO,
    planStatus: PLAN_STATUS.CANCELED,
  },
};

const STORAGE_KEY = 'eletromays-client-session';

export function ClientAuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ClientAuthState>({
    isAuthenticated: false,
    profile: null,
    loading: true,
  });

  // Verificar sessão existente ao carregar
  useEffect(() => {
    const savedSession = localStorage.getItem(STORAGE_KEY);
    if (savedSession) {
      try {
        const profile = JSON.parse(savedSession) as ClientProfile;
        setState({
          isAuthenticated: true,
          profile,
          loading: false,
        });
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setState({ isAuthenticated: false, profile: null, loading: false });
      }
    } else {
      setState({ isAuthenticated: false, profile: null, loading: false });
    }
  }, []);

  // Login mock - aceita emails do MOCK_PROFILES
  const login = async (email: string): Promise<boolean> => {
    const normalizedEmail = email.toLowerCase().trim();
    const profile = MOCK_PROFILES[normalizedEmail];

    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      setState({
        isAuthenticated: true,
        profile,
        loading: false,
      });
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      isAuthenticated: false,
      profile: null,
      loading: false,
    });
  };

  // Função para trocar perfil mock (desenvolvimento)
  const setMockProfile = (profileKey: string) => {
    const profile = MOCK_PROFILES[profileKey];
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      setState({
        isAuthenticated: true,
        profile,
        loading: false,
      });
    }
  };

  return (
    <ClientAuthContext.Provider value={{ ...state, login, logout, setMockProfile }}>
      {children}
    </ClientAuthContext.Provider>
  );
}

export function useClientAuth() {
  const context = useContext(ClientAuthContext);
  if (context === undefined) {
    throw new Error('useClientAuth must be used within a ClientAuthProvider');
  }
  return context;
}

// Exportar lista de perfis mock para documentação/debug
export const AVAILABLE_MOCK_PROFILES = Object.keys(MOCK_PROFILES);
