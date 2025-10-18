import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import { 
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  Shield,
  CheckCircle
} from "lucide-react";

const AboutPage = () => {

  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Compromisso total com normas técnicas e segurança em todas as instalações elétricas"
    },
    {
      icon: Lightbulb,
      title: "Eficiência",
      description: "Soluções que otimizam consumo energético e reduzem custos operacionais"
    },
    {
      icon: Heart,
      title: "Confiança",
      description: "Transparência, qualidade e atendimento personalizado em cada projeto"
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "Certificação CREA-RS 231706",
      description: "Engenheiros registrados e projetos com total conformidade legal"
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais especializados em instalações industriais, residenciais e prediais"
    },
    {
      icon: CheckCircle,
      title: "Atendimento em Santa Rosa e Região",
      description: "Conhecimento local e presença consolidada no noroeste do RS"
    },
    {
      icon: Target,
      title: "Soluções Personalizadas",
      description: "Projetos sob medida com foco em eficiência energética e sustentabilidade"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Header com Selo CREA */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/10 border-2 border-primary rounded-lg px-6 py-3">
                  <p className="text-primary font-bold text-lg font-montserrat">
                    CREA-RS 231706
                  </p>
                  <p className="text-xs text-muted-foreground">Registro Profissional</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Sobre a Eletro May's Engenharia Elétrica
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Com mais de 5 anos de experiência em Santa Rosa, RS, a Eletro May's Engenharia Elétrica 
                é referência em instalações elétricas industriais, residenciais e manutenção predial. 
                Nossa equipe altamente qualificada, certificada pelo CREA-RS 231706, está comprometida 
                com a inovação, segurança e sustentabilidade em todos os projetos que desenvolvemos. 
                Trabalhamos com as mais modernas tecnologias e normas técnicas, garantindo eficiência 
                energética e total conformidade com as regulamentações do setor elétrico.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-montserrat">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="bg-card border-border text-center hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Diferenciais */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-montserrat">
                Por Que Escolher a Eletro May's?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {differentials.map((differential, index) => {
                  const IconComponent = differential.icon;
                  return (
                    <Card key={index} className="bg-card border-border hover:shadow-glow transition-all">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                              {differential.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {differential.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                    Pronto para Iniciar Seu Projeto?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Nossa equipe certificada CREA-RS 231706 está pronta para desenvolver 
                    soluções elétricas seguras e eficientes para sua empresa ou residência.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="orange" size="lg">
                      Solicitar Orçamento Gratuito
                    </Button>
                    <Button variant="hero" size="lg">
                      Ver Projetos Realizados
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <FooterEletroMays />
    </>
  );
};

export default AboutPage;