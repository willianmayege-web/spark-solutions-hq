import { FileCheck, Headphones, ClipboardCheck, Users, Wrench, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InsuranceBenefits = () => {
  const benefits = [
    {
      icon: FileCheck,
      title: "Laudo técnico gratuito",
      description: "Em caso de sinistro, elaboramos o laudo técnico sem custo adicional para comprovar os danos."
    },
    {
      icon: Headphones,
      title: "Suporte técnico especializado",
      description: "Atendimento por engenheiro eletricista com experiência em sistemas fotovoltaicos."
    },
    {
      icon: ClipboardCheck,
      title: "Análise técnica prévia",
      description: "Avaliação técnica básica do projeto antes da contratação para garantir cobertura adequada."
    },
    {
      icon: Users,
      title: "Acompanhamento completo",
      description: "Suporte em todo o processo de sinistro, desde a abertura até a conclusão."
    },
    {
      icon: Wrench,
      title: "Integração com manutenção",
      description: "Possibilidade de integrar o seguro com serviços de manutenção preventiva."
    },
    {
      icon: Handshake,
      title: "Parceria formal",
      description: "Seguro Essor, intermediado pela Elétron Seguros, com toda a segurança e respaldo."
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-montserrat">
            Por que contratar seu seguro de energia solar comigo?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Seguro com seguradora sólida, intermediado por quem entende de engenharia elétrica e energia solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card hover:border-accent/30 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceBenefits;
