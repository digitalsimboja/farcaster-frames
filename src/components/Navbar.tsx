"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import LogoLink from "./LogoLink";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex  justify-around  items-center md:px-10  px-3 cursor-pointer  ease-in-out transition-all relative">
     <LogoLink />

    <DesktopNav />

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
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

      {isMobileMenuOpen && (
        <MobileNav onClose={closeMobileMenu} />
      )}
    </nav>
  );
};

export default Navbar;
