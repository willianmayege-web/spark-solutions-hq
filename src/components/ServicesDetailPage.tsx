import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import { servicesDetail } from "@/data/services-detail";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import energiaSolarImg from "@/assets/energia-solar.jpg";
import spdaImg from "@/assets/spda-aterramento.jpg";
import laudosImg from "@/assets/laudos-pericias.jpg";
import automacaoImg from "@/assets/automacao-controle.jpg";
import eficienciaImg from "@/assets/eficiencia-energetica.jpg";

const serviceImages: Record<string, string> = {
  "energia-solar": energiaSolarImg,
  "spda": spdaImg,
  "laudos": laudosImg,
  "automacao": automacaoImg,
  "eficiencia": eficienciaImg,
};

const ServicesDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = servicesDetail.find(s => s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.metaDescription);
      }
    }
  }, [service]);

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
            <Button variant="orange" onClick={() => navigate('/')}>
              Voltar para Início
            </Button>
          </div>
        </div>
        <FooterEletroMays />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')} 
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>

            {/* Service Header with Image */}
            {serviceImages[service.id] && (
              <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
                <img 
                  src={serviceImages[service.id]} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat drop-shadow-lg">
                    {service.title}
                  </h1>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-12">
              {!serviceImages[service.id] && (
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                  {service.title}
                </h1>
              )}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Benefits Section */}
            <Card className="mb-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 font-montserrat">
                  Benefícios e Vantagens
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services List */}
            <Card className="mb-10 bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 font-montserrat">
                  Serviços Inclusos
                </h2>
                <ul className="space-y-3">
                  {service.services.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                  Solicite um Orçamento Personalizado
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe técnica certificada CREA-RS 231706 está pronta para 
                  desenvolver a solução ideal para seu projeto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="orange" size="lg" onClick={() => navigate('/#orcamento')}>
                    {service.ctaText}
                  </Button>
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => {
                      const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre ${service.title}`);
                      window.open(`https://wa.me/555535205555?text=${message}`, '_blank');
                    }}
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterEletroMays />
    </>
  );
};

export default ServicesDetailPage;