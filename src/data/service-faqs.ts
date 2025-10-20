export const serviceFAQs = {
  "energia-solar": [
    {
      question: "Como é calculado o payback da energia solar?",
      answer: "O payback é calculado dividindo o investimento total pela economia mensal na conta de luz. Em média, sistemas solares em Santa Rosa-RS têm payback de 4 a 6 anos, considerando a tarifa atual da RGE e a irradiação solar da região."
    },
    {
      question: "Qual a diferença entre sistema on-grid, off-grid e híbrido?",
      answer: "On-grid: conectado à rede elétrica, sem baterias, permite compensação de energia. Off-grid: independente da rede, usa baterias. Híbrido: combina conexão à rede com baterias para backup em falta de energia."
    },
    {
      question: "Preciso fazer manutenção nos painéis solares?",
      answer: "A manutenção é mínima. Recomendamos limpeza semestral dos painéis (chuva já auxilia) e inspeção anual do sistema. Inversores têm garantia de 5-10 anos e painéis de 25 anos."
    },
    {
      question: "O sistema funciona em dias nublados?",
      answer: "Sim, mas com geração reduzida (30-50% da capacidade). O sistema é dimensionado considerando a média anual de irradiação solar, incluindo dias nublados e chuvosos."
    },
    {
      question: "Posso vender energia excedente?",
      answer: "No sistema on-grid, a energia excedente é injetada na rede e gera créditos que podem ser utilizados em até 60 meses, conforme regras da ANEEL. Não há venda direta, mas compensação na fatura."
    },
    {
      question: "Qual o prazo de instalação?",
      answer: "Após aprovação do projeto pela concessionária (RGE), a instalação leva de 2 a 5 dias úteis. O processo completo, desde visita técnica até energização, varia de 45 a 90 dias."
    },
    {
      question: "O sistema valoriza meu imóvel?",
      answer: "Sim. Imóveis com energia solar podem ter valorização de 3% a 6%, segundo estudos do setor. Além disso, tornam-se mais atrativos no mercado por reduzirem custos operacionais."
    }
  ],
  
  "spda": [
    {
      question: "Qual a periodicidade do laudo de SPDA?",
      answer: "A NBR 5419 recomenda inspeções anuais. Para edificações comerciais e industriais, pode ser exigida periodicidade semestral, dependendo do nível de risco e exigência do corpo de bombeiros."
    },
    {
      question: "O que é verificado na inspeção de SPDA?",
      answer: "Verificamos: integridade dos captores, continuidade elétrica, resistência de aterramento (≤10Ω), conexões e soldas, distância de segurança, proteção contra corrosão e conformidade com NBR 5419."
    },
    {
      question: "Qual a diferença entre SPDA e aterramento?",
      answer: "SPDA (para-raios) protege contra descargas atmosféricas. Aterramento dissipa correntes de falta e garante segurança. Ambos são interligados, mas têm funções distintas e devem atender NBR 5419 e NBR 5410."
    },
    {
      question: "Meu imóvel precisa de SPDA?",
      answer: "Edificações com mais de 3 andares, áreas com grande circulação de pessoas, depósitos de inflamáveis e estruturas metálicas geralmente exigem SPDA. Uma análise de risco segundo NBR 5419 define a necessidade."
    },
    {
      question: "O laudo de SPDA é obrigatório?",
      answer: "Sim, para obtenção e renovação de AVCB (Auto de Vistoria do Corpo de Bombeiros). Também pode ser exigido por seguradoras e em processos de licenciamento."
    },
    {
      question: "Quanto custa um sistema de SPDA?",
      answer: "Depende da área, altura e complexidade da edificação. Projetos residenciais partem de R$ 2.000. Edificações comerciais e industriais exigem orçamento personalizado após análise técnica."
    }
  ],

  "laudos": [
    {
      question: "Quais tipos de laudos técnicos vocês emitem?",
      answer: "Emitimos laudos de SPDA, aterramento, isolamento elétrico, instalações elétricas prediais, análise de conformidade com NBR 5410/14039, perícias judiciais e laudos para seguradoras."
    },
    {
      question: "Qual a validade de um laudo técnico?",
      answer: "Laudos de SPDA: 12 meses. Laudos de instalações elétricas: 24 meses (residencial) ou 12 meses (comercial/industrial). Perícias técnicas não têm validade, pois são pontuais."
    },
    {
      question: "O laudo vem com ART?",
      answer: "Sim, todos os nossos laudos são acompanhados de ART (Anotação de Responsabilidade Técnica) emitida pelo engenheiro responsável CREA-RS 231706."
    },
    {
      question: "Quanto tempo leva para emitir um laudo?",
      answer: "Após vistoria técnica, emitimos laudos simples em 3-5 dias úteis. Laudos complexos ou perícias podem levar de 7 a 15 dias, dependendo da análise necessária."
    },
    {
      question: "Posso usar o laudo para seguro ou financiamento?",
      answer: "Sim, nossos laudos são aceitos por seguradoras, bancos e órgãos públicos. Incluem análise técnica completa, registro fotográfico, medições e recomendações."
    }
  ],

  "projetos-eletricos": [
    {
      question: "Quais itens a NBR 5410 exige em projetos residenciais?",
      answer: "A NBR 5410 exige: dimensionamento de circuitos, proteções (disjuntores e DR), aterramento, previsão de cargas, memorial descritivo, plantas com simbologia, lista de materiais e ART do projeto."
    },
    {
      question: "Preciso de projeto para reforma elétrica?",
      answer: "Sim, se houver alteração de cargas, ampliação de circuitos ou mudança no quadro de distribuição. Projetos garantem segurança, conformidade com NBR 5410 e evitam problemas com concessionária."
    },
    {
      question: "O que é um projeto As Built?",
      answer: "As Built é o projeto 'como construído', documentando a execução real da obra. É essencial para manutenções futuras e exigido em edificações comerciais e industriais."
    },
    {
      question: "Projeto elétrico é obrigatório?",
      answer: "Para cargas acima de 75kW (residencial) ou 75kW (comercial), a concessionária exige projeto. Mesmo abaixo disso, é altamente recomendado por segurança e conformidade."
    },
    {
      question: "Qual a diferença entre projeto BT e MT?",
      answer: "BT (Baixa Tensão): até 1.000V, geralmente 127V/220V/380V. MT (Média Tensão): acima de 1.000V, comum em indústrias e grandes comércios. Projetos MT seguem NBR 14039."
    },
    {
      question: "Quanto custa um projeto elétrico?",
      answer: "Projetos residenciais partem de R$ 800. Projetos comerciais/industriais dependem da carga instalada, área e complexidade. Fornecemos orçamento após análise."
    }
  ],

  "qualidade-de-energia": [
    {
      question: "O que é análise de qualidade de energia?",
      answer: "É a medição e análise de parâmetros como harmônicos, flicker, desequilíbrio de fases, fator de potência e interrupções. Identifica problemas que causam danos a equipamentos e aumentam o consumo."
    },
    {
      question: "Quais equipamentos são usados na análise?",
      answer: "Utilizamos analisadores de energia classe A, como Fluke, Embrasul IMS P600-G4 e Power Logic, que registram dados conforme PRODIST e normas IEEE."
    },
    {
      question: "Como sei se preciso de análise de qualidade de energia?",
      answer: "Indicativos: queima frequente de equipamentos, disparos de proteção sem causa aparente, superaquecimento, aumento inexplicado no consumo, problemas em sistemas de TI ou iluminação."
    },
    {
      question: "Quanto tempo dura a análise?",
      answer: "A medição é contínua por 7 dias (168 horas), conforme PRODIST. Após coleta, emitimos relatório técnico em 5-7 dias úteis com diagnóstico e recomendações."
    },
    {
      question: "A concessionária pode ser responsabilizada?",
      answer: "Se os distúrbios forem originados na rede da concessionária e violarem os limites do PRODIST, sim. Nosso relatório serve como base técnica para abertura de reclamação na ANEEL."
    },
    {
      question: "Qual o custo da análise?",
      answer: "A partir de R$ 1.500 para análise básica (1 ponto de medição). Análises complexas com múltiplos pontos têm valor sob consulta."
    }
  ],

  "termografia": [
    {
      question: "O que é termografia elétrica?",
      answer: "É uma técnica de inspeção não invasiva que usa câmeras infravermelhas para detectar pontos quentes em instalações elétricas, indicando falhas antes de causarem danos."
    },
    {
      question: "Quais itens são inspecionados?",
      answer: "Quadros de distribuição, barramentos, conectores, cabos, disjuntores, transformadores, motores, painéis de comando e subestações."
    },
    {
      question: "Qual a periodicidade recomendada?",
      answer: "Indústrias: semestral. Comércio: anual. Edificações críticas (hospitais, data centers): trimestral. A NR-10 recomenda termografia em manutenções preventivas."
    },
    {
      question: "Como funciona o laudo de termografia?",
      answer: "Incluímos imagens termográficas, temperaturas medidas, classificação de criticidade (baixa, média, alta), análise técnica e recomendações de correção."
    },
    {
      question: "A termografia detecta que tipos de falhas?",
      answer: "Conexões soltas, sobrecarga, desequilíbrio de fases, falhas em disjuntores, isolamento degradado, pontos de arco elétrico e componentes subdimensionados."
    },
    {
      question: "Preciso desligar os equipamentos?",
      answer: "Não. A grande vantagem da termografia é ser não invasiva e realizada com equipamentos energizados, sem interromper processos produtivos."
    },
    {
      question: "Qual o investimento?",
      answer: "A partir de R$ 800 para inspeção básica (até 3 quadros). Plantas industriais completas têm valor sob consulta após levantamento técnico."
    }
  ],

  "automacao": [
    {
      question: "O que é automação industrial?",
      answer: "É a aplicação de sistemas de controle (CLPs, IHMs, sensores) para executar processos industriais com mínima intervenção humana, aumentando eficiência, segurança e produtividade."
    },
    {
      question: "Quais os benefícios da automação?",
      answer: "Redução de custos operacionais, aumento de produtividade, melhoria na qualidade, redução de erros humanos, monitoramento em tempo real e maior segurança."
    },
    {
      question: "Vocês trabalham com quais marcas de CLPs?",
      answer: "Siemens, Allen-Bradley/Rockwell, WEG, Schneider Electric, Mitsubishi e outras, dependendo da necessidade e infraestrutura existente."
    },
    {
      question: "Fazem retrofit de máquinas antigas?",
      answer: "Sim, especializamo-nos em modernização de máquinas e linhas de produção, substituindo painéis obsoletos por sistemas atuais, preservando investimentos."
    },
    {
      question: "Oferecem suporte pós-implantação?",
      answer: "Sim, oferecemos contratos de manutenção preventiva, suporte técnico remoto e presencial, treinamento de operadores e documentação completa."
    }
  ]
};
