"use client";
import { CandlestickSeries, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType } from "../types";

const dummyDataForPanels = [
  { time: "2024-01-02" },
  { time: "2024-01-03" },
  { time: "2024-01-04" },
  { time: "2024-01-05" },
  { time: "2024-01-08" },
  { time: "2024-01-09" },
  { time: "2024-01-10" },
  { time: "2024-01-11" },
  { time: "2024-01-12" },
  { time: "2024-01-13" },
];

export default function Chart() {
  // Pull Data from Context
  const { chartData, chartDimensions } = useAlphaContext() as AlphaContextType;

  // Create Reference to Draw On
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      autoSize: true,
    });

    chart.applyOptions({
      layout: {
        background: {
          color: "#0F2040",
        },
        textColor: "#666666",
        fontSize: 14,
        fontFamily: "Libre_Baskerville",
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });

    const lineSeries = chart.addSeries(CandlestickSeries);

    lineSeries.applyOptions({
      upColor: "#34D399",
      downColor: "#F87171",
    });

    lineSeries.setData(chartData);
    chart.timeScale().fitContent();
    return () => chart.remove();
  }, [chartDimensions.height, chartDimensions.width, chartData]);

  return <div className="w-full h-full" ref={containerRef} />;
}
