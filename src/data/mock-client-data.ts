/**
 * Dados mock para desenvolvimento do sistema de monitoramento
 */

import { GenerationReport, ClientAlert, ConsumptionReport } from '@/types/plans';

// Relatórios de geração mock (últimos 12 meses para client-002 e client-003)
export const mockGenerationReports: GenerationReport[] = [
  { id: 'gr-001', clientId: 'client-002', month: 12, year: 2025, kwhGenerated: 1320, estimatedKwh: 1350, performanceRatio: 0.978, createdAt: '2025-12-15' },
  { id: 'gr-002', clientId: 'client-002', month: 11, year: 2025, kwhGenerated: 1250, estimatedKwh: 1300, performanceRatio: 0.962, createdAt: '2025-11-15' },
  { id: 'gr-003', clientId: 'client-002', month: 10, year: 2025, kwhGenerated: 1180, estimatedKwh: 1250, performanceRatio: 0.944, createdAt: '2025-10-15' },
  { id: 'gr-004', clientId: 'client-002', month: 9, year: 2025, kwhGenerated: 1100, estimatedKwh: 1150, performanceRatio: 0.957, createdAt: '2025-09-15' },
  { id: 'gr-005', clientId: 'client-002', month: 8, year: 2025, kwhGenerated: 980, estimatedKwh: 1000, performanceRatio: 0.980, createdAt: '2025-08-15' },
  { id: 'gr-006', clientId: 'client-002', month: 7, year: 2025, kwhGenerated: 920, estimatedKwh: 950, performanceRatio: 0.968, createdAt: '2025-07-15' },
  { id: 'gr-007', clientId: 'client-002', month: 6, year: 2025, kwhGenerated: 850, estimatedKwh: 900, performanceRatio: 0.944, createdAt: '2025-06-15' },
  { id: 'gr-008', clientId: 'client-002', month: 5, year: 2025, kwhGenerated: 1050, estimatedKwh: 1100, performanceRatio: 0.955, createdAt: '2025-05-15' },
  { id: 'gr-009', clientId: 'client-002', month: 4, year: 2025, kwhGenerated: 1150, estimatedKwh: 1200, performanceRatio: 0.958, createdAt: '2025-04-15' },
  { id: 'gr-010', clientId: 'client-002', month: 3, year: 2025, kwhGenerated: 1280, estimatedKwh: 1320, performanceRatio: 0.970, createdAt: '2025-03-15' },
  { id: 'gr-011', clientId: 'client-002', month: 2, year: 2025, kwhGenerated: 1350, estimatedKwh: 1400, performanceRatio: 0.964, createdAt: '2025-02-15' },
  { id: 'gr-012', clientId: 'client-002', month: 1, year: 2025, kwhGenerated: 1400, estimatedKwh: 1420, performanceRatio: 0.986, createdAt: '2025-01-15' },
  // Gestão client
  { id: 'gr-101', clientId: 'client-003', month: 12, year: 2025, kwhGenerated: 2100, estimatedKwh: 2200, performanceRatio: 0.955, createdAt: '2025-12-15' },
  { id: 'gr-102', clientId: 'client-003', month: 11, year: 2025, kwhGenerated: 1980, estimatedKwh: 2050, performanceRatio: 0.966, createdAt: '2025-11-15' },
  { id: 'gr-103', clientId: 'client-003', month: 10, year: 2025, kwhGenerated: 1850, estimatedKwh: 1900, performanceRatio: 0.974, createdAt: '2025-10-15' },
];

// Relatórios de consumo mock (Smart Meter - apenas client-003)
export const mockConsumptionReports: ConsumptionReport[] = [
  { id: 'cr-001', clientId: 'client-003', month: 12, year: 2025, kwhConsumed: 1850, peakNotes: 'Pico às 19h', createdAt: '2025-12-15' },
  { id: 'cr-002', clientId: 'client-003', month: 11, year: 2025, kwhConsumed: 1720, peakNotes: 'Consumo estável', createdAt: '2025-11-15' },
  { id: 'cr-003', clientId: 'client-003', month: 10, year: 2025, kwhConsumed: 1680, peakNotes: 'Redução de 5%', createdAt: '2025-10-15' },
];

// Alertas mock
export const mockAlerts: ClientAlert[] = [
  { id: 'al-001', clientId: 'client-002', date: '2025-12-15', type: 'generation', severity: 'info', message: 'Geração de dezembro dentro do esperado (+2.2%)', read: false },
  { id: 'al-002', clientId: 'client-002', date: '2025-12-10', type: 'system', severity: 'info', message: 'Relatório mensal de novembro disponível', read: true },
  { id: 'al-003', clientId: 'client-002', date: '2025-11-28', type: 'generation', severity: 'warning', message: 'Geração 3.8% abaixo do esperado - verificar sombreamento', read: true },
  { id: 'al-004', clientId: 'client-002', date: '2025-11-15', type: 'system', severity: 'info', message: 'Relatório mensal de outubro disponível', read: true },
  { id: 'al-005', clientId: 'client-003', date: '2025-12-15', type: 'generation', severity: 'info', message: 'Performance do sistema: 95.5% do estimado', read: false },
  { id: 'al-006', clientId: 'client-003', date: '2025-12-14', type: 'consumption', severity: 'warning', message: 'Consumo 8% acima da média - pico noturno identificado', read: false },
  { id: 'al-007', clientId: 'client-003', date: '2025-12-10', type: 'system', severity: 'info', message: 'Smart Meter: dados sincronizados', read: true },
];

// Helpers para filtrar dados por cliente
export function getClientReports(clientId: string): GenerationReport[] {
  return mockGenerationReports.filter(r => r.clientId === clientId);
}

export function getClientConsumption(clientId: string): ConsumptionReport[] {
  return mockConsumptionReports.filter(r => r.clientId === clientId);
}

export function getClientAlerts(clientId: string): ClientAlert[] {
  return mockAlerts.filter(a => a.clientId === clientId);
}

// Estatísticas calculadas
export function getLatestReport(clientId: string): GenerationReport | null {
  const reports = getClientReports(clientId);
  return reports.length > 0 ? reports[0] : null;
}

export function getPreviousReport(clientId: string): GenerationReport | null {
  const reports = getClientReports(clientId);
  return reports.length > 1 ? reports[1] : null;
}

export function getMonthlyComparison(clientId: string): number | null {
  const latest = getLatestReport(clientId);
  const previous = getPreviousReport(clientId);
  if (!latest || !previous) return null;
  return ((latest.kwhGenerated - previous.kwhGenerated) / previous.kwhGenerated) * 100;
}

export function getPerformanceStatus(clientId: string): 'ok' | 'warning' | 'critical' {
  const latest = getLatestReport(clientId);
  if (!latest) return 'ok';
  if (latest.performanceRatio >= 0.95) return 'ok';
  if (latest.performanceRatio >= 0.85) return 'warning';
  return 'critical';
}

export function getUnreadAlertsCount(clientId: string): number {
  return mockAlerts.filter(a => a.clientId === clientId && !a.read).length;
}
