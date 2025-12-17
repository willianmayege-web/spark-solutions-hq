import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { whatsappLink } from "@/config/contact";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroHome = () => {
  return (
    <section id="home" className="min-h-[90vh] relative flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-6 font-montserrat leading-tight">
              Engenharia Elétrica e Energia Solar com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Laudos Técnicos e Soluções Completas
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Atendimento técnico especializado em Santa Rosa – RS e região. 
              Projetos elétricos, energia solar, SPDA, laudos e manutenção industrial com registro CREA-RS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="orange" 
                size="lg" 
                className="group font-semibold"
                onClick={() => window.open(whatsappLink('Olá! Gostaria de solicitar atendimento técnico.'), '_blank')}
                aria-label="Solicitar atendimento técnico via WhatsApp (abre em nova aba)"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Solicitar Atendimento Técnico
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="font-semibold"
                onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Ir para seção de agendamento de consultoria online"
              >
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Agendar Consultoria Online
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">4+</div>
                <div className="text-sm text-muted-foreground">Anos de Atuação</div>
              </div>
              <div className="text-center md:block hidden">
                <div className="text-3xl font-bold text-primary font-montserrat">CREA-RS</div>
                <div className="text-sm text-muted-foreground">Registro 231706</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Engenharia elétrica e energia solar em Santa Rosa RS - Eletro May's"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                loading="eager"
                width="600"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
