import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { createContext, useContext, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  anchor: React.ReactElement;
  children: React.ReactNode;
  onSelect: (value: string) => void;
  placement?: "bottom-left" | "bottom-right";
  className?: string;
}

const MenuContext = createContext<((value: string) => void) | null>(null);
export const useMenuContext = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("MenuItem must be used inside Menu");
  return ctx;
};

const Menu: React.FC<MenuProps> = ({
  anchor,
  children,
  className,
  placement = "bottom-left",
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setOpen(false));
  const toggle = () => setOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className={twMerge("relative inline-block", className)}>
      <div className="cursor-pointer" onClick={toggle}>
        {anchor}
      </div>

      {open && (
        <MenuContext.Provider value={handleSelect}>
          <div
            ref={menuRef}
            className={`absolute z-50 mt-2 min-w-[150px] rounded-md bg-white shadow-lg border border-gray-100 ${
              placement === "bottom-right" ? "right-0" : "left-0"
            }`}
          >
            {children}
          </div>
        </MenuContext.Provider>
      )}
    </div>
  );
};

export default Menu;
