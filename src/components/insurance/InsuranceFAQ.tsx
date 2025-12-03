import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InsuranceFAQ = () => {
  const faqs = [
    {
      question: "Quais sistemas podem ser segurados?",
      answer: "Sistemas de energia solar fotovoltaica conectados à rede (on-grid), sistemas isolados (off-grid) e sistemas híbridos podem ser segurados. O importante é ter a Nota Fiscal dos equipamentos e da instalação, que comprova o valor do investimento."
    },
    {
      question: "Preciso obrigatoriamente da Nota Fiscal?",
      answer: "Sim, a Nota Fiscal é o documento base para definir o valor segurado. Ela deve incluir módulos fotovoltaicos, inversores, estrutura de fixação, cabos, conectores e mão de obra de instalação. Caso tenha notas separadas, todas devem ser enviadas."
    },
    {
      question: "O laudo técnico é cobrado à parte em caso de sinistro?",
      answer: "Não. Ao contratar o seguro através da Eletro May's, o laudo técnico para comprovação do sinistro é fornecido gratuitamente. Esse é um diferencial importante, pois o laudo é essencial para o processo de indenização."
    },
    {
      question: "O seguro cobre apenas os equipamentos ou também a mão de obra?",
      answer: "O seguro pode cobrir tanto os equipamentos (módulos, inversores, estrutura) quanto a mão de obra de instalação, desde que tudo esteja discriminado na Nota Fiscal. Quanto mais completa a NF, mais abrangente será a cobertura."
    },
    {
      question: "Como faço para contratar o seguro?",
      answer: "É simples: basta preencher o formulário nesta página com seus dados e o valor da Nota Fiscal do sistema, ou entrar em contato pelo WhatsApp. Analisaremos as informações e retornaremos com a cotação em até 24 horas úteis."
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Perguntas frequentes sobre o seguro para energia solar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o seguro para sistemas fotovoltaicos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFAQ;
