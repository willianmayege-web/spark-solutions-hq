import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";
import ServicesHome from "@/components/ServicesHome";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEOContentSection from "@/components/SEOContentSection";
import QuickContactSection from "@/components/QuickContactSection";
import SolarSimulatorSection from "@/components/SolarSimulatorSection";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import TechnicalArticles from "@/components/TechnicalArticles";
import CalendlySection from "@/components/CalendlySection";
import FAQ from "@/components/FAQ";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EbookPopup from "@/components/EbookPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Eletro May's Engenharia Elétrica | Projetos, Laudos, SPDA e Energia Solar em Santa Rosa-RS"
        description="Engenharia elétrica completa em Santa Rosa-RS: projetos NBR 5410/14039, energia solar fotovoltaica, laudos SPDA NBR 5419, manutenção industrial e perícias técnicas. CREA-RS 231706 | CNPJ 44.443.829/0001-34."
        keywords="engenharia elétrica santa rosa rs, energia solar santa rosa, projetos elétricos nbr 5410, spda nbr 5419, laudos técnicos crea rs, manutenção elétrica industrial santa rosa, perícia elétrica judicial rs, crea-rs 231706"
        jsonLd={organizationJsonLd}
      />
      <TopBanner />
      <Header />
      <main id="main-content">
        {/* H1 único para SEO */}
        <h1 className="sr-only">
          Engenharia Elétrica e Energia Solar em Santa Rosa-RS | Projetos, Laudos SPDA e Manutenção Industrial | Eletro May's CREA-RS 231706
        </h1>
        <HeroHome />
        <ServicesHome />
        <WhyChooseSection />
        <TestimonialsSection />
        <SEOContentSection />
        <SolarSimulatorSection />
        <ProjectsPortfolio />
        <TechnicalArticles />
        <QuickContactSection />
        <CalendlySection />
        <FAQ />
      </main>
      <FooterEletroMays />
      <WhatsAppFloat />
      <EbookPopup />
    </div>
  );
};

export default Index;
