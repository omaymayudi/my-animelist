"use client";

import { useRef } from "react";
import BoxContent from "@/components/elements/BoxContent";
import Text1 from "@/components/elements/Text1";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const searchRef = useRef();

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") {
      null;
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <header className="bg-yellow-500 py-4">
      <BoxContent>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-2">
          <Link href="/" className="">
            <Text1 text="MyAnimeList" />
          </Link>
          <div>
            <div className="relative w-full">
              <input
                type="=text"
                id="search-dropdown"
                className="rounded-lg block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Search Anime..."
                required
                ref={searchRef}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
              />

              <button
                type="submit"
                onClick={handleSearch}
                className="absolute top-0 end-0 p-2 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <IoSearch className="text-lg text-white" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
      </BoxContent>
    </header>
  );
};

export default Navbar;
