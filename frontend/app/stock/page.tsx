"use client";
import Chart from "../components/chart";
import { Header } from "../components/header";
import { Context, useEffect, useRef, useState } from "react";
import { getTicker } from "../../api/get_ticker";

import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType } from "../types";

export default function Stocks() {
  const chartRef = useRef<HTMLDivElement>(null);
  const {
    chartData,
    setChartData,
    setValidDates,
    tickerName,
  } = useAlphaContext() as AlphaContextType;
  const [timeframe, setTimeframe] = useState("60mo");
  const timeframeOptions = ["1mo", "3mo", "6mo", "1y", "5y", "max"];
  const timeframeLabels: { [key: string]: string } = {
    "1mo": "1M",
    "3mo": "3M",
    "6mo": "6M",
    "1y": "1Y",
    "5y": "5Y",
    max: "Max",
  };

  useEffect(() => {
    async function initTickerData() {
      const data = await getTicker(tickerName, timeframe);
      if (data) {
        setChartData(data);
        setValidDates(["RESET"]);
        console.log("set chart data");
      }
    }

    // Get Ticker Data
    initTickerData();
  }, [tickerName, timeframe]);

  return (
    <main className="text-[#C8D8EB] flex flex-col p-4 px-8 w-full flex-1 bg-[#0A1628] min-h-0">
      {chartData.length > 0 ? (
        <div className="flex flex-col flex-1 gap-4">
          {/* Ticker + Timeframe */}
          <div className="flex gap-4 justify-between items-center">
            <h1 className="text-2xl">{tickerName}</h1>
            <div className="flex flex-row gap-2">
              {timeframeOptions.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded font-medium transition-colors ${
                    timeframe === tf
                      ? "bg-[#60A5FA] text-white"
                      : "bg-[#0F2040] text-[#C8D8EB] border border-[#1A2E4A] hover:bg-[#162B50]"
                  }`}
                >
                  {timeframeLabels[tf]}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div
            ref={chartRef}
            className="flex-1 rounded-md border-2 border-[#1A2E4A] bg-[#0F2040] min-h-0"
          >
            <Chart />
          </div>
        </div>
      ) : (
        <h1 className="text-2xl p-4">Sorry. Something went wrong.</h1>
      )}
    </main>
  );
}
