import React, { useState } from 'react';
import { MetaCampaign, BusinessProfile } from '../types/marketing';
import { formatMoney } from '../utils/currency';
import {
  Copy,
  Check,
  Smartphone,
  Monitor,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Send,
  MoreHorizontal,
  ExternalLink,
  Target,
  Sparkles,
} from 'lucide-react';

interface CampaignsTabProps {
  campaigns: MetaCampaign[];
  business: BusinessProfile;
}

export const CampaignsTab: React.FC<CampaignsTabProps> = ({ campaigns, business }) => {
  const [selectedCampaignId, setSelectedCampaignId] = useState(campaigns[0].id);
  const [previewPlatform, setPreviewPlatform] = useState<'instagram' | 'facebook'>('instagram');
  const [copiedState, setCopiedState] = useState<string | null>(null);

  const activeCampaign = campaigns.find((c) => c.id === selectedCampaignId) || campaigns[0];

  const handleCopyCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState(id);
    setTimeout(() => setCopiedState(null), 2500);
  };

  const whatsappLink = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Olá, vi o anúncio da Good Supplier E.I. no Facebook/Instagram e gostaria de saber o preço e disponibilidade dos toners HP e suprimentos de escritório.`
  )}`;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Gerenciador de Anúncios Meta
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Campanhas Prontas para Facebook & Instagram Ads
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Estruturas completas com copy persuasiva, segmentação técnica detalhada e visualizador de anúncio para {business.name}.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-800 border border-slate-700 rounded-lg text-xs">
            <button
              onClick={() => setPreviewPlatform('instagram')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                previewPlatform === 'instagram'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Instagram Feed
            </button>
            <button
              onClick={() => setPreviewPlatform('facebook')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                previewPlatform === 'facebook'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Facebook Feed
            </button>
          </div>
        </div>

        {/* Campaign Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 border-t border-slate-800/80">
          {campaigns.map((camp) => {
            const isSelected = camp.id === activeCampaign.id;
            return (
              <button
                key={camp.id}
                onClick={() => setSelectedCampaignId(camp.id)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-950/40 border-blue-500/80 shadow-xs'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[11px] font-medium text-blue-400 truncate">
                  {camp.stage}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-white truncate mt-0.5">
                  {camp.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                  <span>{camp.objective}</span>
                  <span className="font-mono text-slate-300">{camp.budgetPercentage}%</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Campaign Work Area: Specs on Left, Live Mockup on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Technical Targeting & Copy Details */}
        <div className="lg:col-span-7 space-y-6">
          {/* Campaign Strategy Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {activeCampaign.stage}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Alocação: {activeCampaign.budgetPercentage}% ({formatMoney((business.monthlyBudget * activeCampaign.budgetPercentage) / 100, business.currency)})
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              {activeCampaign.title}
            </h3>

            <p className="text-xs text-slate-300">
              {activeCampaign.subtitle}
            </p>

            {/* Targeting Specs Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3 text-xs">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-blue-400" />
                <span>Segmentação no Meta Ads Manager (Gerenciador de Anúncios)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-slate-300">
                <div>
                  <span className="text-slate-500 block text-[11px]">Objetivo de Campanha:</span>
                  <span className="font-medium text-white">{activeCampaign.objective}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">Geolocalização:</span>
                  <span className="font-medium text-white">{activeCampaign.targetAudience.location}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">Faixa Etária & Gênero:</span>
                  <span className="font-medium text-white">{activeCampaign.targetAudience.age} · {activeCampaign.targetAudience.genders}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">Posicionamentos:</span>
                  <span className="font-medium text-white">{activeCampaign.placement}</span>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-2 space-y-1.5">
                <div>
                  <span className="text-slate-500 block text-[11px]">Interesses Recomendados no Meta:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeCampaign.targetAudience.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 text-slate-300 text-[11px] px-2 py-0.5 rounded border border-slate-700/60"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px] mt-2">Cargos / Ocupações Direcionadas:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeCampaign.targetAudience.jobTitles.map((title, i) => (
                      <span
                        key={i}
                        className="bg-slate-800/80 text-blue-300 text-[11px] px-2 py-0.5 rounded border border-blue-900/40"
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Headline and Copy Box with Copy Button */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Texto Principal do Anúncio (Copy)
                </span>
                <button
                  onClick={() => handleCopyCopy(activeCampaign.primaryText, activeCampaign.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedState === activeCampaign.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Texto</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed max-h-64 overflow-y-auto">
                {activeCampaign.primaryText}
              </div>

              {/* Headline */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs flex items-center justify-between gap-3">
                <div className="truncate">
                  <span className="text-slate-500 block text-[10px]">Título do Anúncio (Headline):</span>
                  <span className="font-semibold text-white">{activeCampaign.headline}</span>
                </div>
                <button
                  onClick={() => handleCopyCopy(activeCampaign.headline, `${activeCampaign.id}-headline`)}
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded cursor-pointer shrink-0"
                  title="Copiar Headline"
                >
                  {copiedState === `${activeCampaign.id}-headline` ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Ad Mockup Preview (Instagram or Facebook) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Pré-visualização no {previewPlatform === 'instagram' ? 'Instagram' : 'Facebook'}</span>
              <span className="text-[11px] text-blue-400">Mockup Fiel ao Feed</span>
            </div>

            {/* Instagram Style Mockup */}
            {previewPlatform === 'instagram' ? (
              <div className="bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto text-white text-xs">
                {/* Instagram Header */}
                <div className="p-3 flex items-center justify-between border-b border-slate-800 bg-slate-900">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs text-white">
                        GS
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white flex items-center gap-1">
                        <span>goodsupplier.chimoio</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <div className="text-[10px] text-slate-400">Patrocinado · Chimoio</div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>

                {/* Ad Image Slot with Fallback Container */}
                <div className="relative aspect-square bg-slate-950 overflow-hidden">
                  <img
                    src={activeCampaign.imagePath}
                    alt={activeCampaign.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Overlay Action Bar at bottom of image */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 pt-6 flex items-center justify-between">
                    <div className="text-white text-xs font-semibold drop-shadow truncate mr-2">
                      {activeCampaign.headline}
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-md shadow-md whitespace-nowrap flex items-center gap-1 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Instagram Engagement Bar */}
                <div className="p-3 space-y-2 bg-slate-900">
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center gap-4">
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                      <MessageCircle className="w-5 h-5 text-slate-300" />
                      <Send className="w-5 h-5 text-slate-300" />
                    </div>
                    <Bookmark className="w-5 h-5 text-slate-300" />
                  </div>

                  <div className="font-semibold text-xs text-white">
                    48 curtidas
                  </div>

                  {/* Caption */}
                  <div className="text-xs text-slate-200 line-clamp-3 leading-relaxed">
                    <strong className="text-white mr-1.5">goodsupplier.chimoio</strong>
                    {activeCampaign.primaryText}
                  </div>

                  <div className="text-[10px] text-slate-500 pt-1">
                    Ver todos os 12 comentários · Fale conosco: {business.phones[0]}
                  </div>
                </div>
              </div>
            ) : (
              /* Facebook Style Mockup */
              <div className="bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto text-white text-xs">
                {/* Facebook Header */}
                <div className="p-3.5 flex items-start justify-between border-b border-slate-800 bg-slate-900">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                      GS
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">{business.name}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <span>Patrocinado</span>
                        <span>·</span>
                        <span>🌐 Chimoio</span>
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>

                {/* FB Post Text */}
                <div className="p-3 text-xs text-slate-200 line-clamp-3 leading-relaxed">
                  {activeCampaign.primaryText}
                </div>

                {/* FB Media Image */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img
                    src={activeCampaign.imagePath}
                    alt={activeCampaign.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* FB CTA Link Block */}
                <div className="bg-slate-950 p-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-medium truncate">
                      WHATSAPP · CHIMOIO, MOÇAMBIQUE
                    </div>
                    <div className="font-bold text-xs text-white truncate">
                      {activeCampaign.headline}
                    </div>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enviar mensagem</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
