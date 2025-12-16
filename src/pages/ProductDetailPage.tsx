import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug } from "@/data/store-products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { 
  ShoppingCart, 
  FileCheck, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Send
} from "lucide-react";
import { STORE_MODE } from "@/config/store";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem, getItemCount, items } = useCart();
  const cartCount = getItemCount();
  
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
            <p className="text-muted-foreground mb-6">O serviço que você procura não existe ou foi removido.</p>
            <Link to="/loja">
              <Button variant="orange">Voltar para a Loja</Button>
            </Link>
          </div>
        </main>
        <FooterEletroMays />
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
    { name: product.nome, href: `/loja/produtos/${product.slug}` },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const isInCart = items.some(item => item.product.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
    toast.success("Serviço adicionado à lista!", {
      description: product.nome,
      action: {
        label: "Ver lista",
        onClick: () => navigate("/loja/carrinho"),
      },
    });
  };

  const handleRequestQuote = () => {
    if (!isInCart) {
      addItem(product);
    }
    navigate("/loja/carrinho");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${product.nome} | Loja Eletro May's - Santa Rosa RS`}
        description={`${product.descricao} Serviço de engenharia elétrica em Santa Rosa-RS e região. ${product.normasAplicaveis?.join(", ") || ""}`}
        keywords={product.tags.join(", ")}
        canonical={`https://eletromays.com.br/loja/produtos/${product.slug}`}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back button */}
          <div className="mb-6">
            <Link to="/loja">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para a loja
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Conteúdo principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header do produto */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{product.categoria}</Badge>
                  {product.incluiART && (
                    <Badge variant="default" className="bg-primary">
                      <FileCheck className="w-3 h-3 mr-1" />
                      Inclui ART
                    </Badge>
                  )}
                  {product.exigeVisita && (
                    <Badge variant="outline">
                      <MapPin className="w-3 h-3 mr-1" />
                      Visita Técnica
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
                  {product.nome}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.descricaoDetalhada}
                </p>
              </div>

              {/* Entregáveis */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    O que está incluído
                  </h2>
                  <ul className="space-y-2">
                    {product.entregaveis.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-3 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requisitos do cliente */}
              {product.requisitosCliente.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-amber-500" />
                      Requisitos do Cliente
                    </h2>
                    <ul className="space-y-2">
                      {product.requisitosCliente.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-4 h-4 mr-3 mt-1 text-amber-500 flex-shrink-0">•</span>
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Normas aplicáveis */}
              {product.normasAplicaveis && product.normasAplicaveis.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Normas Técnicas Aplicáveis
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {product.normasAplicaveis.map((norma) => (
                        <Badge key={norma} variant="outline" className="text-sm">
                          {norma}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Indicado para */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Indicado para
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.indicadoPara.map((target) => (
                      <Badge key={target} variant="secondary">
                        {target}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Compra */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28 border-primary/30">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {STORE_MODE.ecommerceEnabled ? "Valor do serviço" : "Valor estimado"}
                    </span>
                    <div className="text-4xl font-bold text-primary">
                      {formatPrice(product.preco)}
                    </div>
                    {!STORE_MODE.ecommerceEnabled && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Preço sob consulta
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{product.tempoEntrega}</span>
                    </div>
                    {product.exigeVisita && (
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>Requer visita técnica presencial</span>
                      </div>
                    )}
                    {product.incluiART && (
                      <div className="flex items-center text-muted-foreground">
                        <FileCheck className="w-4 h-4 mr-2 text-primary" />
                        <span>ART registrada no CREA-RS inclusa</span>
                      </div>
                    )}
                  </div>

                  {!STORE_MODE.ecommerceEnabled ? (
                    <>
                      <Button 
                        variant="orange" 
                        size="lg" 
                        className="w-full"
                        onClick={handleRequestQuote}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Orçamento
                      </Button>

                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Adicionar à Lista
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="orange" 
                      size="lg" 
                      className="w-full"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  )}

                  {cartCount > 0 && (
                    <Link to="/loja/carrinho" className="block">
                      <Button variant="outline" size="lg" className="w-full">
                        Ver {STORE_MODE.ecommerceEnabled ? "Carrinho" : "Lista"} ({cartCount} {cartCount === 1 ? "item" : "itens"})
                      </Button>
                    </Link>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    Ao contratar, você concorda com nossos{" "}
                    <Link to="/termos-uso" className="text-primary hover:underline">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link to="/politica-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductDetailPage;
