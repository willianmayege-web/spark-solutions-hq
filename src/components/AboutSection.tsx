import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import teamImage from "@/assets/team-engineering.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precisão",
      description: "Cada projeto é executado com máxima precisão técnica e atenção aos detalhes."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos as mais modernas tecnologias e soluções sustentáveis."
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência."
    }
  ];

  const achievements = [
    "Certificações ISO 9001 e ISO 14001",
    "Parceiros oficiais de marcas líderes",
    "Equipe com mais de 50 especialistas",
    "Atendimento 24/7 para emergências"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Sobre a ElectroTech
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Excelência em Engenharia Elétrica há mais de 15 anos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma empresa especializada em soluções completas de engenharia elétrica, 
                oferecendo desde projetos residenciais até complexos sistemas industriais. 
                Nossa missão é entregar inovação, qualidade e eficiência em cada projeto.
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

            <Button variant="electric" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={teamImage}
                alt="Equipe ElectroTech"
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