import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBanner = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento técnico.");
    window.open(`https://wa.me/5555991389623?text=${message}`, '_blank');
    
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        location: 'top_banner'
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground py-2 px-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm">
        <span className="hidden sm:inline font-medium">
          Solicite seu orçamento técnico online
        </span>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleWhatsAppClick}
          className="gap-2 animate-pulse"
        >
          <Phone className="w-4 h-4" />
          <span>WhatsApp +55 (55) 99138-9623</span>
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
