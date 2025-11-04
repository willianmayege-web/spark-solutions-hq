import { Card } from "@/components/ui/card";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";

const CalendlySection = () => {
  return (
    <section className="py-16 px-4 bg-background" id="agende">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Agende sua <span className="text-primary">Consultoria Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o melhor horário e fale diretamente com um engenheiro.
          </p>
        </div>

        <Card className="p-2 md:p-6 bg-card">
          <InlineWidget
            url="https://calendly.com/eletromays/consultoria"
            styles={{ height: "780px" }}
          />
        </Card>

        <div className="text-center mt-6">
          <a
            href="https://calendly.com/eletromays/consultoria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline hover:text-primary transition-colors"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "calendly_open", { 
                  event_category: "Lead",
                  event_label: "external_link"
                });
              }
            }}
          >
            <Calendar className="w-4 h-4 inline mr-1" />
            Problemas para carregar? Abra o Calendly em nova aba.
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
