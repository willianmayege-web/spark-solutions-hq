import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileText, Sun, Zap, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laudo SPDA NBR 5419",
    description: "Laudo técnico completo de Sistema de Proteção contra Descargas Atmosféricas",
    price: "R$ 450,00",
    icon: FileText,
    type: "laudo"
  },
  {
    id: 2,
    name: "Laudo de Aterramento",
    description: "Análise e certificação de sistema de aterramento elétrico",
    price: "R$ 380,00",
    icon: Zap,
    type: "laudo"
  },
  {
    id: 3,
    name: "Consultoria Online - Energia Solar",
    description: "Consultoria técnica remota para projetos fotovoltaicos",
    price: "R$ 250,00",
    icon: Sun,
    type: "consultoria"
  },
  {
    id: 4,
    name: "Análise de Qualidade de Energia",
    description: "Relatório técnico com IMS P600-G4 e recomendações",
    price: "R$ 580,00",
    icon: Zap,
    type: "analise"
  }
];

const TechnicalStore = () => {
  const navigate = useNavigate();

  const handlePurchase = (productName: string) => {
    if (window.gtag) {
      window.gtag('event', 'add_to_cart', {
        items: [{ item_name: productName }]
      });
    }
    
    // Simular checkout - redirecionar para WhatsApp
    const message = encodeURIComponent(`Olá! Gostaria de adquirir: ${productName}`);
    window.open(`https://wa.me/5555991389623?text=${message}`, '_blank');
  };

  return (
    <section id="loja" className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="w-10 h-10 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
              Loja <span className="text-primary">Técnica</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serviços e laudos técnicos profissionais com entrega garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={product.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                  <Button
                    variant="orange"
                    className="w-full"
                    onClick={() => handlePurchase(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Solicitar
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Pagamento via Pix, cartão de crédito ou boleto • Entrega digital em até 48h
          </p>
          <Button variant="outline" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Baixar Catálogo Completo (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalStore;
