import type { Metadata } from "next";
import { Libre_Baskerville, Geist } from "next/font/google";
import "./globals.css";
import { AlphaContextProvider } from "./contexts/alphaContext";
import { Header } from "./components/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
});

export const metadata: Metadata = {
  title: "AlphaLabs",
  description: "Backtesting Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "text-[#C8D8EB]", baskerville.variable, "font-sans", geist.variable)}
    >
      <body className="h-screen flex flex-col">
        <AlphaContextProvider>
          <Header />
          {children}
        </AlphaContextProvider>
      </body>
    </html>
  );
}
