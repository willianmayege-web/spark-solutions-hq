/**
 * Configuração centralizada de rotas do projeto
 * 
 * Áreas do sistema:
 * - PUBLIC: Páginas acessíveis a todos os visitantes
 * - CLIENT: Área do cliente (futura autenticação)
 * - ADMIN: Área administrativa (futura autenticação)
 */

export const ROUTES = {
  // ============================================
  // ÁREA PÚBLICA - Acessível a todos
  // ============================================
  PUBLIC: {
    HOME: '/',
    COMING_SOON: '/em-breve',
    ABOUT: '/sobre',
    SERVICES: '/servicos/:serviceId',
    BLOG: '/blog',
    ARTICLE: '/blog/:slug',
    
    // Legal
    PRIVACY_POLICY: '/politica-privacidade',
    TERMS: '/termos-uso',
    COOKIES_POLICY: '/politica-cookies',
    
    // Loja (vitrine)
    STORE: '/loja',
    PRODUCT: '/loja/produtos/:slug',
    CART: '/loja/carrinho',
    CHECKOUT: '/loja/checkout',
    ORDER_CONFIRMATION: '/loja/pedido/:id',
    
    // Produtos específicos
    SOLAR_INSURANCE: '/seguro-energia-solar',
    
    // Diagnóstico (noindex)
    DIAGNOSTICS: '/diagnostics',
  },
  
  // ============================================
  // ÁREA DO CLIENTE - Futura autenticação
  // ============================================
  CLIENT: {
    DASHBOARD: '/area-do-cliente',
    // Futuras rotas:
    // PROJECTS: '/area-do-cliente/projetos',
    // DOCUMENTS: '/area-do-cliente/documentos',
    // BILLING: '/area-do-cliente/financeiro',
    // SUPPORT: '/area-do-cliente/suporte',
  },
  
  // ============================================
  // ÁREA ADMINISTRATIVA - Futura autenticação
  // ============================================
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin',
    CLIENTS: '/admin/clients',
    CLIENT_DETAILS: '/admin/clients/:id',
    ORDERS: '/admin/pedidos',
    ORDER_DETAILS: '/admin/pedidos/:id',
    SETTINGS: '/admin/settings',
    // Futuras rotas:
    // REPORTS: '/admin/relatorios',
    // USERS: '/admin/usuarios',
  },
} as const;

// Helpers para construir rotas dinâmicas
export const buildRoute = {
  service: (serviceId: string) => `/servicos/${serviceId}`,
  article: (slug: string) => `/blog/${slug}`,
  product: (slug: string) => `/loja/produtos/${slug}`,
  order: (id: string) => `/loja/pedido/${id}`,
  adminClient: (id: string) => `/admin/clients/${id}`,
  adminOrder: (id: string) => `/admin/pedidos/${id}`,
};

// Rotas que requerem autenticação de cliente (futuro)
export const CLIENT_PROTECTED_ROUTES = [
  ROUTES.CLIENT.DASHBOARD,
];

// Rotas que requerem autenticação de admin
export const ADMIN_PROTECTED_ROUTES = [
  ROUTES.ADMIN.DASHBOARD,
  ROUTES.ADMIN.CLIENTS,
  ROUTES.ADMIN.ORDERS,
  ROUTES.ADMIN.SETTINGS,
];

// Rotas com noindex (não indexar no Google)
export const NOINDEX_ROUTES = [
  ROUTES.PUBLIC.DIAGNOSTICS,
  ROUTES.CLIENT.DASHBOARD,
  ROUTES.ADMIN.LOGIN,
  ROUTES.ADMIN.DASHBOARD,
  ROUTES.ADMIN.CLIENTS,
  ROUTES.ADMIN.ORDERS,
  ROUTES.ADMIN.SETTINGS,
];
