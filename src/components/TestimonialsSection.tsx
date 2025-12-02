import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Diretor Industrial",
      company: "Indústria Metalúrgica Regional",
      segment: "Indústria",
      text: "A Eletro May's realizou a adequação completa do nosso parque elétrico conforme NR-10. Profissionalismo exemplar, projeto detalhado e execução dentro do prazo. Recomendo!",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      role: "Síndica",
      company: "Condomínio Residencial Horizonte",
      segment: "Condomínios",
      text: "Contratamos o laudo SPDA e a manutenção preventiva dos quadros elétricos. O engenheiro foi muito atencioso, explicou tudo claramente e entregou o laudo com ART em poucos dias.",
      rating: 5
    },
    {
      name: "Carlos Rodrigues",
      role: "Proprietário",
      company: "Supermercado Santa Rosa",
      segment: "Comércio",
      text: "Instalamos energia solar fotovoltaica com a Eletro May's e já estamos economizando mais de 80% na conta de luz. Projeto bem dimensionado e homologação sem complicações.",
      rating: 5
    }
  ];

  const segments = [
    { name: "Indústria", icon: "🏭" },
    { name: "Comércio", icon: "🏪" },
    { name: "Condomínios", icon: "🏢" },
    { name: "Instituições", icon: "🏛️" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Casos reais de empresas e instituições atendidas em Santa Rosa e região
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-orange"
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Segments Served */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-6 font-montserrat">
            Segmentos Atendidos
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {segments.map((segment, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl">{segment.icon}</span>
                <span className="text-foreground font-medium">{segment.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
