import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, FileCheck, Wrench, Building2, ArrowRight, CheckCircle } from "lucide-react";

const ServicesHome = () => {
  const services = [
    {
      icon: Sun,
      title: "Energia Solar",
      description: "Projeto, instalação e acompanhamento completo de sistemas fotovoltaicos para redução entre 30% e 90% na conta de energia.*",
      features: [
        "Dimensionamento técnico conforme NBR 16690",
        "Homologação com concessionária local",
        "Monitoramento e manutenção preventiva"
      ],
      link: "#orcamento",
      color: "bg-primary/10"
    },
    {
      icon: FileCheck,
      title: "Laudos e Perícias Elétricas",
      description: "Laudos técnicos com ART para processos judiciais, seguradoras e adequações normativas.",
      features: [
        "Inspeção SPDA conforme NBR 5419:2015",
        "Teste de aterramento e resistividade",
        "Termografia e análise de qualidade de energia"
      ],
      link: "#orcamento",
      color: "bg-primary/10"
    },
    {
      icon: Wrench,
      title: "Manutenção de Quadros Elétricos",
      description: "Modernização e manutenção preventiva/corretiva de instalações industriais e comerciais.",
      features: [
        "Adequação à NBR 5410 e NR-10",
        "Substituição de componentes obsoletos",
        "Redução de paradas não programadas"
      ],
      link: "#orcamento",
      color: "bg-primary/10"
    },
    {
      icon: Building2,
      title: "Projetos Elétricos Industriais",
      description: "Projetos elétricos completos para indústrias e estabelecimentos comerciais de médio e grande porte.",
      features: [
        "Cabeamento estruturado e distribuição",
        "Correção de fator de potência",
        "Automação e supervisão SCADA"
      ],
      link: "#orcamento",
      color: "bg-primary/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Nossos Serviços de Engenharia Elétrica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções técnicas completas com registro CREA-RS 231706 e responsabilidade técnica (ART) em todos os projetos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-orange border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 shadow-glow`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-3 font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
