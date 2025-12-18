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
    title: "Energia Solar Fotovoltaica",
    subtitle: "Conta de luz alta? Reduza entre 30% e 90% com geração própria*",
    description: "Projetos completos com homologação junto à concessionária, monitoramento remoto e payback médio de 4 anos. Engenharia de qualidade em Santa Rosa e região.",
    ctaPrimary: { text: "Simular Economia", action: "simulator", icon: Calculator },
    ctaSecondary: { text: "Conversar com Engenheiro", action: "whatsapp", icon: Phone },
    image: "/src/assets/energia-solar.jpg",
  },
  {
    id: 2,
    title: "SPDA e Laudos NBR 5419",
    subtitle: "Edificação sem laudo de para-raios? Regularize agora",
    description: "Laudos técnicos aceitos pelo Corpo de Bombeiros para AVCB e habite-se. Medições com terrômetro calibrado, ART CREA-RS e entrega em até 15 dias.",
    ctaPrimary: { text: "Solicitar Laudo SPDA", action: "quote", icon: FileCheck },
    ctaSecondary: { text: "Enviar Dados do Prédio", action: "whatsapp", icon: Phone },
    image: "/src/assets/spda-aterramento.jpg",
  },
  {
    id: 3,
    title: "Projetos e Laudos Elétricos",
    subtitle: "Instalação fora de norma? Evite multas e acidentes",
    description: "Projetos conforme NBR 5410/14039, laudos periciais e adequação à NR-10. Aceito por seguradoras, Corpo de Bombeiros e tribunais.",
    ctaPrimary: { text: "Solicitar Estudo Técnico", action: "quote", icon: Shield },
    ctaSecondary: { text: "Ver Todos os Serviços", action: "services", icon: ArrowRight },
    image: "/src/assets/eficiencia-energetica.jpg",
  },
];

export const heroStats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "4+", label: "Anos de Atuação" },
  { value: "CREA-RS", label: "Registro 231706" },
];
