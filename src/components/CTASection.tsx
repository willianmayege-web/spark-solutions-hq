import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "default" | "gradient";
}

const CTASection = ({
  title,
  description,
  primaryButtonText = "Solicitar Orçamento",
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  variant = "default"
}: CTASectionProps) => {
  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      const whatsappUrl = `https://wa.me/5555999999999?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const bgClass = variant === "gradient" 
    ? "bg-gradient-to-br from-primary/10 via-background to-background"
    : "bg-card";

  return (
    <section className={`py-16 px-4 ${bgClass} border-y border-border`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="orange" 
            size="lg"
            onClick={handlePrimaryClick}
            className="font-semibold"
          >
            {primaryButtonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          {secondaryButtonText && (
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleSecondaryClick}
              className="font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
