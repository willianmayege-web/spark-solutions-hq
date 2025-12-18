/**
 * Dashboard de Geração - Exibe dados de geração solar para clientes com plano Performance ou superior
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, TrendingUp, TrendingDown, AlertCircle, FileText, Download, Bell } from "lucide-react";
import { ClientProfile } from "@/types/plans";
import { 
  getClientReports, 
  getClientAlerts, 
  getLatestReport, 
  getMonthlyComparison, 
  getPerformanceStatus,
  getUnreadAlertsCount 
} from "@/data/mock-client-data";

interface GenerationDashboardProps {
  profile: ClientProfile;
}

const GenerationDashboard = ({ profile }: GenerationDashboardProps) => {
  const reports = getClientReports(profile.clientId);
  const alerts = getClientAlerts(profile.clientId);
  const latestReport = getLatestReport(profile.clientId);
  const comparison = getMonthlyComparison(profile.clientId);
  const performanceStatus = getPerformanceStatus(profile.clientId);
  const unreadCount = getUnreadAlertsCount(profile.clientId);

  const getStatusBadge = () => {
    switch (performanceStatus) {
      case 'ok':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">OK</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Atenção</Badge>;
      case 'critical':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Crítico</Badge>;
    }
  };

  const formatMonth = (month: number, year: number) => {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${months[month - 1]}/${year}`;
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Sun className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Geração Própria</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {unreadCount} novo{unreadCount > 1 ? 's' : ''}
            </Badge>
          )}
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Geração no Mês</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {latestReport ? `${latestReport.kwhGenerated.toLocaleString('pt-BR')} kWh` : '-'}
              </div>
              {latestReport && (
                <p className="text-xs text-muted-foreground mt-1">
                  Estimado: {latestReport.estimatedKwh.toLocaleString('pt-BR')} kWh
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Comparativo Mensal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {comparison !== null ? (
                  <>
                    {comparison >= 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-2xl font-bold ${comparison >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {comparison >= 0 ? '+' : ''}{comparison.toFixed(1)}%
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-muted-foreground">-</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">vs mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Status Performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {getStatusBadge()}
                {latestReport && (
                  <span className="text-sm text-muted-foreground">
                    PR: {(latestReport.performanceRatio * 100).toFixed(1)}%
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Performance Ratio</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Último Relatório</CardDescription>
            </CardHeader>
            <CardContent>
              {latestReport ? (
                <>
                  <p className="text-sm font-medium text-foreground">
                    {formatMonth(latestReport.month, latestReport.year)}
                  </p>
                  <Button variant="link" className="h-auto p-0 text-primary text-xs mt-1">
                    <Download className="w-3 h-3 mr-1" />
                    Baixar PDF
                  </Button>
                </>
              ) : (
                <span className="text-sm text-muted-foreground">Nenhum disponível</span>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Lista de Relatórios */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Relatórios Mensais
              </CardTitle>
              <CardDescription>Últimos 12 meses de geração</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {reports.slice(0, 12).map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {formatMonth(report.month, report.year)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {report.kwhGenerated.toLocaleString('pt-BR')} kWh • PR {(report.performanceRatio * 100).toFixed(0)}%
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                {reports.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum relatório disponível
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Alertas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Alertas Recentes
              </CardTitle>
              <CardDescription>Últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {alerts.slice(0, 10).map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border ${
                      !alert.read ? 'bg-primary/5 border-primary/20' : 'bg-muted/50 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          alert.severity === 'critical'
                            ? 'text-red-500'
                            : alert.severity === 'warning'
                            ? 'text-yellow-500'
                            : 'text-blue-500'
                        }`}
                      />
                      <div>
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(alert.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {alerts.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum alerta recente
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GenerationDashboard;
