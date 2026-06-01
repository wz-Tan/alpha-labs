import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAlphaContext } from "../contexts/alphaContext";
import { AlphaContextType } from "../types";

export default function TickerInput() {
  const router = useRouter();
  const pathName = usePathname();
  const [tickerInput, setTickerInput] = useState("");
  const { setTickerName, tickerName } = useAlphaContext() as AlphaContextType;

  return (
    <div className="flex items-center">
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
              if (pathName !== "/stock") {
                router.replace("/stock");
              }

              // Remove Focus
              e.currentTarget.blur();
            }
          }
        }}
        placeholder={pathName === "/stock" ? tickerName : "Search"}
        className="px-3 py-2 bg-[#162B50] text-[#C8D8EB] border border-[#1A2E4A] rounded-xl w-40 focus:outline-none focus:border-[#60A5FA]"
      />
    </div>
  );
}
