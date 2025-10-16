import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calculator, Zap } from "lucide-react";

const HeroEletroMays = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-6 font-montserrat leading-tight">
              Energia com inteligência,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                inovação com segurança
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Projetos solares, automação, qualidade de energia e muito mais.
              Desde 1988 transformando energia com soluções sustentáveis e inteligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="orange" 
                size="lg" 
                className="group font-semibold"
                onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Simular Sistema Solar
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="font-semibold"
                onClick={() => window.open('https://wa.me/5555999999999?text=' + encodeURIComponent('Olá! Gostaria de falar com um engenheiro.'), '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com Engenheiro
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-montserrat">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
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
                src="/src/assets/hero-engineering.jpg"
                alt="Sistema solar em operação"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow animate-float">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEletroMays;