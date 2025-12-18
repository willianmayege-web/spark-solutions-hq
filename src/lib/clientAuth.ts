/**
 * Sistema centralizado de autorização para área do cliente
 */

import { PLAN_STATUS, includesGeneration, includesSmartMeter, ClientProfile } from '@/types/plans';

export type AccessFeature = 'generation' | 'smartMeter' | 'reports' | 'alerts';

/**
 * Função centralizada de autorização
 * Verifica se o cliente pode acessar determinada funcionalidade
 */
export function canAccess(
  profile: ClientProfile | null,
  feature: AccessFeature
): boolean {
  if (!profile) return false;
  if (profile.planStatus !== PLAN_STATUS.ACTIVE) return false;

  switch (feature) {
    case 'generation':
    case 'reports':
    case 'alerts':
      return includesGeneration(profile.plan);
    case 'smartMeter':
      return includesSmartMeter(profile.plan);
    default:
      return false;
  }
}

/**
 * Verificar se plano está ativo
 */
export function isPlanActive(profile: ClientProfile | null): boolean {
  return profile?.planStatus === PLAN_STATUS.ACTIVE;
}

/**
 * Obter mensagem de bloqueio apropriada
 */
export function getBlockedMessage(profile: ClientProfile | null): string {
  if (!profile) return 'Faça login para acessar este recurso.';

  if (profile.planStatus === PLAN_STATUS.PAST_DUE) {
    return 'Seu plano possui pendências financeiras. Regularize para continuar acessando.';
  }
  if (profile.planStatus === PLAN_STATUS.CANCELED) {
    return 'Seu plano foi cancelado. Entre em contato para reativar.';
  }

  return 'Recurso disponível nos planos Performance ou Gestão+Mercado.';
}

/**
 * Obter mensagem de upgrade para feature específica
 */
export function getUpgradeMessage(feature: AccessFeature): string {
  switch (feature) {
    case 'generation':
    case 'reports':
    case 'alerts':
      return 'Acompanhe a geração do seu sistema solar em tempo real. Disponível nos planos Performance e Gestão+Mercado.';
    case 'smartMeter':
      return 'Monitore seu consumo de energia com Smart Meter. Disponível no plano Gestão+Mercado.';
    default:
      return 'Recurso disponível em planos superiores.';
  }
}
