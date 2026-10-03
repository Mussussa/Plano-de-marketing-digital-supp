import React, { useState } from 'react';
import { SocialPost, BusinessProfile } from '../types/marketing';
import {
  Instagram,
  Video,
  Layers,
  Image as ImageIcon,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Copy,
  Check,
  Film,
  Zap,
} from 'lucide-react';

interface SocialMediaTabProps {
  posts: SocialPost[];
  business: BusinessProfile;
}

export const SocialMediaTab: React.FC<SocialMediaTabProps> = ({ posts, business }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = posts.filter((p) => {
    if (filterType !== 'all' && p.type !== filterType) return false;
    return true;
  });

  const handleCopyScript = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Estratégia Orgânica & Presença Digital
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Matriz Mensal de Conteúdo para Redes Sociais
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Roteiros práticos de Reels, Carrosséis e Stories para transformar seguidores em clientes fiéis da {business.name}.
            </p>
          </div>

          {/* Posting Best Times Indicator */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5 text-xs space-y-1">
            <div className="text-slate-400 font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Melhores Horários em Moçambique:</span>
            </div>
            <div className="text-slate-200 font-mono text-[11px]">
              08:30 (Abertura) · 12:30 (Almoço) · 17:45 (Fechamento)
            </div>
          </div>
        </div>

        {/* 4 Content Pillars Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80 text-xs">
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span className="text-blue-400 font-bold block">40% Educativo & Solução</span>
            <span className="text-slate-400 text-[11px]">Dicas para toners durarem mais e evitar papel atolado.</span>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold block">30% Oferta & Comercial</span>
            <span className="text-slate-400 text-[11px]">Toners HP 1117A, 147A, resmas A4 e combos corporativos.</span>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold block">20% Bastidores & Prova</span>
            <span className="text-slate-400 text-[11px]">Entregas em Chimoio, clientes satisfeitos e estoque real.</span>
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <span className="text-purple-400 font-bold block">10% Conexão & Enquetes</span>
            <span className="text-slate-400 text-[11px]">Stories diários com caixas de perguntas e enquetes.</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Format */}
      <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs w-fit">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            filterType === 'all'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Todos os Formatos
        </button>
        <button
          onClick={() => setFilterType('Reels')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            filterType === 'Reels'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Reels / Vídeo
        </button>
        <button
          onClick={() => setFilterType('Carrossel')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            filterType === 'Carrossel'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Carrosséis
        </button>
        <button
          onClick={() => setFilterType('Foto + Texto')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            filterType === 'Foto + Texto'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Fotos do Feed
        </button>
        <button
          onClick={() => setFilterType('Stories Diário')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
            filterType === 'Stories Diário'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Stories
        </button>
      </div>

      {/* Posts Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 space-y-3.5 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Card Header */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white">Dia {post.day}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{post.dayOfWeek}</span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  {post.type}
                </span>
              </div>

              {/* Theme Pill */}
              <div className="text-[11px] text-slate-400">
                Tema: <strong className="text-slate-300">{post.theme}</strong>
              </div>

              {/* Hook (Gancho) */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                  Gancho de Atenção (Primeiros 3 segundos):
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  "{post.hook}"
                </p>
              </div>

              {/* Content Idea & Production Instructions */}
              <div className="space-y-1 text-xs">
                <span className="text-slate-500 block text-[11px]">Roteiro / Execução Prática:</span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {post.contentIdea}
                </p>
              </div>
            </div>

            {/* Card Footer: CTA & Copy Button */}
            <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
              <div className="text-slate-400 text-[11px]">
                <strong className="text-slate-300">Chamada para Ação (CTA):</strong> {post.callToAction}
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500 text-[10px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {post.suggestedTime}
                </span>

                <button
                  onClick={() =>
                    handleCopyScript(
                      `GANCHO: ${post.hook}\n\nROTEIRO:\n${post.contentIdea}\n\nCHAMADA:\n${post.callToAction}`,
                      post.id
                    )
                  }
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
                >
                  {copiedId === post.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar Roteiro</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
