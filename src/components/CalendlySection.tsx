import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar } from "lucide-react";

const CalendlySection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Agende sua <span className="text-primary">Consultoria Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Converse diretamente com nossos engenheiros e tire todas as suas dúvidas sobre o projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Calendly Embed */}
          <Card className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Escolha melhor horário</h3>
            </div>
            <div className="bg-muted rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">
                  Calendly será integrado aqui
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  URL: calendly.com/eletromays/consultoria
                </p>
              </div>
            </div>
          </Card>

          {/* Benefícios */}
          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                O que você ganha na consultoria:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Diagnóstico inicial completo</p>
                    <p className="text-sm text-muted-foreground">Análise técnica da sua demanda e viabilidade</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Estimativa de ROI para energia solar</p>
                    <p className="text-sm text-muted-foreground">Cálculo de economia e tempo de retorno do investimento</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Checklist de normas NBR</p>
                    <p className="text-sm text-muted-foreground">Orientações sobre NBR 5410, 5419, 14039 e outras aplicáveis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Prazo e próximos passos</p>
                    <p className="text-sm text-muted-foreground">Cronograma detalhado e definição de etapas do projeto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Atendimento com engenheiro CREA-RS</p>
                    <p className="text-sm text-muted-foreground">Suporte técnico qualificado e certificado</p>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground">
                <strong>Consultoria gratuita</strong> para projetos acima de R$ 5.000. 
                Agende agora e dê o primeiro passo rumo à eficiência energética.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
