import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { HeroSlideData } from "@/data/hero-slides";
import { CONTACT } from "@/config/contact";

interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
  onAction: (action: string) => void;
}

const HeroSlide = ({ slide, isActive, onAction }: HeroSlideProps) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={`${slide.title} - Eletro May's Engenharia Elétrica em Santa Rosa-RS`}
          className="w-full h-full object-cover"
          loading={slide.id === 1 ? "eager" : "lazy"}
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">CREA-RS {CONTACT.crea}</span>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-4 font-montserrat leading-tight">
            {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              {slide.title.split(' ').slice(-2).join(' ')}
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-primary mb-4 font-semibold">
            {slide.subtitle}
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="orange" 
              size="lg" 
              className="group font-semibold"
              onClick={() => onAction(slide.ctaPrimary.action)}
            >
              <slide.ctaPrimary.icon className="w-5 h-5 mr-2" />
              {slide.ctaPrimary.text}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="font-semibold"
              onClick={() => onAction(slide.ctaSecondary.action)}
            >
              <slide.ctaSecondary.icon className="w-5 h-5 mr-2" />
              {slide.ctaSecondary.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
