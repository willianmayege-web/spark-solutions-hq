import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, BarChart3, LineChart, Gauge, ArrowRight, User } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { useNavigate } from "react-router-dom";

const PlanosMonitoramentoPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de contratar o plano ${planName} de monitoramento.`
    );
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${message}`, '_blank');
  };

  const plans = [
    {
      name: "Essencial",
      price: "Sob consulta",
      description: "Acesso básico ao histórico resumido de geração",
      features: [
        "Acesso à área do cliente",
        "Histórico resumido de projetos",
        "Suporte por e-mail",
        "Documentos e laudos disponíveis",
      ],
      highlighted: false,
      badge: null,
    },
    {
      name: "Performance",
      price: "Sob consulta",
      description: "Monitoramento completo da geração solar",
      features: [
        "Tudo do plano Essencial",
        "Dashboard de geração em tempo real",
        "Relatórios mensais detalhados (kWh, PR, perdas)",
        "Alertas de performance",
        "Comparativo mensal de geração",
        "Download de relatórios em PDF",
      ],
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Gestão + Mercado",
      price: "Sob consulta",
      description: "Performance + Smart Meter + Prontidão para mercado livre",
      features: [
        "Tudo do plano Performance",
        "Smart Meter para monitoramento de consumo",
        "Análise de picos e anomalias",
        "Relatórios de consumo detalhados",
        "Prontidão para Mercado Livre de Energia",
        "Consultoria especializada inclusa",
        "Suporte prioritário",
      ],
      highlighted: false,
      badge: "Completo",
    },
  ];

  return (
    <>
      <SEOHead
        title="Planos de Monitoramento | Energia Solar e Consumo | Eletro May's"
        description="Monitore sua geração solar e consumo de energia com relatórios mensais, alertas e dashboard em tempo real. Planos Essencial, Performance e Gestão+Mercado."
        keywords="monitoramento energia solar, relatório geração solar, smart meter, mercado livre energia, dashboard solar"
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "Planos de Monitoramento", href: "/planos-monitoramento" }]}
            />

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-montserrat mb-4">
                Planos de Monitoramento
              </h1>
              <p className="text-xl text-primary font-semibold mb-2">
                Energia Solar e Consumo
              </p>
              <p className="text-lg text-muted-foreground">
                Acompanhe a performance do seu sistema fotovoltaico e otimize seu consumo de energia com relatórios técnicos detalhados.
              </p>
            </div>
          </div>
        </section>

        {/* Explicação Técnica */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <BarChart3 className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Relatório Mensal de Geração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Acompanhe kWh gerado, Performance Ratio (PR), análise de perdas e comparativo com meses anteriores.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <Gauge className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Smart Meter para Consumo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitore seu consumo real (kWh), identifique picos de demanda e anomalias para otimizar gastos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <LineChart className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-lg">Visão de Mercado Livre</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Estrutura preparada para integração com gestão e otimização quando o Mercado Livre se tornar acessível a todos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cards de Planos */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Escolha seu plano
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Todos os planos incluem acesso à Área do Cliente. Valores sob consulta para personalização conforme seu sistema.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.highlighted
                      ? "border-primary shadow-lg shadow-primary/20 scale-105"
                      : "border-border/50"
                  }`}
                >
                  {plan.badge && (
                    <Badge
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                      variant={plan.highlighted ? "default" : "secondary"}
                    >
                      {plan.badge}
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.highlighted ? "orange" : "outline"}
                      className="w-full"
                      onClick={() => handleSubscribe(plan.name)}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Solicitar Plano
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA para assinantes */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Já é assinante?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Acesse sua área do cliente para visualizar relatórios, alertas e dados de geração.
                </p>
                <Button
                  variant="default"
                  onClick={() => navigate('/area-do-cliente')}
                >
                  Entrar na Área do Cliente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterEletroMays />
    </>
  );
};

export default PlanosMonitoramentoPage;
