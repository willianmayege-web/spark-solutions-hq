import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  Shield
} from "lucide-react";

const AboutPage = () => {
  const timeline = [
    { year: "1988", event: "Fundação da Eletro May's" },
    { year: "1995", event: "Primeira certificação técnica" },
    { year: "2010", event: "Expansão para energia solar" },
    { year: "2018", event: "Implementação de sistemas de automação" },
    { year: "2020", event: "Certificação em qualidade de energia" },
    { year: "2024", event: "Liderança em carregadores veiculares" }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Prover soluções inovadoras em engenharia elétrica, promovendo eficiência energética e sustentabilidade para nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência nacional em engenharia elétrica, reconhecida pela excelência técnica e compromisso com a inovação."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Integridade, qualidade técnica, inovação constante, sustentabilidade e comprometimento com resultados."
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "35+ Anos de Experiência",
      description: "Mais de três décadas de experiência em projetos elétricos"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Engenheiros e técnicos altamente qualificados"
    },
    {
      icon: Lightbulb,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração e soluções inovadoras"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Certificações técnicas e garantia estendida"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Sobre a Eletro May's
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 1988 transformando energia com inteligência, inovação e segurança. 
            Mais de 35 anos de experiência em engenharia elétrica.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-montserrat">
            Nossa Trajetória
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2 font-montserrat">
                    {item.year}
                  </div>
                  <p className="text-muted-foreground">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-montserrat">
            Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Differentials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-montserrat">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <Card key={index} className="bg-card border-border text-center hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                      {differential.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {differential.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                Pronto para transformar sua energia?
              </h3>
              <p className="text-muted-foreground mb-6">
                Com mais de 35 anos de experiência, estamos prontos para desenvolver 
                a solução ideal para suas necessidades energéticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="orange" size="lg">
                  Solicitar Orçamento
                </Button>
                <Button variant="hero" size="lg">
                  Conhecer Projetos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;