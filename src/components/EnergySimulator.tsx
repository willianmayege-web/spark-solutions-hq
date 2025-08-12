import { useState } from "react";
import { Button } from "./ui/button";

const EnergySimulator = () => {
  const [valorFatura, setValorFatura] = useState("");
  const [resultado, setResultado] = useState<{
    economiaMes: number;
    economiaAno: number;
    payback: number;
  } | null>(null);

  const simularEconomia = () => {
    const valor = parseFloat(valorFatura);
    const economiaPercentual = 0.85; // estimativa média de economia
    const investimentoMedio = 15000; // valor médio base para sistema residencial

    if (!valor || valor <= 0) {
      alert('Informe um valor válido para a fatura.');
      return;
    }

    const economiaMes = valor * economiaPercentual;
    const economiaAno = economiaMes * 12;
    const payback = investimentoMedio / economiaMes;

    setResultado({
      economiaMes,
      economiaAno,
      payback
    });
  };

  return (
    <section id="simulador" className="bg-background-dark text-text-white py-16 px-8 text-center">
      <h2 className="text-primary-orange text-3xl font-bold mb-4">
        Simule sua Economia com Energia Solar
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-text-muted">
        Preencha abaixo o valor médio da sua fatura de energia elétrica e veja quanto você pode economizar por mês com um sistema fotovoltaico ou consultoria energética especializada.
      </p>

      <div className="mb-6">
        <input
          type="number"
          value={valorFatura}
          onChange={(e) => setValorFatura(e.target.value)}
          placeholder="Valor médio da fatura (R$)"
          className="p-4 text-lg w-full max-w-sm rounded-md border-none bg-input text-foreground"
        />
      </div>
      
      <Button 
        onClick={simularEconomia}
        variant="orange"
        size="lg"
        className="mb-8"
      >
        Simular Economia
      </Button>

      {resultado && (
        <div className="mt-8 bg-surface-dark p-6 rounded-lg max-w-md mx-auto">
          <h3 className="text-green-400 text-xl font-semibold mb-4">Resultado:</h3>
          <p className="mb-2">💡 Economia estimada por mês: R$ {resultado.economiaMes.toFixed(2)}</p>
          <p className="mb-2">📅 Economia estimada por ano: R$ {resultado.economiaAno.toFixed(2)}</p>
          <p>📈 Retorno do investimento (payback): {resultado.payback.toFixed(1)} anos</p>
        </div>
      )}
    </section>
  );
};

export default EnergySimulator;