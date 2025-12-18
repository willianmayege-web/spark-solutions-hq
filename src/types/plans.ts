/**
 * Tipos e constantes para o sistema de planos de monitoramento
 */

// Enum de planos
export const PLAN = {
  ESSENCIAL: 'ESSENCIAL',
  PERFORMANCE: 'PERFORMANCE',
  GESTAO_MERCADO: 'GESTAO_MERCADO',
} as const;

export type PlanType = typeof PLAN[keyof typeof PLAN];

// Status do plano
export const PLAN_STATUS = {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
} as const;

export type PlanStatusType = typeof PLAN_STATUS[keyof typeof PLAN_STATUS];

// Flags derivadas
export const includesGeneration = (plan: PlanType): boolean =>
  plan === PLAN.PERFORMANCE || plan === PLAN.GESTAO_MERCADO;

export const includesSmartMeter = (plan: PlanType): boolean =>
  plan === PLAN.GESTAO_MERCADO;

// Perfil do cliente
export interface ClientProfile {
  clientId: string;
  email: string;
  name: string;
  plan: PlanType;
  planStatus: PlanStatusType;
  planValidUntil?: string;
}

// Relatório de geração
export interface GenerationReport {
  id: string;
  clientId: string;
  month: number;
  year: number;
  kwhGenerated: number;
  estimatedKwh: number;
  performanceRatio: number;
  lossNotes?: string;
  createdAt: string;
}

// Relatório de consumo (Smart Meter)
export interface ConsumptionReport {
  id: string;
  clientId: string;
  month: number;
  year: number;
  kwhConsumed: number;
  peakNotes?: string;
  createdAt: string;
}

// Alerta
export interface ClientAlert {
  id: string;
  clientId: string;
  date: string;
  type: 'generation' | 'consumption' | 'system' | 'billing';
  severity: 'info' | 'warning' | 'critical';
  message: string;
  read?: boolean;
}

// Nomes amigáveis dos planos
export const PLAN_NAMES: Record<PlanType, string> = {
  [PLAN.ESSENCIAL]: 'Essencial',
  [PLAN.PERFORMANCE]: 'Performance',
  [PLAN.GESTAO_MERCADO]: 'Gestão + Mercado',
};

// Descrições dos planos
export const PLAN_DESCRIPTIONS: Record<PlanType, string> = {
  [PLAN.ESSENCIAL]: 'Acesso básico + histórico resumido',
  [PLAN.PERFORMANCE]: 'Geração Própria + relatórios + alertas',
  [PLAN.GESTAO_MERCADO]: 'Performance + Smart Meter + prontidão para mercado livre',
};
