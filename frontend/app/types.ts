export interface ChartData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface AlphaContextType {
  chartData: ChartData[];
  setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>;
  chartDimensions: { width: number; height: number };
  setChartDimensions: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
}
