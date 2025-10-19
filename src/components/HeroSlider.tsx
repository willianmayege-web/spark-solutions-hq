import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone, Zap, Shield, FileCheck } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Projetos Elétricos e Energia Solar",
    subtitle: "Soluções completas em engenharia elétrica e sistemas fotovoltaicos",
    description: "Desde 1988 desenvolvendo projetos residenciais, comerciais e industriais com excelência técnica.",
    cta1: { text: "Simular Sistema Solar", action: "simulator", icon: Calculator },
    cta2: { text: "Falar com Engenheiro", action: "whatsapp", icon: Phone },
    image: "/src/assets/energia-solar.jpg",
  },
  {
    id: 2,
    title: "SPDA e Laudos Técnicos NBR 5419",
    subtitle: "Proteção contra descargas atmosféricas e aterramento",
    description: "Laudos técnicos, medições e ensaios conforme norma NBR 5419:2015. Segurança certificada para sua edificação.",
    cta1: { text: "Solicitar Laudo", action: "quote", icon: FileCheck },
    cta2: { text: "Falar no WhatsApp", action: "whatsapp", icon: Phone },
    image: "/src/assets/spda-aterramento.jpg",
  },
  {
    id: 3,
    title: "Consultoria e Adequação Elétrica Industrial",
    subtitle: "Eficiência energética e conformidade com normas técnicas",
    description: "Diagnósticos, laudos periciais e projetos de adequação elétrica para ambientes industriais e comerciais.",
    cta1: { text: "Solicitar Diagnóstico", action: "quote", icon: Shield },
    cta2: { text: "Ver Serviços", action: "services", icon: ArrowRight },
    image: "/src/assets/eficiencia-energetica.jpg",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = (action: string) => {
    switch (action) {
      case "simulator":
        document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "quote":
        document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "services":
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "whatsapp":
        window.open('https://wa.me/555535205555?text=' + encodeURIComponent('Olá! Gostaria de falar com um engenheiro.'), '_blank');
        break;
    }
  };

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">CREA-RS 231706</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-4 font-montserrat leading-tight">
                {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  {slide.title.split(' ').slice(-2).join(' ')}
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-primary mb-4 font-semibold">
                {slide.subtitle}
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="orange" 
                  size="lg" 
                  className="group font-semibold"
                  onClick={() => handleAction(slide.cta1.action)}
                >
                  <slide.cta1.icon className="w-5 h-5 mr-2" />
                  {slide.cta1.text}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="font-semibold"
                  onClick={() => handleAction(slide.cta2.action)}
                >
                  <slide.cta2.icon className="w-5 h-5 mr-2" />
                  {slide.cta2.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/90 backdrop-blur-md border-t border-border py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">36+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">CREA-RS</div>
              <div className="text-xs md:text-sm text-muted-foreground">Registro 231706</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
