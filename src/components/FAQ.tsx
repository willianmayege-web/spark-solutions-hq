const FAQ = () => {
  return (
    <section id="faq" className="bg-background-dark text-text-white py-16 px-8">
      <h2 className="text-center text-primary-orange text-3xl font-bold mb-8">
        Perguntas Frequentes
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <details className="bg-surface-dark rounded-lg p-4 border border-border">
          <summary className="font-semibold cursor-pointer text-lg hover:text-primary-orange transition-colors">
            Qual é o prazo médio para instalação de um sistema solar?
          </summary>
          <p className="mt-3 text-text-muted">
            O prazo médio varia entre 15 e 30 dias, dependendo da complexidade do projeto e do processo de homologação junto à concessionária.
          </p>
        </details>
        
        <details className="bg-surface-dark rounded-lg p-4 border border-border">
          <summary className="font-semibold cursor-pointer text-lg hover:text-primary-orange transition-colors">
            Qual a economia média com energia solar?
          </summary>
          <p className="mt-3 text-text-muted">
            A economia pode chegar a 95% na conta de energia, dependendo do consumo e do dimensionamento correto do sistema.
          </p>
        </details>
        
        <details className="bg-surface-dark rounded-lg p-4 border border-border">
          <summary className="font-semibold cursor-pointer text-lg hover:text-primary-orange transition-colors">
            O que é análise de qualidade de energia?
          </summary>
          <p className="mt-3 text-text-muted">
            É um estudo técnico para identificar problemas como harmônicas, variações de tensão e baixo fator de potência, permitindo otimizar a eficiência e reduzir perdas.
          </p>
        </details>
        
        <details className="bg-surface-dark rounded-lg p-4 border border-border">
          <summary className="font-semibold cursor-pointer text-lg hover:text-primary-orange transition-colors">
            Por que realizar termografia em quadros elétricos?
          </summary>
          <p className="mt-3 text-text-muted">
            A termografia detecta aquecimentos anormais que podem indicar sobrecarga, mau contato ou risco de falha, prevenindo acidentes e aumentando a vida útil dos equipamentos.
          </p>
        </details>
        
        <details className="bg-surface-dark rounded-lg p-4 border border-border">
          <summary className="font-semibold cursor-pointer text-lg hover:text-primary-orange transition-colors">
            Vocês oferecem consultoria para indústrias e comércios?
          </summary>
          <p className="mt-3 text-text-muted">
            Sim, realizamos consultoria completa para clientes residenciais, comerciais e industriais, com foco em eficiência energética e segurança.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;