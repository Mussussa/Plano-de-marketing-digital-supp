/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BusinessProfile, WeeklyTask, Currency } from './types/marketing';
import {
  INITIAL_BUSINESS_PROFILE,
  INITIAL_TASKS,
  INITIAL_CAMPAIGNS,
  INITIAL_SOCIAL_POSTS,
} from './data/marketingData';
import { Header } from './components/Header';
import { OverviewTab } from './components/OverviewTab';
import { ScheduleTab } from './components/ScheduleTab';
import { BudgetTab } from './components/BudgetTab';
import { CampaignsTab } from './components/CampaignsTab';
import { SocialMediaTab } from './components/SocialMediaTab';
import { CopyGeneratorTab } from './components/CopyGeneratorTab';
import { BusinessSettingsModal } from './components/BusinessSettingsModal';
import { PrintReportView } from './components/PrintReportView';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [business, setBusiness] = useState<BusinessProfile>(INITIAL_BUSINESS_PROFILE);
  const [tasks, setTasks] = useState<WeeklyTask[]>(INITIAL_TASKS);
  const [campaigns] = useState(INITIAL_CAMPAIGNS);
  const [socialPosts] = useState(INITIAL_SOCIAL_POSTS);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddTask = (newTaskData: Omit<WeeklyTask, 'id'>) => {
    const newTask: WeeklyTask = {
      ...newTaskData,
      id: `task-${Date.now()}`,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateBudget = (newBudget: number) => {
    setBusiness((prev) => ({ ...prev, monthlyBudget: newBudget }));
  };

  const handleChangeCurrency = (curr: Currency) => {
    setBusiness((prev) => ({ ...prev, currency: curr }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Header
        business={business}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onPrint={handlePrint}
        onChangeCurrency={handleChangeCurrency}
      />

      {/* Main Interactive Work Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 no-print">
        {activeTab === 'overview' && (
          <OverviewTab business={business} onNavigate={setActiveTab} />
        )}

        {activeTab === 'schedule' && (
          <ScheduleTab
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onAddTask={handleAddTask}
            business={business}
          />
        )}

        {activeTab === 'budget' && (
          <BudgetTab
            business={business}
            onUpdateBudget={handleUpdateBudget}
          />
        )}

        {activeTab === 'campaigns' && (
          <CampaignsTab campaigns={campaigns} business={business} />
        )}

        {activeTab === 'social' && (
          <SocialMediaTab posts={socialPosts} business={business} />
        )}

        {activeTab === 'generator' && (
          <CopyGeneratorTab business={business} />
        )}
      </main>

      {/* Print View for Clean PDF Export */}
      <PrintReportView
        business={business}
        tasks={tasks}
        campaigns={campaigns}
      />

      {/* Settings Modal */}
      <BusinessSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        business={business}
        onSave={(updated) => setBusiness(updated)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">{business.name}</span>
            <span>·</span>
            <span>{business.address}, {business.city} ({business.country})</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Contatos: {business.phones[0]}</span>
            <span>·</span>
            <span>{business.email}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
