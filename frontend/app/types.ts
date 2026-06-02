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
  tickerName: string;
  setTickerName: React.Dispatch<React.SetStateAction<string>>;
}

export interface AlphaReturnType {
  dates: string[];
}

// Indicator Types
export interface IndicatorType {
  description: string;
  value: string;
}

interface IndicatorTypeList {
  RSI14: IndicatorType;
  MA50: IndicatorType;
  MA200: IndicatorType;
}

export const Indicators: IndicatorTypeList = {
  RSI14: {
    description: "Relative Strength Index (14 Days)",
    value: "rsi_14",
  },
  MA50: {
    description: "Moving Average (50 Days)",
    value: "ma_50",
  },
  MA200: {
    description: "Moving Average (200 Days)",
    value: "ma_200",
  },
};
