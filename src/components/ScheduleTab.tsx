import React, { useState } from 'react';
import { WeeklyTask, BusinessProfile } from '../types/marketing';
import { formatMoney } from '../utils/currency';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Plus,
  Filter,
  Check,
  Clock,
  Send,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';

interface ScheduleTabProps {
  tasks: WeeklyTask[];
  onToggleTask: (id: string) => void;
  onAddTask: (task: Omit<WeeklyTask, 'id'>) => void;
  business: BusinessProfile;
}

export const ScheduleTab: React.FC<ScheduleTabProps> = ({
  tasks,
  onToggleTask,
  onAddTask,
  business,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [isAddingTask, setIsAddingTask] = useState(false);

  // New task form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newWeek, setNewWeek] = useState<1 | 2 | 3 | 4>(1);
  const [newChannel, setNewChannel] = useState<WeeklyTask['channel']>('Facebook Ads');
  const [newPriority, setNewPriority] = useState<WeeklyTask['priority']>('Alta');
  const [newDeliverable, setNewDeliverable] = useState('');

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100) || 0;

  const filteredTasks = tasks.filter((t) => {
    if (selectedWeek !== 'all' && t.week !== selectedWeek) return false;
    if (selectedChannel !== 'all' && t.channel !== selectedChannel) return false;
    return true;
  });

  const weekDescriptions: Record<number, { title: string; objective: string; budgetShare: number }> = {
    1: {
      title: 'Semana 1: Configuração, Ativos & Reconhecimento Local',
      objective: 'Organizar a infraestrutura comercial (WhatsApp Business + Catálogo) e lançar anúncio institucional da Good Supplier E.I.',
      budgetShare: 20,
    },
    2: {
      title: 'Semana 2: Tração de Vendas & Campanha Click-to-WhatsApp',
      objective: 'Ativar campanhas de resposta direta para os Toners HP 1117A e 147A com foco em fechar orçamentos no mesmo dia.',
      budgetShare: 35,
    },
    3: {
      title: 'Semana 3: Retargeting & Prospecção Ativa B2B',
      objective: 'Reimpactar quem interagiu na Semana 1 e 2, ofertando kits de reposição para escritórios, clínicas e escolas.',
      budgetShare: 25,
    },
    4: {
      title: 'Semana 4: Fechamento de Mês, Promoção por Volume & Métricas',
      objective: 'Campanha relâmpago de 96 horas para reposição de papelaria antes do início do próximo mês e consolidação de ROAS.',
      budgetShare: 20,
    },
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAddTask({
      week: newWeek,
      title: newTitle.trim(),
      description: newDesc.trim() || 'Ação operacional do plano de marketing.',
      channel: newChannel,
      priority: newPriority,
      completed: false,
      costAllocation: 0,
      deliverable: newDeliverable.trim() || 'Meta concluída e documentada.',
    });

    setNewTitle('');
    setNewDesc('');
    setNewDeliverable('');
    setIsAddingTask(false);
  };

  const channelsList = [
    'all',
    'Facebook Ads',
    'Instagram Ads',
    'WhatsApp Business',
    'Instagram Orgânico',
    'Google Perfil',
    'Gestão',
  ];

  return (
    <div className="space-y-6">
      {/* Header and Progress Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Execução Operacional
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Cronograma Semanal de Marketing (4 Semanas)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Acompanhe passo a passo as ações de tráfego pago, mídias sociais e prospecção direta para a {business.name}.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddingTask(!isAddingTask)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isAddingTask ? 'Fechar Formulário' : 'Nova Tarefa'}</span>
            </button>
          </div>
        </div>

        {/* Execution Progress Bar */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Progresso Geral das Ações: <strong className="text-white">{completedCount} de {tasks.length} concluídas</strong>
            </span>
            <span className="font-bold text-blue-400 tabular-nums">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* New Task Inline Form */}
      {isAddingTask && (
        <form
          onSubmit={handleCreateTask}
          className="bg-slate-900 border border-blue-600/40 rounded-xl p-5 space-y-4 transition-all"
        >
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <Plus className="w-4 h-4 text-blue-400" />
            <span>Adicionar Nova Tarefa ao Cronograma</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Semana</label>
              <select
                value={newWeek}
                onChange={(e) => setNewWeek(Number(e.target.value) as 1 | 2 | 3 | 4)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value={1}>Semana 1</option>
                <option value={2}>Semana 2</option>
                <option value={3}>Semana 3</option>
                <option value={4}>Semana 4</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Canal de Marketing</label>
              <select
                value={newChannel}
                onChange={(e) => setNewChannel(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Facebook Ads">Facebook Ads</option>
                <option value="Instagram Ads">Instagram Ads</option>
                <option value="WhatsApp Business">WhatsApp Business</option>
                <option value="Instagram Orgânico">Instagram Orgânico</option>
                <option value="Google Perfil">Google Perfil</option>
                <option value="Gestão">Gestão</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Prioridade</label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Normal">Normal</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Entregável Esperado</label>
              <input
                type="text"
                placeholder="Ex: Anúncio rodando ou 20 mensagens enviadas"
                value={newDeliverable}
                onChange={(e) => setNewDeliverable(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Título da Ação *</label>
              <input
                type="text"
                required
                placeholder="Ex: Lançar anúncio de toners para contadores"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Descrição / Instruções</label>
              <input
                type="text"
                placeholder="Ex: Definir orçamento de 500 MT/dia para o público de Chimoio"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddingTask(false)}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm cursor-pointer"
            >
              Salvar Tarefa
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs by Week & Channel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        {/* Week Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto max-w-full">
          <button
            onClick={() => setSelectedWeek('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer ${
              selectedWeek === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Todas as Semanas
          </button>
          {[1, 2, 3, 4].map((wk) => (
            <button
              key={wk}
              onClick={() => setSelectedWeek(wk)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedWeek === wk
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semana {wk}
            </button>
          ))}
        </div>

        {/* Channel Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">Canal:</span>
          <select
            value={selectedChannel}
            onChange={(e) => setSelectedChannel(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
          >
            <option value="all">Todos os Canais</option>
            {channelsList.filter((c) => c !== 'all').map((ch) => (
              <option key={ch} value={ch}>
                {ch}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Week Highlights Info Banner (when a single week is selected) */}
      {typeof selectedWeek === 'number' && (
        <div className="bg-slate-900/80 border border-blue-900/40 rounded-xl p-4 text-xs space-y-1">
          <div className="flex items-center justify-between text-blue-400 font-bold">
            <span>{weekDescriptions[selectedWeek].title}</span>
            <span className="text-slate-400 font-mono">
              Orçamento sugerido: {weekDescriptions[selectedWeek].budgetShare}% (
              {formatMoney((business.monthlyBudget * weekDescriptions[selectedWeek].budgetShare) / 100, business.currency)})
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {weekDescriptions[selectedWeek].objective}
          </p>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400 text-xs">
            Nenhuma tarefa encontrada com os filtros selecionados.
          </div>
        ) : (
          filteredTasks.map((task) => {
            const isDone = task.completed;
            return (
              <div
                key={task.id}
                className={`group bg-slate-900 border rounded-xl p-4 sm:p-5 transition-all ${
                  isDone
                    ? 'border-slate-800/60 bg-slate-900/40 opacity-75'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  {/* Complete Checkbox Button */}
                  <button
                    onClick={() => onToggleTask(task.id)}
                    className="mt-0.5 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
                    title={isDone ? 'Marcar como pendente' : 'Marcar como concluída'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/10" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 hover:border-blue-400" />
                    )}
                  </button>

                  {/* Task Content */}
                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {/* Quiet Unboxed Metadata with · separator */}
                      <span className="font-semibold text-blue-400">Semana {task.week}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-300">{task.channel}</span>
                      <span className="text-slate-600">·</span>
                      <span
                        className={
                          task.priority === 'Alta'
                            ? 'text-amber-400'
                            : task.priority === 'Média'
                            ? 'text-blue-300'
                            : 'text-slate-400'
                        }
                      >
                        Prioridade {task.priority}
                      </span>
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-semibold transition-colors ${
                        isDone ? 'line-through text-slate-500' : 'text-white'
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {task.description}
                    </p>

                    {/* Deliverable Box */}
                    <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg px-3 py-2 text-xs flex items-center justify-between gap-2">
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <span className="text-slate-500">Entregável:</span>
                        <span>{task.deliverable}</span>
                      </div>
                      <span className="text-slate-500 text-[11px] whitespace-nowrap">
                        {isDone ? '✓ Concluído' : 'Pendente'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
