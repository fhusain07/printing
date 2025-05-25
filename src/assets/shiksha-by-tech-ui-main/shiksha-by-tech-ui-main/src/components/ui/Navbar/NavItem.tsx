import React from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  name: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;

  return (
    <Link
      className={twMerge(
        "px-3 py-1 rounded-sm text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-[#f5f5f5]"
          : "text-gray-600 hover:text-white hover:bg-primary",
      )}
      to={path}
    >
      {name}
    </Link>
  );
};

export default NavItem;
