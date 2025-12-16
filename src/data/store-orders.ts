import { Order } from "@/types/store";

// Mock orders para demonstração
export const mockOrders: Order[] = [
  {
    id: "ord-001",
    numero: "2024-0001",
    clienteId: "cli-001",
    cliente: {
      nome: "João Silva Enterprises",
      email: "joao@empresa.com.br",
      telefone: "(55) 99999-0001",
      cpfCnpj: "12.345.678/0001-90",
      isNewCustomer: false
    },
    itens: [
      {
        product: {
          id: "laudo-spda-nbr5419",
          nome: "Laudo SPDA NBR 5419 – até 1 edificação",
          slug: "laudo-spda-nbr-5419-edificacao",
          categoria: "Laudo",
          descricao: "Laudo técnico de SPDA conforme NBR 5419",
          descricaoDetalhada: "",
          entregaveis: [],
          tempoEntrega: "10 dias úteis",
          preco: 1800,
          exigeVisita: true,
          incluiART: true,
          tags: [],
          indicadoPara: [],
          requisitosCliente: []
        },
        quantity: 1
      }
    ],
    subtotal: 1800,
    taxas: 0,
    total: 1800,
    metodoPagamento: "Pix",
    status: "Em execução",
    dataCriacao: "2024-12-10T10:30:00Z",
    dataAtualizacao: "2024-12-12T14:00:00Z"
  },
  {
    id: "ord-002",
    numero: "2024-0002",
    clienteId: "cli-002",
    cliente: {
      nome: "Maria Fernanda Costa",
      email: "maria.costa@email.com",
      telefone: "(55) 98888-1234",
      cpfCnpj: "123.456.789-00",
      isNewCustomer: true
    },
    itens: [
      {
        product: {
          id: "consultoria-online-1h",
          nome: "Consultoria Técnica Online – 1h",
          slug: "consultoria-tecnica-online-1h",
          categoria: "Consultoria",
          descricao: "Sessão de 1 hora via Google Meet",
          descricaoDetalhada: "",
          entregaveis: [],
          tempoEntrega: "3 dias úteis",
          preco: 250,
          exigeVisita: false,
          incluiART: false,
          tags: [],
          indicadoPara: [],
          requisitosCliente: []
        },
        quantity: 2
      }
    ],
    subtotal: 500,
    taxas: 0,
    total: 500,
    metodoPagamento: "Cartão de Crédito",
    status: "Aguardando pagamento",
    dataCriacao: "2024-12-14T16:45:00Z",
    dataAtualizacao: "2024-12-14T16:45:00Z"
  }
];

// Funções para gerenciar pedidos (mock - será substituído por backend real)
let orders: Order[] = [...mockOrders];

export const getOrders = (): Order[] => {
  return orders;
};

export const getOrderById = (id: string): Order | undefined => {
  return orders.find(o => o.id === id);
};

export const getOrderByNumero = (numero: string): Order | undefined => {
  return orders.find(o => o.numero === numero);
};

export const getOrdersByClienteId = (clienteId: string): Order[] => {
  return orders.filter(o => o.clienteId === clienteId);
};

export const addOrder = (order: Order): void => {
  orders.push(order);
};

export const updateOrderStatus = (orderId: string, status: Order["status"]): void => {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
    order.dataAtualizacao = new Date().toISOString();
  }
};

export const generateOrderNumber = (): string => {
  const year = new Date().getFullYear();
  const count = orders.filter(o => o.numero.startsWith(`${year}`)).length + 1;
  return `${year}-${String(count).padStart(4, "0")}`;
};

export const generateOrderId = (): string => {
  return `ord-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
