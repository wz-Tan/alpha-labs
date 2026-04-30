"use client";
import { CandlestickSeries, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { ChartData } from "../types";

const dummyData = [
  { time: "2024-01-02", open: 8.2, high: 8.55, low: 8.1, close: 8.45 },
  { time: "2024-01-03", open: 8.45, high: 8.7, low: 8.3, close: 8.6 },
  { time: "2024-01-04", open: 8.6, high: 8.8, low: 8.4, close: 8.5 },
  { time: "2024-01-05", open: 8.5, high: 8.65, low: 8.2, close: 8.25 },
  { time: "2024-01-08", open: 8.25, high: 8.45, low: 8.0, close: 8.1 },
  { time: "2024-01-09", open: 8.1, high: 8.3, low: 7.9, close: 8.2 },
  { time: "2024-01-10", open: 8.2, high: 8.75, low: 8.15, close: 8.7 },
  { time: "2024-01-11", open: 8.7, high: 9.0, low: 8.6, close: 8.95 },
  { time: "2024-01-12", open: 8.95, high: 9.1, low: 8.8, close: 8.85 },
  { time: "2024-01-15", open: 8.85, high: 8.9, low: 8.5, close: 8.55 },
];

export default function Chart({
  height = 800,
  width = 1500,
  data = dummyData,
}: {
  height: number;
  width: number;
  data: Array<ChartData>;
}) {
  // Create Reference to Draw On
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width: width,
      height: height,
    });
    const lineSeries = chart.addSeries(CandlestickSeries);

    lineSeries.setData(data);

    // Clear Canvas Object when Returned
    return () => chart.remove();
  }, [height, width, data]);

  return <div className="flex flex-1" ref={containerRef} />;
}
