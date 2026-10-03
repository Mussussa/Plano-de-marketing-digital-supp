import React, { useState } from 'react';
import { BusinessProfile, Currency } from '../types/marketing';
import { INITIAL_BUSINESS_PROFILE } from '../data/marketingData';
import { X, Building2, Phone, Mail, MapPin, DollarSign, RotateCcw } from 'lucide-react';

interface BusinessSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: BusinessProfile;
  onSave: (updated: BusinessProfile) => void;
}

export const BusinessSettingsModal: React.FC<BusinessSettingsModalProps> = ({
  isOpen,
  onClose,
  business,
  onSave,
}) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<BusinessProfile>({ ...business });

  const handlePhoneChange = (index: number, val: string) => {
    const updated = [...form.phones];
    updated[index] = val;
    setForm({ ...form, phones: updated });
  };

  const handleResetToPhotoData = () => {
    setForm({ ...INITIAL_BUSINESS_PROFILE });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs no-print">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">Dados da Empresa & Orçamento</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Business Name and Tagline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Nome do Negócio</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Slogan / Nicho</label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Bairro / Endereço</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Cidade</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Província / País</label>
              <input
                type="text"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Contact Numbers */}
          <div>
            <label className="block text-slate-400 mb-1 font-medium">
              Contatos Telefônicos / WhatsApp (Conforme placa)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={form.phones[0] || ''}
                onChange={(e) => handlePhoneChange(0, e.target.value)}
                placeholder="+258 835671494"
                className="bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                value={form.phones[1] || ''}
                onChange={(e) => handlePhoneChange(1, e.target.value)}
                placeholder="+258 842244892"
                className="bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                value={form.phones[2] || ''}
                onChange={(e) => handlePhoneChange(2, e.target.value)}
                placeholder="+258 869468195"
                className="bg-slate-800 border border-slate-700 text-white rounded-lg p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-400 mb-1 font-medium">Email Comercial</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Budget & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">
                Orçamento Mensal de Marketing ({form.currency})
              </label>
              <input
                type="number"
                min={5000}
                max={500000}
                step={1000}
                value={form.monthlyBudget}
                onChange={(e) => setForm({ ...form, monthlyBudget: Number(e.target.value) })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Moeda Padrão</label>
              <select
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value as Currency })}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              >
                <option value="MZN">Metical Moçambicano (MZN - MT)</option>
                <option value="USD">Dólar Americano (USD - $)</option>
                <option value="BRL">Real Brasileiro (BRL - R$)</option>
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={handleResetToPhotoData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Dados da Foto</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm cursor-pointer"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
