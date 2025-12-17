import { useState } from "react";
import { Button } from "./ui/button";

interface SimulationResults {
  dims: { kWp: number; coverPct: number };
  gen: { month: number; year: number };
  savings: { month: number; year: number };
  capex: { total: number; omYear: number };
  payback: { simple: number };
  dpb: { years: number | null; discRate: number };
  npv: number;
  lcoe: number;
  co2: { year1: number; factor: number };
}

interface FormData {
  billBRL: string;
  consumptionKWh: string;
  tariff: string;
  hsp: string;
  pr: string;
  capexPerKwp: string;
  omPercent: string;
  tariffEsc: string;
  discount: string;
  degr: string;
  coverPct: string;
  co2EF: string;
}

const EnergySimulator = () => {
  const [formData, setFormData] = useState<FormData>({
    billBRL: "",
    consumptionKWh: "",
    tariff: "1.00",
    hsp: "5.0",
    pr: "0.80",
    capexPerKwp: "4800",
    omPercent: "1.0",
    tariffEsc: "6.0",
    discount: "10.0",
    degr: "0.7",
    coverPct: "95",
    co2EF: "0.06",
  });

  const [results, setResults] = useState<SimulationResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const runPVCalc = () => {
    setError(null);
    
    const get = (field: keyof FormData) => parseFloat(formData[field] || "0");

    const billBRL = get("billBRL");
    const kWhIn = get("consumptionKWh");
    const tariff = Math.max(get("tariff"), 0.01);
    const hsp = get("hsp");
    const pr = get("pr");
    const capexPk = get("capexPerKwp");
    const omPct = get("omPercent") / 100;
    const escal = get("tariffEsc") / 100;
    const disc = get("discount") / 100;
    const degr = get("degr") / 100;
    const cover = get("coverPct") / 100;
    const co2EF = get("co2EF");

    // Consumo mensal (kWh)
    let consKWh = kWhIn > 0 ? kWhIn : billBRL > 0 ? billBRL / tariff : 0;
    if (consKWh <= 0) {
      setError("Informe consumo (kWh) ou fatura (R$).");
      setResults(null);
      return;
    }

    // Dimensionamento: gera ~cover% do consumo
    const genTarget = consKWh * cover;
    const kWp = genTarget / (hsp * pr * 30);
    const capexTotal = kWp * capexPk;

    // Geração mês/ano (ano 1)
    const genMonth = kWp * hsp * pr * 30;
    const genYear1 = genMonth * 12;

    // Economia mês/ano (ano 1)
    const savedMonth1 = Math.min(genMonth, consKWh) * tariff;
    const savedYear1 = savedMonth1 * 12;

    // O&M
    const omYear = capexTotal * omPct;

    // Payback simples
    const simplePayback = capexTotal / (savedYear1 - omYear);

    // Fluxo de caixa 25 anos, com escalada tarifa e degradação FV
    const years = 25;
    let npv = -capexTotal;
    let cumDisc = -capexTotal;
    let discountedPayback: number | null = null;
    let genY = genYear1;
    let t = tariff;

    for (let y = 1; y <= years; y++) {
      if (y > 1) {
        genY *= 1 - degr;
        t *= 1 + escal;
      }
      const savedY = Math.min(consKWh * 12, genY) * t;
      const cashY = savedY - omYear;
      const pvY = cashY / Math.pow(1 + disc, y);
      npv += pvY;
      cumDisc += pvY;
      if (discountedPayback === null && cumDisc >= 0) {
        const prevCum = cumDisc - pvY;
        const frac = prevCum !== 0 ? (prevCum * -1) / pvY : 0;
        discountedPayback = y - 1 + Math.max(0, Math.min(1, frac));
      }
    }

    // LCOE (custo nivelado)
    let denom = 0,
      numer = capexTotal;
    genY = genYear1;
    for (let y = 1; y <= years; y++) {
      if (y > 1) genY *= 1 - degr;
      const pvGen = genY / Math.pow(1 + disc, y);
      denom += pvGen;
      const pvOpex = omYear / Math.pow(1 + disc, y);
      numer += pvOpex;
    }
    const lcoe = numer / (denom || 1);

    // CO2 evitado ano 1
    const co2Y1 = (genYear1 / 1000) * co2EF;

    setResults({
      dims: { kWp, coverPct: cover * 100 },
      gen: { month: genMonth, year: genYear1 },
      savings: { month: savedMonth1, year: savedYear1 },
      capex: { total: capexTotal, omYear },
      payback: { simple: simplePayback },
      dpb: { years: discountedPayback, discRate: disc * 100 },
      npv,
      lcoe,
      co2: { year1: co2Y1, factor: co2EF },
    });
  };

  return (
    <section id="simulador" className="bg-black text-white py-16 px-8 text-center">
      <h2 className="text-primary-orange text-3xl font-bold mb-4">
        Simule sua Economia e Payback
      </h2>
      <p className="max-w-4xl mx-auto mb-5 text-muted-foreground">
        Informe seus dados principais. Os resultados usam metodologia profissional (HSP, PR, degradação, escalada tarifária e fluxo de caixa descontado).
      </p>

      {/* Entradas principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-5xl mx-auto mb-4 text-left">
        <div>
          <label className="block text-sm mb-1">Fatura média (R$) — opcional</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex.: 650"
            value={formData.billBRL}
            onChange={(e) => handleInputChange("billBRL", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Consumo mensal (kWh) — se souber</label>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="Ex.: 450"
            value={formData.consumptionKWh}
            onChange={(e) => handleInputChange("consumptionKWh", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Tarifa (R$/kWh)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.tariff}
            onChange={(e) => handleInputChange("tariff", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">HSP (h/dia)</label>
          <input
            type="number"
            min="3"
            max="6.5"
            step="0.1"
            value={formData.hsp}
            onChange={(e) => handleInputChange("hsp", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">PR (0.72–0.85)</label>
          <input
            type="number"
            min="0.7"
            max="0.9"
            step="0.01"
            value={formData.pr}
            onChange={(e) => handleInputChange("pr", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">CAPEX (R$/kWp)</label>
          <input
            type="number"
            min="3000"
            step="50"
            value={formData.capexPerKwp}
            onChange={(e) => handleInputChange("capexPerKwp", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">O&M (% CAPEX/ano)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={formData.omPercent}
            onChange={(e) => handleInputChange("omPercent", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Escalada tarifária (% a.a.)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={formData.tariffEsc}
            onChange={(e) => handleInputChange("tariffEsc", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Taxa de desconto (% a.a.)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={formData.discount}
            onChange={(e) => handleInputChange("discount", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Degradação FV (% a.a.)</label>
          <input
            type="number"
            min="0"
            step="0.05"
            value={formData.degr}
            onChange={(e) => handleInputChange("degr", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Meta de cobertura do consumo (%)</label>
          <input
            type="number"
            min="10"
            max="100"
            step="1"
            value={formData.coverPct}
            onChange={(e) => handleInputChange("coverPct", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Fator CO₂ (tCO₂/MWh)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={formData.co2EF}
            onChange={(e) => handleInputChange("co2EF", e.target.value)}
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
      </div>

      <Button onClick={runPVCalc} variant="orange" size="lg" className="mt-2">
        Calcular
      </Button>

      {/* Error message */}
      {error && (
        <div className="max-w-5xl mx-auto mt-4 text-left bg-destructive/10 border border-destructive rounded-lg p-4">
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {/* Resultados */}
      {results && (
        <div className="max-w-5xl mx-auto mt-6 text-left bg-surface-dark border border-border rounded-lg p-4">
          <h3 className="mt-0 mb-4 text-green-400 text-xl font-semibold">
            Resultados — Ano 1
          </h3>
          <p className="mb-2">
            Potência do sistema: <strong>{results.dims.kWp.toFixed(2)} kWp</strong> (cobrindo {Math.round(results.dims.coverPct)}% do seu consumo estimado).
          </p>
          <p className="mb-2">
            Geração estimada: <strong>{results.gen.month.toFixed(0)} kWh/mês</strong> | <strong>{results.gen.year.toFixed(0)} kWh/ano</strong>.
          </p>
          <p className="mb-4">
            Economia (Ano 1): <strong>R$ {results.savings.month.toFixed(2)}/mês</strong> | <strong>R$ {results.savings.year.toFixed(2)}/ano</strong>.
          </p>

          <h3 className="text-primary-orange text-lg font-semibold mb-2">
            Investimento & Retorno
          </h3>
          <p className="mb-2">
            Investimento estimado (CAPEX): <strong>R$ {results.capex.total.toFixed(2)}</strong> | O&M anual: <strong>R$ {results.capex.omYear.toFixed(2)}</strong>.
          </p>
          <p className="mb-2">
            Payback simples (aprox.): <strong>{results.payback.simple.toFixed(1)} anos</strong>.
          </p>
          <p className="mb-2">
            Payback descontado: <strong>{results.dpb.years ? results.dpb.years.toFixed(1) : "—"} anos</strong> (taxa {results.dpb.discRate.toFixed(1)}% a.a.).
          </p>
          <p className="mb-2">
            NPV (25 anos): <strong>R$ {results.npv.toFixed(2)}</strong>.
          </p>
          <p className="mb-4">
            LCOE (25 anos): <strong>R$ {results.lcoe.toFixed(2)}/kWh</strong>.
          </p>

          <h3 className="text-lg font-semibold mb-2">Impacto Ambiental</h3>
          <p className="mb-2">
            CO₂ evitado no Ano 1: <strong>{results.co2.year1.toFixed(2)} tCO₂</strong> (fator {results.co2.factor} tCO₂/MWh).
          </p>
        </div>
      )}
    </section>
  );
};

export default EnergySimulator;
