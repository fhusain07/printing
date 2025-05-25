import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

function AdminHeader() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 w-full bg-white shadow-sm px-4 lg:px-6 flex items-center justify-between transition-all">
      {/* Left: Title or Logo */}
      <h1 className="text-lg md:text-xl font-semibold whitespace-nowrap">
        Admin Dashboard
      </h1>

      {/* Center: Search (hidden on small screens) */}
      <div className="hidden md:flex items-center relative w-1/2 max-w-md">
        <FiSearch
          className={twMerge(
            "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all",
            searchFocused && "text-primary",
          )}
        />
        <input
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="Search..."
          type="text"
          onBlur={() => setSearchFocused(false)}
          onFocus={() => setSearchFocused(true)}
        />
      </div>

      {/* Right: Avatar and Name */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-sm font-medium text-gray-800">Syed Qayyum</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>
        <div className="relative group">
          <img
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover cursor-pointer border border-gray-300"
            src="https://ui-avatars.com/api/?name=Syed+Qayyum"
          />
          <FiChevronDown className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-500 group-hover:rotate-180 transition-transform" />
          {/* You can add dropdown here */}
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
