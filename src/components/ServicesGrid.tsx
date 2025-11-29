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
      description: "Projeto completo conforme NBR 16690 e Resolução ANEEL 482/687. Dimensionamento técnico, homologação junto à concessionária e monitoramento de geração em tempo real.",
      image: energiaSolarImg,
      features: ["Homologação ágil com concessionária", "Payback médio de 4 anos", "Monitoramento remoto 24/7"],
      highlight: "Até 95% de economia"
    },
    {
      id: "spda",
      icon: Zap,
      title: "SPDA e Aterramento",
      description: "Projeto e laudo de para-raios conforme NBR 5419:2015. Medições com terrômetro calibrado RBC. Documentação aceita para AVCB e habite-se.",
      image: spdaImg,
      features: ["Laudo aceito pelo Corpo de Bombeiros", "Medição de aterramento < 10Ω", "Entrega em até 15 dias"],
      highlight: "NBR 5419:2015"
    },
    {
      id: "laudos",
      icon: FileText,
      title: "Laudos e Perícias Técnicas",
      description: "Laudos de conformidade NBR 5410, perícias judiciais e extrajudiciais. Investigação de causa de sinistros elétricos com relatório aceito por seguradoras e tribunais.",
      image: laudosImg,
      features: ["Aceito em processos judiciais", "Relatório fotográfico detalhado", "Equipamentos calibrados RBC"],
      highlight: "Perícia certificada"
    },
    {
      id: "automacao",
      icon: Settings,
      title: "Automação e Controle",
      description: "Automação de processos industriais com CLP, supervisório SCADA e integração IoT. Redução de perdas operacionais e monitoramento remoto de equipamentos críticos.",
      image: automacaoImg,
      features: ["Redução de paradas não programadas", "Monitoramento remoto de processos", "Integração com sistemas existentes"],
      highlight: "Indústria 4.0"
    },
    {
      id: "eficiencia",
      icon: TrendingDown,
      title: "Eficiência Energética",
      description: "Diagnóstico de consumo, correção de fator de potência e análise de qualidade conforme PRODIST Módulo 8. Eliminação de multas por excedente de reativos.",
      image: eficienciaImg,
      features: ["Eliminação de multas de energia reativa", "Redução de demanda contratada", "Relatório com plano de ação"],
      highlight: "Até 30% de redução"
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
            Engenharia elétrica com responsabilidade técnica CREA-RS 231706. 
            Projetos, laudos e instalações conforme normas NBR 5410, NBR 5419 e NR-10.
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