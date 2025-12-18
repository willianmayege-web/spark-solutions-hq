/**
 * Seção de Plano Bloqueado
 * Exibido quando o plano do cliente está inativo (PAST_DUE ou CANCELED)
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";
import { CONTACT } from "@/config/contact";

interface PlanBlockedSectionProps {
  message: string;
}

const PlanBlockedSection = ({ message }: PlanBlockedSectionProps) => {
  const handleContact = () => {
    const text = encodeURIComponent(
      "Olá! Gostaria de regularizar minha situação de plano de monitoramento."
    );
    window.open(`https://wa.me/${CONTACT.whatsapp.number}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-lg mx-auto border-destructive/50 bg-destructive/5">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Acesso Restrito
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {message}
            </p>
            
            <Button variant="default" onClick={handleContact}>
              <Phone className="w-4 h-4 mr-2" />
              Regularizar Situação
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              Entre em contato pelo WhatsApp: {CONTACT.whatsapp.display}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlanBlockedSection;
