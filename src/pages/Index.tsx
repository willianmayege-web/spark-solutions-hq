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
        title="Eletro May's Engenharia Elétrica | Projetos, SPDA, Laudos e Energia Solar em Santa Rosa-RS"
        description="Engenharia elétrica especializada em projetos NBR 5410, SPDA NBR 5419, laudos técnicos, perícias e energia solar fotovoltaica. CREA-RS 231706. Atendimento em Santa Rosa e região noroeste do RS desde 1988."
        keywords="engenharia elétrica santa rosa rs, projetos elétricos nbr 5410, spda nbr 5419, laudos técnicos crea, perícia elétrica judicial, energia solar fotovoltaica rs, crea-rs 231706, eletro mays engenharia"
        jsonLd={organizationJsonLd}
      />
      <TopBanner />
      <Header />
      <main id="main-content">
        {/* H1 único para SEO */}
        <h1 className="sr-only">Eletro May's Engenharia Elétrica – Projetos, SPDA, Laudos Técnicos e Energia Solar em Santa Rosa-RS</h1>
        <HeroSlider />
        <WhyChooseSection />
        <ServicesGrid />
        <SolarSimulatorSection />
        <CTASection 
          title="Precisa de Projeto, Laudo ou Adequação Elétrica?"
          description="Engenheiro eletricista CREA-RS 231706 avalia sua instalação e apresenta solução técnica com ART. Atendimento presencial em Santa Rosa e região noroeste do RS."
          primaryButtonText="Solicitar Estudo Técnico"
          secondaryButtonText="Falar com Engenheiro"
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
          title="Reduza Riscos e Custos com Engenharia de Qualidade"
          description="Mais de 500 projetos entregues com ART desde 1988. Projetos elétricos, laudos, SPDA e solar com conformidade NBR e atendimento direto do engenheiro responsável."
          primaryButtonText="Enviar Dados da Instalação"
          secondaryButtonText="Conversar com Engenheiro"
        />
      </main>
      <FooterEletroMays />
      <WhatsAppFloat />
      <EbookPopup />
    </div>
  );
};

export default Index;
