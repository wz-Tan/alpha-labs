import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export default function Strategies() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*Grid to Split Sidebar and Content*/}
      <div className="grid grid-cols-9 flex-1">
        <Sidebar />

        <main className="text-[#C8D8EB] w-full h-full col-span-8 bg-[#0A1628]">
          This is the Strategies Page
        </main>
      </div>
    </div>
  );
}
