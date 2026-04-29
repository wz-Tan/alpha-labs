import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiStrategyLight } from "react-icons/pi";
import { SiCardmarket } from "react-icons/si";

export function Sidebar() {
  return (
    // Take 2 Columns from the Grid
    <div className="flex flex-col bg-amber-50 col-span-1 h-full border-r border-black text-black gap-5 p-8 text-start">
      <Link href="/dashboard" className="flex items-center gap-1">
        <LuLayoutDashboard className="text-xl" />
        <h1 className="text-xl">Dashboard</h1>
      </Link>

      <Link href="/markets" className="flex items-center gap-1">
        <SiCardmarket className="text-xl" />
        <h1 className="text-xl">Markets</h1>
      </Link>

      <Link href="/strategies" className="flex items-center gap-1">
        <PiStrategyLight className="text-xl" />
        <h1 className="text-xl">Strategies</h1>
      </Link>
    </div>
  );
}
