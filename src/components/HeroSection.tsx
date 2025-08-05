import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Inovação em Engenharia Elétrica</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Soluções </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Elétricas</span>
            <br />
            <span className="text-foreground">Inteligentes</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Transformamos ideias em realidade através de projetos elétricos inovadores. 
            Especialistas em automação industrial, eficiência energética e sistemas inteligentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="electric" size="lg" className="group">
              Nossos Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="lg">
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Segurança Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 right-32 w-4 h-4 bg-electric-cyan/30 rounded-full animate-float animation-delay-1000 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-circuit-green/40 rounded-full animate-float animation-delay-2000 hidden lg:block" />
    </section>
  );
};

export default HeroSection;