import { useState } from "react";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import SEOHead from "@/components/SEOHead";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, whatsappLink } from "@/config/contact";
import { MessageCircle, Mail, Send } from "lucide-react";

const EmBrevePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Build mailto link as fallback
    const subject = encodeURIComponent(
      `Contato via site - ${formData.nome}`
    );
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMensagem:\n${formData.mensagem}`
    );
    const mailtoLink = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");

    toast({
      title: "Mensagem preparada",
      description: "Seu cliente de e-mail foi aberto com a mensagem pronta para envio.",
    });

    setFormData({ nome: "", email: "", whatsapp: "", mensagem: "" });
    setIsSubmitting(false);
  };

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Em Breve | Eletro May's Engenharia Elétrica"
        description="Site em desenvolvimento. Entre em contato para orçamentos e atendimento técnico."
        noIndex={true}
      />
      <Header />

      <main id="main-content" className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Estamos preparando algo especial
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              O novo site da Eletro May's Engenharia Elétrica está em desenvolvimento.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-10">
              Enquanto finalizamos a plataforma, solicite orçamentos e atendimentos pelo WhatsApp ou formulário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="orange"
                size="lg"
                className="gap-2"
                onClick={() =>
                  window.open(
                    whatsappLink("Olá! Gostaria de mais informações sobre os serviços da Eletro May's."),
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5" />
                Enviar mensagem pelo formulário
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-montserrat">
                Entre em contato
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo que retornaremos em breve.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-lg p-6 sm:p-8"
            >
              <div className="space-y-2">
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem *</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Descreva sua solicitação ou dúvida..."
                />
              </div>

              <Button
                type="submit"
                variant="orange"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default EmBrevePage;
