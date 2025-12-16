import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { storeProducts, getAllCategories, getProductsByCategory } from "@/data/store-products";
import { ShoppingCart, FileCheck, Clock, Eye } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = getAllCategories();
  const filteredProducts = getProductsByCategory(selectedCategory);
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Loja de Serviços de Engenharia Elétrica | Eletro May's"
        description="Compre serviços de engenharia elétrica online: consultorias, laudos SPDA NBR 5419, análise de qualidade de energia, projetos elétricos. Santa Rosa-RS e região."
        keywords="serviços engenharia elétrica, consultoria elétrica online, laudo SPDA, NBR 5419, energia solar, Santa Rosa RS"
        canonical="https://eletromays.com.br/loja"
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat">
              Loja de Serviços de <span className="text-primary">Engenharia Elétrica</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contrate serviços técnicos especializados: consultorias, laudos, projetos e pacotes de horas técnicas com engenheiro eletricista CREA-RS.
            </p>
            
            {/* Cart indicator */}
            {cartCount > 0 && (
              <div className="mt-6">
                <Link to="/loja/carrinho">
                  <Button variant="orange" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Ver Carrinho ({cartCount} {cartCount === 1 ? "item" : "itens"})
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "orange" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col h-full border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.categoria}
                    </Badge>
                    {product.incluiART && (
                      <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                        <FileCheck className="w-3 h-3 mr-1" />
                        Inclui ART
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mt-2 font-montserrat line-clamp-2">
                    {product.nome}
                  </h2>
                </CardHeader>
                
                <CardContent className="flex-grow pb-3">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {product.descricao}
                  </p>
                  
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {product.tempoEntrega}
                    </li>
                    {product.exigeVisita && (
                      <li className="flex items-center text-muted-foreground">
                        <span className="w-4 h-4 mr-2 flex items-center justify-center text-primary">📍</span>
                        Requer visita técnica
                      </li>
                    )}
                  </ul>
                  
                  {product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {product.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 pt-3 border-t border-border">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.preco)}
                    </span>
                  </div>
                  <Link to={`/loja/produtos/${product.slug}`} className="w-full">
                    <Button variant="hero" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum serviço encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default StorePage;
