export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "SPDA: Como calcular o nível de proteção correto segundo NBR 5419",
    slug: "spda-nbr-5419-calculo-nivel-protecao",
    category: "SPDA",
    date: "2025-01-15",
    excerpt: "Entenda os critérios técnicos para definir o nível de proteção contra raios em edificações comerciais e industriais conforme NBR 5419:2015.",
    readTime: "8 min"
  },
  {
    id: "2",
    title: "Energia Solar em Santa Rosa RS: Vale a pena em 2025?",
    slug: "energia-solar-santa-rosa-rs-2025",
    category: "Energia Solar",
    date: "2025-01-10",
    excerpt: "Análise completa sobre viabilidade econômica, payback e incentivos para instalação de sistemas fotovoltaicos na região noroeste do RS.",
    readTime: "10 min"
  },
  {
    id: "3",
    title: "NBR 5410: 10 erros comuns em projetos elétricos residenciais",
    slug: "nbr-5410-erros-comuns-projetos-eletricos",
    category: "Normas Técnicas",
    date: "2025-01-05",
    excerpt: "Descubra os principais erros que comprometem a segurança e conformidade de instalações elétricas residenciais e como evitá-los.",
    readTime: "12 min"
  },
  {
    id: "4",
    title: "Perícia Técnica Elétrica: Quando é necessária e como solicitar",
    slug: "pericia-tecnica-eletrica-quando-necessaria",
    category: "Perícia",
    date: "2024-12-28",
    excerpt: "Guia completo sobre perícias técnicas em instalações elétricas: tipos, documentação necessária e importância para seguradoras e processos judiciais.",
    readTime: "7 min"
  },
  {
    id: "5",
    title: "Termografia em quadros elétricos: Previna incêndios e falhas",
    slug: "termografia-quadros-eletricos-preventiva",
    category: "Manutenção",
    date: "2024-12-20",
    excerpt: "Como a termografia infravermelha pode detectar pontos quentes e prevenir falhas críticas em quadros de distribuição elétrica antes que causem danos.",
    readTime: "9 min"
  },
  {
    id: "6",
    title: "Payback real de energia solar: Análise técnica e financeira",
    slug: "payback-energia-solar-analise-tecnica",
    category: "Energia Solar",
    date: "2024-12-15",
    excerpt: "Metodologia profissional para calcular o retorno de investimento em sistemas fotovoltaicos, considerando degradação, inflação e O&M.",
    readTime: "15 min"
  }
];
