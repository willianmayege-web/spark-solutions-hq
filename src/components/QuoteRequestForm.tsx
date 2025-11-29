import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { z } from "zod";
import { whatsappLink } from "@/config/contact";

const quoteSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("E-mail inválido").max(255),
  phone: z.string().min(10, "Telefone inválido").max(20),
  city: z.string().min(1, "Selecione uma cidade"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().max(1000).optional(),
  whatsappConsent: z.boolean()
});

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
    whatsappConsent: false
  });

  const cities = [
    "Santa Rosa",
    "Porto Lucena",
    "Três de Maio",
    "Horizontina",
    "Tuparendi",
    "Tucunduva",
    "Alecrim",
    "Independência",
    "Outra cidade"
  ];

  const services = [
    "Energia Solar Fotovoltaica",
    "SPDA / Laudo NBR 5419",
    "Projeto Elétrico NBR 5410",
    "Laudo Técnico / Perícia",
    "Termografia Elétrica",
    "Qualidade de Energia / Fator de Potência",
    "Automação Industrial",
    "Outro"
  ];

  // Formspree endpoint - SUBSTITUIR pelo ID real do form
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanyrokq";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validated = quoteSchema.parse(formData);

      // Backup local
      localStorage.setItem("lastQuoteRequest", JSON.stringify({
        ...validated,
        timestamp: new Date().toISOString(),
      }));

      // Envio para Formspree
      const resp = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: validated.name,
          email: validated.email,
          phone: validated.phone,
          city: validated.city,
          service: validated.service,
          message: validated.message,
          source: "website-eletromays",
        }),
      });

      if (!resp.ok) throw new Error("Falha no envio");

      // Evento GA4
      if (window.gtag) {
        window.gtag("event", "lead_submit", {
          event_category: "Lead",
          event_label: "QuoteRequestForm",
          value: 1,
        });
      }

      toast({
        title: "Recebemos sua solicitação!",
        description: "O Eng. Willian May da Eletro May's retornará com um parecer inicial em até 1 dia útil.",
      });

      // (Opcional) Redirecionar para WhatsApp após envio
      if (formData.whatsappConsent) {
        const whatsappMessage = 
          `*Solicitação de Orçamento*\n\n` +
          `Nome: ${validated.name}\n` +
          `E-mail: ${validated.email}\n` +
          `Telefone: ${validated.phone}\n` +
          `Cidade: ${validated.city}\n` +
          `Serviço: ${validated.service}\n\n` +
          `Mensagem:\n${validated.message}`;
        window.open(whatsappLink(whatsappMessage), "_blank");

        // Evento GA4
        if (window.gtag) {
          window.gtag("event", "whatsapp_redirect_after_submit", {
            event_category: "Lead",
            event_label: "QuoteRequestForm",
            value: 1,
          });
        }
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        service: "",
        message: "",
        whatsappConsent: false,
      });

    } catch (error: any) {
      if (error?.errors) {
        toast({
          title: "Erro de validação",
          description: error.errors[0]?.message ?? "Revise os campos e tente novamente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente ou use o WhatsApp/telefone.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="orcamento" 
      className="py-16 px-4 bg-card"
      aria-labelledby="quote-form-heading"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 
            id="quote-form-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat"
          >
            Solicite <span className="text-primary">Estudo Técnico Gratuito</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descreva sua instalação ou problema elétrico. O engenheiro responsável (CREA-RS 231706) 
            analisará e retornará com um parecer inicial em até 1 dia útil.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-background border border-border rounded-xl p-8 shadow-elegant"
          aria-label="Formulário de solicitação de orçamento"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Seu nome"
                required
                className="mt-2"
                aria-required="true"
                aria-describedby="name-hint"
                autoComplete="name"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="seu@email.com"
                required
                className="mt-2"
                aria-required="true"
                aria-describedby="email-hint"
                autoComplete="email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone/WhatsApp *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(55) 99999-9999"
                required
                className="mt-2"
                aria-required="true"
                aria-describedby="phone-hint"
                autoComplete="tel"
              />
            </div>

            <div>
              <Label htmlFor="city">Cidade *</Label>
              <Select 
                value={formData.city} 
                onValueChange={(value) => setFormData({...formData, city: value})}
                required
              >
                <SelectTrigger className="mt-2" aria-label="Selecione sua cidade" aria-required="true">
                  <SelectValue placeholder="Selecione sua cidade" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="service">Tipo de Serviço *</Label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData({...formData, service: value})}
              required
            >
              <SelectTrigger className="mt-2" aria-label="Selecione o serviço desejado" aria-required="true">
                <SelectValue placeholder="Selecione o serviço desejado" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label htmlFor="message">Descreva o Problema ou Projeto</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Ex: Instalação com quedas frequentes, necessidade de laudo para seguradora, projeto de ampliação, adequação à NR-10, prazo desejado..."
              rows={4}
              className="mt-2"
              maxLength={1000}
              aria-describedby="message-counter"
            />
            <p id="message-counter" className="text-xs text-muted-foreground mt-1" aria-live="polite">
              {formData.message.length}/1000 caracteres
            </p>
          </div>

          <div className="flex items-start space-x-2 mb-6">
            <Checkbox
              id="whatsapp"
              checked={formData.whatsappConsent}
              onCheckedChange={(checked) => setFormData({...formData, whatsappConsent: checked as boolean})}
              aria-describedby="whatsapp-consent-label"
            />
            <label 
              id="whatsapp-consent-label"
              htmlFor="whatsapp" 
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Aceito receber contato por WhatsApp para agilizar o atendimento
            </label>
          </div>

          <Button
            type="submit"
            variant="orange"
            size="lg"
            className="w-full font-semibold"
            disabled={isLoading}
            aria-label={isLoading ? "Enviando solicitação de orçamento" : "Enviar solicitação de orçamento"}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                Enviar Solicitação
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros.
          </p>
        </form>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
