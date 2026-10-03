export type Currency = 'MZN' | 'USD' | 'BRL';

export interface BusinessProfile {
  name: string;
  tagline: string;
  address: string;
  city: string;
  province: string;
  country: string;
  phones: string[];
  email: string;
  whatsapp: string;
  currency: Currency;
  monthlyBudget: number; // in current currency
  primaryProducts: string[];
}

export interface WeeklyTask {
  id: string;
  week: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  channel: 'Facebook Ads' | 'Instagram Ads' | 'WhatsApp Business' | 'Instagram Orgânico' | 'Google Perfil' | 'Gestão';
  priority: 'Alta' | 'Média' | 'Normal';
  completed: boolean;
  costAllocation: number; // percentage of weekly budget
  deliverable: string;
}

export interface MetaCampaign {
  id: string;
  title: string;
  subtitle: string;
  stage: 'Topo (Reconhecimento)' | 'Meio (Tráfego & Catálogo)' | 'Fundo (Vendas & WhatsApp)' | 'Retargeting (Reativação)';
  objective: 'Mensagens no WhatsApp' | 'Reconhecimento da Marca' | 'Geração de Cadastros (Leads)' | 'Tráfego para Catálogo';
  budgetPercentage: number;
  targetAudience: {
    location: string;
    radius: string;
    age: string;
    genders: string;
    interests: string[];
    jobTitles: string[];
  };
  headline: string;
  primaryText: string;
  cta: string;
  imagePath: string;
  format: 'Imagem Única' | 'Carrossel' | 'Vídeo/Reels';
  placement: string;
}

export interface SocialPost {
  id: string;
  day: number;
  dayOfWeek: string;
  type: 'Reels' | 'Carrossel' | 'Foto + Texto' | 'Stories Diário';
  theme: 'Educativo / Dica' | 'Comercial / Venda' | 'Autoridade / Prova Social' | 'Bastidores & Entrega';
  hook: string;
  contentIdea: string;
  callToAction: string;
  suggestedTime: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  percentage: number;
  description: string;
  items: {
    label: string;
    amount: number;
    week: number;
    details: string;
  }[];
}
