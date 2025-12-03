import { FileText, Calculator, Shield, CheckCircle, Zap, CloudLightning, Flame, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InsuranceHowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Envie a Nota Fiscal",
      description: "Você nos envia a NF do seu sistema solar (módulos, inversores, estrutura e mão de obra)."
    },
    {
      icon: Calculator,
      title: "Cálculo do Prêmio",
      description: "Calculamos o valor do seguro com base no valor total da sua instalação."
    },
    {
      icon: Shield,
      title: "Emissão do Seguro",
      description: "O seguro é emitido pela Essor via Elétron Seguros, com toda a segurança e respaldo."
    },
    {
      icon: CheckCircle,
      title: "Suporte Completo",
      description: "A Eletro May's acompanha você em todo o processo, inclusive em caso de sinistro."
    },
  ];

  const risks = [
    { icon: CloudLightning, text: "Danos elétricos e surtos de tensão" },
    { icon: Flame, text: "Incêndio e explosão" },
    { icon: Droplets, text: "Vendaval, granizo e alagamento" },
    { icon: Zap, text: "Queda de raio e curto-circuito" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Como funciona o seguro para energia solar
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            O seguro protege todo o investimento do seu sistema fotovoltaico com base no valor 
            da Nota Fiscal, incluindo módulos, inversores, estrutura de fixação e mão de obra da instalação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Passo {index + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
            Principais riscos protegidos
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            O seguro oferece cobertura ampla para proteger seu sistema solar contra diversos eventos. 
            Consulte as condições gerais da apólice para detalhes completos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {risks.map((risk, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 bg-background rounded-xl p-4 text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <risk.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{risk.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHowItWorks;
