import { ServiceProduct } from "@/types/store";

export const storeProducts: ServiceProduct[] = [
  {
    id: "consultoria-online-1h",
    nome: "Consultoria Técnica Online – 1h",
    slug: "consultoria-tecnica-online-1h",
    categoria: "Consultoria",
    descricao: "Sessão de 1 hora via Google Meet para análise de projetos, dúvidas técnicas ou orientação em instalações elétricas.",
    descricaoDetalhada: "Consultoria técnica especializada com engenheiro eletricista registrado no CREA-RS. Ideal para esclarecer dúvidas sobre projetos elétricos, dimensionamento de sistemas, análise de viabilidade de energia solar, interpretação de normas técnicas e orientações para regularização de instalações. A sessão é realizada via Google Meet com compartilhamento de tela para análise de documentos e projetos.",
    entregaveis: [
      "Sessão de 1 hora via Google Meet",
      "Gravação da sessão disponibilizada após o atendimento",
      "Resumo por escrito das orientações principais",
      "Indicação de próximos passos ou serviços necessários"
    ],
    tempoEntrega: "Agendamento em até 3 dias úteis",
    preco: 250,
    exigeVisita: false,
    incluiART: false,
    tags: ["consultoria", "online", "projetos elétricos", "energia solar"],
    indicadoPara: ["Residencial", "Comercial", "Industrial", "Condomínio"],
    requisitosCliente: [
      "Descrever brevemente o tema da consultoria no momento da compra",
      "Enviar documentos ou fotos relevantes antes da sessão (opcional)"
    ],
    normasAplicaveis: ["NBR 5410", "NBR 5419", "NBR 16690"]
  },
  {
    id: "consultoria-presencial-2h",
    nome: "Consultoria Técnica Presencial – 2h",
    slug: "consultoria-tecnica-presencial-2h",
    categoria: "Consultoria",
    descricao: "Visita técnica de 2 horas para análise in loco de instalações elétricas na região de Santa Rosa-RS.",
    descricaoDetalhada: "Consultoria presencial com engenheiro eletricista para análise detalhada de instalações elétricas. Inclui inspeção visual, medições básicas (tensão, corrente), identificação de não conformidades e orientações técnicas. Ideal para avaliação preliminar antes de projetos de adequação ou para orientação em melhorias de instalações existentes.",
    entregaveis: [
      "Visita técnica de 2 horas",
      "Relatório simplificado com observações e recomendações",
      "Registro fotográfico das principais observações",
      "Orientações verbais durante a visita"
    ],
    tempoEntrega: "Agendamento em até 5 dias úteis",
    preco: 450,
    exigeVisita: true,
    incluiART: false,
    tags: ["consultoria", "presencial", "inspeção", "Santa Rosa"],
    indicadoPara: ["Residencial", "Comercial", "Industrial", "Condomínio"],
    requisitosCliente: [
      "Endereço completo da instalação",
      "Acesso à instalação no dia agendado",
      "Disponibilidade de acompanhante responsável"
    ],
    normasAplicaveis: ["NBR 5410", "NR-10"]
  },
  {
    id: "laudo-spda-nbr5419",
    nome: "Laudo SPDA NBR 5419 – até 1 edificação",
    slug: "laudo-spda-nbr-5419-edificacao",
    categoria: "Laudo",
    descricao: "Laudo técnico de Sistema de Proteção contra Descargas Atmosféricas conforme NBR 5419, com medições e ART.",
    descricaoDetalhada: "Laudo técnico completo de SPDA (Sistema de Proteção contra Descargas Atmosféricas) conforme as quatro partes da NBR 5419:2015. Inclui análise de risco, verificação de captores, descidas, aterramento, equipotencialização e DPS. O laudo apresenta conclusão sobre a conformidade do sistema e recomendações de adequação quando necessário. Acompanha ART de laudo técnico.",
    entregaveis: [
      "Laudo técnico em PDF (20-30 páginas)",
      "Análise de risco conforme NBR 5419-2",
      "Relatório fotográfico completo",
      "Medições de resistência de aterramento",
      "Planta baixa com marcação dos componentes",
      "ART de laudo técnico registrada no CREA-RS"
    ],
    tempoEntrega: "10 dias úteis após vistoria",
    preco: 1800,
    exigeVisita: true,
    incluiART: true,
    tags: ["SPDA", "NBR 5419", "laudo", "para-raios", "descargas atmosféricas"],
    indicadoPara: ["Comercial", "Industrial", "Condomínio", "Institucional"],
    requisitosCliente: [
      "Projeto do SPDA existente (se disponível)",
      "Planta baixa da edificação",
      "Acesso ao telhado e subsolo/aterramento",
      "Dados da edificação (área, altura, uso)"
    ],
    normasAplicaveis: ["NBR 5419-1", "NBR 5419-2", "NBR 5419-3", "NBR 5419-4"]
  },
  {
    id: "laudo-aterramento",
    nome: "Laudo de Aterramento – Medição + Relatório",
    slug: "laudo-aterramento-medicao-relatorio",
    categoria: "Laudo",
    descricao: "Medição de resistência de aterramento com equipamento certificado e laudo técnico com ART.",
    descricaoDetalhada: "Laudo técnico de sistema de aterramento elétrico com medições utilizando terrômetro digital calibrado (certificado RBC). Avalia a resistência de terra, continuidade das conexões e conformidade com as normas técnicas aplicáveis. Essencial para instalações elétricas, SPDA, subestações e equipamentos sensíveis.",
    entregaveis: [
      "Laudo técnico em PDF",
      "Medições de resistência de aterramento em múltiplos pontos",
      "Certificado de calibração do equipamento utilizado",
      "Relatório fotográfico",
      "Recomendações de adequação (se necessário)",
      "ART de laudo técnico"
    ],
    tempoEntrega: "7 dias úteis após vistoria",
    preco: 800,
    exigeVisita: true,
    incluiART: true,
    tags: ["aterramento", "medição", "terrômetro", "NBR 5410"],
    indicadoPara: ["Residencial", "Comercial", "Industrial", "Condomínio", "Rural"],
    requisitosCliente: [
      "Localização das hastes de aterramento",
      "Acesso ao quadro de distribuição principal",
      "Planta da instalação (se disponível)"
    ],
    normasAplicaveis: ["NBR 5410", "NBR 5419", "NBR 15749"]
  },
  {
    id: "laudo-isolamento-cabos",
    nome: "Laudo de Isolamento de Cabos de Alimentação",
    slug: "laudo-isolamento-cabos-alimentacao",
    categoria: "Laudo",
    descricao: "Ensaio de isolamento em cabos de média e baixa tensão com megômetro certificado e laudo técnico.",
    descricaoDetalhada: "Laudo técnico de ensaio de resistência de isolamento em cabos de alimentação elétrica. Utiliza megômetro digital calibrado para verificar a integridade da isolação dos condutores, identificando degradação, umidade ou falhas que possam comprometer a segurança da instalação. Fundamental para manutenção preventiva e diagnóstico de falhas.",
    entregaveis: [
      "Laudo técnico em PDF",
      "Medições de resistência de isolamento",
      "Índice de polarização (quando aplicável)",
      "Análise da tendência de degradação",
      "Certificado de calibração do megômetro",
      "ART de laudo técnico"
    ],
    tempoEntrega: "7 dias úteis após ensaio",
    preco: 1200,
    exigeVisita: true,
    incluiART: true,
    tags: ["isolamento", "cabos", "megômetro", "manutenção preventiva"],
    indicadoPara: ["Industrial", "Comercial", "Condomínio"],
    requisitosCliente: [
      "Desenergização do circuito no momento do ensaio",
      "Identificação dos cabos a serem ensaiados",
      "Acesso às extremidades dos cabos"
    ],
    normasAplicaveis: ["NBR 5410", "NBR 14039", "IEEE 43"]
  },
  {
    id: "laudo-qualidade-energia",
    nome: "Análise de Qualidade de Energia – IMS P600-G4",
    slug: "analise-qualidade-energia-ims-p600",
    categoria: "Laudo",
    descricao: "Medição de qualidade de energia com analisador IMS P600-G4 por 7 dias e laudo técnico completo.",
    descricaoDetalhada: "Análise completa de qualidade de energia elétrica utilizando analisador portátil IMS P600-G4 com registro contínuo por 7 dias. Avalia tensão, corrente, potência, fator de potência, harmônicos, desequilíbrios, variações de tensão e eventos transitórios. Ideal para diagnóstico de problemas em equipamentos sensíveis, otimização de consumo e adequação às normas do PRODIST.",
    entregaveis: [
      "Laudo técnico completo em PDF (40-60 páginas)",
      "Gráficos de tendência de todos os parâmetros",
      "Análise de harmônicos até 50ª ordem",
      "Identificação de eventos e distúrbios",
      "Comparativo com limites do PRODIST/ANEEL",
      "Recomendações de correção",
      "Dados brutos da medição em formato digital",
      "ART de laudo técnico"
    ],
    tempoEntrega: "15 dias úteis após período de medição",
    preco: 3500,
    exigeVisita: true,
    incluiART: true,
    tags: ["qualidade de energia", "harmônicos", "fator de potência", "PRODIST", "IMS P600"],
    indicadoPara: ["Industrial", "Comercial", "Institucional"],
    requisitosCliente: [
      "Acesso ao quadro de medição ou entrada de energia",
      "Disponibilidade para instalação e retirada do equipamento",
      "Informações sobre cargas críticas ou problemas observados"
    ],
    normasAplicaveis: ["PRODIST Módulo 8", "NBR 5410", "IEEE 519"]
  },
  {
    id: "pacote-4h-campo",
    nome: "Pacote 4 Horas Técnicas em Campo",
    slug: "pacote-4-horas-tecnicas-campo",
    categoria: "Horas Técnicas",
    descricao: "4 horas de trabalho técnico em campo com engenheiro eletricista para acompanhamento, inspeções ou supervisão.",
    descricaoDetalhada: "Pacote de 4 horas de trabalho técnico em campo com engenheiro eletricista. Pode ser utilizado para acompanhamento de obras, supervisão de instalações, inspeções técnicas, levantamentos de campo ou qualquer atividade que demande presença técnica especializada. As horas podem ser fracionadas em até 2 visitas.",
    entregaveis: [
      "4 horas de trabalho técnico em campo",
      "Relatório simplificado das atividades realizadas",
      "Registro fotográfico",
      "Orientações técnicas durante o trabalho"
    ],
    tempoEntrega: "Agendamento conforme disponibilidade",
    preco: 800,
    exigeVisita: true,
    incluiART: false,
    tags: ["horas técnicas", "campo", "supervisão", "acompanhamento"],
    indicadoPara: ["Residencial", "Comercial", "Industrial", "Condomínio", "Rural"],
    requisitosCliente: [
      "Definição prévia do escopo do trabalho",
      "Endereço e acesso ao local",
      "Agendamento com antecedência mínima de 48h"
    ]
  },
  {
    id: "pacote-8h-campo",
    nome: "Pacote 8 Horas Técnicas em Campo",
    slug: "pacote-8-horas-tecnicas-campo",
    categoria: "Horas Técnicas",
    descricao: "8 horas de trabalho técnico em campo com engenheiro eletricista – desconto de 10% sobre valor unitário.",
    descricaoDetalhada: "Pacote de 8 horas de trabalho técnico em campo com engenheiro eletricista, com desconto de 10% sobre o valor proporcional. Ideal para projetos que demandam maior dedicação ou múltiplas visitas. As horas podem ser fracionadas em até 4 visitas dentro de 30 dias.",
    entregaveis: [
      "8 horas de trabalho técnico em campo",
      "Relatório das atividades realizadas",
      "Registro fotográfico completo",
      "Orientações técnicas durante o trabalho"
    ],
    tempoEntrega: "Agendamento conforme disponibilidade",
    preco: 1440,
    exigeVisita: true,
    incluiART: false,
    tags: ["horas técnicas", "campo", "supervisão", "pacote"],
    indicadoPara: ["Comercial", "Industrial", "Condomínio"],
    requisitosCliente: [
      "Definição prévia do escopo do trabalho",
      "Endereço e acesso ao local",
      "Agendamento das visitas com antecedência"
    ]
  },
  {
    id: "projeto-eletrico-residencial",
    nome: "Projeto Elétrico Residencial – até 150m²",
    slug: "projeto-eletrico-residencial-150m2",
    categoria: "Consultoria",
    descricao: "Projeto elétrico completo para residências até 150m² conforme NBR 5410, com memorial, plantas e ART.",
    descricaoDetalhada: "Projeto elétrico completo para edificações residenciais de até 150m² de área construída. Inclui dimensionamento de circuitos, quadro de distribuição, proteções, aterramento e todas as instalações de tomadas, iluminação e pontos especiais. Elaborado conforme NBR 5410 e normas da concessionária local.",
    entregaveis: [
      "Memorial descritivo e de cálculo",
      "Planta baixa com distribuição de pontos",
      "Diagrama unifilar do quadro de distribuição",
      "Lista de materiais",
      "Especificações técnicas",
      "ART de projeto"
    ],
    tempoEntrega: "15 dias úteis",
    preco: 2500,
    exigeVisita: true,
    incluiART: true,
    tags: ["projeto elétrico", "residencial", "NBR 5410", "plantas"],
    indicadoPara: ["Residencial"],
    requisitosCliente: [
      "Planta arquitetônica em formato digital (DWG ou PDF)",
      "Definição de pontos especiais (ar-condicionado, chuveiro, etc.)",
      "Informações sobre o padrão de entrada existente ou pretendido"
    ],
    normasAplicaveis: ["NBR 5410", "NTC CEEE/RGE"]
  },
  {
    id: "seguro-solar-basico",
    nome: "Seguro para Sistema Solar – até R$ 30.000",
    slug: "seguro-sistema-solar-30mil",
    categoria: "Seguro",
    descricao: "Seguro Essor para sistemas fotovoltaicos até R$ 30.000 de NF, com laudo técnico gratuito em caso de sinistro.",
    descricaoDetalhada: "Seguro especializado para sistemas de energia solar fotovoltaica com valor de NF até R$ 30.000. Intermediado pela Elétron Seguros com apólice Essor. Diferencial exclusivo: laudo técnico gratuito em caso de sinistro, elaborado por engenheiro eletricista da Eletro May's para comprovação junto à seguradora.",
    entregaveis: [
      "Apólice de seguro Essor",
      "Cobertura conforme condições da seguradora",
      "Laudo técnico gratuito em caso de sinistro",
      "Suporte técnico especializado durante todo o processo"
    ],
    tempoEntrega: "Emissão em até 5 dias úteis após aprovação",
    preco: 600,
    exigeVisita: false,
    incluiART: false,
    tags: ["seguro", "energia solar", "fotovoltaico", "Essor"],
    indicadoPara: ["Residencial", "Comercial", "Rural"],
    requisitosCliente: [
      "Nota Fiscal do sistema fotovoltaico",
      "Dados do segurado (CPF/CNPJ)",
      "Endereço da instalação"
    ]
  }
];

export const getProductBySlug = (slug: string): ServiceProduct | undefined => {
  return storeProducts.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): ServiceProduct[] => {
  if (category === "Todos") return storeProducts;
  return storeProducts.filter(p => p.categoria === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(storeProducts.map(p => p.categoria));
  return ["Todos", ...Array.from(categories)];
};
