import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Factory, 
  Gauge, 
  Sun, 
  Car, 
  Settings,
  ArrowRight
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Consultorias Energéticas",
      description: "Análise completa do seu consumo e otimização de custos energéticos.",
      features: ["Auditoria energética", "Análise de tarifas", "Plano de eficiência"]
    },
    {
      icon: Factory,
      title: "Projetos Elétricos Industriais",
      description: "Projetos completos para indústrias com foco em segurança e eficiência.",
      features: ["Projetos elétricos", "Automação", "Controle de motores"]
    },
    {
      icon: Gauge,
      title: "Qualidade de Energia",
      description: "Soluções para harmônicos, fator de potência e estabilidade elétrica.",
      features: ["Análise de qualidade", "Filtros harmônicos", "Correção FP"]
    },
    {
      icon: Sun,
      title: "Energia Solar",
      description: "Sistemas fotovoltaicos completos: on-grid, off-grid e híbridos.",
      features: ["On-grid", "Off-grid", "Sistemas híbridos"]
    },
    {
      icon: Car,
      title: "Carregadores Veiculares",
      description: "Instalação de estações de carregamento para veículos elétricos.",
      features: ["Carregadores residenciais", "Estações comerciais", "Manutenção"]
    },
    {
      icon: Settings,
      title: "Automação Industrial",
      description: "Automação completa de processos industriais e prediais.",
      features: ["CLPs", "IHMs", "Supervisórios"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em engenharia elétrica, desde consultoria até implementação 
            de projetos complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-border hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn hover:bg-primary/10">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="orange" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;