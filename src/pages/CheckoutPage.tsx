import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { addOrder, generateOrderId, generateOrderNumber } from "@/data/store-orders";
import { CustomerData, Order, PaymentMethod } from "@/types/store";
import { toast } from "sonner";
import { CreditCard, QrCode, ArrowLeft, ShieldCheck, Lock } from "lucide-react";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, getTaxas, getTotal, clearCart } = useCart();
  
  const [customerData, setCustomerData] = useState<CustomerData>({
    nome: "",
    email: "",
    telefone: "",
    cpfCnpj: "",
    endereco: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "RS",
      cep: "",
    },
    isNewCustomer: true,
  });
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Pix");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
    { name: "Carrinho", href: "/loja/carrinho" },
    { name: "Checkout", href: "/loja/checkout" },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("endereco.")) {
      const enderecoField = field.replace("endereco.", "");
      setCustomerData(prev => ({
        ...prev,
        endereco: {
          ...prev.endereco!,
          [enderecoField]: value,
        },
      }));
    } else {
      setCustomerData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!customerData.nome.trim()) {
      toast.error("Por favor, informe seu nome completo");
      return false;
    }
    if (!customerData.email.trim() || !customerData.email.includes("@")) {
      toast.error("Por favor, informe um e-mail válido");
      return false;
    }
    if (!customerData.telefone.trim()) {
      toast.error("Por favor, informe seu telefone");
      return false;
    }
    if (!customerData.cpfCnpj.trim()) {
      toast.error("Por favor, informe seu CPF ou CNPJ");
      return false;
    }
    if (!acceptedTerms) {
      toast.error("Você precisa aceitar os termos de uso e política de privacidade");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (items.length === 0) {
      toast.error("Seu carrinho está vazio");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1500));

      const order: Order = {
        id: generateOrderId(),
        numero: generateOrderNumber(),
        clienteId: `cli-${Date.now()}`,
        cliente: customerData,
        itens: items,
        subtotal: getSubtotal(),
        taxas: getTaxas(),
        total: getTotal(),
        metodoPagamento: paymentMethod,
        status: "Aguardando pagamento",
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString(),
      };

      addOrder(order);
      clearCart();
      
      toast.success("Pedido criado com sucesso!");
      navigate(`/loja/pedido/${order.id}`);
    } catch (error) {
      toast.error("Erro ao processar pedido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Checkout | Loja Eletro May's" noIndex={true} />
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Carrinho vazio</h1>
            <p className="text-muted-foreground mb-6">Adicione serviços ao carrinho para continuar.</p>
            <Link to="/loja">
              <Button variant="orange">Ir para a Loja</Button>
            </Link>
          </div>
        </main>
        <FooterEletroMays />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Checkout | Loja Eletro May's"
        description="Finalize sua compra de serviços de engenharia elétrica."
        noIndex={true}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="mb-6">
            <Link to="/loja/carrinho">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao carrinho
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-montserrat">
            Finalizar Pedido
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Formulário */}
              <div className="lg:col-span-2 space-y-6">
                {/* Dados do cliente */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dados do Cliente</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <Label htmlFor="nome">Nome Completo / Razão Social *</Label>
                        <Input
                          id="nome"
                          value={customerData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          placeholder="Digite seu nome completo ou razão social"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">WhatsApp / Telefone *</Label>
                        <Input
                          id="telefone"
                          value={customerData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          placeholder="(55) 99999-9999"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cpfCnpj">CPF / CNPJ *</Label>
                        <Input
                          id="cpfCnpj"
                          value={customerData.cpfCnpj}
                          onChange={(e) => handleInputChange("cpfCnpj", e.target.value)}
                          placeholder="000.000.000-00 ou 00.000.000/0001-00"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Endereço */}
                <Card>
                  <CardHeader>
                    <CardTitle>Endereço (para emissão de NF)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <Label htmlFor="logradouro">Logradouro</Label>
                        <Input
                          id="logradouro"
                          value={customerData.endereco?.logradouro}
                          onChange={(e) => handleInputChange("endereco.logradouro", e.target.value)}
                          placeholder="Rua, Avenida, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="numero">Número</Label>
                        <Input
                          id="numero"
                          value={customerData.endereco?.numero}
                          onChange={(e) => handleInputChange("endereco.numero", e.target.value)}
                          placeholder="123"
                        />
                      </div>
                      <div>
                        <Label htmlFor="complemento">Complemento</Label>
                        <Input
                          id="complemento"
                          value={customerData.endereco?.complemento}
                          onChange={(e) => handleInputChange("endereco.complemento", e.target.value)}
                          placeholder="Apto, Sala, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="bairro">Bairro</Label>
                        <Input
                          id="bairro"
                          value={customerData.endereco?.bairro}
                          onChange={(e) => handleInputChange("endereco.bairro", e.target.value)}
                          placeholder="Centro"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cep">CEP</Label>
                        <Input
                          id="cep"
                          value={customerData.endereco?.cep}
                          onChange={(e) => handleInputChange("endereco.cep", e.target.value)}
                          placeholder="00000-000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cidade">Cidade</Label>
                        <Input
                          id="cidade"
                          value={customerData.endereco?.cidade}
                          onChange={(e) => handleInputChange("endereco.cidade", e.target.value)}
                          placeholder="Santa Rosa"
                        />
                      </div>
                      <div>
                        <Label htmlFor="uf">UF</Label>
                        <Input
                          id="uf"
                          value={customerData.endereco?.uf}
                          onChange={(e) => handleInputChange("endereco.uf", e.target.value)}
                          placeholder="RS"
                          maxLength={2}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Forma de pagamento */}
                <Card>
                  <CardHeader>
                    <CardTitle>Forma de Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="Pix" id="pix" />
                        <Label htmlFor="pix" className="flex items-center cursor-pointer flex-grow">
                          <QrCode className="w-6 h-6 mr-3 text-primary" />
                          <div>
                            <span className="font-medium">Pix</span>
                            <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                        <RadioGroupItem value="Cartão de Crédito" id="cartao" />
                        <Label htmlFor="cartao" className="flex items-center cursor-pointer flex-grow">
                          <CreditCard className="w-6 h-6 mr-3 text-primary" />
                          <div>
                            <span className="font-medium">Cartão de Crédito</span>
                            <p className="text-sm text-muted-foreground">Em até 12x</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Termos */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={acceptedTerms}
                        onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Li e concordo com a{" "}
                        <Link to="/politica-privacidade" className="text-primary hover:underline" target="_blank">
                          Política de Privacidade
                        </Link>{" "}
                        e os{" "}
                        <Link to="/termos-uso" className="text-primary hover:underline" target="_blank">
                          Termos de Uso
                        </Link>{" "}
                        da Eletro May's Engenharia Ltda.
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Resumo */}
              <div className="lg:col-span-1">
                <Card className="sticky top-28 border-primary/30">
                  <CardHeader>
                    <CardTitle>Resumo do Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Itens */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.product.id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item.quantity}x {item.product.nome.substring(0, 30)}...
                          </span>
                          <span>{formatPrice(item.product.preco * item.quantity)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>{formatPrice(getSubtotal())}</span>
                      </div>
                      {getTaxas() > 0 && (
                        <div className="flex justify-between text-muted-foreground">
                          <span>Taxas</span>
                          <span>{formatPrice(getTaxas())}</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(getTotal())}</span>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="orange" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting || !acceptedTerms}
                    >
                      {isSubmitting ? (
                        "Processando..."
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Confirmar Pedido
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Pagamento 100% seguro</span>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      Após confirmar, você receberá as instruções de pagamento por e-mail.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default CheckoutPage;
