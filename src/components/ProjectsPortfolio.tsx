import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, FileCheck, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsPortfolio = () => {
  return (
    <section id="projetos" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Projetos e <span className="text-primary">Laudos Técnicos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nosso portfólio de projetos executados com excelência técnica, 
            conformidade normativa e resultados comprovados. Todos com ART CREA-RS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${projects.indexOf(project) * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {project.type === "Energia Solar" && "☀️"}
                  {project.type === "SPDA" && "⚡"}
                  {project.type === "Perícia" && "🔍"}
                  {project.type === "Projeto Elétrico" && "📐"}
                  {project.type === "Termografia" && "🌡️"}
                  {project.type === "Híbrido" && "🔧"}
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.type}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>

                <div className="flex items-center text-sm text-primary mb-4 font-semibold">
                  <FileCheck className="w-4 h-4 mr-1" />
                  Norma: {project.norm}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-foreground">Resultados:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os projetos com documentação técnica completa e ART CREA-RS 231706
          </p>
          <Button variant="orange" size="lg">
            Solicite seu Projeto
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
