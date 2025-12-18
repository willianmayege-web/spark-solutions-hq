import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientSummaryCards from "@/components/client-area/ClientSummaryCards";
import ProjectsTable from "@/components/client-area/ProjectsTable";
import BillingSection from "@/components/client-area/BillingSection";
import ClientDataSection from "@/components/client-area/ClientDataSection";
import ClientOrdersSection from "@/components/client-area/ClientOrdersSection";
import GenerationDashboard from "@/components/client-area/GenerationDashboard";
import GenerationUpsellCard from "@/components/client-area/GenerationUpsellCard";
import SmartMeterSection from "@/components/client-area/SmartMeterSection";
import PlanBlockedSection from "@/components/client-area/PlanBlockedSection";
import ClientLoginSection from "@/components/client-area/ClientLoginSection";
import SEOHead from "@/components/SEOHead";
import { User } from "lucide-react";
import { useClientAuth } from "@/contexts/ClientAuthContext";
import { canAccess, isPlanActive, getBlockedMessage } from "@/lib/clientAuth";
import { PLAN_NAMES } from "@/types/plans";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const ClientAreaPage = () => {
  const { isAuthenticated, profile, loading, logout } = useClientAuth();

  // Loading state
  if (loading) {
    return (
      <>
        <SEOHead title="Área do Cliente | Eletro May's" noIndex={true} />
        <Header />
        <main className="min-h-screen bg-background pt-16 flex items-center justify-center">
          <p className="text-muted-foreground">Carregando...</p>
        </main>
        <FooterEletroMays />
      </>
    );
  }

  // Not authenticated - show login
  if (!isAuthenticated || !profile) {
    return (
      <>
        <SEOHead
          title="Área do Cliente | Eletro May's Engenharia Elétrica"
          description="Acesse sua área do cliente para acompanhar projetos, relatórios de geração e dados de monitoramento."
          noIndex={true}
        />
        <Header />
        <main id="main-content" className="min-h-screen bg-background pt-16">
          <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs items={[{ name: "Área do Cliente", href: "/area-do-cliente" }]} />
            </div>
          </section>
          <ClientLoginSection />
        </main>
        <FooterEletroMays />
      </>
    );
  }

  // Plan is blocked (PAST_DUE or CANCELED)
  if (!isPlanActive(profile)) {
    return (
      <>
        <SEOHead title="Área do Cliente | Eletro May's" noIndex={true} />
        <Header />
        <main id="main-content" className="min-h-screen bg-background pt-16">
          <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs items={[{ name: "Área do Cliente", href: "/area-do-cliente" }]} />
              <div className="flex items-center gap-4 mt-6">
                <p className="text-muted-foreground">Olá, {profile.name}</p>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </section>
          <PlanBlockedSection message={getBlockedMessage(profile)} />
        </main>
        <FooterEletroMays />
      </>
    );
  }

  // Authenticated and active plan - full dashboard
  return (
    <>
      <SEOHead
        title="Área do Cliente | Eletro May's Engenharia Elétrica"
        description="Acompanhe seus projetos, laudos técnicos e atendimentos em um só lugar."
        noIndex={true}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Área do Cliente", href: "/area-do-cliente" }]} />
            
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-montserrat">
                      Olá, {profile.name.split(' ')[0]}
                    </h1>
                    <Badge variant="secondary">{PLAN_NAMES[profile.plan]}</Badge>
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Acompanhe seus projetos, laudos e atendimentos técnicos.
                  </p>
                </div>
              </div>
              <Button variant="ghost" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Summary */}
        <ClientSummaryCards />

        {/* Geração Própria - condicional por plano */}
        {canAccess(profile, 'generation') ? (
          <GenerationDashboard profile={profile} />
        ) : (
          <GenerationUpsellCard />
        )}

        {/* Smart Meter - apenas Gestão+Mercado */}
        {canAccess(profile, 'smartMeter') && (
          <SmartMeterSection profile={profile} />
        )}

        {/* My Orders */}
        <ClientOrdersSection />

        {/* Projects and Reports */}
        <ProjectsTable />

        {/* Billing Section */}
        <BillingSection />

        {/* Client Data and Support */}
        <ClientDataSection />
      </main>
      <FooterEletroMays />
    </>
  );
};

export default ClientAreaPage;
