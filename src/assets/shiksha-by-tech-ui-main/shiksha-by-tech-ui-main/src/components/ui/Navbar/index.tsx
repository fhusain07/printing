import { navItems } from "@/constants";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-6">
      {navItems.map(({ name, path }) => (
        <NavItem key={path} name={name} path={path} />
      ))}
    </nav>
  );
};

export default Navbar;
