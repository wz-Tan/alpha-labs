"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLinks from "./NavLinks";
import TickerInput from "./TickerInput";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

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
          <MdOutlineSignalCellularAlt className="text-xl"/>
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
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(10, 22, 40, 0.8)" }}
          onClick={() => setShowIndicator(false)}
        >
          <div
            className="bg-[#0F2040] border border-[#1A2E4A] rounded-2xl p-8 w-[480px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-lg font-semibold">Indicators</h2>
              <button
                onClick={() => setShowIndicator(false)}
                className="text-[#5B7FA6] hover:text-[#C8D8EB] transition-colors"
              >
                ✕
              </button>
            </div>
            {/* Indicator content goes here */}
            <p className="text-[#5B7FA6]">No indicators added yet.</p>
          </div>
        </div>
      )}
    </div>
  );
}
