import { Currency } from '../types/marketing';

export const CONVERSION_RATES: Record<Currency, number> = {
  MZN: 1,       // Base: 1 MZN = 1
  USD: 0.0157,  // 1 MZN ≈ 0.0157 USD (or 1 USD ≈ 63.8 MZN)
  BRL: 0.087,   // 1 MZN ≈ 0.087 BRL (or 1 BRL ≈ 11.5 MZN)
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  MZN: 'MT',
  USD: '$',
  BRL: 'R$',
};

export function formatMoney(amountInMZN: number, currency: Currency): string {
  const converted = amountInMZN * CONVERSION_RATES[currency];
  
  if (currency === 'MZN') {
    return `${Math.round(converted).toLocaleString('pt-PT')} MT`;
  }
  if (currency === 'USD') {
    return `$${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
  }
  return `R$ ${converted.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 })}`;
}

export function formatRawNumber(val: number): string {
  return Math.round(val).toLocaleString('pt-PT');
}
