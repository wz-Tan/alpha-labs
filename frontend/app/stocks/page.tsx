"use client";
import Chart from "../components/chart";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { useEffect, useRef, useState } from "react";
import { getTicker } from "../../api/get_ticker";
import { ChartData } from "../types";

export default function Stocks() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [chartDimensions, setChartDimensions] = useState({
    width: 0,
    height: 0,
  });
  const tickerName = "AAPL";

  useEffect(() => {
    async function initTickerData() {
      const data = await getTicker(tickerName, "60mo");
      if (data) {
        setChartData(data);
      }
    }

    // Get Ticker Data
    initTickerData();

    // Get Chart Div Size
    if (chartRef.current) {
      setChartDimensions({
        width: chartRef.current.offsetWidth,
        height: chartRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*Grid to Split Sidebar and Content*/}
      <div className="grid grid-cols-9 flex-1">
        <Sidebar />
        <main className="text-[#C8D8EB] flex flex-col p-8 w-full h-full col-span-8 bg-[#0A1628]">
          {/* Row for Stock Information */}
          <div className="flex flex-row">
            <h1 className="text-4xl">{tickerName}</h1>
          </div>

          {/* Actual Stock Here */}
          <div
            className="flex flex-1 mt-4 rounded-md border-2 border-[#1A2E4A]"
            ref={chartRef}
          >
            {chartData.length > 0 && (
              <Chart
                data={chartData}
                width={chartDimensions.width}
                height={chartDimensions.height}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
