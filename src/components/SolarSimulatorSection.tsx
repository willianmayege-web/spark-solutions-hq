import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sun, Zap, DollarSign, TrendingUp, Calculator, ArrowRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SolarSimulatorSection = () => {
  const [consumoMensal, setConsumoMensal] = useState(900);
  const [horasSol, setHorasSol] = useState(5);
  const [potenciaPainel, setPotenciaPainel] = useState(300);
  const [custoKwh, setCustoKwh] = useState(0.80);
  const [resultado, setResultado] = useState<any>(null);

  const calcularSolar = () => {
    const eficiencia = 0.75;
    const consumoDiario = consumoMensal / 30;
    const energiaDiariaNecessaria = consumoDiario / eficiencia;
    const energiaPorPainel = (potenciaPainel / 1000) * horasSol;
    const numPaineis = Math.ceil(energiaDiariaNecessaria / energiaPorPainel);
    const geracaoAnual = numPaineis * (potenciaPainel / 1000) * horasSol * 365;
    const economiaAnual = geracaoAnual * custoKwh;
    const custoSistemaEstimado = numPaineis * 5000;
    const roiAnos = custoSistemaEstimado / economiaAnual;

    setResultado({
      numPaineis,
      geracaoAnual: geracaoAnual.toFixed(2),
      economiaAnual: economiaAnual.toFixed(2),
      custoSistema: custoSistemaEstimado.toFixed(2),
      roiAnos: roiAnos.toFixed(1)
    });
  };

  return (
    <section id="simulador-solar" className="py-20 bg-background">
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
            Calcule quantos painéis solares você precisa e descubra sua economia anual em Santa Rosa, RS. 
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

              {/* Horas de Sol */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="horas-sol" className="font-semibold">
                    Horas de Sol Diárias (média RS: 5h)
                  </Label>
                  <span className="text-sm font-bold text-primary">{horasSol.toFixed(1)} h</span>
                </div>
                <Slider
                  id="horas-sol"
                  min={3}
                  max={7}
                  step={0.5}
                  value={[horasSol]}
                  onValueChange={(value) => setHorasSol(value[0])}
                  className="w-full"
                />
                <Input
                  type="number"
                  step="0.5"
                  value={horasSol}
                  onChange={(e) => setHorasSol(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Potência do Painel */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="potencia" className="font-semibold">
                    Potência do Painel (W)
                  </Label>
                  <span className="text-sm font-bold text-primary">{potenciaPainel} W</span>
                </div>
                <Slider
                  id="potencia"
                  min={250}
                  max={550}
                  step={50}
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

              {/* Custo kWh */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="custo" className="font-semibold">
                    Custo da Energia (R$ por kWh)
                  </Label>
                  <span className="text-sm font-bold text-primary">R$ {custoKwh.toFixed(2)}</span>
                </div>
                <Slider
                  id="custo"
                  min={0.5}
                  max={1.5}
                  step={0.01}
                  value={[custoKwh]}
                  onValueChange={(value) => setCustoKwh(value[0])}
                  className="w-full"
                />
                <Input
                  type="number"
                  step="0.01"
                  value={custoKwh}
                  onChange={(e) => setCustoKwh(Number(e.target.value))}
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
                Calcular Economia Solar
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
                        <Sun className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Painéis Necessários</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.numPaineis} painéis</p>
                        <p className="text-xs text-muted-foreground">de {potenciaPainel}W cada</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Geração Anual Estimada</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.geracaoAnual} kWh</p>
                        <p className="text-xs text-muted-foreground">por ano</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Economia Anual</p>
                        <p className="text-2xl font-bold text-primary">R$ {resultado.economiaAnual}</p>
                        <p className="text-xs text-muted-foreground">por ano</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Retorno do Investimento (ROI)</p>
                        <p className="text-2xl font-bold text-foreground">{resultado.roiAnos} anos</p>
                        <p className="text-xs text-muted-foreground">Investimento estimado: R$ {resultado.custoSistema}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-primary/30">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm">
                    <strong>Importante:</strong> Esta é uma estimativa aproximada baseada em valores médios. 
                    Para um projeto real e preciso, consulte um profissional certificado CREA-RS 231706. 
                    Fatores como orientação do telhado, sombreamento e tipo de instalação podem afetar os resultados.
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
            <h3 className="font-bold text-foreground mb-2">Energia Limpa</h3>
            <p className="text-sm text-muted-foreground">
              Reduza sua pegada de carbono e contribua para um futuro sustentável
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Economia Garantida</h3>
            <p className="text-sm text-muted-foreground">
              Economize até 95% na conta de energia com energia solar
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Valorização do Imóvel</h3>
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
