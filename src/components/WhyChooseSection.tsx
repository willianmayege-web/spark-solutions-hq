import { Shield, FileCheck, MapPin, FileSpreadsheet } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Shield,
    title: "Engenharia registrada CREA",
    description: "Eng. Willian Paulo May - CREA-RS 231706. Responsabilidade técnica em todos os projetos com emissão de ART.",
  },
  {
    icon: FileCheck,
    title: "Conformidade com NBR 5410/5419",
    description: "Projetos e laudos desenvolvidos rigorosamente conforme normas técnicas brasileiras vigentes.",
  },
  {
    icon: MapPin,
    title: "Atendimento em todo o RS",
    description: "Atuação em Santa Rosa e região. Disponibilidade para projetos em todo o estado do Rio Grande do Sul.",
  },
  {
    icon: FileSpreadsheet,
    title: "Relatórios e laudos digitais",
    description: "Documentação técnica completa e digital, incluindo medições, ensaios e memorial descritivo detalhado.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-primary">Eletro May's</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excelência técnica, compromisso com normas e atendimento personalizado desde 1988
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-orange border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
