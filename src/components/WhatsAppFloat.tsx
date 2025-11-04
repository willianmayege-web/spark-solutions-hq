import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const whatsappUrl = `https://wa.me/5555991389623?text=${message}`;
    
    // Track evento no GA4
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        location: 'floating_button'
      });
    }
    
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white border-2 border-white/10 transition-all duration-300 hover:scale-110"
            size="icon"
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageCircle className="w-8 h-8 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-[#25D366] text-white border-none">
          <p className="font-semibold">Atendimento imediato</p>
          <p className="text-xs">Clique para falar agora</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppFloat;
