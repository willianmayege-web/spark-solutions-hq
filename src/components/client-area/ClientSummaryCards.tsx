import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen, FileText, CreditCard, RefreshCw } from "lucide-react";

const summaryData = [
  {
    icon: FolderOpen,
    value: "3",
    label: "Projetos em execução",
    title: "Projetos Ativos",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileText,
    value: "7",
    label: "Laudos prontos para download (PDF)",
    title: "Laudos Disponíveis",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: CreditCard,
    value: "R$ 1.250,00",
    label: "Boletos/PIX pendentes",
    title: "Pagamentos em Aberto",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: RefreshCw,
    value: "03/12/2025",
    label: "Dados atualizados automaticamente",
    title: "Última Atualização",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const ClientSummaryCards = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${item.bgColor}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-3xl font-bold text-foreground mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSummaryCards;
