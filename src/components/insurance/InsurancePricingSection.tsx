import { Calculator, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InsurancePricingSection = () => {
  const pricingExamples = [
    { nfValue: "R$ 10.000,00", premium: "R$ 300,00" },
    { nfValue: "R$ 15.000,00", premium: "R$ 300,00" },
    { nfValue: "R$ 20.000,00", premium: "R$ 400,00" },
    { nfValue: "R$ 30.000,00", premium: "R$ 600,00" },
    { nfValue: "R$ 50.000,00", premium: "R$ 1.000,00" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Simulação de valores</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Quanto custa o seguro do meu sistema solar?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <Card className="border-primary/20 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Valor mínimo do seguro</h3>
                <p className="text-muted-foreground mb-4">
                  O valor mínimo do prêmio é <strong className="text-foreground">R$ 300,00</strong> para 
                  sistemas com Nota Fiscal de até R$ 15.000,00.
                </p>
                <p className="text-muted-foreground">
                  A partir desse valor, o prêmio aumenta gradativamente conforme o valor 
                  total da instalação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Fórmula de cálculo</h3>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Prêmio estimado:</p>
                  <p className="text-lg font-mono font-bold text-primary">
                    Maior valor entre R$ 300,00 e 2% da NF
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Exemplo: NF de R$ 25.000,00 → 2% = R$ 500,00 (prêmio estimado)
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-0">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">Tabela de referência</h3>
                <p className="text-sm text-muted-foreground">Exemplos de valores para simulação</p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Valor da Nota Fiscal</TableHead>
                      <TableHead className="font-semibold text-right">Prêmio Estimado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingExamples.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.nfValue}</TableCell>
                        <TableCell className="text-right text-accent font-semibold">{row.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex items-start gap-3 bg-primary/5 rounded-lg p-4 border border-primary/10">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> Valores estimados para simulação. 
              A cotação final depende da análise da seguradora Essor via Elétron Seguros e das 
              características específicas do seu sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePricingSection;
