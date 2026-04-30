export default function MarketCard({ countryName }: { countryName: string }) {
  return (
    <button className="flex items-center gap-4 w-full max-w-sm bg-[#0F2040] hover:bg-[#162B50] active:bg-[#1A2E4A] border border-[#1A2E4A] hover:border-[#2A3F60] rounded-xl px-5 py-4 transition-colors duration-150 cursor-pointer text-left">
      <div className="w-10 h-10 rounded-full bg-[#162B50] border border-[#2A3F60] flex-shrink-0" />
      <div className="flex-1">
        <p className="text-white font-medium text-base leading-tight">
          {countryName}
        </p>
      </div>
      <span className="text-[#5B7FA6] text-lg">›</span>
    </button>
  );
}
