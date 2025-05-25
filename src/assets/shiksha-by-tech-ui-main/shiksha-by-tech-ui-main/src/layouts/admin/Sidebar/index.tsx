import Logo from "@/components/ui/BrandLogo";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white border-r border-r-gray-300 shadow-sm flex flex-col  px-4">
      <div className="mb-6">
        <div className="p-1 pt-5 text-center">
          <Logo />
        </div>
        <nav className="space-y-1 py-6">
          {sidebarData.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
