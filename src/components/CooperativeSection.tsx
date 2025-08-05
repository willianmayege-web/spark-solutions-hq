import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Users, Gift } from "lucide-react";

const CooperativeSection = () => {
  const cooperatives = [
    { name: "COGECOM", discount: "15%", members: "5.000+" },
    { name: "TANGISA", discount: "18%", members: "3.500+" },
    { name: "ENERGOOP", discount: "12%", members: "2.800+" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">
            Mercado Livre de Energia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reduza seus custos com energia através de cooperativas energéticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cooperatives.map((coop, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="font-montserrat">{coop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{coop.discount}</div>
                <div className="text-muted-foreground">de desconto</div>
                <div className="text-sm text-muted-foreground mt-2">{coop.members} cooperados</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="orange" size="lg">
            <TrendingDown className="w-5 h-5 mr-2" />
            Simular Minha Economia
          </Button>
          <Button variant="hero" size="lg">
            <Gift className="w-5 h-5 mr-2" />
            Indicar um Amigo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CooperativeSection;