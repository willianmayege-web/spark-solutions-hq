// Tipos para a loja de serviços de engenharia elétrica

export type ServiceCategory = 
  | "Consultoria"
  | "Laudo"
  | "Horas Técnicas"
  | "Suporte"
  | "Seguro";

export type TargetAudience = 
  | "Residencial"
  | "Comercial"
  | "Industrial"
  | "Condomínio"
  | "Rural"
  | "Institucional";

export interface ServiceProduct {
  id: string;
  nome: string;
  slug: string;
  categoria: ServiceCategory;
  descricao: string;
  descricaoDetalhada: string;
  entregaveis: string[];
  tempoEntrega: string;
  preco: number;
  exigeVisita: boolean;
  incluiART: boolean;
  tags: string[];
  indicadoPara: TargetAudience[];
  requisitosCliente: string[];
  normasAplicaveis?: string[];
}

export interface CartItem {
  product: ServiceProduct;
  quantity: number;
}

export type OrderStatus = 
  | "Aguardando pagamento"
  | "Pagamento confirmado"
  | "Em análise"
  | "Em execução"
  | "Concluído"
  | "Cancelado";

export type PaymentMethod = "Pix" | "Cartão de Crédito";

export interface CustomerData {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  cpfCnpj: string;
  endereco?: {
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  };
  isNewCustomer: boolean;
}

export interface Order {
  id: string;
  numero: string;
  clienteId: string;
  cliente: CustomerData;
  itens: CartItem[];
  subtotal: number;
  taxas: number;
  total: number;
  metodoPagamento: PaymentMethod;
  status: OrderStatus;
  dataCriacao: string;
  dataAtualizacao: string;
  observacoes?: string;
}
