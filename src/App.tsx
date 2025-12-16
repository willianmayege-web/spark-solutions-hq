import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClientAreaPage from "./pages/ClientAreaPage";
import AboutPage from "./components/AboutPage";
import ServicesDetailPage from "./components/ServicesDetailPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import SeguroEnergiaSolarPage from "./pages/SeguroEnergiaSolarPage";
import StorePage from "./pages/StorePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminOrderDetailPage from "./pages/AdminOrderDetailPage";
import CookieConsent from "./components/CookieConsent";
import SEOHead, { organizationJsonLd } from "./components/SEOHead";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="eletromays-theme" attribute="class">
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SEOHead jsonLd={organizationJsonLd} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/servicos/:serviceId" element={<ServicesDetailPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/politica-cookies" element={<PoliticaCookies />} />
              <Route path="/diagnostics" element={<DiagnosticsPage />} />
              <Route path="/area-do-cliente" element={<ClientAreaPage />} />
              <Route path="/seguro-energia-solar" element={<SeguroEnergiaSolarPage />} />
              <Route path="/loja" element={<StorePage />} />
              <Route path="/loja/produtos/:slug" element={<ProductDetailPage />} />
              <Route path="/loja/carrinho" element={<CartPage />} />
              <Route path="/loja/checkout" element={<CheckoutPage />} />
              <Route path="/loja/pedido/:id" element={<OrderConfirmationPage />} />
              <Route path="/admin/pedidos" element={<AdminOrdersPage />} />
              <Route path="/admin/pedidos/:id" element={<AdminOrderDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
