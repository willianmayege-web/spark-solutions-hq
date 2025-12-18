/**
 * Card de Upsell para Monitoramento de Geração
 * Exibido para clientes sem acesso ao monitoramento de geração
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, BarChart3, Bell, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenerationUpsellCard = () => {
  const navigate = useNavigate();

  const benefits = [
    { icon: BarChart3, text: "Dashboard de geração em tempo real" },
    { icon: FileText, text: "Relatórios mensais detalhados (kWh, PR, perdas)" },
    { icon: Bell, text: "Alertas de performance do sistema" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Ativar Monitoramento de Geração
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Acompanhe a performance do seu sistema fotovoltaico com relatórios técnicos detalhados.
                </p>
                
                <ul className="space-y-2 mb-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <benefit.icon className="w-4 h-4 text-primary" />
                      {benefit.text}
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs text-muted-foreground">
                  Disponível nos planos Performance e Gestão+Mercado.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button
                  variant="orange"
                  onClick={() => navigate('/planos-monitoramento')}
                >
                  Ver Planos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GenerationUpsellCard;
