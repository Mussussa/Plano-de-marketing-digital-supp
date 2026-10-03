import React from 'react';
import { BusinessProfile, WeeklyTask, MetaCampaign } from '../types/marketing';
import { formatMoney, formatRawNumber } from '../utils/currency';

interface PrintReportViewProps {
  business: BusinessProfile;
  tasks: WeeklyTask[];
  campaigns: MetaCampaign[];
}

export const PrintReportView: React.FC<PrintReportViewProps> = ({
  business,
  tasks,
  campaigns,
}) => {
  const budget = business.monthlyBudget;
  const metaAdsBudget = budget * 0.65;
  const creativeBudget = budget * 0.18;
  const toolsBudget = budget * 0.10;
  const contingencyBudget = budget * 0.07;

  return (
    <div className="hidden print:block text-slate-900 p-8 max-w-4xl mx-auto space-y-8 bg-white font-sans text-xs">
      {/* Document Header */}
      <div className="border-b-2 border-slate-900 pb-6 flex items-start justify-between">
        <div>
          <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
            Plano Estratégico Executivo
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">
            Plano de Marketing Mensal & Tráfego Pago
          </h1>
          <div className="text-sm font-semibold text-blue-900 mt-1">
            {business.name} · {business.tagline}
          </div>
          <div className="text-slate-600 mt-1">
            {business.address}, {business.city} ({business.country}) · Contatos: {business.phones.join(' / ')}
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-mono text-slate-500">Documento Oficial</div>
          <div className="text-lg font-bold text-slate-900 tabular-nums">
            {formatMoney(budget, business.currency)}
          </div>
          <div className="text-xs text-slate-600">Investimento Mensal Total</div>
        </div>
      </div>

      {/* Executive Objectives */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          1. Objetivos Estratégicos & Funil de Vendas
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Este plano estabelece a estratégia de aquisição de clientes para o fornecimento de Toners HP LaserJet (1117A, 147A JetIntelligence), resmas de papel A4 e suprimentos gerais de escritório em Chimoio e província de Manica. O foco principal é a geração de conversas qualificadas no WhatsApp Business com fechamento de vendas diretas e contratos de reposição mensal para empresas (B2B).
        </p>
      </div>

      {/* Budget Breakdown Table */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          2. Divisão de Custos e Orçamento (30 Dias)
        </h2>
        <table className="w-full text-left border-collapse border border-slate-300 text-xs">
          <thead>
            <tr className="bg-slate-100 text-slate-800">
              <th className="p-2 border border-slate-300 font-bold">Categoria de Custo</th>
              <th className="p-2 border border-slate-300 font-bold">%</th>
              <th className="p-2 border border-slate-300 font-bold">Valor Alocado</th>
              <th className="p-2 border border-slate-300 font-bold">Aplicação Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Tráfego Pago Meta Ads</td>
              <td className="p-2 border border-slate-300 font-mono">65%</td>
              <td className="p-2 border border-slate-300 font-mono font-bold">{formatMoney(metaAdsBudget, business.currency)}</td>
              <td className="p-2 border border-slate-300">Anúncios no Facebook e Instagram Ads direcionando para WhatsApp.</td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Produção de Criativos & Fotos</td>
              <td className="p-2 border border-slate-300 font-mono">18%</td>
              <td className="p-2 border border-slate-300 font-mono font-bold">{formatMoney(creativeBudget, business.currency)}</td>
              <td className="p-2 border border-slate-300">Sessão de fotos dos produtos na loja de Capuchino e vídeos de rotina.</td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Ferramentas & WhatsApp API</td>
              <td className="p-2 border border-slate-300 font-mono">10%</td>
              <td className="p-2 border border-slate-300 font-mono font-bold">{formatMoney(toolsBudget, business.currency)}</td>
              <td className="p-2 border border-slate-300">Assinaturas de design, catálogo digital e comunicação de vendas.</td>
            </tr>
            <tr>
              <td className="p-2 border border-slate-300 font-semibold">Reserva de Otimização</td>
              <td className="p-2 border border-slate-300 font-mono">7%</td>
              <td className="p-2 border border-slate-300 font-mono font-bold">{formatMoney(contingencyBudget, business.currency)}</td>
              <td className="p-2 border border-slate-300">Verba para testes rápidos e reforço de anúncios campeões de vendas.</td>
            </tr>
            <tr className="bg-slate-50 font-bold">
              <td className="p-2 border border-slate-300">Total do Plano</td>
              <td className="p-2 border border-slate-300 font-mono">100%</td>
              <td className="p-2 border border-slate-300 font-mono text-blue-900">{formatMoney(budget, business.currency)}</td>
              <td className="p-2 border border-slate-300">Orçamento mensal consolidado</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4-Week Schedule */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          3. Cronograma Semanal de Ações
        </h2>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((wk) => {
            const wkTasks = tasks.filter((t) => t.week === wk);
            return (
              <div key={wk} className="border border-slate-200 rounded p-3 space-y-2">
                <div className="font-bold text-slate-900">
                  Semana {wk}: {wk === 1 ? 'Setup & Reconhecimento' : wk === 2 ? 'Vendas Diretas WhatsApp' : wk === 3 ? 'B2B & Retargeting' : 'Fechamento de Mês & Otimização'}
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {wkTasks.map((t) => (
                    <li key={t.id}>
                      <strong>{t.title}</strong> ({t.channel}) — {t.deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meta Campaigns Summary */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
          4. Campanhas no Gerenciador de Anúncios Meta
        </h2>
        <div className="space-y-3">
          {campaigns.map((camp) => (
            <div key={camp.id} className="border border-slate-200 p-3 rounded space-y-1">
              <div className="font-bold text-slate-900 flex justify-between">
                <span>{camp.title}</span>
                <span className="font-mono text-slate-600">{camp.budgetPercentage}% da verba</span>
              </div>
              <div className="text-slate-600 text-[11px]">
                <strong>Público:</strong> {camp.targetAudience.location} | {camp.targetAudience.age} | {camp.objective}
              </div>
              <div className="text-slate-800 italic text-[11px]">
                Headline: "{camp.headline}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signatures Block */}
      <div className="pt-8 border-t border-slate-300 grid grid-cols-2 gap-8 text-center text-xs">
        <div>
          <div className="border-b border-slate-400 pb-1 mb-2 font-medium">
            Responsável de Marketing & Tráfego Pago
          </div>
          <div className="text-slate-500">Gestor de Tráfego / Consultoria</div>
        </div>

        <div>
          <div className="border-b border-slate-400 pb-1 mb-2 font-medium">
            Diretoria / Gerência Geral
          </div>
          <div className="text-slate-500">{business.name} (Chimoio)</div>
        </div>
      </div>
    </div>
  );
};
