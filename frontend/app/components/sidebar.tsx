export function Sidebar() {
  return (
    // Take 2 Columns from the Grid
    <div className="flex flex-col bg-amber-50 col-span-1 h-full border-r border-black text-black gap-5 p-8 text-start">
      <h1 className="text-xl">Dashboard</h1>
      <h1 className="text-xl">Markets</h1>
      <h1 className="text-xl">Strategies</h1>
    </div>
  );
}
