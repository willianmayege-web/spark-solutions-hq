import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Smartphone
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-8888",
      description: "Seg-Sex: 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@electrotech.com.br",
      description: "Resposta em até 2h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Paulista, 1000",
      description: "São Paulo - SP"
    },
    {
      icon: Clock,
      title: "Emergência 24h",
      content: "(11) 9999-0000",
      description: "Atendimento urgente"
    }
  ];

  const services = [
    "Projetos Elétricos",
    "Automação Industrial",
    "Energia Solar",
    "Manutenção Elétrica",
    "Eficiência Energética",
    "Outros"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você. Entre em contato e 
            receba uma proposta personalizada para suas necessidades.
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
              <Button variant="orange" className="w-full" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button variant="outline" className="w-full" size="lg">
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
                  Solicite um Orçamento
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input placeholder="Nome da empresa" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Serviço *
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descrição do Projeto *
                  </label>
                  <Textarea
                    placeholder="Descreva detalhadamente seu projeto, localização, prazo e outras informações relevantes..."
                    rows={5}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Orçamento Estimado
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                    <option value="">Selecione uma faixa</option>
                    <option value="ate-10k">Até R$ 10.000</option>
                    <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                    <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                    <option value="acima-100k">Acima de R$ 100.000</option>
                  </select>
                </div>

                <Button variant="orange" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>

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