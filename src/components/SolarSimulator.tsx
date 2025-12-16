import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sun, Calculator, TrendingUp, Zap, Info } from "lucide-react";

// Sistema de referência
const REFERENCE_SYSTEM = {
  inverterKw: 7.5,
  moduleCount: 12,
  moduleWp: 600,
  totalKwp: 7.2,
  baseCost: 15000,
};

const COST_PER_KWP = REFERENCE_SYSTEM.baseCost / REFERENCE_SYSTEM.totalKwp; // ~2083.33
const GENERATION_FACTOR = 108; // kWh/mês por kWp (RS)

// Opções de potência do módulo (550-700 Wp em passos de 25W)
const MODULE_OPTIONS = [550, 575, 600, 625, 650, 675, 700];

const SolarSimulator = () => {
  const [consumption, setConsumption] = useState("");
  const [modulePower, setModulePower] = useState("600");
  const [results, setResults] = useState<{
    systemKwp: number;
    moduleCount: number;
    modulePowerWp: number;
    estimatedCost: number;
  } | null>(null);

  const calculateSolar = () => {
    if (!consumption) return;
    
    const monthlyConsumption = parseFloat(consumption);
    const modulePowerWp = parseInt(modulePower);
    const modulePowerKwp = modulePowerWp / 1000;
    
    // Cálculo do sistema
    const systemKwp = monthlyConsumption / GENERATION_FACTOR;
    const moduleCount = Math.ceil(systemKwp / modulePowerKwp);
    
    // Cálculo do custo (mínimo R$ 15.000)
    const rawCost = systemKwp * COST_PER_KWP;
    const estimatedCost = Math.max(REFERENCE_SYSTEM.baseCost, rawCost);
    
    setResults({
      systemKwp,
      moduleCount,
      modulePowerWp,
      estimatedCost: Math.round(estimatedCost),
    });
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
                  Simule Seu Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sistema de referência */}
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Sistema de referência:</strong> Inversor 7,5 kW + 12 módulos de 600 W (7,2 kWp) por R$ 15.000,00.
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="consumption" className="text-foreground font-medium">
                    Consumo Médio Mensal (kWh)
                  </Label>
                  <Input
                    id="consumption"
                    type="number"
                    placeholder="Ex: 500"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    className="mt-2"
                    min="0"
                  />
                </div>

                <div>
                  <Label htmlFor="modulePower" className="text-foreground font-medium">
                    Potência do Módulo (Wp)
                  </Label>
                  <Select value={modulePower} onValueChange={setModulePower}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione a potência" />
                    </SelectTrigger>
                    <SelectContent>
                      {MODULE_OPTIONS.map((power) => (
                        <SelectItem key={power} value={power.toString()}>
                          {power} Wp
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  variant="orange" 
                  className="w-full"
                  onClick={calculateSolar}
                  disabled={!consumption}
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Calcular Sistema
                </Button>

                {results && (
                  <div className="mt-6 p-5 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-lg text-foreground mb-4">Resultado da Simulação</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Potência estimada do sistema</span>
                        <span className="font-bold text-primary">{results.systemKwp.toFixed(2)} kWp</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Quantidade de módulos</span>
                        <span className="font-bold text-primary">{results.moduleCount} módulos</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Potência por módulo</span>
                        <span className="font-bold text-primary">{results.modulePowerWp} Wp</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Custo estimado do projeto</span>
                        <span className="font-bold text-xl text-primary">{formatCurrency(results.estimatedCost)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                      Valores estimados com base em um sistema padrão de 7,2 kWp (12 × 600 Wp + inversor 7,5 kW) por R$ 15.000,00. O preço final pode variar conforme estrutura, cabos, mão de obra e logística.
                    </p>
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