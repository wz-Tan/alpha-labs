"use client";
import Chart from "../components/chart";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { useEffect } from "react";
import { getMarket } from "../../api/get_market";

export default function Dashboard() {
  useEffect(() => {
    getMarket("Airasia");
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
            <h1 className="text-4xl">AAX</h1>
          </div>

          {/* Actual Stock Here */}
          <div className="flex flex-1 bg-black mt-4 rounded-lg p-4">
            <Chart />
          </div>
        </main>
      </div>
    </div>
  );
}
