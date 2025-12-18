/**
 * Seção Smart Meter - Monitoramento de Consumo
 * Exibido apenas para clientes com plano Gestão+Mercado
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Zap, TrendingDown, Settings } from "lucide-react";
import { ClientProfile } from "@/types/plans";
import { getClientConsumption } from "@/data/mock-client-data";
import { CONTACT } from "@/config/contact";

interface SmartMeterSectionProps {
  profile: ClientProfile;
}

const SmartMeterSection = ({ profile }: SmartMeterSectionProps) => {
  const consumptionReports = getClientConsumption(profile.clientId);
  const latestConsumption = consumptionReports.length > 0 ? consumptionReports[0] : null;
  const previousConsumption = consumptionReports.length > 1 ? consumptionReports[1] : null;

  // Simular status de instalação baseado em dados
  const hasData = consumptionReports.length > 0;
  const installationStatus = hasData ? 'installed' : 'pending';

  const getStatusBadge = () => {
    if (installationStatus === 'installed') {
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Instalado</Badge>;
    }
    return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pendente</Badge>;
  };

  const calculateVariation = () => {
    if (!latestConsumption || !previousConsumption) return null;
    return ((latestConsumption.kwhConsumed - previousConsumption.kwhConsumed) / previousConsumption.kwhConsumed) * 100;
  };

  const variation = calculateVariation();

  const handleSupportRequest = () => {
    const message = encodeURIComponent(
      `Olá! Sou cliente ${profile.name} e gostaria de solicitar suporte para o Smart Meter.`
    );
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Gauge className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Smart Meter</h2>
          {getStatusBadge()}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Status Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Status do Medidor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {installationStatus === 'installed' ? (
                  <>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Online</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-sm font-medium text-foreground">Aguardando instalação</span>
                  </>
                )}
              </div>
              {installationStatus !== 'installed' && (
                <Button 
                  variant="link" 
                  className="h-auto p-0 text-primary text-xs mt-2"
                  onClick={handleSupportRequest}
                >
                  <Settings className="w-3 h-3 mr-1" />
                  Solicitar instalação
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Consumo Mensal */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Consumo no Mês</CardDescription>
            </CardHeader>
            <CardContent>
              {latestConsumption ? (
                <>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground">
                      {latestConsumption.kwhConsumed.toLocaleString('pt-BR')} kWh
                    </span>
                  </div>
                  {latestConsumption.peakNotes && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {latestConsumption.peakNotes}
                    </p>
                  )}
                </>
              ) : (
                <span className="text-sm text-muted-foreground">Dados indisponíveis</span>
              )}
            </CardContent>
          </Card>

          {/* Variação */}
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Variação Mensal</CardDescription>
            </CardHeader>
            <CardContent>
              {variation !== null ? (
                <div className="flex items-center gap-2">
                  <TrendingDown className={`w-5 h-5 ${variation <= 0 ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={`text-2xl font-bold ${variation <= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {variation <= 0 ? '' : '+'}{variation.toFixed(1)}%
                  </span>
                </div>
              ) : (
                <span className="text-sm text-muted-foreground">-</span>
              )}
              <p className="text-xs text-muted-foreground mt-1">vs mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Ação de Suporte */}
        <div className="mt-6 flex justify-end">
          <Button variant="outline" size="sm" onClick={handleSupportRequest}>
            <Settings className="w-4 h-4 mr-2" />
            Solicitar ajuste/suporte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartMeterSection;
