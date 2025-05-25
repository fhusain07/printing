import AuthLinks from "@/components/ui/AuthLinks";
import Logo from "@/components/ui/BrandLogo";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar";
import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const isAuthenticated = false; // Replace with real state/context later
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 10);
    }, 300), // adjust delay as needed
    [],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel?.(); // optional: cancel throttle if available
    };
  }, [handleScroll]);

  return (
    <header className="w-full  bg-white shadow-sm sticky top-0 z-50">
      <Container
        className={twMerge(
          " flex-row items-center justify-between",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <Logo />
        <Navbar />
        <AuthLinks isAuthenticated={isAuthenticated} />
      </Container>
    </header>
  );
};

export default Header;
