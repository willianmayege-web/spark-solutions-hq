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
    id: "energia-solar",
    title: "Energia Solar Fotovoltaica em Santa Rosa RS",
    metaTitle: "Energia Solar Santa Rosa RS | Sistemas Fotovoltaicos CREA-RS 231706",
    metaDescription: "Instalação de energia solar fotovoltaica em Santa Rosa RS. Sistemas on-grid, off-grid e híbridos conforme NBR 16690 e normas ANEEL. Economia real e payback garantido.",
    description: "A Eletro May's é especialista em projetos e instalações de sistemas de energia solar fotovoltaica em Santa Rosa e região noroeste do Rio Grande do Sul. Desenvolvemos soluções personalizadas para residências, empresas e indústrias, com sistemas on-grid (conectados à rede), off-grid (isolados) e híbridos. Todos os projetos seguem rigorosamente a NBR 16690 e as normas da ANEEL, com registro CREA-RS 231706 e emissão de ART. Nossa equipe realiza estudos de viabilidade técnica e financeira, dimensionamento preciso com análise de sombreamento, instalação completa, homologação junto à concessionária e monitoramento de geração. Garantimos economia real de até 95% na conta de energia, com payback médio entre 4 e 6 anos e vida útil superior a 25 anos.",
    benefits: [
      "Economia de até 95% na conta de energia elétrica",
      "Payback entre 4 e 6 anos com ROI garantido",
      "Valorização imediata do imóvel em até 30%",
      "Projetos certificados CREA-RS 231706 com ART e homologação ANEEL",
      "Monitoramento remoto e garantia de 25 anos nos painéis"
    ],
    services: [
      "Estudo de viabilidade e análise de sombreamento com drones",
      "Dimensionamento técnico de sistemas on-grid, off-grid e híbridos",
      "Instalação completa com estruturas metálicas certificadas",
      "Homologação junto à RGE/CEEE e registro na ANEEL",
      "Monitoramento remoto via app com dados em tempo real",
      "Manutenção preventiva e limpeza de painéis"
    ],
    ctaText: "Solicitar Simulação Personalizada"
  },
  {
    id: "spda",
    title: "SPDA e Aterramento - Sistema de Proteção contra Descargas Atmosféricas",
    metaTitle: "SPDA Santa Rosa RS | Instalação de Para-raios NBR 5419:2015",
    metaDescription: "Instalação, manutenção e laudos de SPDA (para-raios) em Santa Rosa RS conforme NBR 5419:2015. Medições com terrômetro certificado e ART CREA-RS 231706.",
    description: "O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é obrigatório para a maioria das edificações conforme NBR 5419:2015 e exigências do Corpo de Bombeiros. A Eletro May's oferece projetos completos de SPDA com captores tipo Franklin, Faraday ou híbridos, dimensionamento de descidas e malhas de aterramento de baixa impedância. Realizamos ensaios técnicos com terrômetro digital MTR-1530 e megôhmetro HMMD-1DA, emitindo laudos técnicos assinados por engenheiro eletricista CREA-RS 231706. Todos os serviços incluem medições de resistência de aterramento, teste de continuidade, inspeção visual e relatório fotográfico completo, essenciais para habite-se, renovação de AVCB e seguros patrimoniais.",
    benefits: [
      "Proteção total contra raios e surtos atmosféricos",
      "Conformidade com NBR 5419:2015 e exigências do Corpo de Bombeiros",
      "Laudos técnicos CREA-RS 231706 para AVCB e habite-se",
      "Medições precisas com equipamentos calibrados",
      "Redução de prêmios de seguro patrimonial"
    ],
    services: [
      "Projeto de SPDA conforme NBR 5419:2015 (Franklin, Faraday ou híbrido)",
      "Instalação de captores, descidas e malhas de aterramento",
      "Medição de resistência de aterramento com terrômetro MTR-1530",
      "Ensaios de continuidade com megôhmetro HMMD-1DA",
      "Laudo técnico completo com ART CREA-RS para AVCB",
      "Manutenção preventiva anual e relatório fotográfico"
    ],
    ctaText: "Solicitar Laudo de SPDA"
  },
  {
    id: "laudos",
    title: "Laudos e Perícias Técnicas Elétricas",
    metaTitle: "Laudos Técnicos Elétricos Santa Rosa RS | Perícias CREA-RS 231706",
    metaDescription: "Laudos técnicos elétricos, perícias e inspeções em Santa Rosa RS. Ensaios com megôhmetro, análise de danos elétricos e relatórios periciais CREA-RS 231706.",
    description: "A Eletro May's oferece serviços especializados de laudos técnicos e perícias elétricas para fins judiciais, seguradoras, auditorias e conformidade legal em Santa Rosa e região. Nossos engenheiros eletricistas CREA-RS 231706 realizam ensaios técnicos com equipamentos calibrados como megôhmetro Minipa MI-1000A, terrômetro digital MTR-1530 e câmera termográfica. Emitimos laudos de conformidade NBR 5410, análises de danos causados por surtos atmosféricos, perícias em acidentes elétricos, inspeções prediais e avaliações de vida útil de instalações. Todos os relatórios incluem registro fotográfico detalhado, análise técnica fundamentada, conclusões e recomendações, com emissão de ART e reconhecimento judicial.",
    benefits: [
      "Laudos reconhecidos judicialmente com ART CREA-RS 231706",
      "Ensaios técnicos com equipamentos calibrados e certificados",
      "Análises periciais para seguradoras e processos judiciais",
      "Relatórios técnicos detalhados com fotografias e medições",
      "Atendimento emergencial 24h para sinistros"
    ],
    services: [
      "Laudo de conformidade elétrica NBR 5410 para habite-se",
      "Perícia técnica em acidentes e incêndios de origem elétrica",
      "Ensaios de isolamento com megôhmetro Minipa MI-1000A",
      "Análise de danos por surtos e descargas atmosféricas",
      "Inspeção termográfica preventiva em quadros elétricos",
      "Avaliação de vida útil e estado de conservação de instalações"
    ],
    ctaText: "Solicitar Laudo Técnico"
  },
  {
    id: "automacao",
    title: "Automação e Controle Industrial/Predial",
    metaTitle: "Automação Industrial Santa Rosa RS | Controle com Arduino e ESP32",
    metaDescription: "Automação industrial e predial em Santa Rosa RS. Sistemas com Arduino, ESP32, IoT e integração inteligente. Eficiência operacional e monitoramento remoto.",
    description: "A Eletro May's desenvolve soluções completas de automação industrial e predial utilizando tecnologias modernas como Arduino, ESP32, Raspberry Pi e sistemas IoT. Implementamos controles automatizados para processos industriais, monitoramento remoto de equipamentos, sistemas de iluminação e climatização inteligentes, e integração com plataformas cloud para análise de dados em tempo real. Nossos projetos incluem programação customizada, interfaces gráficas intuitivas, painéis de supervisão SCADA e aplicativos mobile para controle remoto. Todas as soluções são desenvolvidas com foco em eficiência energética, redução de custos operacionais e integração com sistemas existentes, sempre com documentação técnica completa e ART CREA-RS 231706.",
    benefits: [
      "Redução de até 40% em custos operacionais",
      "Monitoramento remoto em tempo real via app ou web",
      "Integração com sistemas existentes sem grandes reformas",
      "Controle inteligente de iluminação, climatização e equipamentos",
      "Relatórios automáticos de consumo e eficiência"
    ],
    services: [
      "Automação de processos industriais com CLP e sistemas SCADA",
      "Sistemas de controle com Arduino, ESP32 e Raspberry Pi",
      "Integração IoT para monitoramento remoto e análise de dados",
      "Automação predial (iluminação, climatização, acesso)",
      "Desenvolvimento de aplicativos mobile e interfaces web",
      "Programação customizada e documentação técnica completa"
    ],
    ctaText: "Solicitar Consultoria de Automação"
  },
  {
    id: "eficiencia",
    title: "Eficiência Energética e Consultoria",
    metaTitle: "Eficiência Energética Santa Rosa RS | Redução de Custos Elétricos",
    metaDescription: "Consultoria em eficiência energética Santa Rosa RS. Diagnósticos, medições com IMS P600-G4, correção de fator de potência e redução de custos até 30%.",
    description: "A Eletro May's oferece serviços especializados de consultoria em eficiência energética para indústrias, comércios e instituições em Santa Rosa e região. Realizamos diagnósticos energéticos completos com medições trifásicas utilizando analisador de energia IMS P600-G4, identificando desperdícios, harmônicos, desequilíbrios de fase e baixo fator de potência. Desenvolvemos projetos de correção com instalação de bancos de capacitores, substituição de equipamentos ineficientes, otimização de iluminação com LED e adequação de sistemas de climatização. Nossos clientes alcançam reduções médias de 20% a 30% nos custos com energia elétrica, com payback entre 12 e 24 meses. Todos os projetos incluem relatório técnico detalhado, análise de viabilidade econômica e ART CREA-RS 231706.",
    benefits: [
      "Redução de 20% a 30% nos custos com energia elétrica",
      "Eliminação de multas por baixo fator de potência",
      "Payback entre 12 e 24 meses com ROI garantido",
      "Diagnóstico preciso com analisador de energia IMS P600-G4",
      "Relatórios técnicos e acompanhamento de resultados"
    ],
    services: [
      "Diagnóstico energético completo com medições trifásicas",
      "Análise de fator de potência e instalação de bancos de capacitores",
      "Estudo de viabilidade técnica e econômica",
      "Substituição de iluminação convencional por LED",
      "Otimização de sistemas de climatização e refrigeração",
      "Consultoria para redução de demanda contratada"
    ],
    ctaText: "Solicitar Diagnóstico Energético"
  },
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
