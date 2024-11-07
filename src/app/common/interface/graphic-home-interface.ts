export interface MonthlyGraphicOrdersAndClaims  {
  title: string;
  description: string;
  labels: string[];
  dataPoints: number[];
  lastUpdated: string;
}

export interface WeeklyGraphicOrdersAndClaims  {
  title: string;
  subtitle: string;
  labels: string[];
  dataPoints: number[];
  lastUpdated: string;
}

export interface MadeGraphicOrdersAndClaims  {
  title: string;
  subtitle: string;
  labels: string[];
  dataPoints: number[];
  maxDataPoints: number[];
  lastUpdated: string;
}