"use client";
import { CandlestickSeries, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { AlphaContextType } from "../types";
import { useAlphaContext } from "../contexts/alphaContext";

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
      width: chartDimensions.width,
      height: chartDimensions.height,
    });

    chart.applyOptions({
      layout: {
        background: {
          color: "#0F2040",
        },
        textColor: "#FFFFFF",
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

    // Clear Canvas Object when Returned
    return () => chart.remove();
  }, [chartDimensions.height, chartDimensions.height, chartData]);

  return <div className="flex flex-1" ref={containerRef} />;
}
