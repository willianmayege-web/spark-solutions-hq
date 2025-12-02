import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";
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
      <SEOHead 
        title="Sobre Nós | Eletro May's Engenharia Elétrica CREA-RS 231706"
        description="Fundada em 2021, a Eletro May's é especialista em projetos elétricos, energia solar, SPDA e automação em Santa Rosa-RS. Mais de 500 projetos entregues com excelência técnica e certificação CREA-RS 231706."
        keywords="sobre eletro mays, engenharia elétrica santa rosa, crea-rs 231706, engenheiro eletricista santa rosa, empresa engenharia elétrica rs"
        canonical="https://eletromays.com.br/sobre"
        jsonLd={organizationJsonLd}
      />
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
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Fundada em 2021</strong>, a Eletro May's Engenharia Elétrica 
                oferece soluções de engenharia elétrica em Santa Rosa e região noroeste do Rio Grande do Sul. 
                Somos especialistas em projetos elétricos industriais, residenciais, energia solar, SPDA, 
                automação e eficiência energética.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe altamente qualificada, certificada pelo <strong className="text-foreground">CREA-RS 231706</strong>, 
                está comprometida com a inovação, segurança e sustentabilidade em todos os projetos que desenvolvemos. 
                Trabalhamos com as mais modernas tecnologias e normas técnicas (NBR 5410, NBR 5419, NR-10), 
                garantindo eficiência energética e total conformidade com as regulamentações do setor elétrico.
              </p>
            </div>

            {/* Engenheiro Responsável */}
            <Card className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">
                      Eng. Willian Paulo May
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      Engenheiro Eletricista Responsável | CREA-RS 231706
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Engenheiro eletricista com vasta experiência em projetos industriais, 
                      energia solar e automação. Responsável técnico por mais de 500 projetos 
                      entregues em Santa Rosa e região, sempre priorizando segurança, 
                      eficiência e inovação tecnológica.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Missão e Visão */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground font-montserrat">Missão</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Oferecer soluções elétricas seguras, sustentáveis e inteligentes, 
                      garantindo eficiência energética, conformidade técnica e excelência 
                      no atendimento aos nossos clientes em Santa Rosa e região.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground font-montserrat">Visão</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser reconhecida como a empresa de engenharia elétrica mais confiável 
                      do noroeste do RS, referência em inovação, sustentabilidade e 
                      comprometimento com a transição energética.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-montserrat">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Segurança",
                    description: "Compromisso total com normas técnicas e segurança operacional"
                  },
                  {
                    icon: Heart,
                    title: "Ética",
                    description: "Transparência, honestidade e responsabilidade em todas as relações"
                  },
                  {
                    icon: Lightbulb,
                    title: "Sustentabilidade",
                    description: "Soluções que respeitam o meio ambiente e promovem eficiência"
                  },
                  {
                    icon: Award,
                    title: "Inovação",
                    description: "Uso de tecnologias modernas e práticas de engenharia avançadas"
                  }
                ].map((value, index) => {
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
                    <Button 
                      variant="orange" 
                      size="lg"
                      onClick={() => window.location.href = '/#orcamento'}
                    >
                      Solicitar Orçamento Gratuito
                    </Button>
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => window.location.href = '/#projetos'}
                    >
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