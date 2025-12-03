import { Button } from "@/components/ui/button";
import { Shield, FileText, Headphones, Receipt } from "lucide-react";
import { CONTACT } from "@/config/contact";

const InsuranceHero = () => {
  const scrollToForm = () => {
    document.getElementById('insurance-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o seguro para energia solar.");
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${message}`, '_blank');
  };

  const benefits = [
    { icon: Receipt, text: "Baseado no valor da Nota Fiscal do seu sistema de energia solar" },
    { icon: Shield, text: "Seguro Essor, contratado via Elétron Seguros" },
    { icon: FileText, text: "Laudo técnico gratuito para comprovação do sinistro" },
    { icon: Headphones, text: "Suporte técnico especializado em energia solar e instalações elétricas" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Proteção completa para seu investimento</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-montserrat leading-tight">
            Seguro para Sistemas de Energia Solar
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Proteja o valor total do seu sistema fotovoltaico com seguro especializado, 
            laudo técnico gratuito em caso de sinistro e suporte de engenheiro eletricista.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <benefit.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/95">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="orange" 
              size="lg" 
              onClick={scrollToForm}
              className="text-base px-8"
            >
              Calcular meu seguro agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={openWhatsApp}
              className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Falar com especialista no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
