import { Card, CardContent } from "@/components/ui/card";
import { Scale, Calendar, Sun, Receipt, AlertTriangle, TrendingDown } from "lucide-react";

const Lei14300Section = () => {
  const cards = [
    {
      icon: Calendar,
      title: "Direito Adquirido (até 06/01/2023)",
      description: "Sistemas instalados antes dessa data mantêm as regras antigas até 2045, com compensação de 100% dos créditos sem desconto de fio B."
    },
    {
      icon: TrendingDown,
      title: "Novas Regras (a partir de 2023)",
      description: "Transição gradual com aplicação de taxas sobre uso da rede (TUSD Fio B). Ainda assim, economia significativa de 30% a 90%."
    },
    {
      icon: Sun,
      title: "Autoconsumo vs Injeção",
      description: "Autoconsumo (usar no momento da geração): economia de 100%. Injeção na rede (gerar créditos): desconto proporcional às taxas."
    },
    {
      icon: Receipt,
      title: "Valor Mínimo Faturável",
      description: "Existe taxa mínima obrigatória: Monofásico ~30 kWh, Bifásico ~50 kWh, Trifásico ~100 kWh. Promessas de 'zerar a conta' são irreais."
    }
  ];

  const transitionTable = [
    { year: "2024", discount: "15%" },
    { year: "2025", discount: "30%" },
    { year: "2026", discount: "45%" },
    { year: "2027", discount: "60%" },
    { year: "2028", discount: "75%" },
    { year: "2029+", discount: "90%" }
  ];

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Scale className="w-5 h-5" />
            <span className="text-sm font-semibold">Marco Legal da Geração Distribuída</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Lei 14.300/2022
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Entenda como as regras de compensação de energia afetam sua economia e 
            por que a energia solar continua sendo um excelente investimento.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transition Table */}
        <Card className="bg-card border-border mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 font-montserrat text-center">
              Tabela de Transição – Desconto TUSD Fio B
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Ano</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Desconto sobre Energia Injetada</th>
                  </tr>
                </thead>
                <tbody>
                  {transitionTable.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-3 px-4 text-foreground font-medium">{row.year}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-2">
                          <div 
                            className="h-2 bg-primary rounded-full" 
                            style={{ width: `${parseInt(row.discount) * 1.5}px` }}
                          />
                          <span className="text-muted-foreground">{row.discount}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Sistemas instalados antes de 07/01/2023 mantêm isenção de 100% até 2045 (direito adquirido).
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Nota técnica:</strong> Os valores de desconto podem variar 
            conforme resoluções da ANEEL e tarifas locais da concessionária. 
            <span className="text-primary font-medium"> Consulte-nos para análise personalizada do seu caso.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Lei14300Section;