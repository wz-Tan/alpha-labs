"use client";
// This context is used for the frontend to preserve the current chart and for running an alpha to alter the values
import { createContext, ReactNode, useContext, useState } from "react";
import { AlphaContextType, ChartData } from "../types";

const AlphaContext = createContext<AlphaContextType | null>(null);

export function AlphaContextProvider({ children }: { children: ReactNode }) {
  const [tickerName, setTickerName] = useState("");
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartDimensions, setChartDimensions] = useState({
    width: 0,
    height: 0,
  });

  return (
    <AlphaContext.Provider
      value={{
        chartData,
        setChartData,
        chartDimensions,
        setChartDimensions,
        tickerName,
        setTickerName,
      }}
    >
      {children}
    </AlphaContext.Provider>
  );
}

export const useAlphaContext = () => useContext(AlphaContext);
