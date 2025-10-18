export interface ServiceDetail {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  benefits: string[];
  services: string[];
  ctaText: string;
}

export const servicesDetail: ServiceDetail[] = [
  {
    id: "instalacoes-industriais",
    title: "Instalações Elétricas Industriais em Santa Rosa RS",
    metaTitle: "Instalações Elétricas Industriais Santa Rosa RS | CREA-RS 231706",
    metaDescription: "Projetos elétricos industriais em Santa Rosa RS com certificação CREA-RS 231706. Cabeamento, automação, eficiência energética e redução de custos até 20%.",
    description: "A Eletro May's é especializada em projetos elétricos industriais completos para fábricas, indústrias e empresas em Santa Rosa e região noroeste do Rio Grande do Sul. Nossa equipe certificada CREA-RS 231706 desenvolve soluções que garantem máxima eficiência energética, segurança operacional e conformidade com normas técnicas NBR 5410 e NR-10. Implementamos sistemas de cabeamento estruturado, automação industrial, correção de fator de potência e modernização de instalações elétricas, resultando em redução média de 20% nos custos com energia elétrica. Com laudos técnicos completos e acompanhamento pós-instalação, asseguramos a continuidade operacional e a proteção dos seus equipamentos.",
    benefits: [
      "Redução de até 20% nos custos com energia elétrica",
      "Aumento da segurança operacional e conformidade com NR-10",
      "Projetos certificados CREA-RS 231706 com ART",
      "Correção de fator de potência e eliminação de multas",
      "Monitoramento e manutenção preventiva inclusos"
    ],
    services: [
      "Cabeamento elétrico industrial de alta e baixa tensão",
      "Automação industrial com CLP e sistemas SCADA",
      "Instalação de subestações e transformadores",
      "Correção de fator de potência com bancos de capacitores",
      "Modernização de quadros elétricos e painéis de comando",
      "Laudos técnicos de conformidade NBR 5410"
    ],
    ctaText: "Solicitar Visita Técnica Industrial"
  },
  {
    id: "instalacoes-residenciais",
    title: "Instalações Elétricas Residenciais em Santa Rosa RS",
    metaTitle: "Instalações Elétricas Residenciais Santa Rosa RS | Normas ABNT",
    metaDescription: "Instalações elétricas residenciais em Santa Rosa RS seguindo normas ABNT NBR 5410. Segurança, iluminação inteligente e eficiência energética com CREA-RS 231706.",
    description: "Oferecemos soluções completas em instalações elétricas residenciais em Santa Rosa, Porto Lucena e região, priorizando segurança, conforto e eficiência energética. Todos os projetos são desenvolvidos em conformidade com a NBR 5410, incluindo dispositivos DR obrigatórios, aterramento eficaz e circuitos dimensionados corretamente. Nossa equipe implementa sistemas de iluminação inteligente LED, proteção contra surtos, automação residencial e infraestrutura para energia solar. Realizamos inspeções técnicas com emissão de laudo CREA-RS 231706, essencial para financiamentos, vendas imobiliárias e seguros. Garantimos instalações seguras que protegem sua família e valorizam seu imóvel.",
    benefits: [
      "Segurança total com dispositivos DR e aterramento conforme NBR 5410",
      "Economia de até 60% com iluminação LED inteligente",
      "Laudo técnico CREA-RS 231706 para financiamentos e vendas",
      "Infraestrutura pronta para energia solar e automação",
      "Garantia estendida e assistência técnica"
    ],
    services: [
      "Projeto elétrico residencial completo com ART",
      "Instalação de quadro de distribuição com disjuntores DR",
      "Aterramento residencial e SPDA (para-raios)",
      "Iluminação LED e sistemas de automação residencial",
      "Circuitos exclusivos para ar-condicionado e chuveiros",
      "Inspeção técnica e laudo de conformidade NBR 5410"
    ],
    ctaText: "Solicitar Inspeção Residencial"
  },
  {
    id: "manutencao-predial",
    title: "Manutenção Elétrica Predial em Santa Rosa RS",
    metaTitle: "Manutenção Elétrica Predial Santa Rosa RS | Preventiva e Corretiva",
    metaDescription: "Manutenção elétrica predial preventiva e corretiva em Santa Rosa RS. Inspeções técnicas, reparos rápidos e conformidade legal com CREA-RS 231706.",
    description: "A manutenção elétrica predial é fundamental para garantir a segurança, evitar interrupções e cumprir exigências legais de condomínios e edifícios comerciais em Santa Rosa e região. A Eletro May's oferece serviços de manutenção preventiva com cronograma programado, inspeção termográfica, testes de continuidade e medição de aterramento. Realizamos manutenção corretiva emergencial 24h, reparos em quadros elétricos, troca de disjuntores e atualização de instalações para conformidade com NBR 5410 e NR-10. Todos os serviços incluem relatórios técnicos detalhados assinados por engenheiro eletricista CREA-RS 231706, essenciais para auditorias do Corpo de Bombeiros e seguradoras.",
    benefits: [
      "Redução de até 80% em falhas elétricas imprevistas",
      "Conformidade legal com NBR 5410, NR-10 e Corpo de Bombeiros",
      "Atendimento emergencial 24h para prédios e condomínios",
      "Relatórios técnicos CREA-RS 231706 para auditorias",
      "Prolongamento da vida útil de equipamentos elétricos"
    ],
    services: [
      "Inspeção termográfica preventiva em quadros elétricos",
      "Manutenção de sistemas de iluminação de emergência",
      "Teste de aterramento e SPDA (para-raios)",
      "Atualização de instalações para conformidade NBR 5410",
      "Manutenção de geradores e sistemas de backup",
      "Laudo técnico predial com ART CREA-RS"
    ],
    ctaText: "Solicitar Manutenção Preventiva"
  }
];
