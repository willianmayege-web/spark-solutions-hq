import { useState, useEffect } from "react";
import { heroSlides } from "@/data/hero-slides";
import { whatsappLink } from "@/config/contact";
import HeroSlide from "./HeroSlide";
import HeroNavigation from "./HeroNavigation";
import HeroStats from "./HeroStats";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
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
        window.open(whatsappLink('Olá! Gostaria de falar com um engenheiro.'), '_blank');
        break;
    }
  };

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
          onAction={handleAction}
        />
      ))}

      <HeroNavigation
        currentSlide={currentSlide}
        totalSlides={heroSlides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
      />

      <HeroStats />
    </section>
  );
};

export default HeroSlider;
