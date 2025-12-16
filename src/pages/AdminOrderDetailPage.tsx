import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Package, ArrowLeft, User, Mail, Phone, FileText, Calendar, CreditCard, MapPin } from "lucide-react";
import { getOrderById, updateOrderStatus } from "@/data/store-orders";
import { Order, OrderStatus } from "@/types/store";
import { useToast } from "@/hooks/use-toast";

const statusColors: Record<OrderStatus, string> = {
  "Aguardando pagamento": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Pagamento confirmado": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Em análise": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Em execução": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Concluído": "bg-green-500/20 text-green-400 border-green-500/30",
  "Cancelado": "bg-red-500/20 text-red-400 border-red-500/30",
};

const statusOptions: OrderStatus[] = [
  "Aguardando pagamento",
  "Pagamento confirmado",
  "Em análise",
  "Em execução",
  "Concluído",
  "Cancelado",
];

const AdminOrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundOrder = getOrderById(id);
      setOrder(foundOrder || null);
    }
  }, [id]);

  const handleStatusChange = (newStatus: OrderStatus) => {
    if (order) {
      updateOrderStatus(order.id, newStatus);
      setOrder({ ...order, status: newStatus, dataAtualizacao: new Date().toISOString() });
      toast({
        title: "Status atualizado",
        description: `Pedido atualizado para "${newStatus}"`,
      });
    }
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

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  if (!order) {
    return (
      <>
        <SEOHead title="Pedido não encontrado | Admin" noIndex={true} />
        <Header />
        <main className="min-h-screen bg-background pt-16 flex items-center justify-center">
          <div className="text-center">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Pedido não encontrado</h1>
            <Link to="/admin/pedidos">
              <Button variant="orange">Voltar para lista de pedidos</Button>
            </Link>
          </div>
        </main>
        <FooterEletroMays />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`Pedido #${order.numero} | Admin Eletro May's`}
        description="Detalhes do pedido"
        noIndex={true}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Admin", href: "/admin" },
                { name: "Pedidos", href: "/admin/pedidos" },
                { name: `#${order.numero}`, href: `/admin/pedidos/${order.id}` },
              ]}
            />
            
            <Link to="/admin/pedidos" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para lista
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <Package className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
                    Pedido #{order.numero}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Criado em {formatDate(order.dataCriacao)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Select value={order.status} onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-[200px] bg-background border-border">
                    <SelectValue>
                      <Badge className={statusColors[order.status]}>
                        {order.status}
                      </Badge>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        <Badge className={statusColors[status]}>
                          {status}
                        </Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Customer Info */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Dados do Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nome</p>
                    <p className="text-foreground font-medium">{order.cliente.nome}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{order.cliente.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{order.cliente.telefone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{order.cliente.cpfCnpj}</p>
                  </div>
                  {order.cliente.endereco && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                      <div className="text-foreground text-sm">
                        <p>{order.cliente.endereco.logradouro}, {order.cliente.endereco.numero}</p>
                        {order.cliente.endereco.complemento && <p>{order.cliente.endereco.complemento}</p>}
                        <p>{order.cliente.endereco.bairro}</p>
                        <p>{order.cliente.endereco.cidade} - {order.cliente.endereco.uf}</p>
                        <p>CEP: {order.cliente.endereco.cep}</p>
                      </div>
                    </div>
                  )}
                  <Badge variant={order.cliente.isNewCustomer ? "secondary" : "outline"}>
                    {order.cliente.isNewCustomer ? "Novo Cliente" : "Cliente Existente"}
                  </Badge>
                </CardContent>
              </Card>

              {/* Order Info */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Informações do Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Número</p>
                    <p className="text-foreground font-medium">#{order.numero}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data de Criação</p>
                    <p className="text-foreground">{formatDate(order.dataCriacao)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Última Atualização</p>
                    <p className="text-foreground">{formatDate(order.dataAtualizacao)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <p className="text-foreground">{order.metodoPagamento}</p>
                  </div>
                  {order.observacoes && (
                    <div>
                      <p className="text-sm text-muted-foreground">Observações</p>
                      <p className="text-foreground text-sm">{order.observacoes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Summary */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Resumo Financeiro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{formatCurrency(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxas</span>
                    <span className="text-foreground">{formatCurrency(order.taxas)}</span>
                  </div>
                  <Separator className="bg-border" />
                  <div className="flex justify-between">
                    <span className="text-foreground font-bold">Total</span>
                    <span className="text-primary font-bold text-xl">{formatCurrency(order.total)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Items */}
            <Card className="bg-card border-border mt-6">
              <CardHeader>
                <CardTitle className="text-foreground">Itens do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.itens.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-foreground font-medium">{item.product.nome}</h4>
                        <p className="text-muted-foreground text-sm">{item.product.descricao}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {item.product.categoria}
                          </Badge>
                          {item.product.incluiART && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                              Inclui ART
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {item.product.tempoEntrega}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-muted-foreground text-sm">Qtd: {item.quantity}</p>
                        <p className="text-primary font-bold">
                          {formatCurrency(item.product.preco * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterEletroMays />
    </>
  );
};

export default AdminOrderDetailPage;
