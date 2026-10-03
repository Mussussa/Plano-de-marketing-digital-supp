import React from 'react';
import { BusinessProfile, Currency } from '../types/marketing';
import { CURRENCY_SYMBOLS } from '../utils/currency';
import { Printer, Settings2, Sparkles, Building2, Phone } from 'lucide-react';

interface HeaderProps {
  business: BusinessProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSettings: () => void;
  onPrint: () => void;
  onChangeCurrency: (curr: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({
  business,
  activeTab,
  setActiveTab,
  onOpenSettings,
  onPrint,
  onChangeCurrency,
}) => {
  const navItems = [
    { id: 'overview', label: 'Visão Geral' },
    { id: 'schedule', label: 'Cronograma' },
    { id: 'budget', label: 'Custos & ROI' },
    { id: 'campaigns', label: 'Campanhas Meta' },
    { id: 'social', label: 'Social Media' },
    { id: 'generator', label: 'Gerador de Copy' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100 no-print">
      {/* Top Banner Notice for Good Supplier E.I. & Chimoio Location */}
      <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950/60 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-semibold flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5" />
              {business.name}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">{business.address}, {business.city} ({business.country})</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-emerald-400" />
              {business.phones[0]}
            </span>
            <span className="text-slate-600">·</span>
            <span>Meta Ads & Tráfego Mensal</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 links) — Zone 3 (Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5">
          <a
            href="#overview"
            onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}
            className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-blue-500/30">
              GS
            </span>
            <span>Marketing OS</span>
          </a>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Currency Switcher, Print, Settings) */}
        <div className="flex items-center gap-2">
          {/* Currency Segmented Control */}
          <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs">
            {(['MZN', 'USD', 'BRL'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => onChangeCurrency(curr)}
                className={`px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
                  business.currency === curr
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={`Mudar moeda para ${curr}`}
              >
                {CURRENCY_SYMBOLS[curr]}
              </button>
            ))}
          </div>

          {/* Export / Print Button */}
          <button
            onClick={onPrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            title="Imprimir ou Salvar Plano em PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span>Exportar PDF</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={onOpenSettings}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-600/30 whitespace-nowrap cursor-pointer"
            title="Configurar Dados da Empresa e Orçamento"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ajustar Dados</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sub-bar */}
      <div className="lg:hidden border-t border-slate-800 px-3 py-2 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
