import { BusinessProfile, WeeklyTask, MetaCampaign, SocialPost } from '../types/marketing';

export const INITIAL_BUSINESS_PROFILE: BusinessProfile = {
  name: 'Good Supplier E.I.',
  tagline: 'Suprimentos de Escritório, Papelaria & Toners HP Originais',
  address: 'Bairro Capuchino',
  city: 'Chimoio',
  province: 'Manica',
  country: 'Moçambique',
  phones: ['+258 835671494', '+258 842244892', '+258 869468195'],
  email: 'goodsupplierei@gmail.com',
  whatsapp: '+258835671494',
  currency: 'MZN',
  monthlyBudget: 35000, // 35.000 MT por mês (valor realista e flexível)
  primaryProducts: [
    'Toner HP LaserJet 1117A',
    'Toner HP LaserJet 147A JetIntelligence',
    'Resmas de Papel A4 Chamex / Rotatrim',
    'Material de Escritório & Papelaria Geral',
    'Cartuchos de Tinta & Acessórios de Impressão',
  ],
};

export const INITIAL_TASKS: WeeklyTask[] = [
  // SEMANA 1
  {
    id: 'w1-1',
    week: 1,
    title: 'Configuração do Gerenciador de Anúncios e WhatsApp Business',
    description: 'Vincular a página do Facebook com o Instagram e conectar a API do WhatsApp Business (+258 835671494) com catálogo de toners e papéis atualizado com preços.',
    channel: 'WhatsApp Business',
    priority: 'Alta',
    completed: true,
    costAllocation: 0,
    deliverable: 'Página Meta integrada e catálogo WhatsApp com fotos dos Toners 1117A e 147A.',
  },
  {
    id: 'w1-2',
    week: 1,
    title: 'Lançamento da Campanha 1: Reconhecimento Local em Chimoio',
    description: 'Anúncio em vídeo/foto apresentando a Good Supplier E.I. no Capuchino para empresários, advogados, contadores e escolas de Chimoio.',
    channel: 'Facebook Ads',
    priority: 'Alta',
    completed: true,
    costAllocation: 20,
    deliverable: 'Campanha ativa no raio de 15km de Chimoio com objetivo de Alcance.',
  },
  {
    id: 'w1-3',
    week: 1,
    title: 'Postagem Orgânica: 3 Dicas para o Toner Durar 30% Mais',
    description: 'Carrossel educativo no Instagram mostrando a diferença entre toners originais HP JetIntelligence e cópias de baixa qualidade que danificam o rolo fusor.',
    channel: 'Instagram Orgânico',
    priority: 'Normal',
    completed: true,
    costAllocation: 0,
    deliverable: 'Carrossel de 5 slides publicado com chamada para o link na bio.',
  },
  {
    id: 'w1-4',
    week: 1,
    title: 'Otimização do Perfil da Empresa no Google e Instagram',
    description: 'Inserir localização exata em Capuchino - Chimoio, horários de funcionamento, fotos nítidas da fachada/balcão e botão de ação rápida para chamada direta.',
    channel: 'Google Perfil',
    priority: 'Média',
    completed: false,
    costAllocation: 0,
    deliverable: 'Bio profissional formatada com CTA: "Envie mensagem para cotação em 5 minutos".',
  },

  // SEMANA 2
  {
    id: 'w2-1',
    week: 2,
    title: 'Ativação da Campanha Direta: Venda de Toners HP 1117A e 147A',
    description: 'Campanha com objetivo "Mensagens no WhatsApp". Anúncio direto de alívio de dor: "Sua impressora parou no meio do expediente? Entregamos toners originais no seu escritório em Chimoio".',
    channel: 'Facebook Ads',
    priority: 'Alta',
    completed: false,
    costAllocation: 35,
    deliverable: 'Criativos em teste A/B (Feed vs Stories) com botão "Conversar no WhatsApp".',
  },
  {
    id: 'w2-2',
    week: 2,
    title: 'Produção de Vídeo Rápido / Reels de Bastidores de Entrega',
    description: 'Gravar vídeo simples mostrando o empacotamento de resmas de papel e toners sendo preparados para envio rápido a uma empresa cliente.',
    channel: 'Instagram Orgânico',
    priority: 'Média',
    completed: false,
    costAllocation: 5,
    deliverable: '1 Reels postado com legenda focada em agilidade e segurança na entrega.',
  },
  {
    id: 'w2-3',
    week: 2,
    title: 'Pesquisa e Contato Proativo com 15 Escritórios de Contabilidade',
    description: 'Disparar mensagens consultivas no WhatsApp para escritórios de contabilidade e advocacia de Chimoio oferecendo tabela corporativa com faturamento quinzenal.',
    channel: 'WhatsApp Business',
    priority: 'Alta',
    completed: false,
    costAllocation: 0,
    deliverable: '15 contatos realizados e 5 cotações enviadas em PDF.',
  },
  {
    id: 'w2-4',
    week: 2,
    title: 'Revisão das Métricas de Cliques e Custo por Mensagem',
    description: 'Pausar criativos com Custo por Mensagem (CPL) elevado e escalar o anúncio com melhor retorno na primeira semana.',
    channel: 'Gestão',
    priority: 'Normal',
    completed: false,
    costAllocation: 0,
    deliverable: 'Ajuste de lances e direcionamento do orçamento para o melhor público.',
  },

  // SEMANA 3
  {
    id: 'w3-1',
    week: 3,
    title: 'Campanha de Retargeting para Visitantes e Engajados',
    description: 'Anunciar exclusivamente para pessoas que interagiram com o Instagram ou Facebook nos últimos 30 dias com oferta especial de combo: "Toner HP + Caixa de Resmas A4".',
    channel: 'Instagram Ads',
    priority: 'Alta',
    completed: false,
    costAllocation: 25,
    deliverable: 'Público personalizado (Custom Audience) criado e campanha de retargeting rodando.',
  },
  {
    id: 'w3-2',
    week: 3,
    title: 'Campanha B2B para Escolas, Universidades e Clínicas',
    description: 'Segmentação por cargos (Diretores, Administradores, Gerentes de Compras) em Chimoio e cidades próximas de Manica oferecendo cotação formal para compras em volume.',
    channel: 'Facebook Ads',
    priority: 'Média',
    completed: false,
    costAllocation: 15,
    deliverable: 'Anúncio B2B com PDF de tabela de preços sob consulta.',
  },
  {
    id: 'w3-3',
    week: 3,
    title: 'Stories Interativos diários com Enquetes sobre Impressão',
    description: 'Caixa de perguntas: "Qual impressora você usa no seu trabalho?", "Com que frequência seu escritório compra papel A4?" para identificar leads quentes.',
    channel: 'Instagram Orgânico',
    priority: 'Normal',
    completed: false,
    costAllocation: 0,
    deliverable: 'Sequência de 4 stories por dia com contato direto via DM para quem respondeu.',
  },

  // SEMANA 4
  {
    id: 'w4-1',
    week: 4,
    title: 'Campanha Relâmpago: Fechamento de Mês e Reposição de Estoque',
    description: 'Anúncio de urgência (últimos 4 dias do mês): "Feche o mês com o estoque do escritório garantido. Preços especiais para faturamento corporativo imediato".',
    channel: 'Facebook Ads',
    priority: 'Alta',
    completed: false,
    costAllocation: 20,
    deliverable: 'Campanha relâmpago de alta conversão ativa até o último dia do mês.',
  },
  {
    id: 'w4-2',
    week: 4,
    title: 'Reativação de Orçamentos Pendentes no WhatsApp',
    description: 'Mensagem para todos os contatos que pediram orçamento mas ainda não fecharam a compra, oferecendo frete grátis em Chimoio para pedidos até sexta-feira.',
    channel: 'WhatsApp Business',
    priority: 'Alta',
    completed: false,
    costAllocation: 0,
    deliverable: 'Lista de transmissão/mensagens 1 a 1 para pelo menos 30 leads.',
  },
  {
    id: 'w4-3',
    week: 4,
    title: 'Relatório Final de Fechamento de Mês e Análise de ROAS',
    description: 'Consolidação de métricas: total investido em anúncios, número de conversas no WhatsApp, quantidade de toners e resmas vendidas, faturamento gerado e lucro líquido.',
    channel: 'Gestão',
    priority: 'Normal',
    completed: false,
    costAllocation: 0,
    deliverable: 'Planilha de ROAS e definição do orçamento expandido para o próximo mês.',
  },
];

export const INITIAL_CAMPAIGNS: MetaCampaign[] = [
  {
    id: 'camp-1',
    title: 'Urgência & Pronta Entrega: Toners HP 1117A e 147A',
    subtitle: 'Fundo de Funil · Venda Imediata no WhatsApp',
    stage: 'Fundo (Vendas & WhatsApp)',
    objective: 'Mensagens no WhatsApp',
    budgetPercentage: 40,
    targetAudience: {
      location: 'Chimoio, Província de Manica (Raio de 25 km)',
      radius: '25 km',
      age: '24 a 58 anos',
      genders: 'Todos os gêneros',
      interests: ['Pequenas e médias empresas', 'Gestão de escritórios', 'Impressoras Hewlett-Packard', 'Material de escritório'],
      jobTitles: ['Contador', 'Gerente de Compras', 'Administrador', 'Secretária Executiva', 'Advogado'],
    },
    headline: 'Toners HP Originais 1117A e 147A em Chimoio | Entrega Rápida no Seu Escritório',
    primaryText: `Acabou a tinta da impressora bem na hora de imprimir relatórios ou contratos urgentes? 

Na Good Supplier E.I. (Capuchino - Chimoio), nós mantemos estoque garantido de Toners HP LaserJet 1117A e 147A JetIntelligence originais para máxima nitidez e rendimento impecável.

Evite cópias baratas que mancham papel e danificam seu equipamento.
Entrega rápida para escritórios e empresas em Chimoio.
Faturamento facilitado com recibo e nota.

Clique no botão abaixo e peça agora sua cotação pelo WhatsApp!`,
    cta: 'Enviar mensagem no WhatsApp',
    imagePath: '/src/assets/images/ad_toner_office_1791069955542.jpg',
    format: 'Imagem Única',
    placement: 'Feeds do Facebook, Feed do Instagram, Stories e Explorar',
  },
  {
    id: 'camp-2',
    title: 'Parceria B2B: Fornecimento Contínuo de Escritório & Papelaria',
    subtitle: 'Meio de Funil · Contratos Corporativos para Empresas',
    stage: 'Meio (Tráfego & Catálogo)',
    objective: 'Geração de Cadastros (Leads)',
    budgetPercentage: 30,
    targetAudience: {
      location: 'Chimoio, Gondola, Sussundenga e Manica',
      radius: '60 km',
      age: '26 a 60 anos',
      genders: 'Todos',
      interests: ['B2B', 'Suprimentos empresariais', 'Contabilidade e Auditoria', 'Administração pública', 'Educação'],
      jobTitles: ['Diretor Geral', 'Gerente Administrativo', 'Responsável de Aquisições', 'Proprietário'],
    },
    headline: 'Reduza até 25% dos Custos de Impressão da Sua Empresa em Chimoio',
    primaryText: `Sua empresa gasta tempo demais procurando onde comprar toners, papel A4 e materiais de escritório avulsos?

A Good Supplier E.I. é o parceiro de confiança para suprimentos empresariais em Chimoio e região:
• Toners HP 1117A, 147A e linha Laserjet com rendimento garantido.
• Resmas de papel A4 de alta alvura e gramatura ideal para alto volume.
• Atendimento prioritário e entregas programadas no seu endereço.
• Faturamento com condições exclusivas para contratos mensais.

Solicite hoje a tabela de fornecimento corporativo da Good Supplier E.I.`,
    cta: 'Pedir Cotação Empresarial',
    imagePath: '/src/assets/images/ad_social_campaign_1791069967109.jpg',
    format: 'Carrossel',
    placement: 'Feeds do Facebook & Instagram',
  },
  {
    id: 'camp-3',
    title: 'Reconhecimento Local: Good Supplier E.I. em Capuchino',
    subtitle: 'Topo de Funil · Fortalecimento de Marca na Cidade',
    stage: 'Topo (Reconhecimento)',
    objective: 'Reconhecimento da Marca',
    budgetPercentage: 15,
    targetAudience: {
      location: 'Chimoio Cidade (Raio de 10 km)',
      radius: '10 km',
      age: '20 a 65 anos',
      genders: 'Todos',
      interests: ['Negócios locais', 'Computadores e eletrônicos', 'Educação', 'Trabalho de escritório'],
      jobTitles: ['Estudantes universitários', 'Funcionários de escritório', 'Profissionais liberais'],
    },
    headline: 'Tudo em Suprimentos de Escritório e Informática no Coração de Chimoio',
    primaryText: `Precisa de material de escritório de qualidade sem ter que mandar vir de fora?

Visite a Good Supplier E.I. no Bairro Capuchino em Chimoio!
Temos toners originais HP, papelaria completa, resmas de papel de primeira linha e assessoria para o seu equipamento de impressão render mais.

Atendimento rápido por telefone e WhatsApp:
(+258) 835671494 / 842244892 / 869468195
Email: goodsupplierei@gmail.com

Venha nos visitar ou mande uma mensagem!`,
    cta: 'Como Chegar à Loja',
    imagePath: '/src/assets/images/hero_marketing_office_1791069979226.jpg',
    format: 'Imagem Única',
    placement: 'Feeds, Stories do Instagram e Facebook',
  },
  {
    id: 'camp-4',
    title: 'Combo Reposição Mensal: Toner HP + Caixa de Resmas A4',
    subtitle: 'Retargeting · Oferta Exclusiva para Clientes & Seguidores',
    stage: 'Retargeting (Reativação)',
    objective: 'Mensagens no WhatsApp',
    budgetPercentage: 15,
    targetAudience: {
      location: 'Pessoas que se envolveram com a página nos últimos 60 dias',
      radius: 'Custom Audience',
      age: '22 a 60 anos',
      genders: 'Todos',
      interests: ['Público de retargeting de engajamento no Instagram e Facebook'],
      jobTitles: ['Clientes anteriores e pessoas que enviaram mensagem'],
    },
    headline: 'Oferta Especial de Reposição: Leve o Toner HP + 5 Resmas A4 com Condição Especial',
    primaryText: `Garanta que o seu escritório nunca pare de produzir neste fechamento de mês.

Monte o seu Kit Produtividade Good Supplier:
Comprando o seu Toner HP 1117A ou 147A, receba condição especial nas resmas de papel A4 com entrega prioritária em Chimoio.

Válido enquanto durar o lote em estoque no Capuchino.
Clique no botão e reserve seu kit pelo WhatsApp agora!`,
    cta: 'Garantir Combo no WhatsApp',
    imagePath: '/src/assets/images/ad_toner_office_1791069955542.jpg',
    format: 'Imagem Única',
    placement: 'Feed do Instagram e Stories',
  },
];

export const INITIAL_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'p-1',
    day: 1,
    dayOfWeek: 'Segunda-feira',
    type: 'Carrossel',
    theme: 'Educativo / Dica',
    hook: 'Por que o toner barato custa o triplo no fim do mês?',
    contentIdea: 'Mostrar como cartuchos piratas vazam pó no interior da impressora HP, estragando o rolo de fusão e manchando contratos importantes. Comparativo de rendimento entre o toner genuíno 1117A/147A e imitações.',
    callToAction: 'Salve este post para consultar antes de fazer as compras do seu escritório!',
    suggestedTime: '08:30 (Início do expediente)',
  },
  {
    id: 'p-2',
    day: 3,
    dayOfWeek: 'Quarta-feira',
    type: 'Reels',
    theme: 'Bastidores & Entrega',
    hook: 'Entregamos em até 45 minutos no centro de Chimoio!',
    contentIdea: 'Gravar a separação de um pedido de 3 caixas de resmas A4 e 2 toners HP 147A, colocando na moto/veículo de entrega e chegando ao escritório do cliente. Música enérgica e texto na tela.',
    callToAction: 'Precisa para hoje? Clique no link da bio e fale no WhatsApp.',
    suggestedTime: '11:45 (Antes do almoço)',
  },
  {
    id: 'p-3',
    day: 5,
    dayOfWeek: 'Sexta-feira',
    type: 'Foto + Texto',
    theme: 'Comercial / Venda',
    hook: 'Sua impressora vai aguentar a segunda-feira?',
    contentIdea: 'Foto nítida e profissional dos toners HP 1117A e 147A empilhados na loja do Capuchino. Lembrete amistoso para os responsáveis de compras checarem os níveis de suprimento antes do fim de semana.',
    callToAction: 'Chame no WhatsApp (+258 835671494) e garanta seu estoque.',
    suggestedTime: '15:00 (Planejamento de fim de semana)',
  },
  {
    id: 'p-4',
    day: 8,
    dayOfWeek: 'Segunda-feira',
    type: 'Stories Diário',
    theme: 'Autoridade / Prova Social',
    hook: 'Enquete: Quantas folhas sua empresa imprime por dia?',
    contentIdea: 'Sequência de Stories: 1) Enquete interativa: Menos de 50 / Entre 50 e 200 / Mais de 500; 2) Explicando qual gramatura de papel evita atolamentos; 3) Apresentando o Toner HP 147A de alto rendimento.',
    callToAction: 'Responda à enquete e receba nossa recomendação no direct!',
    suggestedTime: '09:00',
  },
  {
    id: 'p-5',
    day: 11,
    dayOfWeek: 'Quinta-feira',
    type: 'Carrossel',
    theme: 'Comercial / Venda',
    hook: 'Checklist de Suprimentos Essenciais para Todo Escritório',
    contentIdea: 'Guia visual com os 5 itens indispensáveis: 1) Toner reserva (nunca espere acabar); 2) Papel A4 75g/80g; 3) Grampos e clipes; 4) Pastas suspensas; 5) Canetas e marcadores. Todos disponíveis na Good Supplier E.I.',
    callToAction: 'Peça a lista completa de cotação corporativa pelo WhatsApp!',
    suggestedTime: '14:00',
  },
  {
    id: 'p-6',
    day: 14,
    dayOfWeek: 'Domingo',
    type: 'Stories Diário',
    theme: 'Autoridade / Prova Social',
    hook: 'Planejamento da semana na Good Supplier E.I.',
    contentIdea: 'Foto do balcão organizado, informando que a equipe começa os atendimentos na segunda-feira às 07:30. Reforçar os números de contacto (+258 835671494 / 842244892 / 869468195).',
    callToAction: 'Deixe sua mensagem agora para atendimento prioritário na segunda de manhã.',
    suggestedTime: '19:30',
  },
  {
    id: 'p-7',
    day: 18,
    dayOfWeek: 'Quarta-feira',
    type: 'Reels',
    theme: 'Educativo / Dica',
    hook: 'O erro que estraga o toner da sua impressora HP!',
    contentIdea: 'Demonstração rápida: nunca agite com força excessiva na vertical, nem toque no cilindro verde fotocondutor com os dedos. Mostre o jeito certo de retirar a fita protetora e encaixar na máquina com suavidade.',
    callToAction: 'Compartilhe com a pessoa que troca o toner no seu trabalho!',
    suggestedTime: '12:15',
  },
  {
    id: 'p-8',
    day: 23,
    dayOfWeek: 'Segunda-feira',
    type: 'Foto + Texto',
    theme: 'Comercial / Venda',
    hook: 'Semana de reposição institucional em Chimoio',
    contentIdea: 'Apresentação do serviço de entrega corporativa programada para instituições de ensino, bancos e hospitais. Condições especiais para pedidos acima de 10 resmas ou 3 toners.',
    callToAction: 'Solicite um orçamento formal com NUIT e dados fiscais via email goodsupplierei@gmail.com',
    suggestedTime: '10:00',
  },
  {
    id: 'p-9',
    day: 28,
    dayOfWeek: 'Sexta-feira',
    type: 'Stories Diário',
    theme: 'Comercial / Venda',
    hook: 'Últimos dias do mês: Fechamento de pedidos de estoque',
    contentIdea: 'Contagem regressiva no Stories com fotos dos produtos saindo para entrega. Lembrete: garanta o preço atual antes da virada do mês.',
    callToAction: 'Mande mensagem no WhatsApp para reservar antes que esgote o lote.',
    suggestedTime: '16:00',
  },
];
