import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientSummaryCards from "@/components/client-area/ClientSummaryCards";
import ProjectsTable from "@/components/client-area/ProjectsTable";
import BillingSection from "@/components/client-area/BillingSection";
import ClientDataSection from "@/components/client-area/ClientDataSection";
import ClientOrdersSection from "@/components/client-area/ClientOrdersSection";
import SEOHead from "@/components/SEOHead";
import { User } from "lucide-react";

const ClientAreaPage = () => {
  return (
    <>
      <SEOHead
        title="Área do Cliente | Eletro May's Engenharia Elétrica"
        description="Acompanhe seus projetos, laudos técnicos e atendimentos em um só lugar. Acesse documentos, pagamentos e suporte técnico na Área do Cliente Eletro May's."
        keywords="área do cliente, projetos elétricos, laudos técnicos, energia solar, acompanhamento de serviços"
        noIndex={true}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "Área do Cliente", href: "/area-do-cliente" }]}
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/20 rounded-xl">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-montserrat">
                  Área do Cliente
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-2">
                  Acompanhe seus projetos, laudos e atendimentos técnicos em um só lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Summary */}
        <ClientSummaryCards />

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
