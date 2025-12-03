import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Building, Mail, Phone, MapPin, Headphones, MessageSquare, Clock } from "lucide-react";

interface SupportTicket {
  id: string;
  title: string;
  date: string;
  status: "aberto" | "em_andamento" | "resolvido";
}

const clientData = {
  name: "Indústria Metalúrgica Santa Rosa Ltda",
  document: "12.345.678/0001-90",
  email: "contato@metalurgicasr.com.br",
  phone: "(55) 3512-1234",
  city: "Santa Rosa - RS",
};

const supportTickets: SupportTicket[] = [
  {
    id: "SUP-2024-015",
    title: "Dúvida sobre leitura do inversor solar",
    date: "01/12/2025",
    status: "em_andamento",
  },
  {
    id: "SUP-2024-012",
    title: "Solicitação de visita técnica preventiva",
    date: "25/11/2025",
    status: "resolvido",
  },
  {
    id: "SUP-2024-010",
    title: "Esclarecimento sobre laudo SPDA",
    date: "18/11/2025",
    status: "resolvido",
  },
];

const statusConfig: Record<SupportTicket["status"], { label: string; variant: "default" | "secondary" | "outline" }> = {
  aberto: { label: "Aberto", variant: "default" },
  em_andamento: { label: "Em andamento", variant: "secondary" },
  resolvido: { label: "Resolvido", variant: "outline" },
};

const ClientDataSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Data */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground font-montserrat">
                <User className="w-5 h-5 text-primary" />
                Dados Cadastrais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Razão Social</p>
                  <p className="font-medium text-foreground">{clientData.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">CNPJ</p>
                  <p className="font-medium text-foreground">{clientData.document}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">{clientData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">{clientData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Cidade/UF</p>
                  <p className="font-medium text-foreground">{clientData.city}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Solicitar atualização de dados
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground font-montserrat">
                <Headphones className="w-5 h-5 text-primary" />
                Suporte Técnico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Precisa de ajuda técnica? Nossa equipe está pronta para auxiliar você com dúvidas sobre projetos, 
                laudos, manutenção ou qualquer questão relacionada aos nossos serviços.
              </p>

              <Button variant="orange" className="w-full mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Abrir chamado técnico
              </Button>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Chamados Recentes
                </h4>
                <div className="space-y-3">
                  {supportTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {ticket.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {ticket.id} • {ticket.date}
                        </p>
                      </div>
                      <Badge variant={statusConfig[ticket.status].variant} className="ml-2">
                        {statusConfig[ticket.status].label}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientDataSection;
