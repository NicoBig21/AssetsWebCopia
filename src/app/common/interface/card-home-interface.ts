export interface InfoCardProps {
    title: string;
    date: string;
    location: string;
    growth: number;
    earnings: string;
    growthColor: string;
    sparklineData: number[]; // Array of growth data for the sparkline
  }
  