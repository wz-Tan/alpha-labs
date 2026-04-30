import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStrategyBold } from "react-icons/pi";
import { RiStockFill, RiStockLine } from "react-icons/ri";
import { SiCardmarket } from "react-icons/si";

export function Sidebar() {
  return (
    // Take 2 Columns from the Grid
    <div className="flex flex-col bg-[#0A1628] col-span-1 h-full border-r border-[#1A2E4A] text-[#C8D8EB] gap-10 p-8 text-start">
      <Link href="/dashboard" className="flex items-center gap-2">
        <LuLayoutDashboard className="text-lg" />
        <h1 className="text-lg">Dashboard</h1>
      </Link>

      <Link href="/markets" className="flex items-center gap-2">
        <SiCardmarket className="text-lg" />
        <h1 className="text-lg">Markets</h1>
      </Link>
      
      <Link href="/stocks" className="flex items-center gap-2">
        <RiStockLine className="text-lg" />
        <h1 className="text-lg">Stocks</h1>
      </Link>

      <Link href="/strategies" className="flex items-center gap-2">
        <PiStrategyBold className="text-lg" />
        <h1 className="text-lg">Strategies</h1>
      </Link>
    </div>
  );
}
