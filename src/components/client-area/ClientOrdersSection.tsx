import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Calendar, ExternalLink } from "lucide-react";
import { getOrders } from "@/data/store-orders";
import { OrderStatus } from "@/types/store";

const statusColors: Record<OrderStatus, string> = {
  "Aguardando pagamento": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Pagamento confirmado": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Em análise": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Em execução": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Concluído": "bg-green-500/20 text-green-400 border-green-500/30",
  "Cancelado": "bg-red-500/20 text-red-400 border-red-500/30",
};

const ClientOrdersSection = () => {
  // Mock: In a real app, filter orders by logged-in client ID
  const orders = getOrders();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Meus Pedidos
            </CardTitle>
            <Link to="/loja">
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ir para Loja
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Você ainda não realizou nenhum pedido</p>
                <Link to="/loja">
                  <Button variant="orange">Conhecer Serviços</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-muted/20 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-foreground font-bold">#{order.numero}</span>
                        <Badge className={statusColors[order.status]}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(order.dataCriacao)}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {order.itens.slice(0, 2).map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item.product.nome}
                            {item.quantity > 1 && ` (x${item.quantity})`}
                          </Badge>
                        ))}
                        {order.itens.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{order.itens.length - 2} itens
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-primary font-bold text-lg">
                        {formatCurrency(order.total)}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {order.metodoPagamento}
                      </p>
                      <Link to={`/loja/pedido/${order.id}`}>
                        <Button variant="ghost" size="sm" className="mt-2 text-primary">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientOrdersSection;
