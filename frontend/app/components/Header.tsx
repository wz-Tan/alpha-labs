"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import IndicatorSelector from "./IndicatorSelector";
import NavLinks from "./NavLinks";
import TickerInput from "./TickerInput";

export function Header() {
  const pathName = usePathname();
  const inStockPage = pathName === "/stock";
  const [showIndicator, setShowIndicator] = useState(false);

  return (
    <div className="bg-[#0F2040] border-b flex items-center justify-between w-full px-8 py-4 text-[#C8D8EB] border-[#1A2E4A]">
      {/* Logo */}
      <div className="flex-1 flex gap-6 items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl whitespace-nowrap">AlphaLabs</h1>
        </Link>
        <TickerInput />
      </div>

      {/* Center */}
      {inStockPage ? (
        <button
          onClick={() => setShowIndicator(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#162B50] text-[#60A5FA] text-lg border border-[#1A2E4A] rounded-xl hover:border-[#60A5FA] transition-colors hover:cursor-pointer"
        >
          <MdOutlineSignalCellularAlt className="text-xl" />
          Indicators
        </button>
      ) : (
        <NavLinks />
      )}

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <h1 className="text-xl whitespace-nowrap">User_1</h1>
      </div>

      {/* Indicator Modal */}
      {showIndicator && (
        <IndicatorSelector setShowIndicator={setShowIndicator} />
      )}
    </div>
  );
}
