import { Button } from "./ui/button";

const EnergySimulator = () => {
  const runPVCalc = () => {
    const get = (id: string) => parseFloat((document.getElementById(id) as HTMLInputElement)?.value || '0');

    const billBRL = get('billBRL');
    const kWhIn   = get('consumptionKWh');
    const tariff  = Math.max(get('tariff'), 0.01);
    const hsp     = get('hsp');          // h/dia
    const pr      = get('pr');           // 0.72–0.85
    const capexPk = get('capexPerKwp');  // R$/kWp
    const omPct   = get('omPercent')/100;
    const escal   = get('tariffEsc')/100;
    const disc    = get('discount')/100;
    const degr    = get('degr')/100;
    const cover   = get('coverPct')/100;
    const co2EF   = get('co2EF');        // tCO2/MWh

    // Consumo mensal (kWh)
    let consKWh = kWhIn > 0 ? kWhIn : (billBRL > 0 ? billBRL/tariff : 0);
    if (consKWh <= 0){ alert('Informe consumo (kWh) ou fatura (R$).'); return; }

    // Dimensionamento: gera ~cover% do consumo
    const genTarget = consKWh * cover;            // kWh/mês
    const kWp = genTarget / (hsp * pr * 30);      // kWp
    const capexTotal = kWp * capexPk;

    // Geração mês/ano (ano 1)
    const genMonth = kWp * hsp * pr * 30;
    const genYear1 = genMonth * 12;

    // Economia mês/ano (ano 1)
    const savedMonth1 = Math.min(genMonth, consKWh) * tariff;
    const savedYear1  = savedMonth1 * 12;

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

    for(let y=1; y<=years; y++){
      if (y>1){
        genY *= (1 - degr); // degradação
        t    *= (1 + escal); // tarifa sobe
      }
      const savedY = Math.min(consKWh*12, genY) * t;
      const cashY  = savedY - omYear;
      const pvY    = cashY / Math.pow(1+disc, y);
      npv += pvY;
      cumDisc += pvY;
      if (discountedPayback === null && cumDisc >= 0){
        // aproximação linear do ano em que cruza zero
        const prevCum = cumDisc - pvY;
        const frac = prevCum !== 0 ? (prevCum * -1) / pvY : 0;
        discountedPayback = (y-1) + Math.max(0, Math.min(1, frac));
      }
    }

    // LCOE (custo nivelado)
    let denom = 0, numer = capexTotal; // OPEX descontado somado no numerador
    genY = genYear1;
    for(let y=1; y<=years; y++){
      if (y>1) genY *= (1 - degr);
      const pvGen = genY / Math.pow(1+disc, y);
      denom += pvGen;
      const pvOpex = omYear / Math.pow(1+disc, y);
      numer += pvOpex;
    }
    const lcoe = numer / (denom || 1); // R$/kWh

    // CO2 evitado ano 1
    const co2Y1 = (genYear1/1000) * co2EF; // tCO2

    // Render
    const resultDiv = document.getElementById('pvResult');
    if (resultDiv) {
      document.getElementById('rDims')!.innerHTML    = `Potência do sistema: <strong>${kWp.toFixed(2)} kWp</strong> (cobrindo ${Math.round(cover*100)}% do seu consumo estimado).`;
      document.getElementById('rGen')!.innerHTML     = `Geração estimada: <strong>${genMonth.toFixed(0)} kWh/mês</strong> | <strong>${genYear1.toFixed(0)} kWh/ano</strong>.`;
      document.getElementById('rSavings')!.innerHTML = `Economia (Ano 1): <strong>R$ ${savedMonth1.toFixed(2)}/mês</strong> | <strong>R$ ${savedYear1.toFixed(2)}/ano</strong>.`;
      document.getElementById('rCapex')!.innerHTML   = `Investimento estimado (CAPEX): <strong>R$ ${capexTotal.toFixed(2)}</strong> | O&M anual: <strong>R$ ${omYear.toFixed(2)}</strong>.`;
      document.getElementById('rPayback')!.innerHTML = `Payback simples (aprox.): <strong>${(simplePayback).toFixed(1)} anos</strong>.`;
      document.getElementById('rDPB')!.innerHTML     = `Payback descontado: <strong>${discountedPayback ? discountedPayback.toFixed(1) : '—'} anos</strong> (taxa ${ (disc*100).toFixed(1)}% a.a.).`;
      document.getElementById('rNPV')!.innerHTML     = `NPV (25 anos): <strong>R$ ${npv.toFixed(2)}</strong>.`;
      document.getElementById('rLCOE')!.innerHTML    = `LCOE (25 anos): <strong>R$ ${lcoe.toFixed(2)}/kWh</strong>.`;
      document.getElementById('rCO2')!.innerHTML     = `CO₂ evitado no Ano 1: <strong>${co2Y1.toFixed(2)} tCO₂</strong> (fator ${co2EF} tCO₂/MWh).`;

      resultDiv.style.display = 'block';
    }
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
            id="billBRL" 
            type="number" 
            min="0" 
            step="0.01" 
            placeholder="Ex.: 650" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Consumo mensal (kWh) — se souber</label>
          <input 
            id="consumptionKWh" 
            type="number" 
            min="0" 
            step="1" 
            placeholder="Ex.: 450" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Tarifa (R$/kWh)</label>
          <input 
            id="tariff" 
            type="number" 
            min="0" 
            step="0.01" 
            defaultValue="1.00" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">HSP (h/dia)</label>
          <input 
            id="hsp" 
            type="number" 
            min="3" 
            max="6.5" 
            step="0.1" 
            defaultValue="5.0" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">PR (0.72–0.85)</label>
          <input 
            id="pr" 
            type="number" 
            min="0.7" 
            max="0.9" 
            step="0.01" 
            defaultValue="0.80" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">CAPEX (R$/kWp)</label>
          <input 
            id="capexPerKwp" 
            type="number" 
            min="3000" 
            step="50" 
            defaultValue="4800" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">O&M (% CAPEX/ano)</label>
          <input 
            id="omPercent" 
            type="number" 
            min="0" 
            step="0.1" 
            defaultValue="1.0" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Escalada tarifária (% a.a.)</label>
          <input 
            id="tariffEsc" 
            type="number" 
            min="0" 
            step="0.1" 
            defaultValue="6.0" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Taxa de desconto (% a.a.)</label>
          <input 
            id="discount" 
            type="number" 
            min="0" 
            step="0.1" 
            defaultValue="10.0" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Degradação FV (% a.a.)</label>
          <input 
            id="degr" 
            type="number" 
            min="0" 
            step="0.05" 
            defaultValue="0.7" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Meta de cobertura do consumo (%)</label>
          <input 
            id="coverPct" 
            type="number" 
            min="10" 
            max="100" 
            step="1" 
            defaultValue="95" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Fator CO₂ (tCO₂/MWh)</label>
          <input 
            id="co2EF" 
            type="number" 
            min="0" 
            step="0.01" 
            defaultValue="0.06" 
            className="w-full p-2.5 rounded-md border-none bg-input text-foreground"
          />
        </div>
      </div>

      <Button 
        onClick={runPVCalc}
        variant="orange"
        size="lg"
        className="mt-2"
      >
        Calcular
      </Button>

      {/* Resultados */}
      <div id="pvResult" className="hidden max-w-5xl mx-auto mt-6 text-left bg-surface-dark border border-border rounded-lg p-4">
        <h3 className="mt-0 mb-4 text-green-400 text-xl font-semibold">Resultados — Ano 1</h3>
        <p id="rDims" className="mb-2"></p>
        <p id="rGen" className="mb-2"></p>
        <p id="rSavings" className="mb-4"></p>

        <h3 className="text-primary-orange text-lg font-semibold mb-2">Investimento & Retorno</h3>
        <p id="rCapex" className="mb-2"></p>
        <p id="rPayback" className="mb-2"></p>
        <p id="rDPB" className="mb-2"></p>
        <p id="rNPV" className="mb-2"></p>
        <p id="rLCOE" className="mb-4"></p>

        <h3 className="text-lg font-semibold mb-2">Impacto Ambiental</h3>
        <p id="rCO2" className="mb-2"></p>
      </div>
    </section>
  );
};

export default EnergySimulator;