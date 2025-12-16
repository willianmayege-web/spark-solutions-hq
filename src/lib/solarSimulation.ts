// src/lib/solarSimulation.ts

export const SOLAR_CONSTANTS = {
  performanceRatio: 0.80,
  defaultCoverageTarget: 0.95,
  areaPerKwp: 5.5,          // m² por kWp
  degradationRateYear: 0.005,
  defaultCustoPorKwp: 5000, // R$/kWp
  defaultCapacidadeBateriaKWh: 7,
  defaultCustoPorKWhBateria: 800,
};

// Irradiância média diária por UF (kWh/m².dia)
export const IRRADIANCE_BY_STATE: Record<string, number> = {
  AC: 5.4, AM: 5.2, AP: 5.3, PA: 5.3, RO: 5.1, RR: 5.6, TO: 5.4,
  AL: 5.8, BA: 5.7, CE: 5.9, MA: 5.5, PB: 5.8, PE: 5.8, PI: 5.9, RN: 5.9, SE: 5.7,
  DF: 5.3, GO: 5.4, MT: 5.5, MS: 5.4,
  ES: 5.1, MG: 5.2, RJ: 5.0, SP: 4.8,
  PR: 4.7, RS: 4.5, SC: 4.6,
};

// Tarifa média residencial por UF
export const DEFAULT_TARIFF_BY_STATE: Record<string, number> = {
  AC: 0.82, AM: 0.86, AP: 0.78, PA: 0.79, RO: 0.78, RR: 0.85, TO: 0.80,
  AL: 0.85, BA: 0.78, CE: 0.82, MA: 0.84, PB: 0.82, PE: 0.84, PI: 0.82, RN: 0.83, SE: 0.82,
  DF: 0.80, GO: 0.78, MT: 0.85, MS: 0.87,
  ES: 0.72, MG: 0.74, RJ: 0.88, SP: 0.75,
  PR: 0.68, RS: 0.72, SC: 0.69,
};

export interface SimulationInput {
  uf: string;
  consumoMensalKWh?: number;
  valorContaMensal?: number;
  areaTelhadoM2: number;
  tarifaPersonalizada?: number;
  custoPorKwp?: number;
  coberturaDesejada?: number;
  incluirBateria?: boolean;
  capacidadeBateriaKWh?: number;
  custoPorKWhBateria?: number;
}

export interface ScenarioResult {
  investimento: number;
  paybackAnos: number | null;
  economiaAnual: number;
}

export interface SimulationOutput {
  uf: string;
  irradianciaDiaria: number;
  tarifaUsada: number;
  consumoMensalKWh: number;
  consumoAnualKWh: number;
  potenciaKwp: number;
  areaMinimaNecessariaM2: number;
  areaLimitante: boolean;
  geracaoAnualKWh: number;
  geracaoMensalKWh: number;
  geracaoMensalPorMes: number[];
  economiaAnual: number;
  investimento: number;
  paybackAnos: number | null;
  semBateria: ScenarioResult;
  comBateria?: ScenarioResult;
}

export function simulateSolarSystem(input: SimulationInput): SimulationOutput {
  const {
    uf,
    consumoMensalKWh,
    valorContaMensal,
    areaTelhadoM2,
    tarifaPersonalizada,
    custoPorKwp,
    coberturaDesejada,
    incluirBateria,
    capacidadeBateriaKWh,
    custoPorKWhBateria,
  } = input;

  const H = IRRADIANCE_BY_STATE[uf];
  if (!H) throw new Error(`UF inválida: ${uf}`);

  const tarifaBase = tarifaPersonalizada ?? DEFAULT_TARIFF_BY_STATE[uf];
  const coverageTarget = coberturaDesejada ?? SOLAR_CONSTANTS.defaultCoverageTarget;
  const custoKwpVal = custoPorKwp ?? SOLAR_CONSTANTS.defaultCustoPorKwp;

  let consumoMensalFinal: number;
  if (consumoMensalKWh && consumoMensalKWh > 0) {
    consumoMensalFinal = consumoMensalKWh;
  } else if (valorContaMensal && valorContaMensal > 0) {
    consumoMensalFinal = valorContaMensal / tarifaBase;
  } else {
    throw new Error("Informe consumo em kWh ou valor médio da conta.");
  }

  const consumoAnual = consumoMensalFinal * 12;
  const E_kWp_ano = H * 365 * SOLAR_CONSTANTS.performanceRatio;

  let potenciaKwp = (consumoAnual * coverageTarget) / E_kWp_ano;

  const areaNecessaria = potenciaKwp * SOLAR_CONSTANTS.areaPerKwp;
  let areaLimitante = false;

  if (areaTelhadoM2 < areaNecessaria) {
    areaLimitante = true;
    potenciaKwp = areaTelhadoM2 / SOLAR_CONSTANTS.areaPerKwp;
  }

  const geracaoAnual = potenciaKwp * E_kWp_ano;
  const geracaoMensal = geracaoAnual / 12;
  const geracaoMeses = Array(12).fill(geracaoMensal);

  const energiaUtil = Math.min(geracaoAnual, consumoAnual);
  const economiaAnual = energiaUtil * tarifaBase;

  const investimento = potenciaKwp * custoKwpVal;
  const payback = economiaAnual > 0 ? investimento / economiaAnual : null;

  const semBateria: ScenarioResult = {
    investimento,
    paybackAnos: payback,
    economiaAnual,
  };

  let comBateria: ScenarioResult | undefined;
  if (incluirBateria) {
    const cap = capacidadeBateriaKWh ?? SOLAR_CONSTANTS.defaultCapacidadeBateriaKWh;
    const custoBat = custoPorKWhBateria ?? SOLAR_CONSTANTS.defaultCustoPorKWhBateria;
    const custoTotalBat = cap * custoBat;
    const invFinal = investimento + custoTotalBat;

    const paybackB = economiaAnual > 0 ? invFinal / economiaAnual : null;

    comBateria = {
      investimento: invFinal,
      paybackAnos: paybackB,
      economiaAnual,
    };
  }

  return {
    uf,
    irradianciaDiaria: H,
    tarifaUsada: tarifaBase,
    consumoMensalKWh: consumoMensalFinal,
    consumoAnualKWh: consumoAnual,
    potenciaKwp,
    areaMinimaNecessariaM2: areaNecessaria,
    areaLimitante,
    geracaoAnualKWh: geracaoAnual,
    geracaoMensalKWh: geracaoMensal,
    geracaoMensalPorMes: geracaoMeses,
    economiaAnual,
    investimento,
    paybackAnos: payback,
    semBateria,
    comBateria,
  };
}
