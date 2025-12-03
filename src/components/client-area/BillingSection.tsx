import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Calendar, CheckCircle, Copy, QrCode } from "lucide-react";

type InvoiceStatus = "pago" | "em_aberto" | "vencido";

interface Invoice {
  id: string;
  description: string;
  dueDate: string;
  value: string;
  status: InvoiceStatus;
}

const statusConfig: Record<InvoiceStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pago: { label: "Pago", variant: "outline" },
  em_aberto: { label: "Em aberto", variant: "default" },
  vencido: { label: "Vencido", variant: "destructive" },
};

const invoicesData: Invoice[] = [
  {
    id: "FAT-2024-012",
    description: "Projeto Fotovoltaico 15kWp - Parcela 2/3",
    dueDate: "10/12/2025",
    value: "R$ 4.500,00",
    status: "em_aberto",
  },
  {
    id: "FAT-2024-011",
    description: "Laudo SPDA - Condomínio Residencial Park",
    dueDate: "05/12/2025",
    value: "R$ 1.250,00",
    status: "em_aberto",
  },
  {
    id: "FAT-2024-010",
    description: "Análise de Qualidade de Energia - Frigorífico",
    dueDate: "20/11/2025",
    value: "R$ 2.800,00",
    status: "pago",
  },
  {
    id: "FAT-2024-009",
    description: "Projeto Fotovoltaico 15kWp - Parcela 1/3",
    dueDate: "15/11/2025",
    value: "R$ 4.500,00",
    status: "pago",
  },
  {
    id: "FAT-2024-008",
    description: "Consultoria Técnica - Adequação NR-10",
    dueDate: "01/11/2025",
    value: "R$ 980,00",
    status: "vencido",
  },
];

const BillingSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-montserrat">
          Financeiro e Pagamentos
        </h2>

        {/* Financial Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Faturas em Aberto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-500">R$ 5.750,00</p>
              <p className="text-sm text-muted-foreground mt-1">2 faturas pendentes</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Pagas (últimos 12 meses)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">R$ 18.280,00</p>
              <p className="text-sm text-muted-foreground mt-1">8 faturas quitadas</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Próximo Vencimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">05/12/2025</p>
              <p className="text-sm text-muted-foreground mt-1">Laudo SPDA - R$ 1.250,00</p>
            </CardContent>
          </Card>
        </div>

        {/* Invoices Table */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Descrição</TableHead>
                  <TableHead className="font-semibold">Vencimento</TableHead>
                  <TableHead className="font-semibold">Valor</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold text-right">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoicesData.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{invoice.description}</p>
                        <p className="text-sm text-muted-foreground">{invoice.id}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {invoice.dueDate}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {invoice.value}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[invoice.status].variant}>
                        {statusConfig[invoice.status].label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {invoice.status !== "pago" && (
                          <>
                            <Button variant="outline" size="sm">
                              <Copy className="w-4 h-4 mr-1" />
                              Gerar 2ª via
                            </Button>
                            <Button variant="orange" size="sm">
                              <QrCode className="w-4 h-4 mr-1" />
                              Pagar via PIX
                            </Button>
                          </>
                        )}
                        {invoice.status === "pago" && (
                          <span className="text-sm text-muted-foreground">Quitado</span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingSection;
