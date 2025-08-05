import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sun, Calculator, TrendingUp, Zap } from "lucide-react";

const SolarSimulator = () => {
  const [cep, setCep] = useState("");
  const [consumption, setConsumption] = useState("");
  const [results, setResults] = useState<{
    monthlyEconomy: number;
    yearlyEconomy: number;
    paybackTime: number;
    systemPower: number;
  } | null>(null);

  const calculateSolar = () => {
    if (!cep || !consumption) return;
    
    const monthlyConsumption = parseInt(consumption);
    const averageTariff = 0.85; // R$ por kWh
    const monthlyEconomy = monthlyConsumption * averageTariff * 0.95; // 95% economia
    const yearlyEconomy = monthlyEconomy * 12;
    const systemPower = monthlyConsumption / 150; // Aproximação kWp
    const paybackTime = (systemPower * 4000) / yearlyEconomy; // Anos
    
    setResults({
      monthlyEconomy,
      yearlyEconomy,
      paybackTime,
      systemPower
    });
  };

  return (
    <section id="simulator" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Simulator Form */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
                Simulador Solar
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubra quanto você pode economizar com energia solar
              </p>
            </div>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <Calculator className="w-6 h-6 mr-3 text-primary" />
                  Simule Sua Economia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="cep" className="text-foreground font-medium">
                    CEP da Instalação
                  </Label>
                  <Input
                    id="cep"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="consumption" className="text-foreground font-medium">
                    Consumo Mensal (kWh)
                  </Label>
                  <Input
                    id="consumption"
                    type="number"
                    placeholder="Ex: 300"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  variant="orange" 
                  className="w-full"
                  onClick={calculateSolar}
                  disabled={!cep || !consumption}
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Calcular Economia
                </Button>

                {results && (
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-3">Resultados da Simulação:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Economia Mensal</div>
                        <div className="font-bold text-primary">R$ {results.monthlyEconomy.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Economia Anual</div>
                        <div className="font-bold text-primary">R$ {results.yearlyEconomy.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Potência Sistema</div>
                        <div className="font-bold text-primary">{results.systemPower.toFixed(1)} kWp</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Payback</div>
                        <div className="font-bold text-primary">{results.paybackTime.toFixed(1)} anos</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button variant="hero" className="w-full">
                  Ver Meu Projeto Ideal
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Solar System Image */}
          <div className="relative">
            <img
              src="/src/assets/circuit-board.jpg"
              alt="Sistema solar residencial"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-foreground">95% Economia</div>
                  </div>
                  <div>
                    <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-foreground">25 Anos Garantia</div>
                  </div>
                  <div>
                    <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-foreground">Energia Limpa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSimulator;