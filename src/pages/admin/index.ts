/**
 * Área Administrativa - Protegida por AdminRouteGuard
 * 
 * Acesso restrito a administradores autenticados.
 * Autenticação via edge function admin-auth.
 * 
 * Funcionalidades atuais:
 * - Dashboard com estatísticas
 * - Gestão de clientes (CRUD)
 * - Gestão de pedidos
 * - Configurações do sistema
 */

// Autenticação
export { default as AdminLoginPage } from './AdminLoginPage';

// Dashboard e gestão
export { default as AdminDashboardPage } from './AdminDashboardPage';
export { default as AdminClientsPage } from './AdminClientsPage';
export { default as AdminClientDetailsPage } from './AdminClientDetailsPage';
export { default as AdminSettingsPage } from './AdminSettingsPage';

// Pedidos (mover para esta pasta no futuro)
export { default as AdminOrdersPage } from '../AdminOrdersPage';
export { default as AdminOrderDetailPage } from '../AdminOrderDetailPage';

// Futuras páginas:
// export { default as AdminReportsPage } from './AdminReportsPage';
// export { default as AdminUsersPage } from './AdminUsersPage';
