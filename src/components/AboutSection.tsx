import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Shield } from "lucide-react";
import teamImage from "@/assets/team-engineering.jpg";
import { CONTACT } from "@/config/contact";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precisão Técnica",
      description: "Projetos executados conforme NBR 5410, NBR 5419 e demais normas técnicas vigentes."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Todos os projetos com ART CREA-RS e responsabilidade técnica registrada."
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Expertise técnica comprovada em Santa Rosa e região noroeste do RS."
    }
  ];

  const achievements = [
    "Registro CREA-RS 231706 ativo",
    "Mais de 500 projetos entregues",
    "Equipamentos de medição calibrados",
    "Atendimento técnico emergencial"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Sobre a Eletro May's
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Engenharia Elétrica com Excelência Técnica
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Eletro May's Engenharia Elétrica atua em Santa Rosa e região, 
                oferecendo projetos elétricos, energia solar fotovoltaica, SPDA, laudos técnicos e 
                perícias. Qualidade técnica e conformidade normativa.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-circuit-green flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="orange" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={teamImage}
                alt="Equipe Eletro May's Engenharia Elétrica - Santa Rosa RS"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;