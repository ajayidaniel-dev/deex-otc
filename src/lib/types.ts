export interface Transaction {
  id: string;
  amount: string;
  currency: string;
  payoutAmount: string;
  payoutCurrency: string;
  rate: string;
  status: "completed" | "pending" | "processing";
  date: string;
  time: string;
  usdAmount: string;
  exchangeRate: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: string;
  currency: string;
  color: "green" | "red" | "blue" | "teal" | "gray";
  trend?: "up" | "down" | "stable";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface RateHistory {
  date: string;
  btcUsd: number;
  btcNgn: number;
  usdtUsd: number;
  usdtNgn: number;
}

export interface VolumeHistory {
  date: string;
  totalTransactions: number;
  totalAmount: number;
  totalPayoutAmount: number;
}
