import { Calculator, Phone, Zap, Shield, FileCheck, ArrowRight, LucideIcon } from "lucide-react";

export interface HeroSlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: { text: string; action: string; icon: LucideIcon };
  ctaSecondary: { text: string; action: string; icon: LucideIcon };
  image: string;
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    title: "Projetos Elétricos e Energia Solar",
    subtitle: "Soluções completas em engenharia elétrica e sistemas fotovoltaicos",
    description: "Desde 1988 desenvolvendo projetos residenciais, comerciais e industriais com excelência técnica.",
    ctaPrimary: { text: "Simular Sistema Solar", action: "simulator", icon: Calculator },
    ctaSecondary: { text: "Falar com Engenheiro", action: "whatsapp", icon: Phone },
    image: "/src/assets/energia-solar.jpg",
  },
  {
    id: 2,
    title: "SPDA e Laudos Técnicos NBR 5419",
    subtitle: "Proteção contra descargas atmosféricas e aterramento",
    description: "Laudos técnicos, medições e ensaios conforme norma NBR 5419:2015. Segurança certificada para sua edificação.",
    ctaPrimary: { text: "Solicitar Laudo", action: "quote", icon: FileCheck },
    ctaSecondary: { text: "Falar no WhatsApp", action: "whatsapp", icon: Phone },
    image: "/src/assets/spda-aterramento.jpg",
  },
  {
    id: 3,
    title: "Consultoria e Adequação Elétrica Industrial",
    subtitle: "Eficiência energética e conformidade com normas técnicas",
    description: "Diagnósticos, laudos periciais e projetos de adequação elétrica para ambientes industriais e comerciais.",
    ctaPrimary: { text: "Solicitar Diagnóstico", action: "quote", icon: Shield },
    ctaSecondary: { text: "Ver Serviços", action: "services", icon: ArrowRight },
    image: "/src/assets/eficiencia-energetica.jpg",
  },
];

export const heroStats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "36+", label: "Anos de Experiência" },
  { value: "CREA-RS", label: "Registro 231706" },
];
