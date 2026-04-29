import Image from "next/image";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*Grid to Split Sidebar and Content*/}
      <div className="grid grid-cols-9 flex-1">
        <Sidebar />

        <main className="text-black w-full h-full col-span-8 bg-[#0A1628]">
          The Content Is Here
        </main>
      </div>
    </div>
  );
}
