import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import circuitImage from "@/assets/circuit-board.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automação Industrial - Fábrica XYZ",
      description: "Implementação completa de sistema de automação com CLPs Siemens, interface SCADA e monitoramento em tempo real.",
      image: circuitImage,
      category: "Industrial",
      year: "2024",
      location: "Cidade - Estado",
      highlights: ["Redução de 40% no tempo de produção", "Sistema de monitoramento 24/7", "Integração com ERP existente"]
    },
    {
      title: "Condomínio Inteligente Solar Valley",
      description: "Projeto de eficiência energética com painéis solares, sistema de gestão de energia e automação predial.",
      image: circuitImage,
      category: "Residencial",
      year: "2024",
      location: "Campinas, SP",
      highlights: ["Economia de 70% na conta de luz", "Sistema de backup automático", "App para controle residencial"]
    },
    {
      title: "Centro Médico SmartHealth",
      description: "Infraestrutura elétrica hospitalar com sistemas redundantes, iluminação cirúrgica e energia ininterrupta.",
      image: circuitImage,
      category: "Comercial",
      year: "2023",
      location: "Rio de Janeiro, RJ",
      highlights: ["Sistema UPS hospitalar", "Iluminação cirúrgica LED", "Conformidade ANVISA"]
    },
    {
      title: "Usina Solar Fazenda Progresso",
      description: "Instalação de usina solar de 2MW com sistema de rastreamento solar e monitoramento remoto.",
      image: circuitImage,
      category: "Energia Solar",
      year: "2023",
      location: "Goiânia, GO",
      highlights: ["2MW de potência instalada", "Sistema de rastreamento", "ROI em 4 anos"]
    }
  ];

  const categories = ["Todos", "Industrial", "Residencial", "Comercial", "Energia Solar"];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Nossos Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Casos de Sucesso que Transformam
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos e os resultados 
            extraordinários que alcançamos para nossos clientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "orange" : "ghost"}
              size="sm"
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-electric transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Ver Detalhes
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Carregar Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;