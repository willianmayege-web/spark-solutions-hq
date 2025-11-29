import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import HeroSlider from "@/components/hero/HeroSlider";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import SolarSimulator from "@/components/SolarSimulator";
import SolarSimulatorSection from "@/components/SolarSimulatorSection";
import ClientDashboard from "@/components/ClientDashboard";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import CooperativeSection from "@/components/CooperativeSection";
import OnlineStore from "@/components/OnlineStore";
import TechnicalStore from "@/components/TechnicalStore";
import QRCodeSection from "@/components/QRCodeSection";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import RealCases from "@/components/RealCases";
import TechnicalArticles from "@/components/TechnicalArticles";
import EnergyDiagnosis from "@/components/EnergyDiagnosis";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import CalendlySection from "@/components/CalendlySection";
import FAQ from "@/components/FAQ";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EbookPopup from "@/components/EbookPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Eletro May's Engenharia Elétrica | Energia Solar, SPDA e Laudos em Santa Rosa-RS"
        description="Engenharia elétrica CREA-RS 231706 em Santa Rosa-RS. Energia solar fotovoltaica, SPDA NBR 5419, projetos elétricos NBR 5410, laudos técnicos, perícias e termografia. Desde 1988."
        keywords="engenharia elétrica santa rosa, energia solar santa rosa rs, spda nbr 5419, laudos técnicos elétricos, perícia elétrica rs, projetos elétricos nbr 5410, crea-rs 231706, eletro mays"
        jsonLd={organizationJsonLd}
      />
      <TopBanner />
      <Header />
      <main id="main-content">
        {/* H1 único para SEO */}
        <h1 className="sr-only">Eletro May's Engenharia Elétrica — Projetos, Laudos e Energia Solar</h1>
        <HeroSlider />
        <WhyChooseSection />
        <ServicesGrid />
        <SolarSimulatorSection />
        <CTASection 
          title="Solicite um Orçamento Técnico Gratuito"
          description="Engenheiro eletricista CREA-RS 231706 à disposição para avaliar seu projeto. Atendimento em Santa Rosa e região noroeste do RS."
          primaryButtonText="Solicitar Orçamento"
          secondaryButtonText="Falar no WhatsApp"
        />
        <ProjectsPortfolio />
        <SolarSimulator />
        <ClientDashboard />
        <CooperativeSection />
        <TechnicalStore />
        <OnlineStore />
        <QRCodeSection />
        <BeforeAfterComparison />
        <RealCases />
        <TechnicalArticles />
        <EnergyDiagnosis />
        <QuoteRequestForm />
        <CalendlySection />
        <FAQ />
        <CTASection 
          title="Transforme Seu Projeto em Realidade"
          description="Mais de 500 projetos entregues desde 1988. Engenharia elétrica com ART CREA-RS 231706 em Santa Rosa e região noroeste do RS."
          primaryButtonText="Solicitar Orçamento"
          secondaryButtonText="Falar no WhatsApp"
        />
      </main>
      <FooterEletroMays />
      <WhatsAppFloat />
      <EbookPopup />
    </div>
  );
};

export default Index;
