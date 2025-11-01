import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

const OnlineStore = () => {
  const products = [
    { name: "Painel Solar 550W", price: "Sob consulta", image: "/src/assets/circuit-board.jpg" },
    { name: "Inversor 5kW", price: "Sob consulta", image: "/src/assets/team-engineering.jpg" },
    { name: "Carregador Veicular", price: "Sob consulta", image: "/src/assets/hero-engineering.jpg" }
  ];

  return (
    <section id="store" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Loja Online</h2>
          <p className="text-xl text-muted-foreground">Equipamentos de qualidade com entrega rápida</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img src={product.image} alt={`${product.name} - Equipamento de energia solar disponível na loja Eletro May's`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                <div className="flex gap-2">
                  <Button variant="orange" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                  <Button variant="ghost">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">Ver Catálogo Completo</Button>
        </div>
      </div>
    </section>
  );
};

export default OnlineStore;