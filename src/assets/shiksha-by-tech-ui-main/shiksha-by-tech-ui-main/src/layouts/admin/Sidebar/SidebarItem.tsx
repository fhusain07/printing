import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { SidebarItemType } from "./sidebarData";

interface ISidebarItemProps {
  item: SidebarItemType;
}
const SidebarItem = (props: ISidebarItemProps) => {
  const { item } = props;
  return (
    <NavLink
      aria-label={item.label}
      className={({ isActive }) =>
        twMerge(
          "flex items-center gap-3 py-2 px-4 rounded-md transition-all duration-200 group",
          isActive
            ? "bg-primary/15 text-primary font-semibold"
            : "text-gray-600 hover:bg-gray-100",
        )
      }
      to={item.path}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm">{item.label}</span>
    </NavLink>
  );
};

export default SidebarItem;
