import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStrategyBold } from "react-icons/pi";
import { RiStockLine } from "react-icons/ri";
import { SiCardmarket } from "react-icons/si";

export function Sidebar() {
  return (
    // Take 2 Columns from the Grid
    <div className="flex flex-col bg-[#0A1628] col-span-1 h-full text-xl border-r border-[#1A2E4A] text-[#C8D8EB] gap-10 p-8 text-start">
      <Link href="/dashboard" className="flex items-center gap-2 ">
        <LuLayoutDashboard />
        <h1>Dashboard</h1>
      </Link>

      <Link href="/markets" className="flex items-center gap-2">
        <SiCardmarket />
        <h1>Markets</h1>
      </Link>

      <Link href="/stocks" className="flex items-center gap-2">
        <RiStockLine />
        <h1>Stocks</h1>
      </Link>

      <Link href="/strategies" className="flex items-center gap-2">
        <PiStrategyBold />
        <h1>Strategies</h1>
      </Link>
    </div>
  );
}
