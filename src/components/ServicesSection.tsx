import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Factory, 
  Home, 
  Building2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Instalações Industriais",
      description: "Projetos elétricos completos para fábricas e indústrias em Santa Rosa e região, com foco em eficiência energética e segurança operacional.",
      features: [
        "Cabeamento elétrico industrial",
        "Automação com CLP e SCADA",
        "Correção de fator de potência",
        "Redução de até 20% nos custos"
      ],
      link: "/servicos/instalacoes-industriais",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Home,
      title: "Instalações Residenciais",
      description: "Instalações elétricas seguras para residências em Santa Rosa, seguindo normas ABNT NBR 5410 com iluminação LED e automação.",
      features: [
        "Projeto elétrico completo",
        "Dispositivos DR e aterramento",
        "Iluminação LED inteligente",
        "Laudo técnico CREA-RS"
      ],
      link: "/servicos/instalacoes-residenciais",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Building2,
      title: "Manutenção Predial",
      description: "Manutenção preventiva e corretiva para prédios e condomínios, garantindo conformidade legal e segurança contínua.",
      features: [
        "Inspeção termográfica",
        "Manutenção 24h emergencial",
        "Conformidade NBR 5410",
        "Relatórios técnicos CREA-RS"
      ],
      link: "/servicos/manutencao-predial",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-montserrat">
            Especialistas em Engenharia Elétrica em Santa Rosa, RS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em instalações elétricas industriais, residenciais e manutenção predial 
            com certificação CREA-RS 231706.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-electric transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={service.link}>
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe certificada CREA-RS 231706 está pronta para atender seu projeto em Santa Rosa e região. 
              Entre em contato e receba uma proposta sem compromisso.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contact">
                Solicite Orçamento Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;