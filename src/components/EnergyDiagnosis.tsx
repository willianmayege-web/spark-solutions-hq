import { Button } from "./ui/button";

const EnergyDiagnosis = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling will be connected externally as requested
  };

  return (
    <section id="diagnostico" className="bg-surface-dark text-text-white py-16 px-8 text-center">
      <h2 className="text-primary-orange text-3xl font-bold mb-4">
        Receba um Diagnóstico Energético Gratuito
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-text-muted">
        Descubra onde sua empresa ou residência pode economizar energia. Nosso time técnico realiza uma análise inicial gratuita e envia sugestões personalizadas.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
        <label htmlFor="nome" className="block text-sm font-medium mb-1">
          Nome completo:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className="w-full p-3 mb-4 rounded-md border-none bg-input text-foreground"
        />

        <label htmlFor="email" className="block text-sm font-medium mb-1">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 mb-4 rounded-md border-none bg-input text-foreground"
        />

        <label htmlFor="telefone" className="block text-sm font-medium mb-1">
          Telefone/WhatsApp:
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          className="w-full p-3 mb-4 rounded-md border-none bg-input text-foreground"
        />

        <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
          Descreva brevemente seu consumo ou interesse:
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          className="w-full p-3 mb-6 rounded-md border-none bg-input text-foreground"
        />

        <Button 
          type="submit" 
          variant="orange"
          size="lg"
          className="w-full"
        >
          Solicitar Diagnóstico Gratuito
        </Button>
      </form>
    </section>
  );
};

export default EnergyDiagnosis;