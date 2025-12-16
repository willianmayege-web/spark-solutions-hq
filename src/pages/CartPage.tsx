import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight, Send } from "lucide-react";
import { STORE_MODE } from "@/config/store";
import { whatsappLink } from "@/config/contact";

const CartPage = () => {
  const { items, removeItem, updateQuantity, getSubtotal, getTaxas, getTotal, clearCart } = useCart();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
    { name: "Carrinho", href: "/loja/carrinho" },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const buildWhatsAppMessage = () => {
    let message = "Olá! Gostaria de solicitar um orçamento para os seguintes serviços:\n\n";
    
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.product.nome} - ${formatPrice(item.product.preco)} cada\n`;
    });
    
    message += `\n📋 Subtotal: ${formatPrice(getSubtotal())}`;
    if (getTaxas() > 0) {
      message += `\n💰 Taxas: ${formatPrice(getTaxas())}`;
    }
    message += `\n💵 Total estimado: ${formatPrice(getTotal())}`;
    message += "\n\nAguardo retorno com mais informações!";
    
    return message;
  };

  const handleWhatsAppQuote = () => {
    const message = buildWhatsAppMessage();
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Lista de Serviços | Loja Eletro May's"
          description="Sua lista de serviços de engenharia elétrica para orçamento."
          noIndex={true}
        />
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
            
            <div className="text-center py-16">
              <ShoppingCart className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4 font-montserrat">
                Sua lista está vazia
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explore nossa loja de serviços de engenharia elétrica e adicione os serviços que você precisa para solicitar um orçamento.
              </p>
              <Link to="/loja">
                <Button variant="orange" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Explorar Serviços
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <FooterEletroMays />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Lista de Serviços | Loja Eletro May's"
        description="Sua lista de serviços de engenharia elétrica para orçamento."
        noIndex={true}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-montserrat">
            Lista de Serviços
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de itens */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.product.id} className="border-border">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow">
                        <Link 
                          to={`/loja/produtos/${item.product.slug}`}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.product.nome}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.product.categoria} • {item.product.tempoEntrega}
                        </p>
                        <p className="text-primary font-semibold mt-2">
                          {formatPrice(item.product.preco)} /unidade
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {/* Controle de quantidade */}
                        <div className="flex items-center border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-12 h-8 text-center border-0 p-0"
                            min="1"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Subtotal do item */}
                        <div className="text-right min-w-[100px]">
                          <span className="font-bold text-foreground">
                            {formatPrice(item.product.preco * item.quantity)}
                          </span>
                        </div>

                        {/* Remover */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-between pt-4">
                <Link to="/loja">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Ver Mais Serviços
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpar Lista
                </Button>
              </div>
            </div>

            {/* Resumo */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28 border-primary/30">
                <CardHeader>
                  <CardTitle>Resumo do Orçamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({items.length} {items.length === 1 ? "item" : "itens"})</span>
                    <span>{formatPrice(getSubtotal())}</span>
                  </div>
                  
                  {getTaxas() > 0 && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Taxas</span>
                      <span>{formatPrice(getTaxas())}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Estimado</span>
                      <span className="text-primary">{formatPrice(getTotal())}</span>
                    </div>
                  </div>

                  {!STORE_MODE.ecommerceEnabled && (
                    <p className="text-xs text-muted-foreground text-center bg-muted/50 p-2 rounded">
                      Preços e disponibilidade sujeitos a confirmação
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  {!STORE_MODE.ecommerceEnabled ? (
                    <>
                      <Button 
                        variant="orange" 
                        size="lg" 
                        className="w-full"
                        onClick={handleWhatsAppQuote}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Orçamento no WhatsApp
                      </Button>
                      <Link to="/loja/checkout" className="w-full">
                        <Button variant="outline" size="lg" className="w-full">
                          <ArrowRight className="w-5 h-5 mr-2" />
                          Preencher Dados para Orçamento
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/loja/checkout" className="w-full">
                      <Button variant="orange" size="lg" className="w-full">
                        Finalizar Pedido
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  )}
                  <p className="text-xs text-muted-foreground text-center">
                    {STORE_MODE.ecommerceEnabled 
                      ? "Você poderá revisar seu pedido antes de confirmar"
                      : "Nosso time entrará em contato para finalizar o orçamento"
                    }
                  </p>
                </CardFooter>
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

export default CartPage;
