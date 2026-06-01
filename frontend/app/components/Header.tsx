"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType } from "../types";
import NavLinks from "./NavLinks";
import TickerInput from "./TickerInput";

export function Header() {
  const pathName = usePathname();

  // Make A Different Header for Stock Page Specifically
  const inStockPage = pathName === "/stock";

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
      {inStockPage ? <h1>Indicators</h1> : <NavLinks />}

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <h1 className="text-xl whitespace-nowrap">User_1</h1>
      </div>
    </div>
  );
}
