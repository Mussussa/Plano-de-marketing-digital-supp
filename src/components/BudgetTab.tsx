import React, { useState } from 'react';
import { BusinessProfile } from '../types/marketing';
import { formatMoney, formatRawNumber } from '../utils/currency';
import {
  DollarSign,
  PieChart,
  TrendingUp,
  Calculator,
  ArrowUpRight,
  ShieldAlert,
  Coins,
  Receipt,
  HelpCircle,
} from 'lucide-react';

interface BudgetTabProps {
  business: BusinessProfile;
  onUpdateBudget: (newBudget: number) => void;
}

export const BudgetTab: React.FC<BudgetTabProps> = ({ business, onUpdateBudget }) => {
  const totalBudget = business.monthlyBudget;

  // Simulator parameters with defaults calibrated for Mozambique / B2B supplies
  const [cpmEstimate, setCpmEstimate] = useState(420); // 420 MT per 1000 impressions
  const [ctrPercent, setCtrPercent] = useState(2.2); // 2.2% CTR
  const [leadConversionRate, setLeadConversionRate] = useState(18); // 18% clicks start WhatsApp chat
  const [salesConversionRate, setSalesConversionRate] = useState(24); // 24% chats close sale
  const [averageOrderValue, setAverageOrderValue] = useState(3200); // 3.200 MT per order (toner + paper)
  const [grossMarginPercent, setGrossMarginPercent] = useState(35); // 35% margin on retail/office supplies

  // Calculation breakdown
  const metaAdsBudget = totalBudget * 0.65;
  const creativeBudget = totalBudget * 0.18;
  const toolsBudget = totalBudget * 0.10;
  const contingencyBudget = totalBudget * 0.07;

  // Simulation results
  const impressions = Math.round((metaAdsBudget / cpmEstimate) * 1000);
  const clicks = Math.round(impressions * (ctrPercent / 100));
  const cpc = clicks > 0 ? metaAdsBudget / clicks : 0;
  const whatsappChats = Math.round(clicks * (leadConversionRate / 100));
  const costPerLead = whatsappChats > 0 ? metaAdsBudget / whatsappChats : 0;
  const closedSales = Math.round(whatsappChats * (salesConversionRate / 100));
  const cac = closedSales > 0 ? totalBudget / closedSales : 0;
  const estimatedRevenue = closedSales * averageOrderValue;
  const estimatedGrossProfit = estimatedRevenue * (grossMarginPercent / 100);
  const estimatedNetProfit = estimatedGrossProfit - totalBudget;
  const roas = metaAdsBudget > 0 ? (estimatedRevenue / metaAdsBudget).toFixed(1) : '0.0';

  const weeklyMetaSpend = [
    { week: 1, percent: 20, amount: metaAdsBudget * 0.20, focus: 'Setup, Teste A/B de Criativos & Reconhecimento' },
    { week: 2, percent: 35, amount: metaAdsBudget * 0.35, focus: 'Escala Campanha Toners HP 1117A e 147A no WhatsApp' },
    { week: 3, percent: 25, amount: metaAdsBudget * 0.25, focus: 'Campanha B2B para Empresas & Retargeting' },
    { week: 4, percent: 20, amount: metaAdsBudget * 0.20, focus: 'Fechamento de Mês & Reposição de Estoque' },
  ];

  return (
    <div className="space-y-8">
      {/* Header and Quick Budget Selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Planejamento Financeiro Mensal
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Custos, Alocação de Verba & Projeção de Retorno
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Divisão transparente dos investimentos de marketing para {business.name} durante 30 dias.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex items-center gap-4">
            <div>
              <div className="text-xs text-slate-400">Orçamento Mensal Definido</div>
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                {formatMoney(totalBudget, business.currency)}
              </div>
            </div>
          </div>
        </div>

        {/* Quick presets for budget */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
          <span className="text-slate-500">Ajustar investimento mensal:</span>
          {[20000, 35000, 50000, 75000].map((preset) => (
            <button
              key={preset}
              onClick={() => onUpdateBudget(preset)}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                totalBudget === preset
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {formatMoney(preset, business.currency)}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Investment Categories Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Meta Ads Category */}
        <div className="bg-slate-900 border border-blue-900/40 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 font-semibold">65% DA VERBA</span>
            <span className="text-xs text-slate-500">Facebook + Insta</span>
          </div>
          <div className="text-lg font-bold text-white tabular-nums">
            {formatMoney(metaAdsBudget, business.currency)}
          </div>
          <h3 className="text-sm font-semibold text-slate-200">Tráfego Pago Meta Ads</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Investimento direto injetado no Meta Ads Manager para veiculação de anúncios de Toners HP e suprimentos para o público de Chimoio.
          </p>
        </div>

        {/* Creative Production Category */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 font-semibold">18% DA VERBA</span>
            <span className="text-xs text-slate-500">Fotos & Criativos</span>
          </div>
          <div className="text-lg font-bold text-white tabular-nums">
            {formatMoney(creativeBudget, business.currency)}
          </div>
          <h3 className="text-sm font-semibold text-slate-200">Produção de Criativos</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Fotografia profissional dos toners 1117A e 147A na loja, gravação de vídeos curtos de rotina e design de banners para anúncios.
          </p>
        </div>

        {/* Tools & Communications Category */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 font-semibold">10% DA VERBA</span>
            <span className="text-xs text-slate-500">WhatsApp & Design</span>
          </div>
          <div className="text-lg font-bold text-white tabular-nums">
            {formatMoney(toolsBudget, business.currency)}
          </div>
          <h3 className="text-sm font-semibold text-slate-200">Ferramentas & Telefonia</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Assinatura de ferramentas de design, créditos para chamadas aos clientes e catálogo interativo no WhatsApp Business (+258 contatos).
          </p>
        </div>

        {/* Contingency Category */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-semibold">7% DA VERBA</span>
            <span className="text-xs text-slate-500">Reserva</span>
          </div>
          <div className="text-lg font-bold text-white tabular-nums">
            {formatMoney(contingencyBudget, business.currency)}
          </div>
          <h3 className="text-sm font-semibold text-slate-200">Reserva de Otimização</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Verba flexível para impulsionar promoções relâmpago de fim de semana ou injetar mais orçamento no anúncio de melhor conversão.
          </p>
        </div>
      </div>

      {/* Week-by-Week Media Spend Schedule */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Fluxo Semanal de Investimento
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-1">
            Distribuição da Verba de Anúncios por Semana
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Como distribuir os {formatMoney(metaAdsBudget, business.currency)} nos 30 dias para evitar queimar verba no início do mês.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {weeklyMetaSpend.map((w) => (
            <div
              key={w.week}
              className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-2"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Semana {w.week}</span>
                <span className="text-blue-400 font-mono font-medium">{w.percent}%</span>
              </div>
              <div className="text-base font-bold text-blue-300 tabular-nums">
                {formatMoney(w.amount, business.currency)}
              </div>
              <div className="text-[11px] text-slate-400 leading-normal">
                {w.focus}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Financial Simulator / Calculator */}
      <div className="bg-slate-900 border border-blue-900/40 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulador Financeiro de Resultados & ROAS</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Estimativa de Vendas, Clientes e Faturamento
            </h3>
            <p className="text-xs text-slate-400">
              Ajuste as métricas de conversão para simular cenários realistas de retorno para o seu negócio.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Orçamento Meta: {formatMoney(metaAdsBudget, business.currency)}
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          {/* Ticket Médio */}
          <div className="space-y-1.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium">Ticket Médio por Pedido</label>
              <span className="font-mono text-blue-400 font-bold">
                {formatMoney(averageOrderValue, business.currency)}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={10000}
              step={200}
              value={averageOrderValue}
              onChange={(e) => setAverageOrderValue(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="text-[11px] text-slate-500">
              Ex: 1 Toner HP 1117A/147A ou kit com 4 resmas de papel A4.
            </div>
          </div>

          {/* Taxa de Conversão em Venda */}
          <div className="space-y-1.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium">Conversão de Leads no WhatsApp</label>
              <span className="font-mono text-emerald-400 font-bold">{salesConversionRate}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={1}
              value={salesConversionRate}
              onChange={(e) => setSalesConversionRate(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="text-[11px] text-slate-500">
              Percentual das conversas que fecham compra após atendimento.
            </div>
          </div>

          {/* Margem Bruta Estimada */}
          <div className="space-y-1.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium">Margem de Lucro Bruto</label>
              <span className="font-mono text-amber-400 font-bold">{grossMarginPercent}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={60}
              step={5}
              value={grossMarginPercent}
              onChange={(e) => setGrossMarginPercent(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="text-[11px] text-slate-500">
              Margem comercial média dos suprimentos e toners.
            </div>
          </div>
        </div>

        {/* Dynamic Simulator Results Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* WhatsApp Leads */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-400">Leads no WhatsApp</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
              {formatRawNumber(whatsappChats)}
            </div>
            <div className="text-[11px] text-slate-500">
              Custo por Lead: <strong className="text-slate-300 font-mono">{formatMoney(costPerLead, business.currency)}</strong>
            </div>
          </div>

          {/* Closed Sales */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-400">Vendas Fechadas</div>
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
              {formatRawNumber(closedSales)} pedidos
            </div>
            <div className="text-[11px] text-slate-500">
              CAC: <strong className="text-slate-300 font-mono">{formatMoney(cac, business.currency)}</strong>
            </div>
          </div>

          {/* Revenue Projected */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-400">Faturamento Projetado</div>
            <div className="text-xl sm:text-2xl font-bold text-blue-400 tabular-nums">
              {formatMoney(estimatedRevenue, business.currency)}
            </div>
            <div className="text-[11px] text-slate-500">
              ROAS sobre Anúncios: <strong className="text-blue-300 font-mono">{roas}x</strong>
            </div>
          </div>

          {/* Net Profit */}
          <div className="bg-slate-950/80 border border-emerald-900/40 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-400">Lucro Líquido Estimado</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
              {formatMoney(estimatedNetProfit, business.currency)}
            </div>
            <div className="text-[11px] text-slate-500">
              Já descontando o orçamento de marketing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
