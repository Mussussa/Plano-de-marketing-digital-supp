import React, { useState } from 'react';
import { BusinessProfile } from '../types/marketing';
import {
  Sparkles,
  Copy,
  Check,
  Send,
  MessageSquare,
  Instagram,
  RefreshCw,
  Wand2,
} from 'lucide-react';

interface CopyGeneratorTabProps {
  business: BusinessProfile;
}

export const CopyGeneratorTab: React.FC<CopyGeneratorTabProps> = ({ business }) => {
  const [selectedProduct, setSelectedProduct] = useState('Toner HP LaserJet 1117A');
  const [selectedAngle, setSelectedAngle] = useState<'urgency' | 'b2b' | 'combo' | 'trust'>('urgency');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const productList = [
    'Toner HP LaserJet 1117A',
    'Toner HP LaserJet 147A JetIntelligence',
    'Resmas de Papel A4 Chamex / Rotatrim',
    'Combo Produtividade (Toner + 5 Resmas)',
    'Material de Escritório Completo & Papelaria',
  ];

  const generateCopies = () => {
    const phones = business.phones.join(' / ');
    const location = `${business.address}, ${business.city}`;

    if (selectedAngle === 'urgency') {
      return [
        {
          format: 'Facebook & Instagram Feed (Copy Longa de Alta Conversão)',
          headline: `🔴 Parou a impressão na sua empresa? Entregamos ${selectedProduct} hoje em Chimoio!`,
          body: `Não deixe relatórios fiscais, contratos ou faturas parados por falta de toner ou papel.

Na ${business.name} (${location}), temos estoque imediato de ${selectedProduct} original com rendimento total e garantia de qualidade.

Por que pedir na ${business.name}?
✅ Entrega expressa no seu escritório em Chimoio.
✅ Suprimentos originais que não danificam sua impressora.
✅ Emissão de recibo e nota para a contabilidade da sua empresa.

Evite imitações baratas que mancham seus documentos.
👉 Clique no link ou mande mensagem no WhatsApp agora:
📱 ${phones}
✉️ ${business.email}`,
          cta: 'Chamar no WhatsApp Agora',
        },
        {
          format: 'Roteiro Rápido para Stories & Reels (15 a 30 segundos)',
          headline: `Vídeo: "Sua impressora deu alerta vermelho?"`,
          body: `[CENA 1 - 0 a 3s]: Mostrar tela da impressora piscando 'Substituir cartucho' ou papel atolado.
Texto na tela: "Impressora parou bem no fechamento do dia?"

[CENA 2 - 3 a 8s]: Mostrar a caixa do ${selectedProduct} sendo retirada da prateleira na loja do Capuchino.
Locução: "Não precisa se desesperar nem mandar vir de fora. A ${business.name} entrega no seu escritório em Chimoio em até 45 minutos."

[CENA 3 - 8 a 15s]: Foto do entregador e número do WhatsApp na tela.
Locução: "Chame agora no WhatsApp e não perca nenhum minuto de trabalho!"`,
          cta: 'Arrasta para cima / Link na Bio',
        },
        {
          format: 'Mensagem de Abordagem Direta WhatsApp Business',
          headline: `Script 1 a 1 para envio a clientes de escritórios`,
          body: `Bom dia / Boa tarde! 

Aqui é da ${business.name} em Chimoio (${business.address}). 

Passando para informar que recebemos um novo lote de ${selectedProduct} com condições especiais para escritórios locais. 

Como está o estoque de impressão da sua equipe para esta semana? Se precisar, fazemos a entrega direta aí no seu endereço hoje mesmo.

Pode nos responder aqui para confirmar preços ou emitir uma cotação rápida!`,
          cta: 'Copiar Script WhatsApp',
        },
      ];
    }

    if (selectedAngle === 'b2b') {
      return [
        {
          format: 'Facebook & Instagram Feed (Foco B2B Corporativo)',
          headline: `Economize até 25% nas despesas de impressão da sua empresa em Chimoio`,
          body: `Gestor, você sabe exatamente quanto sua empresa gasta por mês comprando suprimentos avulsos de última hora?

A ${business.name} oferece faturamento corporativo programado para empresas, clínicas, escolas e escritórios de advocacia em Chimoio e Manica.

Com a nossa parceria B2B:
📦 Fornecimento contínuo de ${selectedProduct} sem risco de faltar.
📑 Faturamento facilitado com relatório mensal consolidado.
🚚 Frete programado e prioridade de entrega.
🛡️ Garantia total contra defeitos de fábrica.

Transforme um gargalo operacional em tranquilidade.
Fale com nosso consultor comercial:
📞 ${phones}
📍 ${location}`,
          cta: 'Solicitar Tabela Corporativa',
        },
        {
          format: 'Roteiro para Reels / Vídeo Institucional B2B',
          headline: `Roteiro: "3 Coisas que todo Gerente de Compras deve saber"`,
          body: `[CENA 1]: Profissional no escritório assinando papéis.
Gancho: "Por que grandes escritórios de Chimoio compram suprimentos na ${business.name}?"

[CENA 2]: Mostrando a nitidez impecável de uma folha impressa com toner original vs uma folha manchada com toner recarregado.
Locução: "Qualidade na apresentação dos seus documentos para clientes e tribunais."

[CENA 3]: Estoque organizado na loja do Capuchino.
Locução: "Atendimento corporativo ágil e entrega sem burocracia."`,
          cta: 'Envie mensagem para proposta comercial',
        },
        {
          format: 'Email ou Mensagem Formal B2B',
          headline: `Apresentação Comercial para Diretoria / Aquisições`,
          body: `Prezado(a) Responsável pelo Setor de Compras / Administração,

Apresentamos a ${business.name}, empresa sediada no ${location}, especializada no fornecimento corporativo de suprimentos de informática, com destaque para ${selectedProduct} e papelaria de alta qualidade.

Colocamo-nos à disposição para enviar cotação comparativa para o consumo mensal de sua organização, com condições de pagamento diferenciadas e entrega garantida.

Contatos diretos:
Telefones: ${phones}
Email: ${business.email}`,
          cta: 'Copiar Email B2B',
        },
      ];
    }

    if (selectedAngle === 'combo') {
      return [
        {
          format: 'Facebook & Instagram Feed (Promoção Combo Mensal)',
          headline: `🔥 Combo Produtividade: Leve ${selectedProduct} + Caixas de Papel A4 com Desconto`,
          body: `Comece a semana com o estoque 100% abastecido e pague menos!

Exclusivo na ${business.name}:
Ao adquirir o seu ${selectedProduct}, garanta caixas de resmas de papel A4 de alta alvura com desconto progressivo por volume.

Ideal para:
🏢 Escritórios de Contabilidade e Advocacia
🏥 Clínicas e Laboratórios
🎓 Escolas e Faculdades
🖨️ Centros de Cópias e Gráficas Rápidas

Oferta por tempo limitado ou enquanto durar o estoque no Capuchino.
Reserve o seu kit antes do fechamento do lote:
📲 WhatsApp: ${business.phones[0]}`,
          cta: 'Reservar Combo no WhatsApp',
        },
        {
          format: 'Stories / Banner com Gatilho de Escassez',
          headline: `Story Interativo de Fim de Semana`,
          body: `[SLIDE 1]: Foto do combo montado na bancada da loja.
Enquete: "Seu escritório já repôs os toners para este mês? [Sim, já temos / Preciso urgente]"

[SLIDE 2]: "Para quem responder 'Preciso urgente', liberamos condição especial de entrega gratuita em Chimoio hoje."
Sticker de Link direto para o WhatsApp.`,
          cta: 'Enviar no Stories',
        },
        {
          format: 'Disparo de Retargeting para Lista de Clientes Antigos',
          headline: `Mensagem de Recompra Programada`,
          body: `Olá! Notamos que já faz cerca de 30 a 45 dias desde seu último pedido de suprimentos na ${business.name}.

Para facilitar sua rotina este mês, reservamos uma condição especial no combo de ${selectedProduct} para entrega no seu escritório.

Deseja que enviemos a fatura/recibo com entrega para hoje? Basta confirmar aqui!`,
          cta: 'Copiar Mensagem de Recompra',
        },
      ];
    }

    // Trust / Local Shop
    return [
      {
        format: 'Facebook & Instagram Feed (Autoridade Local & Confiança)',
        headline: `Sua loja de confiança para toners e suprimentos no Capuchino - Chimoio`,
        body: `Comprar suprimentos pela internet e esperar semanas sem saber se vai chegar original ou quebrado? Nunca mais.

A ${business.name} está de portas abertas em Chimoio para oferecer atendimento pessoal, produtos com procedência comprovada e suporte rápido.

Aqui você encontra:
✔️ ${selectedProduct} genuíno com lacre de fábrica.
✔️ Toda linha de papelaria e acessórios de escritório.
✔️ Equipe pronta para orientar o melhor suprimento para o modelo da sua impressora.

Venha nos visitar no Bairro Capuchino em Chimoio ou peça entrega direta!
📞 ${phones}
✉️ ${business.email}`,
        cta: 'Ver Localização da Loja',
      },
      {
        format: 'Roteiro de Bastidores e Fachada da Loja',
        headline: `Vídeo: "Venha conhecer a Good Supplier E.I."`,
        body: `[CENA 1]: Fachada da loja em Capuchino - Chimoio com letreiro visível.
Locução: "Procurando material de escritório e toners originais em Chimoio?"

[CENA 2]: Entrando na loja e mostrando as prateleiras com os toners HP 1117A e 147A organizados.
Locução: "Aqui na Good Supplier E.I. você tem pronta entrega e atendimento de primeira."

[CENA 3]: Atendente sorrindo e entregando pacote a um cliente.
Locução: "Faça como dezenas de empresas de Chimoio. Venha nos visitar!"`,
        cta: 'Conheça nossa loja',
      },
      {
        format: 'Post Institucional de Apresentação',
        headline: `Legenda para foto oficial da loja`,
        body: `Trabalho sério, produtos de confiança e compromisso com o desenvolvimento de Chimoio. 

Na ${business.name}, nosso objetivo é garantir que nenhuma empresa, escola ou profissional pare de trabalhar por falta de material de escritório.

📍 Estamos localizados no Capuchino - Chimoio.
Fale conosco: ${phones}`,
        cta: 'Salvar Contatos',
      },
    ];
  };

  const copies = generateCopies();

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5" />
              <span>Gerador de Copywriting & Anúncios</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Criador de Copies para Facebook, Instagram e WhatsApp
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Gere variações persuasivas imediatas personalizadas para os produtos da {business.name}.
            </p>
          </div>
        </div>

        {/* Filters Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80 text-xs">
          <div>
            <label className="block text-slate-400 mb-1.5 font-medium">1. Selecione o Produto / Foco:</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:outline-none focus:border-blue-500 font-medium"
            >
              {productList.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-400 mb-1.5 font-medium">2. Selecione o Ângulo / Apelo Psicológico:</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedAngle('urgency')}
                className={`p-2 rounded-lg font-medium transition-colors text-left truncate cursor-pointer ${
                  selectedAngle === 'urgency'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                🚨 Urgência / Emergência
              </button>
              <button
                type="button"
                onClick={() => setSelectedAngle('b2b')}
                className={`p-2 rounded-lg font-medium transition-colors text-left truncate cursor-pointer ${
                  selectedAngle === 'b2b'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                💼 B2B & Economia
              </button>
              <button
                type="button"
                onClick={() => setSelectedAngle('combo')}
                className={`p-2 rounded-lg font-medium transition-colors text-left truncate cursor-pointer ${
                  selectedAngle === 'combo'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                📦 Combo com Desconto
              </button>
              <button
                type="button"
                onClick={() => setSelectedAngle('trust')}
                className={`p-2 rounded-lg font-medium transition-colors text-left truncate cursor-pointer ${
                  selectedAngle === 'trust'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                🏢 Loja Local / Confiança
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Variations List */}
      <div className="space-y-6">
        {copies.map((copyItem, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-slate-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40">
                  {copyItem.format}
                </span>
                <h3 className="text-base font-bold text-white mt-1.5">
                  {copyItem.headline}
                </h3>
              </div>

              <button
                onClick={() => handleCopy(`${copyItem.headline}\n\n${copyItem.body}`, index)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer self-start sm:self-auto shrink-0"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Texto Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Texto Completo</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
              {copyItem.body}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Chamada para Ação sugerida: <strong className="text-emerald-400">{copyItem.cta}</strong></span>
              <span className="text-slate-500 text-[11px]">Pronto para colar no Meta Ads ou WhatsApp</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
