const BeforeAfterComparison = () => {
  return (
    <section id="comparativo" className="bg-surface-dark text-text-white py-16 px-8">
      <h2 className="text-center text-primary-orange text-2xl font-bold mb-4">
        Antes e Depois da Consultoria Energética
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-8 text-text-muted">
        Veja exemplos reais de quadros elétricos antes e depois de análise técnica, correções e termografia. Destaque visual para ganho de eficiência, segurança e economia.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        <div className="flex-1 min-w-72 text-center">
          <h3 className="text-lg font-semibold mb-4">🔴 Antes</h3>
          <img 
            src="https://via.placeholder.com/300x200/aa0000/ffffff?text=Termografia+Antes" 
            alt="Quadro elétrico antes da consultoria da Eletro May's mostrando aquecimento excessivo detectado por termografia" 
            className="w-full rounded-md mb-4"
          />
          <p className="text-text-muted text-sm">
            Quadro com sobrecarga e aquecimento excessivo
          </p>
        </div>
        <div className="flex-1 min-w-72 text-center">
          <h3 className="text-lg font-semibold mb-4">🟢 Depois</h3>
          <img 
            src="https://via.placeholder.com/300x200/00aa00/ffffff?text=Termografia+Depois" 
            alt="Quadro elétrico depois da consultoria da Eletro May's com temperatura controlada e eficiência otimizada" 
            className="w-full rounded-md mb-4"
          />
          <p className="text-text-muted text-sm">
            Quadro otimizado com temperatura controlada e eficiência melhorada
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;