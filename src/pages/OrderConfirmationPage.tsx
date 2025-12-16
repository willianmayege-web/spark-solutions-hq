import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getOrderById } from "@/data/store-orders";
import { 
  CheckCircle, 
  Clock, 
  QrCode, 
  CreditCard, 
  Copy,
  Home,
  FileText,
  Phone
} from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/config/contact";

const OrderConfirmationPage = () => {
  const { id } = useParams<{ id: string }>();
  const order = id ? getOrderById(id) : undefined;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Loja", href: "/loja" },
    { name: "Pedido", href: `/loja/pedido/${id}` },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aguardando pagamento":
        return "bg-amber-500";
      case "Pagamento confirmado":
        return "bg-blue-500";
      case "Em análise":
        return "bg-purple-500";
      case "Em execução":
        return "bg-primary";
      case "Concluído":
        return "bg-green-500";
      case "Cancelado":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  // Mock Pix key for demonstration
  const pixKey = "44.443.829/0001-34"; // CNPJ da empresa

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success("Chave Pix copiada!");
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Pedido não encontrado | Eletro May's" noIndex={true} />
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Pedido não encontrado</h1>
            <p className="text-muted-foreground mb-6">
              O pedido que você procura não existe ou foi removido.
            </p>
            <Link to="/loja">
              <Button variant="orange">Voltar para a Loja</Button>
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
        title={`Pedido ${order.numero} | Eletro May's`}
        description="Detalhes do seu pedido de serviços de engenharia elétrica."
        noIndex={true}
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Success message */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-montserrat">
              Pedido Realizado com Sucesso!
            </h1>
            <p className="text-lg text-muted-foreground">
              Número do pedido: <strong className="text-foreground">{order.numero}</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Status e Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Status do Pedido</span>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Criado em {formatDate(order.dataCriacao)}</span>
                </div>

                {order.metodoPagamento === "Pix" && order.status === "Aguardando pagamento" && (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center mb-3">
                      <QrCode className="w-6 h-6 mr-2 text-primary" />
                      <span className="font-semibold">Pagamento via Pix</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Copie a chave Pix abaixo e realize o pagamento no valor de{" "}
                      <strong className="text-primary">{formatPrice(order.total)}</strong>
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-background rounded border">
                      <code className="flex-grow text-sm font-mono">{pixKey}</code>
                      <Button variant="outline" size="sm" onClick={handleCopyPix}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      ⚠️ Este é um ambiente de demonstração. Em produção, será exibido QR Code e Pix Copia e Cola.
                    </p>
                  </div>
                )}

                {order.metodoPagamento === "Cartão de Crédito" && order.status === "Aguardando pagamento" && (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center mb-3">
                      <CreditCard className="w-6 h-6 mr-2 text-primary" />
                      <span className="font-semibold">Pagamento via Cartão</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ⚠️ Ambiente de demonstração. Em produção, você será redirecionado para o gateway de pagamento seguro.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Dados do cliente */}
            <Card>
              <CardHeader>
                <CardTitle>Dados do Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {order.cliente.nome}</p>
                <p><strong>E-mail:</strong> {order.cliente.email}</p>
                <p><strong>Telefone:</strong> {order.cliente.telefone}</p>
                <p><strong>CPF/CNPJ:</strong> {order.cliente.cpfCnpj}</p>
              </CardContent>
            </Card>
          </div>

          {/* Itens do pedido */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Serviços Contratados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.itens.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start py-3 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.product.nome}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.product.categoria} • {item.product.tempoEntrega}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.quantity}x {formatPrice(item.product.preco)}</p>
                      <p className="text-primary font-bold">{formatPrice(item.product.preco * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                {order.taxas > 0 && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Taxas</span>
                    <span>{formatPrice(order.taxas)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold pt-2">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(order.total)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos passos */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                  <span>Realize o pagamento conforme as instruções acima</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary/50 text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                  <span>Aguarde a confirmação do pagamento por e-mail</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary/30 text-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                  <span>Entraremos em contato para iniciar o serviço</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Ações */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/">
              <Button variant="outline" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <Link to="/loja">
              <Button variant="outline" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Continuar Comprando
              </Button>
            </Link>
            <a 
              href={`https://wa.me/${CONTACT.whatsapp.number}?text=Olá! Acabei de fazer o pedido ${order.numero} e gostaria de mais informações.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="orange" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </main>

      <FooterEletroMays />
      <WhatsAppFloat />
    </div>
  );
};

export default OrderConfirmationPage;
