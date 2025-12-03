import Header from "@/components/Header";
import FooterEletroMays from "@/components/FooterEletroMays";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import InsuranceHero from "@/components/insurance/InsuranceHero";
import InsuranceHowItWorks from "@/components/insurance/InsuranceHowItWorks";
import InsurancePricingSection from "@/components/insurance/InsurancePricingSection";
import InsuranceBenefits from "@/components/insurance/InsuranceBenefits";
import InsuranceFAQ from "@/components/insurance/InsuranceFAQ";
import InsuranceFormSection from "@/components/insurance/InsuranceFormSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SeguroEnergiaSolarPage = () => {
  const breadcrumbItems = [
    { name: "Seguro para Energia Solar", href: "/seguro-energia-solar" },
  ];

  const insuranceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Seguro para Sistemas de Energia Solar",
    "description": "Proteja o valor total do seu sistema fotovoltaico com seguro especializado, laudo técnico gratuito em caso de sinistro e suporte de engenheiro eletricista.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eletro May's Engenharia Elétrica",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Rosa",
        "addressRegion": "RS",
        "addressCountry": "BR"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Rio Grande do Sul"
    }
  };

  return (
    <>
      <SEOHead
        title="Seguro para Energia Solar | Eletro May's Engenharia Elétrica"
        description="Proteja seu sistema fotovoltaico com seguro especializado Essor via Elétron Seguros. Laudo técnico gratuito em caso de sinistro e suporte de engenheiro eletricista em Santa Rosa-RS."
        keywords="seguro energia solar, seguro fotovoltaico, seguro sistema solar, seguro painel solar, Santa Rosa RS, laudo técnico energia solar"
        jsonLd={insuranceJsonLd}
      />
      <Header />
      <main id="main-content" className="pt-16">
        <InsuranceHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <InsuranceHowItWorks />
        <InsurancePricingSection />
        <InsuranceBenefits />
        <InsuranceFAQ />
        <InsuranceFormSection />
      </main>
      <FooterEletroMays />
      <WhatsAppFloat />
    </>
  );
};

export default SeguroEnergiaSolarPage;
