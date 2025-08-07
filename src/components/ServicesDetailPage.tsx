import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Sun, 
  Car, 
  Settings, 
  BarChart3, 
  Shield,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const ServicesDetailPage = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Consultorias Energéticas",
      description: "Análise completa do seu consumo e otimização energética",
      features: [
        "Auditoria energética completa",
        "Relatório de eficiência energética",
        "Plano de ação personalizado",
        "Acompanhamento de resultados"
      ]
    },
    {
      icon: Zap,
      title: "Projetos Elétricos Industriais",
      description: "Soluções completas para indústrias e empresas",
      features: [
        "Projetos elétricos industriais",
        "Modernização de instalações",
        "Sistemas de automação",
        "Manutenção preventiva e corretiva"
      ]
    },
    {
      icon: Shield,
      title: "Qualidade de Energia",
      description: "Medições com equipamentos Classe A para máxima precisão",
      features: [
        "Medidores Classe A certificados",
        "Análise de harmônicos",
        "Correção de fator de potência",
        "Relatórios técnicos detalhados"
      ]
    },
    {
      icon: Sun,
      title: "Energia Solar",
      description: "Sistemas fotovoltaicos on-grid, off-grid e híbridos",
      features: [
        "Projetos on-grid (conectados à rede)",
        "Sistemas off-grid (autônomos)",
        "Soluções híbridas",
        "Monitoramento em tempo real"
      ]
    },
    {
      icon: Car,
      title: "Carregadores Veiculares",
      description: "Instalação de pontos de recarga para veículos elétricos",
      features: [
        "Carregadores residenciais",
        "Estações comerciais",
        "Projeto elétrico completo",
        "Homologação junto à concessionária"
      ]
    },
    {
      icon: Settings,
      title: "Automação Industrial",
      description: "Sistemas automatizados para otimizar processos",
      features: [
        "Controladores programáveis (CLP)",
        "Interface homem-máquina (IHM)",
        "Sistemas supervisórios",
        "Integração com sistemas existentes"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em engenharia elétrica com mais de 35 anos de experiência. 
            Da consultoria à execução, oferecemos qualidade técnica e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground font-montserrat">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-orange" className="w-full group">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                Precisa de um projeto personalizado?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe técnica está pronta para desenvolver soluções sob medida para seu negócio.
                Entre em contato e receba uma proposta técnica detalhada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="orange" size="lg">
                  Falar com Engenheiro
                </Button>
                <Button variant="hero" size="lg">
                  Solicitar Visita Técnica
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailPage;