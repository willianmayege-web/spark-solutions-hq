const RealCases = () => {
  return (
    <section id="casos-reais" className="bg-background-dark text-text-white py-16 px-8">
      <h2 className="text-center text-primary-orange text-3xl font-bold mb-4">
        Casos Reais e Resultados
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-8 text-text-muted">
        Confira projetos executados com comprovação de economia, gráficos de consumo e laudos técnicos. Transparência, segurança e resultados reais.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-surface-dark border border-border rounded-md p-6 w-full max-w-sm">
          <h3 className="text-green-400 text-xl font-semibold mb-4">
            🏠 Residência – Santa Rosa/RS
          </h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>• Redução de 83% na conta de energia</li>
            <li>• Instalação de 12 módulos solares</li>
            <li>• Laudo de qualidade de energia com correção de fator de potência</li>
          </ul>
        </div>
        <div className="bg-surface-dark border border-border rounded-md p-6 w-full max-w-sm">
          <h3 className="text-green-400 text-xl font-semibold mb-4">
            🏢 Indústria – Três de Maio/RS
          </h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>• Economia estimada: R$ 6.400/mês</li>
            <li>• Consultoria + termografia preventiva</li>
            <li>• Melhora na eficiência e redução de falhas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RealCases;