import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Factory, 
  Home, 
  Shield, 
  Cpu, 
  Battery,
  ArrowRight,
  Settings
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Automação Industrial",
      description: "Sistemas automatizados para aumentar a eficiência e produtividade industrial.",
      features: ["CLPs e SCADA", "Redes industriais", "Sensores inteligentes", "Manutenção preditiva"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Home,
      title: "Projetos Residenciais",
      description: "Instalações elétricas seguras e eficientes para residências modernas.",
      features: ["Quadros elétricos", "Iluminação LED", "Automação residencial", "Energia solar"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Cpu,
      title: "Sistemas Inteligentes",
      description: "Soluções IoT e smart building para edifícios conectados.",
      features: ["Monitoramento remoto", "Controle inteligente", "Análise de dados", "Otimização energética"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Battery,
      title: "Eficiência Energética",
      description: "Otimização do consumo energético e soluções sustentáveis.",
      features: ["Auditoria energética", "Painéis solares", "Banco de capacitores", "Gestão de demanda"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Shield,
      title: "Segurança Elétrica",
      description: "Proteção completa contra riscos elétricos e conformidade normativa.",
      features: ["SPDA", "Aterramento", "Proteção contra surtos", "Laudos técnicos"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Settings,
      title: "Manutenção",
      description: "Serviços especializados de manutenção preventiva e corretiva.",
      features: ["Termografia", "Teste de proteções", "Limpeza de painéis", "Calibração"],
      color: "bg-indigo-500/10 text-indigo-600"
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluções Completas em Engenharia Elétrica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados para atender 
            todas as suas necessidades em projetos elétricos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-electric transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver a solução perfeita 
              para o seu projeto específico.
            </p>
            <Button variant="secondary" size="lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;