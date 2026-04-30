"use client";
import { createChart, LineSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function Chart({
  height = 800,
  width = 1500,
}: {
  height: number;
  width: number;
}) {
  // Create Reference to Draw On
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width: width,
      height: height,
    });
    const lineSeries = chart.addSeries(LineSeries);

    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ]);

    // Clear Canvas Object when Returned
    return () => chart.remove();
  }, [height, width]);

  return <div className="flex flex-1" ref={containerRef} />;
}
