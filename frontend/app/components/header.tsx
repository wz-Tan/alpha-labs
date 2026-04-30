import Link from "next/link";

export function Header() {
  return (
    <div className="bg-[#0F2040] border-b justify-between items-center flex flex-row w-full p-4 px-8 text-[#C8D8EB] border-[#1A2E4A]">
      <Link href="/">
        <h1 className="font-bold text-2xl">AlphaLabs</h1>
      </Link>
      <h1 className="text-xl">▶</h1>
      <h1 className="text-xl">Sign Up</h1>
    </div>
  );
}
