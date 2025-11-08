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
        title="Eletro May's | Energia Solar, SPDA e Projetos Elétricos em Santa Rosa-RS"
        description="Engenharia elétrica com CREA-RS 231706. Energia solar fotovoltaica, SPDA NBR 5419, projetos elétricos NBR 5410, laudos técnicos e termografia em Santa Rosa-RS e região."
        keywords="energia solar santa rosa, spda santa rosa, engenharia elétrica santa rosa, projetos elétricos RS, termografia elétrica, qualidade de energia, CREA-RS 231706"
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
          title="Solicite um Orçamento Gratuito"
          description="Nossa equipe técnica está pronta para apresentar a melhor solução para seu projeto de engenharia elétrica."
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
          title="Pronto para Economizar com Inteligência?"
          description="Mais de 500 projetos entregues em Santa Rosa RS e região. CREA-RS 231706. Fale conosco e transforme seu projeto em realidade."
          primaryButtonText="Falar com Especialista"
          secondaryButtonText="Ver Projetos"
        />
      </main>
      <FooterEletroMays />
      <WhatsAppFloat />
      <EbookPopup />
    </div>
  );
};

export default Index;
