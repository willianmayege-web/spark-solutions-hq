import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Download, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EbookPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 5 seconds if not previously dismissed
    const hasSeenPopup = localStorage.getItem('ebook-popup-seen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    // Track GA4 event
    if (window.gtag) {
      window.gtag('event', 'ebook_download', {
        email: email,
        name: name,
      });
    }

    // Save to localStorage (in production, send to Mailchimp API)
    const ebookLead = {
      name,
      email,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('ebook-lead', JSON.stringify(ebookLead));

    toast({
      title: "E-book enviado!",
      description: "Verifique seu e-mail para baixar o Guia de Eficiência Energética.",
    });

    setIsOpen(false);
    localStorage.setItem('ebook-popup-seen', 'true');
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('ebook-popup-seen', 'true');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center font-montserrat">
            E-book Gratuito
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Baixe agora o <span className="text-primary font-semibold">Guia de Eficiência Energética</span> e descubra como economizar até 40% na sua conta de energia!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Nome completo</Label>
            <Input
              id="popup-name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email">E-mail profissional</Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Download className="w-4 h-4 mr-2 text-primary" />
              O que você vai aprender:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Redução de custos com energia elétrica</li>
              <li>✓ Energia solar: vale a pena em 2025?</li>
              <li>✓ Normas técnicas NBR 5410 e NBR 5419</li>
              <li>✓ Manutenção preventiva e segurança</li>
            </ul>
          </div>

          <Button type="submit" variant="orange" className="w-full font-semibold" size="lg">
            Baixar E-book Gratuito
            <Download className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Respeitamos sua privacidade. Sem spam, apenas conteúdo técnico de qualidade.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EbookPopup;
