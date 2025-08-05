import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, BarChart3, FileText, Headphones, CheckCircle, TrendingUp } from "lucide-react";

const ClientDashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Painel do Cliente
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Acompanhe seus projetos com total transparência e suporte técnico 24/7.
              Monitore a geração de energia em tempo real.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Monitoramento em Tempo Real</h4>
                  <p className="text-muted-foreground">Acompanhe a geração de energia, economia e performance do seu sistema solar.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Documentos e Projetos</h4>
                  <p className="text-muted-foreground">Acesse todos os documentos, projetos e certificações do seu sistema.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Suporte Técnico</h4>
                  <p className="text-muted-foreground">Chat direto com nossa equipe técnica para dúvidas e manutenção.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="orange" size="lg">
                <Monitor className="w-5 h-5 mr-2" />
                Acessar Painel
              </Button>
              <Button variant="hero" size="lg">
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <Card className="bg-card border-border shadow-2xl">
              <CardHeader className="border-b border-border">
                <CardTitle className="flex items-center justify-between text-foreground">
                  <span className="font-montserrat">Dashboard - Sistema Solar</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4.2 kW</div>
                    <div className="text-sm text-muted-foreground">Geração Atual</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">R$ 127</div>
                    <div className="text-sm text-muted-foreground">Economia Hoje</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-muted/20 rounded-lg mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>

                {/* Status List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sistema Solar</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-foreground">Funcionando</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Última Manutenção</span>
                    <span className="text-sm text-foreground">15/12/2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Próxima Visita</span>
                    <span className="text-sm text-foreground">15/03/2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-lg shadow-lg animate-float">
              <div className="text-xs font-semibold">Nova geração!</div>
              <div className="text-xs">+2.1 kWh registrados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;