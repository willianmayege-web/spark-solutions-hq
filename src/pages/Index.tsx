import Header from "@/components/Header";
import HeroEletroMays from "@/components/HeroEletroMays";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import SolarSimulator from "@/components/SolarSimulator";
import EnergySimulator from "@/components/EnergySimulator";
import ClientDashboard from "@/components/ClientDashboard";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import CooperativeSection from "@/components/CooperativeSection";
import OnlineStore from "@/components/OnlineStore";
import QRCodeSection from "@/components/QRCodeSection";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import RealCases from "@/components/RealCases";
import TechnicalArticles from "@/components/TechnicalArticles";
import EnergyDiagnosis from "@/components/EnergyDiagnosis";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import FAQ from "@/components/FAQ";
import FooterEletroMays from "@/components/FooterEletroMays";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EbookPopup from "@/components/EbookPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroEletroMays />
      <ServicesGrid />
      <CTASection 
        title="Solicite um Orçamento Gratuito"
        description="Nossa equipe técnica está pronta para apresentar a melhor solução para seu projeto de engenharia elétrica."
        primaryButtonText="Solicitar Orçamento"
        secondaryButtonText="Falar no WhatsApp"
      />
      <EnergySimulator />
      <CTASection 
        title="Receba uma Proposta Personalizada"
        description="Com base na simulação, podemos elaborar um projeto completo e detalhado para seu sistema solar."
        primaryButtonText="Solicitar Proposta"
        variant="gradient"
      />
      <ProjectsPortfolio />
      <SolarSimulator />
      <ClientDashboard />
      <CooperativeSection />
      <OnlineStore />
      <QRCodeSection />
      <BeforeAfterComparison />
      <RealCases />
      <TechnicalArticles />
      <EnergyDiagnosis />
      <QuoteRequestForm />
      <FAQ />
      <CTASection 
        title="Pronto para Economizar com Inteligência?"
        description="Mais de 500 projetos entregues em Santa Rosa RS e região. CREA-RS 231706. Fale conosco e transforme seu projeto em realidade."
        primaryButtonText="Falar com Especialista"
        secondaryButtonText="Ver Projetos"
      />
      <FooterEletroMays />
      <WhatsAppFloat />
      <EbookPopup />
    </div>
  );
};

export default Index;
