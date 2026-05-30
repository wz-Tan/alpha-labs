"use client";
import Link from "next/link";
import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType } from "../types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const { setTickerName } = useAlphaContext() as AlphaContextType;
  const [tickerInput, setTickerInput] = useState("");
  const router = useRouter();

  return (
    <div className="bg-[#0F2040] border-b flex items-center justify-between w-full px-8 py-4 text-[#C8D8EB] border-[#1A2E4A]">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/">
          <h1 className="font-bold text-2xl whitespace-nowrap">AlphaLabs</h1>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex items-center gap-6 text-xl">
        <Link href="/dashboard" className="hover:text-white transition-colors">
          Dashboard
        </Link>
        <Link href="/markets" className="hover:text-white transition-colors">
          Markets
        </Link>
        <Link href="/watchlist" className="hover:text-white transition-colors">
          Watchlist
        </Link>
        <Link href="/strategies" className="hover:text-white transition-colors">
          Strategies
        </Link>
      </nav>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <input
          type="text"
          value={tickerInput}
          onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
          // Query on Enter + Redirect to Stock Page
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (tickerInput.trim()) {
                setTickerName(tickerInput);
                setTickerInput("");
                router.replace("/stock");
              }
            }
          }}
          placeholder="Enter ticker symbol"
          className="px-3 py-2 bg-[#162B50] text-[#C8D8EB] border border-[#1A2E4A] rounded-xl focus:outline-none focus:border-[#60A5FA]"
        />
        <h1 className="text-xl whitespace-nowrap">User_1</h1>
      </div>
    </div>
  );
}
