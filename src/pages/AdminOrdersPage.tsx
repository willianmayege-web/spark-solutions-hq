import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Eye, Calendar, User, CreditCard } from "lucide-react";
import { getOrders, updateOrderStatus } from "@/data/store-orders";
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

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(getOrders());
  const { toast } = useToast();

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus);
    setOrders(getOrders());
    toast({
      title: "Status atualizado",
      description: `Pedido atualizado para "${newStatus}"`,
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

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const totalPedidos = orders.length;
  const pedidosPendentes = orders.filter(o => o.status === "Aguardando pagamento").length;
  const pedidosEmExecucao = orders.filter(o => o.status === "Em execução").length;
  const valorTotal = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <>
      <SEOHead
        title="Gestão de Pedidos | Admin Eletro May's"
        description="Painel administrativo para gestão de pedidos da loja de serviços."
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
              ]}
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/20 rounded-xl">
                <Package className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground font-montserrat">
                  Gestão de Pedidos
                </h1>
                <p className="text-muted-foreground mt-1">
                  Gerencie os pedidos da loja de serviços
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                      <p className="text-2xl font-bold text-foreground">{totalPedidos}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Aguardando Pagamento</p>
                      <p className="text-2xl font-bold text-foreground">{pedidosPendentes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-orange-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Em Execução</p>
                      <p className="text-2xl font-bold text-foreground">{pedidosEmExecucao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Valor Total</p>
                      <p className="text-2xl font-bold text-foreground">{formatCurrency(valorTotal)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders Table */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Lista de Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border">
                        <TableHead className="text-muted-foreground">Pedido</TableHead>
                        <TableHead className="text-muted-foreground">Cliente</TableHead>
                        <TableHead className="text-muted-foreground">Data</TableHead>
                        <TableHead className="text-muted-foreground">Valor</TableHead>
                        <TableHead className="text-muted-foreground">Pagamento</TableHead>
                        <TableHead className="text-muted-foreground">Status</TableHead>
                        <TableHead className="text-muted-foreground">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id} className="border-border">
                          <TableCell className="font-medium text-foreground">
                            #{order.numero}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-foreground text-sm">{order.cliente.nome}</p>
                                <p className="text-muted-foreground text-xs">{order.cliente.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {formatDate(order.dataCriacao)}
                          </TableCell>
                          <TableCell className="text-foreground font-medium">
                            {formatCurrency(order.total)}
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {order.metodoPagamento}
                          </TableCell>
                          <TableCell>
                            <Select
                              value={order.status}
                              onValueChange={(value) => handleStatusChange(order.id, value as OrderStatus)}
                            >
                              <SelectTrigger className="w-[180px] bg-background border-border">
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
                          </TableCell>
                          <TableCell>
                            <Link to={`/admin/pedidos/${order.id}`}>
                              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                                <Eye className="w-4 h-4 mr-1" />
                                Detalhes
                              </Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {orders.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Nenhum pedido encontrado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterEletroMays />
    </>
  );
};

export default AdminOrdersPage;
