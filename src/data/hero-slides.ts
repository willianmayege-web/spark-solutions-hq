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
    subtitle: "Reduza até 95% da sua conta de energia elétrica",
    description: "Projetos completos com homologação ANEEL, monitoramento remoto e garantia de performance. Mais de 35 anos de experiência em Santa Rosa e região.",
    ctaPrimary: { text: "Simular Meu Sistema", action: "simulator", icon: Calculator },
    ctaSecondary: { text: "Falar com Engenheiro", action: "whatsapp", icon: Phone },
    image: "/src/assets/energia-solar.jpg",
  },
  {
    id: 2,
    title: "SPDA e Laudos NBR 5419",
    subtitle: "Proteção contra descargas atmosféricas com certificação",
    description: "Laudos técnicos aceitos pelo Corpo de Bombeiros para AVCB e habite-se. Medições com equipamentos calibrados e ART CREA-RS.",
    ctaPrimary: { text: "Solicitar Laudo SPDA", action: "quote", icon: FileCheck },
    ctaSecondary: { text: "Falar no WhatsApp", action: "whatsapp", icon: Phone },
    image: "/src/assets/spda-aterramento.jpg",
  },
  {
    id: 3,
    title: "Projetos Elétricos NBR 5410",
    subtitle: "Projetos residenciais, comerciais e industriais",
    description: "Dimensionamento de instalações elétricas conforme NBR 5410 e NBR 14039. Laudos, perícias e adequação à NR-10.",
    ctaPrimary: { text: "Solicitar Orçamento", action: "quote", icon: Shield },
    ctaSecondary: { text: "Ver Serviços", action: "services", icon: ArrowRight },
    image: "/src/assets/eficiencia-energetica.jpg",
  },
];

export const heroStats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "36+", label: "Anos de Experiência" },
  { value: "CREA-RS", label: "Registro 231706" },
];
