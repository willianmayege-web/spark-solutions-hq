import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sun, Zap, DollarSign, TrendingUp, Calculator, ArrowRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Constantes do sistema de referência
const GERACAO_RS = 108; // kWh/mês por kWp
const KWP_REF = 7.2;
const PRECO_REF = 15000;
const PRECO_KWP = PRECO_REF / KWP_REF;

const SolarSimulatorSection = () => {
  const [consumoMensal, setConsumoMensal] = useState(900);
  const [potenciaPainel, setPotenciaPainel] = useState(600);
  const [resultado, setResultado] = useState<{
    consumo: number;
    kwp: number;
    qtdModulos: number;
    potenciaModulo: number;
    preco: number;
  } | null>(null);

  const calcularSolar = () => {
    const kwp = consumoMensal / GERACAO_RS;
    const modKwp = potenciaPainel / 1000;
    const qtd = Math.ceil(kwp / modKwp);
    const preco = Math.max(PRECO_REF, kwp * PRECO_KWP);

    setResultado({
      consumo: consumoMensal,
      kwp,
      qtdModulos: qtd,
      potenciaModulo: potenciaPainel,
      preco: Math.round(preco),
    });
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <section id="simulador" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sun className="w-10 h-10 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Simulação de <span className="text-primary">Energia Solar</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule quantos painéis solares você precisa e descubra o investimento estimado em Santa Rosa, RS. 
            Simulação gratuita e sem compromisso com dados baseados na região do Rio Grande do Sul.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-montserrat">
                <Calculator className="w-6 h-6 text-primary mr-2" />
                Calculadora Fotovoltaica
              </CardTitle>
              <CardDescription>
                Preencha os dados abaixo para simular seu sistema solar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Consumo Mensal */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="consumo" className="font-semibold">
                    Consumo Mensal (kWh)
                  </Label>
                  <span className="text-sm font-bold text-primary">{consumoMensal} kWh</span>
                </div>
                <Slider
                  id="consumo"
                  min={100}
                  max={3000}
                  step={50}
                  value={[consumoMensal]}
                  onValueChange={(value) => setConsumoMensal(value[0])}
                  className="w-full"
                />
                <Input
                  type="number"
                  value={consumoMensal}
                  onChange={(e) => setConsumoMensal(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Potência do Painel */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="potencia" className="font-semibold">
                    Potência do Painel (Wp)
                  </Label>
                  <span className="text-sm font-bold text-primary">{potenciaPainel} Wp</span>
                </div>
                <Slider
                  id="potencia"
                  min={550}
                  max={700}
                  step={25}
                  value={[potenciaPainel]}
                  onValueChange={(value) => setPotenciaPainel(value[0])}
                  className="w-full"
                />
                <Input
                  type="number"
                  value={potenciaPainel}
                  onChange={(e) => setPotenciaPainel(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <Button 
                variant="orange" 
                size="lg" 
                className="w-full"
                onClick={calcularSolar}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Sistema Solar
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {resultado ? (
              <>
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat">
                      Resultados da Simulação
                    </CardTitle>
                    <CardDescription>
                      Estimativas para seu sistema solar em Santa Rosa, RS
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Consumo analisado</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.consumo} kWh/mês</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Potência do sistema</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.kwp.toFixed(2)} kWp</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sun className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Módulos recomendados</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.qtdModulos} módulos</p>
                        <p className="text-xs text-muted-foreground">de {resultado.potenciaModulo} Wp cada</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Preço estimado</p>
                        <p className="text-2xl font-bold text-primary">{formatCurrency(resultado.preco)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-primary/30">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm">
                    <strong>Base:</strong> Inversor 7,5 kW + 12 módulos 600 W (7,2 kWp) por R$ 15.000.
                    <br />
                    Valores estimados. O preço final pode variar conforme estrutura e logística.
                  </AlertDescription>
                </Alert>

                <Button 
                  variant="orange" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="#contact">
                    Solicite Orçamento Personalizado
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </>
            ) : (
              <Card className="border-border/50">
                <CardContent className="py-12 text-center">
                  <Sun className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Preencha os dados ao lado e clique em "Calcular" para ver os resultados da sua simulação solar.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-base">Energia Limpa</h3>
            <p className="text-sm text-muted-foreground">
              Reduza sua pegada de carbono e contribua para um futuro sustentável
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-base">Economia Garantida</h3>
            <p className="text-sm text-muted-foreground">
              Economize até 95% na conta de energia com energia solar
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2 text-base">Valorização do Imóvel</h3>
            <p className="text-sm text-muted-foreground">
              Imóveis com energia solar têm valorização média de 10% a 15%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSimulatorSection;
