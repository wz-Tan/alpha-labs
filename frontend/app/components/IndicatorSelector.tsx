import React from "react";

const indicators = {
  RSI: "Relative Strength Index",
  MA50: "Moving Average 50",
};

export default function IndicatorSelector({
  setShowIndicator,
}: {
  setShowIndicator: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(10, 22, 40, 0.8)" }}
      onClick={() => setShowIndicator(false)}
    >
      <div
        className="bg-[#0F2040] border border-[#1A2E4A] rounded-2xl p-8 w-180 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between text-2xl mb-4">
          <h2 className="text-white font-semibold">Indicators</h2>
          <button
            onClick={() => setShowIndicator(false)}
            className="text-[#5B7FA6] hover:text-[#C8D8EB] hover:cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Map Out Indicators */}
        <div className="flex flex-col gap-[0.5]">
          {Object.entries(indicators).map(([key, value]) => {
            return (
              <div
                key={key}
                className="text-white text-lg rounded-xl p-2 transition-colors hover:bg-[rgba(150,150,150,0.2)] hover:cursor-pointer"
              >
                <p>
                  {key}: {value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
