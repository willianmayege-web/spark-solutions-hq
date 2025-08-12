import Header from "@/components/Header";
import HeroEletroMays from "@/components/HeroEletroMays";
import ServicesGrid from "@/components/ServicesGrid";
import SolarSimulator from "@/components/SolarSimulator";
import ClientDashboard from "@/components/ClientDashboard";
import CooperativeSection from "@/components/CooperativeSection";
import OnlineStore from "@/components/OnlineStore";
import QRCodeSection from "@/components/QRCodeSection";
import EnergySimulator from "@/components/EnergySimulator";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import RealCases from "@/components/RealCases";
import EnergyDiagnosis from "@/components/EnergyDiagnosis";
import FAQ from "@/components/FAQ";
import FooterEletroMays from "@/components/FooterEletroMays";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroEletroMays />
      <ServicesGrid />
      <SolarSimulator />
      <ClientDashboard />
      <CooperativeSection />
      <OnlineStore />
      <QRCodeSection />
      <EnergySimulator />
      <BeforeAfterComparison />
      <RealCases />
      <EnergyDiagnosis />
      <FAQ />
      <FooterEletroMays />
    </div>
  );
};

export default Index;
