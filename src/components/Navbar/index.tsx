"use client";
import { useState } from "react";
import LogoLink from "./LogoLink";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeMobileMenu = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="flex pt-4 sm:text-sm text-md justify-between items-center  cursor-pointer  ease-in-out transition-all relative">
      <LogoLink />
      <DesktopNav />

      {/* Mobile Menu Button */}
      <div className="sm:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {isDrawerOpen && <MobileNav onClose={closeMobileMenu} />}
    </nav>
  );
};

export default Navbar;
