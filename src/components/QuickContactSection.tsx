import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { CONTACT, whatsappLink } from "@/config/contact";
import { useToast } from "@/hooks/use-toast";

const QuickContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio - substituir por integração real
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos seus dados. O Eng. Willian May (CREA-RS 231706) retornará com um parecer inicial em até 1 dia útil.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="orcamento" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Fale com Nosso Engenheiro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Envie seus dados e descreva seu projeto ou problema elétrico. Retornaremos com um parecer técnico inicial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {CONTACT.address}
                </p>
                <p className="text-primary font-semibold mt-2">Santa Rosa – RS</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Telefone / WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={whatsappLink('Olá! Gostaria de falar sobre um projeto elétrico.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  {CONTACT.whatsapp.display}
                </a>
                <p className="text-muted-foreground text-sm mt-1">{CONTACT.phone.display}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary hover:text-primary/80 transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground font-montserrat">
                Solicite Atendimento Técnico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Telefone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(55) 99999-9999"
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground mb-2 block">
                      Tipo de serviço *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange as any}
                      required
                      className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground"
                    >
                      <option value="">Selecione</option>
                      <option value="solar">Energia Solar</option>
                      <option value="laudo">Laudo Técnico / SPDA</option>
                      <option value="manutencao">Manutenção Elétrica</option>
                      <option value="projeto">Projeto Elétrico</option>
                      <option value="pericia">Perícia Técnica</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Descreva o problema ou projeto elétrico *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Exemplo: Preciso de um laudo SPDA para um prédio comercial de 3 andares em Santa Rosa. Prazo: 15 dias."
                    rows={5}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="orange" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Atendimento por engenheiro eletricista registrado CREA-RS 231706
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
