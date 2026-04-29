import Link from "next/link";

export function Header() {
  return (
    <div className="bg-amber-50 border-b justify-between items-center flex flex-row w-full p-4 px-8 text-black">
      <Link href="/">
        <h1 className="font-bold text-2xl">AlphaLabs</h1>
      </Link>
      <h1 className="text-xl">Sign Up</h1>
    </div>
  );
}
