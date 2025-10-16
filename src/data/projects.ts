export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  norm: string;
  description: string;
  results: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "solar-industria-tres-maio",
    title: "Sistema Solar 15kWp - Indústria",
    location: "Três de Maio/RS",
    type: "Energia Solar",
    norm: "NBR 16690",
    description: "Projeto completo de geração fotovoltaica para indústria de médio porte, incluindo dimensionamento, instalação e comissionamento.",
    results: [
      "Redução de 92% na conta de energia",
      "Payback estimado em 4,2 anos",
      "Geração média de 2.100 kWh/mês",
      "Sistema com 36 módulos de 415Wp",
      "Laudo técnico com ART CREA-RS"
    ]
  },
  {
    id: "spda-comercial-santa-rosa",
    title: "SPDA Completo - Edifício Comercial",
    location: "Santa Rosa/RS",
    type: "SPDA",
    norm: "NBR 5419",
    description: "Sistema de proteção contra descargas atmosféricas completo, incluindo cálculo de nível de proteção, instalação e termografia.",
    results: [
      "Nível de proteção II (NPR)",
      "14 captores tipo Franklin",
      "Malha de aterramento < 10Ω",
      "Laudo de conformidade",
      "Termografia preventiva incluída"
    ]
  },
  {
    id: "pericia-residencial-porto-lucena",
    title: "Perícia Técnica Elétrica - Sinistro",
    location: "Porto Lucena/RS",
    type: "Perícia",
    norm: "NBR 5410",
    description: "Laudo técnico pericial para identificação de causa raiz de sinistro elétrico em instalação residencial.",
    results: [
      "Identificação de sobrecarga no quadro",
      "Análise forense de componentes",
      "Laudo aceito por seguradora",
      "Recomendações de adequação",
      "Documentação técnica completa"
    ]
  },
  {
    id: "projeto-industrial-500m2",
    title: "Projeto Elétrico Industrial - Fábrica 500m²",
    location: "Horizontina/RS",
    type: "Projeto Elétrico",
    norm: "NBR 5410",
    description: "Projeto elétrico completo de baixa tensão para nova planta industrial, incluindo dimensionamento de circuitos e subestação.",
    results: [
      "Potência instalada: 120kW",
      "Circuitos trifásicos dimensionados",
      "Adequação à NR-10",
      "Certificado de conformidade CREA",
      "Memorial descritivo completo"
    ]
  },
  {
    id: "termografia-subestacao",
    title: "Termografia Preventiva - Subestação 300kVA",
    location: "Três de Maio/RS",
    type: "Termografia",
    norm: "NBR 5462",
    description: "Inspeção termográfica em subestação de média tensão para identificação de pontos críticos e manutenção preditiva.",
    results: [
      "12 pontos críticos identificados",
      "Prevenção de parada não programada",
      "Relatório técnico com imagens térmicas",
      "Priorização de intervenções",
      "Economia de R$ 45 mil em danos evitados"
    ]
  },
  {
    id: "automacao-agroindustria",
    title: "Automação + Energia Solar - Agroindústria",
    location: "Santa Rosa/RS",
    type: "Híbrido",
    norm: "NBR 16690 + IEC 61131",
    description: "Sistema híbrido de automação industrial com energia solar fotovoltaica, incluindo CLP, supervisório e monitoramento remoto.",
    results: [
      "Sistema solar 50kWp instalado",
      "CLP + supervisório SCADA",
      "Monitoramento remoto 24/7",
      "Economia de 85% em energia",
      "Aumento de 30% na eficiência operacional"
    ]
  }
];
