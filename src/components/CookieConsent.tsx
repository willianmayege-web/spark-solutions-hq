import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Mostrar após 2 segundos
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Track evento no GA4
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        consent_status: 'accepted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    
    // Track evento no GA4
    if (window.gtag) {
      window.gtag('event', 'cookie_consent', {
        consent_status: 'rejected'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <Card className="container mx-auto max-w-4xl bg-card border-2 border-primary/20 shadow-2xl">
        <div className="p-6">
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Cookies e Privacidade
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Utilizamos cookies essenciais e de análise para melhorar sua experiência em nosso site. 
                Os dados coletados são utilizados apenas para melhorar nossos serviços e não são compartilhados com terceiros.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="orange"
                  onClick={handleAccept}
                  className="font-semibold"
                >
                  Aceitar Cookies
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReject}
                >
                  Rejeitar
                </Button>
                <Link to="/politica-privacidade">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    Política de Privacidade
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
