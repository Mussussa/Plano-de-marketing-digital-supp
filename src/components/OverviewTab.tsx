import React from 'react';
import { BusinessProfile } from '../types/marketing';
import { formatMoney, formatRawNumber } from '../utils/currency';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Phone,
  Mail,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';

interface OverviewTabProps {
  business: BusinessProfile;
  onNavigate: (tab: string) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ business, onNavigate }) => {
  const budget = business.monthlyBudget;
  // Estimated metrics based on Mozambique Meta CPM/CPC benchmarks
  const estimatedImpressions = Math.round((budget * 0.65) / 0.45); // ~50k impressions
  const estimatedClicks = Math.round(estimatedImpressions * 0.024); // ~1,200 clicks
  const estimatedWhatsAppLeads = Math.round(estimatedClicks * 0.18); // ~216 conversations
  const estimatedSales = Math.round(estimatedWhatsAppLeads * 0.22); // ~47 orders
  const targetROAS = 4.2;

  return (
    <div className="space-y-8">
      {/* Store & Strategy Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border border-slate-800 p-6 sm:p-8">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-medium">
              <span>Plano Estratégico Mensal</span>
              <span aria-hidden="true">·</span>
              <span>Tráfego Pago & Social Media</span>
              <span aria-hidden="true">·</span>
              <span>Edição Chimoio - Moçambique</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl text-balance">
              Plano de Crescimento & Vendas para {business.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Estratégia integrada focada em campanhas de alta conversão no Facebook e Instagram Ads direcionando para o WhatsApp Business, combinada com geração de demanda B2B contínua para toners HP LaserJet (1117A, 147A) e papelaria em Chimoio e província de Manica.
            </p>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Localização</div>
                  <div className="text-slate-400">{business.address}, {business.city}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Canal Principal</div>
                  <div className="text-slate-400">{business.phones[0]} (WhatsApp)</div>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <Package className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Produtos Foco</div>
                  <div className="text-slate-400">HP 1117A, 147A & Resmas A4</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('schedule')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20 cursor-pointer"
              >
                <span>Ver Cronograma Semanal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('campaigns')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <span>Ver Anúncios Prontos</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/80 rounded-xl border border-slate-700/80 p-5 space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Resumo Operacional Mensal
              </div>

              <div className="space-y-3 divide-y divide-slate-700/60">
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-slate-400">Orçamento Previsto</span>
                  <span className="font-bold text-white tabular-nums">
                    {formatMoney(budget, business.currency)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-slate-400">Meta de Conversas</span>
                  <span className="font-bold text-emerald-400 tabular-nums">
                    ~{formatRawNumber(estimatedWhatsAppLeads)} contatos
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-slate-400">Público Estimado</span>
                  <span className="font-bold text-blue-400 tabular-nums">
                    ~{formatRawNumber(estimatedImpressions)} visualizações
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-slate-400">ROAS Esperado</span>
                  <span className="font-bold text-amber-400 tabular-nums">
                    {targetROAS}x sobre anúncios
                  </span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-300 font-semibold">Foco do Mês:</span> Dominar o fornecimento recorrente de toners e papelaria para empresas locais de Chimoio antes dos concorrentes.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400">Pilar 1 · Tráfego Pago</div>
          <h3 className="text-base font-semibold text-white">Facebook & Instagram Ads</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Campanhas com raio geográfico preciso em Chimoio e Manica, com segmentação para tomadores de decisão corporativa e anúncios de emergência.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400">Pilar 2 · Conversão</div>
          <h3 className="text-base font-semibold text-white">Click-to-WhatsApp Direto</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            90% dos orçamentos fecham por WhatsApp em Moçambique. O anúncio abre conversa direta com mensagem predefinida com os contatos da loja.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400">Pilar 3 · B2B Recorrente</div>
          <h3 className="text-base font-semibold text-white">Contratos Corporativos</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Prospecção ativa e retargeting focado em escritórios de contabilidade, clínicas, escolas e repartições que consomem resmas e toners todo mês.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400">Pilar 4 · Social Media</div>
          <h3 className="text-base font-semibold text-white">Autoridade & Bastidores</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Publicações regulares no Feed e Stories demonstrando estoque real, toners genuínos lacrados e entregas rápidas na cidade.
          </p>
        </div>
      </div>

      {/* 3-Stage Sales Funnel Architecture */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Estrutura Operacional
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Funil de Vendas Mensal de 3 Etapas
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            Como cada metical investido no Facebook e Instagram se transforma em clientes com dinheiro em caixa na Good Supplier E.I.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top of Funnel */}
          <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                1. Topo de Funil (ToFu)
              </span>
              <span className="text-xs font-mono text-slate-400">15% do Orçamento</span>
            </div>

            <h3 className="text-base font-bold text-white">Reconhecimento & Marca Local</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fazer a Good Supplier E.I. ser lembrada como a primeira opção quando qualquer empresa em Chimoio precisar de papelaria ou toner HP.
            </p>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Objetivo Meta:</span>
                <span className="text-slate-200 font-medium">Alcance & Reconhecimento</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Formato:</span>
                <span className="text-slate-200 font-medium">Foto da Loja & Vídeo Rápido</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Métrica Chave:</span>
                <span className="text-blue-400 font-mono">CPM e Frequência</span>
              </div>
            </div>
          </div>

          {/* Middle of Funnel */}
          <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                2. Meio de Funil (MoFu)
              </span>
              <span className="text-xs font-mono text-slate-400">30% do Orçamento</span>
            </div>

            <h3 className="text-base font-bold text-white">Consideração & Catálogo B2B</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Apresentar comparativos de custo por folha impressa, benefícios do toner genuíno HP 1117A/147A e a tabela para fornecimento mensal.
            </p>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Objetivo Meta:</span>
                <span className="text-slate-200 font-medium">Tráfego & Catálogo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Formato:</span>
                <span className="text-slate-200 font-medium">Carrossel de Produtos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Métrica Chave:</span>
                <span className="text-indigo-400 font-mono">CTR e Visualização</span>
              </div>
            </div>
          </div>

          {/* Bottom of Funnel */}
          <div className="border border-blue-900/60 bg-gradient-to-b from-blue-950/30 to-slate-950/60 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                3. Fundo de Funil (BoFu)
              </span>
              <span className="text-xs font-mono text-emerald-400">55% do Orçamento</span>
            </div>

            <h3 className="text-base font-bold text-white">Vendas & Conversão WhatsApp</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anúncios diretos com ofertas de emergência (toner para entrega no mesmo dia) e combos de reposição mensal de resmas de papel.
            </p>

            <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Objetivo Meta:</span>
                <span className="text-slate-200 font-medium">Mensagens WhatsApp</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Formato:</span>
                <span className="text-slate-200 font-medium">Imagem Única + Botão WhatsApp</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Métrica Chave:</span>
                <span className="text-emerald-400 font-mono">Custo por Lead (CPL)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Persona Guide */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Segmentação de Mercado
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Quem Vamos Impactar nos Anúncios
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-1">
            Segmentação validada para o público pagante em Chimoio e província de Manica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <h3 className="font-bold text-white text-sm">Público 1: Empresas & Escritórios (B2B)</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Advogados, contadores, clínicas médicas, imobiliárias e empresas de logística.
            </p>
            <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800 pt-2">
              <div><strong className="text-slate-400">Principal Dor:</strong> A impressora trava no meio de um relatório importante ou o toner dura muito pouco.</div>
              <div><strong className="text-slate-400">O que compram:</strong> Toner HP 1117A, Toner HP 147A, caixas de resmas A4 (5 a 10 resmas/mês).</div>
              <div><strong className="text-slate-400">Argumento de Venda:</strong> Entrega rápida em Chimoio + Garantia de toner genuíno com nota/recibo.</div>
            </div>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h3 className="font-bold text-white text-sm">Público 2: Escolas, Cursos & Gráficas Rápidas</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Institutos de ensino, centros de formação profissional, escolas secundárias e centros de cópias.
            </p>
            <div className="text-xs text-slate-300 space-y-1.5 border-t border-slate-800 pt-2">
              <div><strong className="text-slate-400">Principal Dor:</strong> Alto custo de impressão por página e escassez de suprimentos no comércio local.</div>
              <div><strong className="text-slate-400">O que compram:</strong> Toners de alto rendimento JetIntelligence 147A e papel em grande quantidade.</div>
              <div><strong className="text-slate-400">Argumento de Venda:</strong> Preço escalonado por volume e faturamento programado.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
