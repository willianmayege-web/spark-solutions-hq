import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { ClientAuthProvider } from "@/contexts/ClientAuthContext";
import { AdminRouteGuard } from "@/components/admin/AdminRouteGuard";
import { COMING_SOON } from "@/config/comingSoon";
import { ROUTES } from "@/routes";
import CookieConsent from "@/components/CookieConsent";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";

// ============================================
// ÁREA PÚBLICA
// ============================================
import {
  HomePage,
  EmBrevePage,
  AboutPage,
  ServicesDetailPage,
  BlogPage,
  ArticlePage,
  PoliticaPrivacidade,
  TermosUso,
  PoliticaCookies,
  StorePage,
  ProductDetailPage,
  CartPage,
  CheckoutPage,
  OrderConfirmationPage,
  SeguroEnergiaSolarPage,
  PlanosMonitoramentoPage,
  DiagnosticsPage,
  NotFound,
} from "@/pages/public";

// ============================================
// ÁREA DO CLIENTE (futura autenticação)
// ============================================
import { ClientDashboardPage } from "@/pages/client";

// ============================================
// ÁREA ADMINISTRATIVA
// ============================================
import {
  AdminLoginPage,
  AdminDashboardPage,
  AdminClientsPage,
  AdminClientDetailsPage,
  AdminSettingsPage,
  AdminOrdersPage,
  AdminOrderDetailPage,
} from "@/pages/admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="eletromays-theme" attribute="class">
      <CartProvider>
        <ClientAuthProvider>
          <AdminAuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <SEOHead jsonLd={organizationJsonLd} />
                <Routes>
                  {COMING_SOON ? (
                    <>
                      <Route path={ROUTES.PUBLIC.COMING_SOON} element={<EmBrevePage />} />
                      <Route path="*" element={<Navigate to={ROUTES.PUBLIC.COMING_SOON} replace />} />
                    </>
                  ) : (
                    <>
                      {/* ======== ÁREA PÚBLICA ======== */}
                      <Route path={ROUTES.PUBLIC.HOME} element={<HomePage />} />
                      <Route path={ROUTES.PUBLIC.COMING_SOON} element={<EmBrevePage />} />
                      <Route path={ROUTES.PUBLIC.ABOUT} element={<AboutPage />} />
                      <Route path={ROUTES.PUBLIC.SERVICES} element={<ServicesDetailPage />} />
                      <Route path={ROUTES.PUBLIC.BLOG} element={<BlogPage />} />
                      <Route path={ROUTES.PUBLIC.ARTICLE} element={<ArticlePage />} />
                      <Route path={ROUTES.PUBLIC.PRIVACY_POLICY} element={<PoliticaPrivacidade />} />
                      <Route path={ROUTES.PUBLIC.TERMS} element={<TermosUso />} />
                      <Route path={ROUTES.PUBLIC.COOKIES_POLICY} element={<PoliticaCookies />} />
                      <Route path={ROUTES.PUBLIC.DIAGNOSTICS} element={<DiagnosticsPage />} />
                      <Route path={ROUTES.PUBLIC.SOLAR_INSURANCE} element={<SeguroEnergiaSolarPage />} />
                      <Route path={ROUTES.PUBLIC.MONITORING_PLANS} element={<PlanosMonitoramentoPage />} />
                      <Route path={ROUTES.PUBLIC.STORE} element={<StorePage />} />
                      <Route path={ROUTES.PUBLIC.PRODUCT} element={<ProductDetailPage />} />
                      <Route path={ROUTES.PUBLIC.CART} element={<CartPage />} />
                      <Route path={ROUTES.PUBLIC.CHECKOUT} element={<CheckoutPage />} />
                      <Route path={ROUTES.PUBLIC.ORDER_CONFIRMATION} element={<OrderConfirmationPage />} />

                      {/* ======== ÁREA DO CLIENTE ======== */}
                      <Route path={ROUTES.CLIENT.DASHBOARD} element={<ClientDashboardPage />} />

                      {/* ======== ÁREA ADMINISTRATIVA ======== */}
                      <Route path={ROUTES.ADMIN.LOGIN} element={<AdminLoginPage />} />
                      <Route path={ROUTES.ADMIN.DASHBOARD} element={<AdminRouteGuard><AdminDashboardPage /></AdminRouteGuard>} />
                      <Route path={ROUTES.ADMIN.CLIENTS} element={<AdminRouteGuard><AdminClientsPage /></AdminRouteGuard>} />
                      <Route path={ROUTES.ADMIN.CLIENT_DETAILS} element={<AdminRouteGuard><AdminClientDetailsPage /></AdminRouteGuard>} />
                      <Route path={ROUTES.ADMIN.ORDERS} element={<AdminRouteGuard><AdminOrdersPage /></AdminRouteGuard>} />
                      <Route path={ROUTES.ADMIN.ORDER_DETAILS} element={<AdminRouteGuard><AdminOrderDetailPage /></AdminRouteGuard>} />
                      <Route path={ROUTES.ADMIN.SETTINGS} element={<AdminRouteGuard><AdminSettingsPage /></AdminRouteGuard>} />

                      {/* ======== 404 ======== */}
                      <Route path="*" element={<NotFound />} />
                    </>
                  )}
                </Routes>
                <CookieConsent />
              </BrowserRouter>
            </TooltipProvider>
          </AdminAuthProvider>
        </ClientAuthProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
