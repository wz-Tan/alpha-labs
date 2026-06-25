import StrategiesSideBar from "../components/StrategiesSidebar";

export default function Strategies() {
  return (
    <div className="flex flex-1 h-full">
      <StrategiesSideBar />
      <main className="text-[#C8D8EB] flex-1 bg-[#0A1628] p-8">
        <h1 className="text-3xl">Canvas Here</h1>
      </main>
    </div>
  );
}
