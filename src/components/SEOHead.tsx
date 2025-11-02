import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  jsonLd?: object;
}

const SEOHead = ({
  title = "Eletro May's Engenharia Elétrica | Energia Solar, SPDA e Projetos em Santa Rosa-RS",
  description = "Engenharia elétrica em Santa Rosa-RS e região: energia solar fotovoltaica, SPDA (NBR 5419), projetos elétricos (NBR 5410), qualidade de energia e termografia. CREA-RS 231706.",
  keywords = "energia solar santa rosa, spda santa rosa, engenharia elétrica santa rosa, projetos elétricos RS, termografia elétrica, qualidade de energia, laudos técnicos, automação industrial",
  ogTitle,
  ogDescription,
  ogImage = "https://eletromays.com.br/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png",
  canonical,
  jsonLd
}: SEOHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', `https://eletromays.com.br${location.pathname}`, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', 'pt_BR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || `https://eletromays.com.br${location.pathname}`;

    // JSON-LD Structured Data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, jsonLd, location]);

  return null;
};

export default SEOHead;

// JSON-LD Templates para uso nas páginas
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "ElectricalContractor"],
  "name": "Eletro May's Engenharia Elétrica",
  "alternateName": "Eletro Mays",
  "description": "Empresa especializada em engenharia elétrica com registro CREA-RS 231706. Atua em projetos de energia solar fotovoltaica, SPDA, instalações elétricas NBR 5410, termografia, qualidade de energia e automação industrial em Santa Rosa-RS e região.",
  "image": "https://eletromays.com.br/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png",
  "logo": "https://eletromays.com.br/lovable-uploads/046bf34f-70b4-405a-99e3-c9a832e0c659.png",
  "@id": "https://eletromays.com.br",
  "url": "https://eletromays.com.br",
  "telephone": "+555535205555",
  "email": "atendimento@eletromays.com.br",
  "priceRange": "$$",
  "currenciesAccepted": "BRL",
  "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX, Transferência Bancária",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Vinte de Setembro, 751",
    "addressLocality": "Santa Rosa",
    "addressRegion": "RS",
    "postalCode": "98900-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.8717,
    "longitude": -54.4814
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/eletromays",
    "https://www.linkedin.com/company/eletromays"
  ],
  "founder": {
    "@type": "Person",
    "name": "Eng. Willian Paulo May",
    "jobTitle": "Engenheiro Eletricista",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Registro Profissional",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CREA-RS - Conselho Regional de Engenharia e Agronomia do Rio Grande do Sul"
      },
      "identifier": "CREA-RS 231706"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Santa Rosa",
      "containedIn": {
        "@type": "State",
        "name": "Rio Grande do Sul",
        "containedIn": {
          "@type": "Country",
          "name": "Brasil"
        }
      }
    },
    {
      "@type": "State",
      "name": "Rio Grande do Sul"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Energia Solar Fotovoltaica",
        "description": "Projeto, instalação e homologação de sistemas de energia solar fotovoltaica"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "SPDA - Sistema de Proteção contra Descargas Atmosféricas",
        "description": "Projeto e instalação conforme NBR 5419"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Projetos Elétricos",
        "description": "Projetos elétricos residenciais, comerciais e industriais conforme NBR 5410"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Laudos Técnicos e Perícias",
        "description": "Laudos técnicos, perícias e inspeções elétricas"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Termografia Elétrica",
        "description": "Inspeção termográfica preventiva em instalações elétricas"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Qualidade de Energia",
        "description": "Análise e solução de problemas de qualidade de energia elétrica"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Automação e Controle",
        "description": "Projetos de automação industrial e residencial"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "127"
  },
  "slogan": "Energia Solar, SPDA e Projetos Elétricos com Excelência Técnica"
};

export const serviceJsonLd = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Eletro May's Engenharia Elétrica",
    "telephone": "+555535205555",
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
  },
  "description": serviceDescription
});

export const breadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqJsonLd = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
