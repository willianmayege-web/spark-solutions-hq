import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield,
  Send,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { CONTACT, whatsappLink } from "@/config/contact";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: CONTACT.phone.display,
      description: "Seg-Sex: 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: CONTACT.email,
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: CONTACT.address.split(", ").slice(0, 2).join(", "),
      description: "Santa Rosa, RS"
    },
    {
      icon: Shield,
      title: "CREA-RS",
      content: CONTACT.crea,
      description: "Certificação Profissional"
    }
  ];

  const services = [
    "Projeto Elétrico (NBR 5410/14039)",
    "Energia Solar Fotovoltaica",
    "SPDA / Aterramento (NBR 5419)",
    "Laudo Técnico / Perícia",
    "Termografia / Qualidade de Energia",
    "Automação e Eficiência Energética",
    "Outro"
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Recebemos seus dados!", {
        description: "O Eng. Willian May (CREA-RS 231706) retornará com um parecer inicial em até 1 dia útil.",
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Fale com o Engenheiro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Atendimento Direto com Engenheiro Eletricista
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descreva seu projeto, problema ou necessidade de laudo. 
            Eng. Willian May (CREA-RS 231706) responde pessoalmente em até 1 dia útil.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <Button 
                variant="orange" 
                className="w-full" 
                size="lg"
                onClick={() => window.location.href = `tel:+${CONTACT.phone.number}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={() => window.open(whatsappLink('Olá, gostaria de solicitar um orçamento de engenharia elétrica / laudo técnico.'), '_blank')}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Descreva Seu Projeto ou Problema Elétrico
                </CardTitle>
                <p className="text-muted-foreground">
                  Formulário atendido diretamente pelo engenheiro responsável. Resposta com parecer inicial em até 1 dia útil.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <Input placeholder="(55) 99999-9999" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa / Condomínio (opcional)
                      </label>
                      <Input placeholder="Razão social ou nome do condomínio" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Serviço *
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background text-foreground" required>
                      <option value="">Selecione o serviço desejado</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Descreva o Problema ou Projeto *
                    </label>
                    <Textarea
                      placeholder="Ex: Preciso de laudo SPDA para prédio comercial de 4 andares para renovação do AVCB. Ou: Instalação apresenta quedas frequentes e precisamos de diagnóstico técnico. Informe prazo desejado se houver."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cidade / Localização da Instalação
                    </label>
                    <Input placeholder="Ex: Santa Rosa - RS, zona industrial" />
                  </div>

                  <Button 
                    type="submit" 
                    variant="orange" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar para Análise do Engenheiro
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade. 
                  Seus dados estão seguros conosco.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;