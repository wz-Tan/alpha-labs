import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="flex items-center gap-6 text-xl">
      <Link href="/dashboard" className="hover:text-white transition-colors">
        Dashboard
      </Link>
      <Link href="/markets" className="hover:text-white transition-colors">
        Markets
      </Link>
      <Link href="/watchlist" className="hover:text-white transition-colors">
        Watchlist
      </Link>
      <Link href="/strategies" className="hover:text-white transition-colors">
        Strategies
      </Link>
    </nav>
  );
}
