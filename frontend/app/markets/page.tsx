"use client";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { getBursa } from "../../api/get_bursa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Markets() {
  useEffect(() => {
    getBursa();
  }, []);

  const countries = ["USA", "Malaysia", "UK"];
  const [currentCountry, setCurrentCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*Grid to Split Sidebar and Content*/}
      <div className="grid grid-cols-9 flex-1">
        <Sidebar />
        <main className="text-[#C8D8EB] flex flex-col p-8 w-full h-full col-span-8 bg-[#0A1628]">
          {/* Select Country */}
          <div className="relative flex gap-3 ">
            <h1 className="text-4xl">{currentCountry}</h1>
            <button
              className="text-4xl hover:cursor-pointer"
              onClick={() => setShowCountries((prev) => !prev)}
            >
              <IoMdArrowDropdown />
            </button>

            {showCountries && (
              <ul className="absolute top-full left-0 mt-4 bg-[#112240] border border-[#1E3A5F] rounded-lg shadow-lg z-10 min-w-[150px]">
                {countries
                  .filter((country) => country !== currentCountry)
                  .map((country) => (
                    <li
                      key={country}
                      className={`px-4 py-2 cursor-pointer hover:bg-[#1E3A5F] transition-colors ${
                        country === currentCountry
                          ? "text-blue-400 font-semibold"
                          : "text-[#C8D8EB]"
                      }`}
                      onClick={() => {
                        setCurrentCountry(country);
                        setShowCountries(false);
                      }}
                    >
                      {country}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Markets Go Here */}
          <div className="flex flex-col gap-4 pt-5"></div>
        </main>
      </div>
    </div>
  );
}
