import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Zap, 
  FileText, 
  Settings,
  TrendingDown,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import energiaSolarImg from "@/assets/energia-solar.jpg";
import spdaImg from "@/assets/spda-aterramento.jpg";
import laudosImg from "@/assets/laudos-pericias.jpg";
import automacaoImg from "@/assets/automacao-controle.jpg";
import eficienciaImg from "@/assets/eficiencia-energetica.jpg";

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "energia-solar",
      icon: Sun,
      title: "Energia Solar Fotovoltaica",
      description: "Sistemas completos on-grid, off-grid e híbridos com economia real de até 95% na conta de energia.",
      image: energiaSolarImg,
      features: ["Payback 4-6 anos", "Homologação ANEEL", "Monitoramento remoto"],
      highlight: "Até 95% de economia"
    },
    {
      id: "spda",
      icon: Zap,
      title: "SPDA e Aterramento",
      description: "Proteção contra descargas atmosféricas conforme NBR 5419:2015 com laudos técnicos CREA-RS.",
      image: spdaImg,
      features: ["Conformidade NBR 5419", "Medições certificadas", "AVCB e habite-se"],
      highlight: "Proteção total"
    },
    {
      id: "laudos",
      icon: FileText,
      title: "Laudos e Perícias Técnicas",
      description: "Laudos técnicos, perícias elétricas e inspeções com equipamentos calibrados e ART CREA-RS.",
      image: laudosImg,
      features: ["Ensaios técnicos", "Reconhecimento judicial", "Atendimento 24h"],
      highlight: "ART CREA-RS 231706"
    },
    {
      id: "automacao",
      icon: Settings,
      title: "Automação e Controle",
      description: "Sistemas inteligentes com Arduino, ESP32 e IoT para monitoramento remoto e eficiência operacional.",
      image: automacaoImg,
      features: ["Arduino/ESP32", "Integração IoT", "Controle remoto"],
      highlight: "40% menos custos"
    },
    {
      id: "eficiencia",
      icon: TrendingDown,
      title: "Eficiência Energética",
      description: "Diagnósticos e consultoria para redução de até 30% nos custos com energia elétrica.",
      image: eficienciaImg,
      features: ["Diagnóstico completo", "Correção fator potência", "Payback 12-24 meses"],
      highlight: "30% de redução"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em engenharia elétrica com certificação CREA-RS 231706, 
            desde projetos até implementação e manutenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 bg-card border-border hover:border-primary/50 overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/servicos/${service.id}`)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Eletro May's oferece ${service.description.toLowerCase()}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                  {service.highlight}
                </Badge>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground font-montserrat mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/servicos/${service.id}`);
                  }}
                >
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="orange" 
            size="lg"
            onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;