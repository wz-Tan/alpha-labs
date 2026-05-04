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
  const [tickerInput, setTickerInput] = useState("");
  const [tickerName, setTickerName] = useState("AAPL");
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
  }, [tickerName, timeframe]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*Grid to Split Sidebar and Content*/}
      <div className="grid grid-cols-9 flex-1">
        <Sidebar />
        <main className="text-[#C8D8EB] flex flex-col p-8 w-full h-full col-span-8 bg-[#0A1628]">
          {/* Stock Info and Input Field */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl">{tickerName}</h1>
              {/* Choose Company Name*/}
              <div className="flex flex-row gap-2 items-center">
                <input
                  type="text"
                  value={tickerInput}
                  onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
                  // Update on Enter As Well
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (tickerInput.trim()) {
                        setTickerName(tickerInput);
                        setTickerInput("");
                      }
                    }
                  }}
                  placeholder="Enter ticker symbol"
                  className="px-3 py-2 bg-[#0F2040] text-[#C8D8EB] border border-[#1A2E4A] rounded focus:outline-none focus:border-[#60A5FA]"
                />
                <button
                  onClick={() => {
                    if (tickerInput.trim()) {
                      setTickerName(tickerInput);
                      setTickerInput("");
                    }
                  }}
                  className="px-4 py-2 bg-[#60A5FA] text-[#FFFFFF] rounded hover:bg-[#3B82F6] transition-colors font-medium"
                >
                  Confirm
                </button>
              </div>
            </div>
            {/* Timeframe Selector */}
            <div className="flex flex-row gap-2">
              {timeframeOptions.map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded font-medium transition-colors ${
                    timeframe === tf
                      ? "bg-[#60A5FA] text-[#FFFFFF]"
                      : "bg-[#0F2040] text-[#C8D8EB] border border-[#1A2E4A] hover:bg-[#162B50]"
                  }`}
                >
                  {timeframeLabels[tf]}
                </button>
              ))}
            </div>
          </div>

          {/* Actual Stock Here */}
          <div
            className="flex flex-1 mt-4 rounded-md border-2 border-[#1A2E4A] bg-[#0F2040]"
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
