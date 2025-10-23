export interface ArticleContent {
  id: string;
  content: string;
}

export const articlesContent: ArticleContent[] = [
  {
    id: "1",
    content: `
## SPDA: Como calcular o nível de proteção correto segundo NBR 5419

A NBR 5419:2015 estabelece os critérios para sistemas de proteção contra descargas atmosféricas (SPDA). O dimensionamento correto é essencial para segurança de pessoas, equipamentos e edificações.

### Níveis de Proteção (NP)

A norma define 4 níveis de proteção, do I (mais rigoroso) ao IV (menos rigoroso):

**Nível I:** Estruturas com alto risco (explosivos, hospitais, centrais de emergência)
- Eficiência: 98%
- Ângulo de proteção: 25° (h=20m)
- Malha: 5x5m

**Nível II:** Indústrias, edifícios comerciais, escolas
- Eficiência: 95%
- Ângulo de proteção: 35° (h=20m)
- Malha: 10x10m

**Nível III:** Residências, estruturas agrícolas
- Eficiência: 90%
- Ângulo de proteção: 45° (h=20m)
- Malha: 15x15m

**Nível IV:** Estruturas com baixa ocupação
- Eficiência: 80%
- Ângulo de proteção: 55° (h=20m)
- Malha: 20x20m

### Cálculo do Risco (R)

A norma exige análise de risco considerando:

1. **Densidade de descargas atmosféricas (Ng)**
   - Santa Rosa-RS: ~5 raios/km²/ano
   - Consultar RINDAT/INPE para dados locais

2. **Área de exposição equivalente (Ae)**
   - Ae = L × W + 6H(L + W) + 9πH²
   - L, W = dimensões da edificação
   - H = altura

3. **Fator de ponderação de perdas**
   - L1: Perda de vida humana
   - L2: Perda de serviço ao público
   - L3: Perda de patrimônio cultural
   - L4: Perda econômica

### Componentes Obrigatórios

**1. Subsistema de Captação**
- Captores Franklin ou gaiola de Faraday
- Condutor mínimo: 50mm² (cobre) ou 70mm² (alumínio)
- Fixação a cada 1,0m

**2. Subsistema de Descida**
- Mínimo 2 descidas para h<20m
- Espaçamento máximo conforme NP (tabela NBR)
- Caixas de inspeção obrigatórias

**3. Subsistema de Aterramento**
- Resistência máxima: 10Ω (recomendado)
- Eletrodos tipo Copperweld Ø16mm
- Hastes mínimo 2,4m profundidade

### Inspeção e Manutenção

**Periodicidade conforme NBR 5419-3:**
- Inspeção visual: Anual
- Teste de continuidade: Anual
- Medição de resistência de aterramento: Anual
- Laudo técnico: Trienal (renovação)

### Custos Médios (Santa Rosa-RS, 2025)

- Residência 100m² (NP III): R$ 2.500 - R$ 4.000
- Galpão industrial 500m² (NP II): R$ 12.000 - R$ 18.000
- Laudo técnico com ART: R$ 450 - R$ 800

**Importante:** SPDA inadequado anula seguros em caso de sinistro.

📞 **Solicite orçamento de SPDA** com nossa equipe CREA-RS 231706.
    `
  },
  {
    id: "2",
    content: `
## Energia Solar em Santa Rosa RS: Vale a pena em 2025?

Análise técnica e financeira sobre viabilidade de sistemas fotovoltaicos na região noroeste do Rio Grande do Sul.

### Radiação Solar em Santa Rosa-RS

**Dados CRESESB/INPE:**
- Média anual: 4,8 kWh/m²/dia
- Melhor período: Dezembro-Fevereiro (5,5 kWh/m²/dia)
- Pior período: Junho-Julho (3,2 kWh/m²/dia)

**Comparação regional:**
- Santa Rosa: 4,8 kWh/m²/dia
- Ijuí: 4,7 kWh/m²/dia
- Porto Alegre: 4,3 kWh/m²/dia
- **Conclusão:** Região favorável para fotovoltaica

### Análise Financeira - Residência Padrão

**Premissas:**
- Consumo médio: 350 kWh/mês
- Tarifa RGE (B1): R$ 0,95/kWh (jan/2025)
- Sistema 4,0 kWp (10 módulos 400W)

**Investimento Inicial:**
- Módulos fotovoltaicos: R$ 8.500
- Inversor 5kW: R$ 4.200
- Estrutura e cabeamento: R$ 2.800
- Projeto e instalação: R$ 3.500
- **Total: R$ 19.000**

**Retorno:**
- Economia mensal: R$ 330 (tarifa - custo disponibilidade)
- Payback simples: 57 meses (4,7 anos)
- Payback real (inflação 5%): 5,2 anos
- Economia em 25 anos: R$ 147.000

### Tarifas RGE Sul e Bandeiras

**Evolução tarifária:**
- 2020: R$ 0,62/kWh
- 2023: R$ 0,82/kWh
- 2025: R$ 0,95/kWh
- **Crescimento médio: 11%/ano**

**Bandeiras tarifárias:**
- Verde: R$ 0,00
- Amarela: R$ 0,01874/kWh
- Vermelha 1: R$ 0,04463/kWh
- Vermelha 2: R$ 0,07877/kWh

*Energia solar elimina impacto das bandeiras.*

### Componentes Recomendados (2025)

**Módulos:**
- Canadian Solar HiKu 550W Mono PERC
- Eficiência: 21,2%
- Garantia: 12 anos produto / 25 anos potência
- Preço: R$ 850/módulo

**Inversores:**
- Growatt MIN 5000TL-XH (residencial)
- Eficiência: 98,4%
- Garantia: 10 anos
- Preço: R$ 4.200

### Marco Legal e Incentivos

**Lei 14.300/2022 (Marco Legal da GD):**
- Sistemas até 31/12/2022: regras antigas indefinidamente
- Novos sistemas: TUSD Fio B progressiva
- 2023-2028: Transição (15% a 90% TUSD)
- 2029+: 100% TUSD Fio B

**ICMS:**
- Isenção aprovada Convênio CONFAZ 16/2015
- Válido em todo RS

**Financiamento:**
- BNDES FNE Sol: até 100% financiado
- Prazo: até 120 meses
- Taxa: 7,5% a.a. + TR

### Manutenção e Vida Útil

**Manutenção preventiva:**
- Limpeza painéis: Semestral (chuva natural geralmente suficiente)
- Inspeção elétrica: Anual
- Custo médio: R$ 300/ano

**Degradação:**
- Módulos Tier 1: 0,5%/ano
- Após 25 anos: mínimo 80% capacidade
- Inversores: troca estimada em 12-15 anos (R$ 4.500)

### Dimensionamento Correto

**Regra prática:**
- Consumo médio (kWh/mês) × 1,3 = Potência ideal (kWp)
- Exemplo: 350 kWh/mês → 4,5 kWp (11-12 módulos)

**Área necessária:**
- 1 kWp ≈ 5-6 m² (módulos modernos)
- Sistema 4 kWp ≈ 24 m²

📞 **Solicite simulação personalizada** com dados reais da sua conta de energia.
    `
  },
  {
    id: "3",
    content: `
## NBR 5410: 10 erros comuns em projetos elétricos residenciais

A NBR 5410:2004 é a norma que regulamenta instalações elétricas de baixa tensão no Brasil. Descubra os erros mais frequentes e como evitá-los.

### 1. Ausência de Dispositivo DR

**Erro:** Não instalar DR ou instalar em circuitos errados.

**Exigência NBR 5410 (item 5.1.3.2):**
- Obrigatório em circuitos de banheiros, cozinhas, lavanderias, áreas externas
- Sensibilidade máxima: 30mA
- Tempo de atuação: ≤ 0,3s

**Consequência:** Risco de choques elétricos fatais (70% dos acidentes domésticos).

**Solução:** DR bipolar 40A/30mA para circuitos de tomadas em áreas molhadas.

### 2. Aterramento Inexistente ou Incorreto

**Erro:** Conectar fio terra ao neutro (comum em instalações antigas).

**Exigência (item 6.4):**
- Sistema TN-S ou TT obrigatório
- Resistência de aterramento ≤ 10Ω (recomendado)
- Condutor de proteção (PE) independente

**Teste simples:**
- Alicate amperímetro no neutro
- Se houver corrente com terra desconectado = aterramento incorreto

**Solução:** Instalar haste Copperweld Ø16mm mínimo 2,4m profundidade.

### 3. Circuitos Sobrecarregados

**Erro:** Apenas 2-3 circuitos para residência inteira.

**Exigência (item 9.5.3):**
- Iluminação: mínimo 1 circuito/60m² ou 800VA
- Tomadas: mínimo 1 circuito/40m² ou 1000VA
- Chuveiro: circuito exclusivo
- Ar-condicionado: circuito dedicado

**Exemplo residência 120m²:**
- Mínimo 8-10 circuitos
- Quadro 12-16 disjuntores

### 4. Bitolas de Condutores Subdimensionadas

**Erro:** Usar 1,5mm² em tomadas ou 4mm² em chuveiro 7500W.

**Tabela mínima NBR 5410:**
- Iluminação: 1,5mm²
- Tomadas gerais: 2,5mm²
- Chuveiro 5500W: 6mm²
- Chuveiro 7500W: 10mm²
- Ar split 12.000 BTUs: 4mm²
- Forno elétrico 220V/4500W: 4mm²

**Cálculo correto:** I = P / (V × cosφ) → Tabela 36 NBR (método de instalação).

### 5. Tomadas Insuficientes ou Mal Posicionadas

**Erro:** Apenas 2-3 tomadas por cômodo.

**Exigência (item 9.5.2):**

**Sala/Dormitório:**
- 1 tomada a cada 5m de perímetro
- Espaçamento máximo: 5m

**Cozinha:**
- 1 tomada a cada 3,5m bancada
- Mínimo 3 tomadas acima bancada
- Tomadas a 1,30m altura (fogão/geladeira)

**Banheiro:**
- Mínimo 1 tomada próxima ao lavatório
- Distância mínima 60cm do box

### 6. Quadro de Distribuição Inadequado

**Erro:** Quadro sem barramento de neutro/terra separados ou sem reserva.

**Exigência (item 6.5.4):**
- Barramento terra isolado do neutro
- Identificação clara de todos os circuitos
- Reserva mínima 20% para ampliações
- Altura instalação: 1,30m a 1,80m

**Disjuntores termomagnéticos:**
- Curva B: cargas resistivas (chuveiro, lâmpadas)
- Curva C: motores e ar-condicionado

### 7. Falta de Projeto Elétrico e ART

**Erro:** Executar instalação sem projeto aprovado.

**Exigência legal:**
- Todo imóvel > 75m² necessita projeto elétrico
- Projeto deve ter ART CREA
- Prefeituras exigem para habite-se

**Projeto deve conter:**
- Planta baixa com pontos elétricos
- Diagrama unifilar
- Memorial descritivo
- Cálculo de demanda
- Dimensionamento de condutores

### 8. Emendas Mal Executadas

**Erro:** Torcer fios e isolar com fita isolante.

**Exigência (item 6.2.11):**
- Emendas apenas em caixas acessíveis
- Uso de conectores apropriados (Wago, Sindal)
- Vedação com fita autofusão + isolante

**Emendas corretas:**
- Fios rígidos: conectores tipo Wago 221
- Fios flexíveis: terminais pré-isolados
- Nunca fazer emendas dentro de eletrodutos

### 9. Pontos de Iluminação Inadequados

**Erro:** Apenas 1 ponto central de teto por cômodo.

**Exigência (item 9.5.1):**
- Cômodos ≤6m²: 1 ponto, mínimo 100VA
- Cômodos >6m²: 1 ponto, mínimo 100VA + (60VA × m²)
- Banheiros: mínimo 1 arandela + 1 teto
- Corredores: ponto a cada 3m

### 10. Seção de Neutro Inferior à Fase

**Erro:** Usar neutro 10mm² com fase 16mm² em circuitos 220V.

**Exigência (item 6.2.6.2):**
- Circuitos 127V/220V com 2 fases: neutro = fase
- Circuitos com harmônicos: neutro pode ser maior que fase

**Importante em:**
- Circuitos com lâmpadas LED
- Equipamentos eletrônicos (computadores)
- Inversores de frequência

### Penalidades por Não Conformidade

❌ Multas de até R$ 10.000 (fiscalização CREA)
❌ Recusa de vistoria elétrica RGE Sul
❌ Negação de habite-se pela prefeitura
❌ Seguro residencial pode ser negado
❌ Responsabilidade civil em caso de acidente

### Laudo de Conformidade

**Quando solicitar:**
- Imóveis antigos (>15 anos)
- Compra/venda de imóveis
- Renovação de seguro residencial
- Após reformas elétricas

**O que inclui:**
- Inspeção visual completa
- Teste de continuidade e isolamento
- Medição de aterramento
- Relatório fotográfico
- ART CREA

📞 **Solicite inspeção técnica NBR 5410** com engenheiro eletricista CREA-RS 231706.
    `
  },
  {
    id: "4",
    content: `
## Perícia Técnica Elétrica: Quando é necessária e como solicitar

Perícia técnica elétrica é a análise especializada de instalações, equipamentos ou incidentes elétricos, realizada por engenheiro eletricista habilitado.

### Quando a Perícia é Necessária

#### 1. Processos Judiciais
- Acidentes com vítimas (choques elétricos)
- Incêndios de origem elétrica
- Explosões de equipamentos
- Disputas condominiais
- Ações trabalhistas

#### 2. Seguradoras
- Sinistros elétricos (raios, curto-circuito)
- Queima de equipamentos
- Incêndios em quadros de distribuição
- Perda de produção industrial

#### 3. Disputas Comerciais
- Equipamentos com defeito de fabricação
- Instalações elétricas mal executadas
- Não conformidade com projetos
- Garantias não honradas

#### 4. Investigação Técnica
- Causas de falhas recorrentes
- Problemas de qualidade de energia
- Quedas de energia frequentes
- Aquecimento em painéis elétricos

### Tipos de Perícia Elétrica

**1. Perícia Judicial**
- Nomeação por juiz em processo
- Prazo legal para execução
- Assistentes técnicos das partes
- Quesitos obrigatórios

**2. Perícia Extrajudicial**
- Solicitação direta de cliente
- Acordos entre partes
- Seguradoras
- Investigação preventiva

**3. Perícia Criminal**
- Crimes envolvendo eletricidade
- Furto de energia
- Fraudes em medidores
- Acidentes fatais

### Escopo Típico de Perícia

#### Vistoria Local
- Inspeção visual detalhada
- Registro fotográfico
- Medições elétricas (quando possível)
- Coleta de evidências

#### Análise Técnica
- Revisão de projetos elétricos
- Verificação de conformidade (NBR 5410, NBR 5419)
- Cálculos de curto-circuito
- Simulações computacionais

#### Documentação
- Relatório pericial completo
- Laudo técnico fundamentado
- ART CREA específica
- Anexos (fotos, medições, cálculos)

### Documentos Necessários

**Para Solicitar Perícia:**
- Descrição detalhada do problema/sinistro
- Projeto elétrico original (se houver)
- Fotos do local/equipamento
- Boletim de ocorrência (se aplicável)
- Notas fiscais de equipamentos
- Contratos de instalação/manutenção

**Perícia Judicial:**
- Mandado judicial
- Quesitos das partes
- Prazo determinado
- Local da vistoria

### Custos Médios (2025)

**Perícia Extrajudicial:**
- Residencial simples: R$ 1.500 - R$ 3.000
- Comercial/industrial: R$ 3.000 - R$ 8.000
- Incêndio elétrico: R$ 5.000 - R$ 15.000
- Análise de qualidade energia: R$ 2.500 - R$ 6.000

**Perícia Judicial:**
- Honorários definidos pelo juiz
- Adiantamento por uma das partes
- Possibilidade de assistentes técnicos

### Casos Comuns em Santa Rosa-RS

#### 1. Incêndios em Propriedades Rurais
- Causa: Instalações precárias em galpões
- Perícia determina: origem elétrica ou outra
- Seguro: aceita ou recusa sinistro

#### 2. Queima de Equipamentos Industriais
- Causa: Queda/pico de tensão RGE
- Perícia: responsabilidade concessionária
- Resultado: indenização ou não

#### 3. Acidentes de Trabalho
- Choque elétrico em manutenção
- Perícia: responsabilidade empregador
- NR-10: treinamento e EPIs adequados

#### 4. Raios em Edificações
- Dano em eletrônicos/eletrodomésticos
- Perícia: SPDA adequado ou não
- Seguro: cobertura ou exclusão

### Prazos Típicos

- Vistoria local: 1-3 dias úteis
- Medições e testes: 1-5 dias úteis
- Elaboração do laudo: 7-15 dias úteis
- **Prazo total médio: 15-30 dias**

*Perícias complexas (incêndios) podem levar até 60 dias.*

### Qualificação do Perito

**Requisitos obrigatórios:**
- Engenheiro eletricista CREA ativo
- Especialização em perícia (desejável)
- Experiência comprovada
- Seguro de responsabilidade civil

**Nosso time:**
- CREA-RS 231706
- +15 anos experiência em perícias
- Laudos aceitos em tribunais RS
- Parceria com seguradoras região

### Como Solicitar Perícia

1. **Contato inicial:** Descrever situação
2. **Orçamento:** Escopo e prazo definidos
3. **Contrato:** Formalização do serviço
4. **Vistoria:** Agendamento no local
5. **Laudo:** Entrega do relatório técnico
6. **Esclarecimentos:** Suporte pós-entrega

📞 **Solicite perícia técnica elétrica** com engenheiros especializados CREA-RS 231706.
    `
  },
  {
    id: "5",
    content: `
## Termografia em Quadros Elétricos: Previna Incêndios e Falhas

Termografia infravermelha é uma técnica não invasiva de manutenção preditiva que detecta pontos quentes invisíveis a olho nu, prevenindo falhas catastróficas em instalações elétricas.

### O que é Termografia Elétrica?

**Princípio físico:**
- Todos os corpos emitem radiação infravermelha
- Temperatura ↑ = emissão IR ↑
- Câmera termográfica converte IR em imagem térmica
- Resolução: 0,1°C de diferença

**Aplicação em elétrica:**
- Conexões oxidadas/frouxas aquecem
- Sobrecarga gera calor excessivo
- Desequilíbrio de fases
- Falhas em isolamento

### Principais Problemas Detectados

#### 1. Conexões Frouxas
**Sintoma térmico:** ΔT > 20°C em relação a fases adjacentes
**Causa:** Aperto inadequado, vibração, oxidação
**Risco:** Arco elétrico, incêndio
**Ação:** Reapertar ou substituir conectores

#### 2. Barramentos Sobrecarregados
**Sintoma:** Aquecimento uniforme > 50°C
**Causa:** Carga acima da nominal
**Risco:** Deformação, curto-circuito
**Ação:** Redimensionar ou redistribuir carga

#### 3. Disjuntores Defeituosos
**Sintoma:** Aquecimento localizado na base
**Causa:** Contatos internos queimados
**Risco:** Falha na proteção, incêndio
**Ação:** Substituição imediata

#### 4. Desequilíbrio de Fases
**Sintoma:** Diferença > 10°C entre fases
**Causa:** Cargas mal distribuídas
**Risco:** Sobrecarga de neutro, aquecimento
**Ação:** Redistribuir circuitos

### Classificação de Severidade

**Norma NFPA 70B e ABNT NBR 5462:**

**🟢 Normal (ΔT < 5°C)**
- Sem ação imediata
- Monitorar em próxima inspeção

**🟡 Atenção (ΔT 5-20°C)**
- Programar correção em 30 dias
- Monitorar semanalmente

**🟠 Urgente (ΔT 20-40°C)**
- Corrigir em 7 dias
- Inspeção diária

**🔴 Crítico (ΔT > 40°C ou > 90°C absoluto)**
- Correção imediata
- Desligar equipamento se possível

### Equipamentos Inspecionados

#### Quadros de Distribuição
- Barramentos principais
- Conexões de entrada/saída
- Disjuntores termomagnéticos
- Neutro e terra

#### Painéis Industriais
- Contatores e relés
- Fusíveis NH/Diazed
- Chaves seccionadoras
- Soft-starters e inversores

#### Subestações
- Transformadores (isolamento)
- Chaves de MT
- Buchas passantes
- Cabos de força

#### Motores Elétricos
- Rolamentos (aquecimento mecânico)
- Caixa de ligação
- Isolamento de bobinas

### Periodicidade Recomendada

**Instalações industriais:**
- Críticas: Mensal
- Média criticidade: Trimestral
- Baixa criticidade: Semestral

**Instalações comerciais:**
- Shopping centers: Trimestral
- Edifícios comerciais: Semestral
- Estabelecimentos pequenos: Anual

**Residências:**
- Apenas em casos específicos (problemas recorrentes)

### Vantagens da Termografia

✅ **Não invasiva:** Não requer desligamento
✅ **Rápida:** 1 quadro médio em 15-30 min
✅ **Precisa:** Identifica problema exato
✅ **Documentada:** Registro visual permanente
✅ **Preditiva:** Evita paradas não programadas
✅ **Econômica:** Previne prejuízos maiores

### Exemplo Real - Caso Santa Rosa

**Cliente:** Frigorífico (produção 24h)

**Problema detectado:**
- Conexão barramento principal: 95°C
- ΔT de 62°C vs temperatura ambiente
- Classificação: CRÍTICO

**Ação tomada:**
- Desligamento programado (madrugada)
- Substituição de barramento
- Reaperto de todas conexões

**Resultado:**
- Investimento correção: R$ 1.800
- **Prejuízo evitado:** R$ 80.000 (parada + incêndio potencial)

### Relatório de Termografia

**Conteúdo:**
- Imagens térmicas de todos pontos
- Imagens digitais correspondentes
- Tabela de temperaturas
- Classificação de severidade
- Recomendações técnicas
- ART CREA

**Formato:**
- PDF com imagens termográficas
- Tabelas de medição
- Priorização de correções

### Legislação e Normas

**NR-10 (Segurança em Instalações Elétricas):**
- Item 10.2.4: Manutenção preventiva obrigatória
- Termografia como método reconhecido

**ABNT NBR 5410:**
- Item 6.6.5: Manutenção de instalações elétricas

**NFPA 70B:**
- Padrão internacional manutenção preditiva

### Equipamento Utilizado

**Câmera termográfica profissional:**
- Resolução: 320×240 pixels
- Sensibilidade térmica: <0,05°C
- Faixa: -20°C a +350°C
- Certificação metrológica RBC

**Software análise:**
- Relatórios automáticos
- Comparação temporal
- Gráficos de tendência

### Custos Médios (2025)

**Termografia elétrica:**
- Residencial (1-2 quadros): R$ 400 - R$ 600
- Comercial pequeno (3-5 quadros): R$ 800 - R$ 1.200
- Industrial (até 10 pontos): R$ 1.500 - R$ 2.500
- Industrial completa (>20 pontos): R$ 3.000 - R$ 6.000

**Incluso:**
- Visita técnica
- Inspeção termográfica
- Relatório completo
- ART CREA
- Recomendações

📞 **Agende termografia preditiva** e evite falhas elétricas antes que ocorram.
    `
  },
  {
    id: "6",
    content: `
## Payback Real de Energia Solar: Análise Técnica e Financeira

Calcular o payback de um sistema fotovoltaico vai além de dividir investimento por economia mensal. Análise profissional considera degradação, inflação, manutenção e mudanças regulatórias.

### Metodologia Profissional de Cálculo

#### 1. Payback Simples (Método Incorreto)

❌ **Fórmula básica:**
\`\`\`
Payback = Investimento Total / Economia Mensal
\`\`\`

**Limitações:**
- Ignora valor do dinheiro no tempo
- Desconsidera inflação energética
- Não inclui custos de O&M
- Omite degradação dos módulos

#### 2. Payback Real (Método Correto)

✅ **Fluxo de caixa descontado:**
\`\`\`
VPL(t) = Σ [(Economia Ano n × (1+Inflação)^n) / (1+TMA)^n] - Investimento
\`\`\`

Onde:
- VPL = Valor Presente Líquido
- TMA = Taxa Mínima de Atratividade
- n = ano de análise

**Payback real:** Ano em que VPL = 0

### Exemplo Prático - Santa Rosa RS

**Dados do sistema:**
- Consumo médio: 450 kWh/mês
- Sistema: 5,28 kWp (12 módulos 440W)
- Investimento: R$ 24.500
- Tarifa RGE (jan/2025): R$ 0,95/kWh

**Premissas econômicas:**
- Inflação energética: 8% a.a.
- Inflação geral: 4,5% a.a.
- TMA (CDI): 11,75% a.a.
- Degradação módulos: 0,55% a.a.

#### Ano 1
- Geração: 660 kWh/mês × 12 = 7.920 kWh
- Economia: 7.920 × R$ 0,95 = R$ 7.524
- Custo O&M: R$ 350
- **Fluxo de caixa líquido: R$ 7.174**

#### Ano 5
- Tarifa projetada: R$ 1,39/kWh
- Geração (degradação): 7.702 kWh
- Economia: R$ 10.706
- Custo O&M: R$ 420
- **Fluxo líquido: R$ 10.286**

#### Ano 10
- Tarifa: R$ 2,05/kWh
- Geração: 7.488 kWh
- Economia: R$ 15.350
- Custo O&M + Troca inversor: R$ 5.900
- **Fluxo líquido: R$ 9.450**

**Resultados:**
- Payback simples (incorreto): 3,3 anos
- **Payback real (VPL): 5,8 anos**
- TIR (25 anos): 18,2% a.a.
- VPL (25 anos): R$ 87.400

### Fatores que Afetam o Payback

#### 1. Tarifa de Energia

**Cenário baixo (R$ 0,80/kWh):**
- Payback: 7,2 anos
- TIR: 14,1%

**Cenário médio (R$ 0,95/kWh):**
- Payback: 5,8 anos
- TIR: 18,2%

**Cenário alto (R$ 1,15/kWh):**
- Payback: 4,6 anos
- TIR: 23,5%

#### 2. Qualidade dos Componentes

**Tier 1 (Canadian, JinkoSolar):**
- Degradação: 0,55%/a.a.
- Garantia: 25 anos linear
- Investimento: +15%
- **Payback: 5,8 anos**

**Tier 2-3 (marcas genéricas):**
- Degradação: 0,8%/a.a.
- Garantia: 20 anos
- Investimento: -15%
- **Payback: 6,1 anos** (pior desempenho a longo prazo)

#### 3. Marco Legal (Lei 14.300/2022)

**Sistemas instalados até 31/12/2022:**
- Regras antigas indefinidamente
- Créditos 100% compensados
- Payback: 5,8 anos

**Sistemas novos (2023-2028):**
- TUSD Fio B progressiva
- 2025: 39% TUSD
- Payback: 6,2 anos

**Sistemas pós-2029:**
- 100% TUSD Fio B
- Payback: 7,5 anos

### Custos de Operação e Manutenção

#### Manutenção Preventiva
- Limpeza painéis: R$ 300/ano (semestral)
- Inspeção elétrica: R$ 250/ano
- **Total anual: R$ 550**

#### Manutenção Corretiva (média)
- Módulos: Garantia 25 anos (custo zero)
- Inversor: Troca ano 12-15 (R$ 5.000)
- Estrutura: Reaperto (R$ 200 a cada 3 anos)

#### Seguro (opcional)
- Cobertura: Incêndio, raio, vendaval
- Custo: 0,5% do investimento/ano
- R$ 24.500 × 0,5% = R$ 123/ano

### Análise de Sensibilidade

**Variáveis críticas (impacto no payback):**

1. **Tarifa energia:** ±10% → ±1,2 anos
2. **Investimento inicial:** ±10% → ±0,6 anos
3. **Radiação solar:** ±5% → ±0,3 anos
4. **TMA:** ±2% → ±0,4 anos

**Conclusão:** Tarifa é fator mais sensível.

### Comparação com Investimentos

**Rentabilidade 25 anos (TIR):**
- Tesouro IPCA+: 6,5% a.a.
- CDB pré-fixado: 12% a.a.
- Ações IBOV: 14% a.a. (volátil)
- **Energia solar: 18,2% a.a.** ✅
- Fundos imobiliários: 9% a.a.

**Vantagens adicionais:**
- ✅ Proteção contra inflação energética
- ✅ Investimento em ativo próprio
- ✅ Liquidez (valorização imóvel)
- ✅ Hedge contra bandeiras tarifárias

### Erros Comuns em Cálculos

❌ **Erro 1:** Usar economia mensal atual por 25 anos
*Correto: Projetar inflação energética*

❌ **Erro 2:** Ignorar custo de disponibilidade
*Correto: Subtrair R$ 40-100/mês da economia*

❌ **Erro 3:** Não considerar degradação
*Correto: Reduzir 0,55%/ano na geração*

❌ **Erro 4:** Esquecer troca do inversor
*Correto: Provisionar R$ 4.000-6.000 no ano 12-15*

❌ **Erro 5:** Comparar com investimentos isentos IR
*Correto: Energia solar tem IR zero*

### Quando NÃO Vale a Pena

⚠️ **Casos críticos:**
- Sombreamento > 20% do ano
- Telhado em más condições (troca necessária)
- Consumo < 200 kWh/mês (custo fixo alto)
- Pretensão de mudar em < 5 anos
- Tarifa social (subsidiada)

### Financiamento vs À Vista

**À vista (R$ 24.500):**
- Payback: 5,8 anos
- TIR: 18,2%

**Financiado 60x (taxa 1,5%/mês):**
- Entrada: R$ 4.900 (20%)
- Parcela: R$ 540/mês
- Economia: R$ 627/mês
- **Fluxo positivo desde mês 1: R$ 87/mês**
- Payback: 4,2 anos (pós-quitação)

*Financiamento pode ser vantajoso se TIR investimento alternativo > custo crédito.*

### Ferramentas de Simulação

**Softwares profissionais:**
- PVsyst: Análise detalhada de sombreamento
- SAM (NREL): Modelagem financeira avançada
- Helioscope: Projeto e viabilidade
- Aurora Solar: Design e análise econômica

📊 **Solicite análise financeira completa** com simulação personalizada do seu projeto.
    `
  }
];
