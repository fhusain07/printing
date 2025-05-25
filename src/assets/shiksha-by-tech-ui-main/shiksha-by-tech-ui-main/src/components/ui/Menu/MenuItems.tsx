import React from "react";
import { useMenuContext } from ".";

interface MenuItemProps {
  value: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ value, children }) => {
  const onSelect = useMenuContext();

  return (
    <button
      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  );
};

export default MenuItem;
