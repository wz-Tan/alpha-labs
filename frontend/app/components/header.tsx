"use client";
import Link from "next/link";
import { runAlpha } from "@/api/run_alpha";
import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType, AlphaReturnObject } from "../types";

export function Header() {
  const { setValidDates } = useAlphaContext() as AlphaContextType;

  return (
    <div className="bg-[#0F2040] border-b justify-between items-center flex flex-row w-full p-4 px-8 text-[#C8D8EB] border-[#1A2E4A] sticky top-0">
      <Link href="/">
        <h1 className="font-bold text-2xl">AlphaLabs</h1>
      </Link>
      <button
        onClick={async () => {
          const { dates } = (await runAlpha()) as AlphaReturnObject;
          setValidDates(dates);
        }}
        className="text-xl hover:bg-[#162B50] hover:text-[#FFFFFF] px-3 py-2 rounded transition-colors cursor-pointer"
      >
        ▶
      </button>
      <h1 className="text-xl">Sign Up</h1>
    </div>
  );
}
