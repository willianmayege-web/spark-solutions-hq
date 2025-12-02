import { CheckCircle } from "lucide-react";

const SEOContentSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">
            Engenharia Elétrica Completa em Santa Rosa – RS
          </h2>
          
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              A <strong className="text-foreground">Eletro May's Engenharia Elétrica</strong> é uma empresa especializada 
              em <strong>projetos elétricos</strong>, <strong>energia solar fotovoltaica</strong>, <strong>laudos técnicos</strong>, 
              <strong>SPDA</strong> (sistemas de proteção contra descargas atmosféricas) e <strong>manutenção elétrica industrial</strong> 
              em Santa Rosa e região noroeste do Rio Grande do Sul.
            </p>

            <p>
              Fundada em <strong>dezembro de 2021</strong>, a empresa atua sob responsabilidade técnica do 
              Engenheiro Eletricista <strong>Willian Paulo May</strong>, registrado no <strong>CREA-RS sob o número 231706</strong>. 
              Todos os projetos são acompanhados de <strong>Anotação de Responsabilidade Técnica (ART)</strong>, garantindo 
              conformidade com as normas técnicas brasileiras.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Serviços de Engenharia Elétrica em Santa Rosa
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Projetos Elétricos:</strong>
                  <span className="text-muted-foreground"> Elaboração de projetos conforme NBR 5410 e NBR 14039</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Energia Solar Fotovoltaica:</strong>
                  <span className="text-muted-foreground"> Projeto, instalação e homologação NBR 16690</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Laudos Técnicos:</strong>
                  <span className="text-muted-foreground"> SPDA, aterramento, isolamento e qualidade de energia</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Manutenção Industrial:</strong>
                  <span className="text-muted-foreground"> Preventiva e corretiva com termografia e análise de energia</span>
                </div>
              </div>
            </div>

            <p>
              A atuação inclui <strong>manutenção elétrica industrial em Santa Rosa – RS</strong>, com foco em redução 
              de paradas não programadas, adequação às normas de segurança (NR-10) e otimização do consumo energético. 
              Também realizamos <strong>perícias técnicas judiciais e extrajudiciais</strong>, com laudos aceitos em 
              processos judiciais e por seguradoras.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Por que Contratar a Eletro May's?
            </h3>

            <p>
              A Eletro May's se diferencia pelo <strong>atendimento consultivo</strong>: antes de executar qualquer 
              serviço, explicamos ao cliente o que será feito, por que é necessário e quais resultados esperar. 
              Trabalhamos com <strong>instrumentos de medição calibrados</strong> (termografia, analisador de energia, 
              terrômetro digital) e emitimos certificados conforme normas técnicas.
            </p>

            <p>
              Se você precisa de <strong>projetos elétricos</strong>, <strong>laudos SPDA</strong>, 
              <strong>energia solar fotovoltaica</strong> ou <strong>manutenção elétrica</strong> em 
              Santa Rosa e região, entre em contato com a <strong>Eletro May's Engenharia Elétrica</strong> 
              e solicite um atendimento técnico especializado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
