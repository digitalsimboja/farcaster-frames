"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex  justify-around  items-center md:px-10  px-3 cursor-pointer w-full ease-in-out transition-all relative">
      <Link href="/" className="font-bold text-md">
        WarpHeroes
      </Link>

      <div className="hidden md:flex justify-between gap-8 items-center font-bold relative">
        <div className="relative group flex items-center z-[1000]">
          <Link href="">Solutions</Link>
          <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 text-white" />
          <div className="absolute opacity-0 bg-white  z-[1000]  top-full left-0 group-hover:opacity-80 border border-gray-300 shadow-md p-4 rounded-md w-[600px] h-[300px] grid grid-cols-3 gap-8 transition-opacity duration-300">
            <div className="flex flex-col space-y-4 ">
              <h1 className="text-gray-500 uppercase">Projects</h1>
              <ul className="text-black space-y-2">
                <li>
                  <i className="fas fa-robot"></i>AAVE
                </li>
                <li>
                  <i className="fas fa-android"></i> 1Inch
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> Balancer
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-gray-500 uppercase">Protocols</h1>
              <ul className="text-black space-y-2">
                <li>Etheruem Foundation</li>
                <li>Polygon</li>
                <li>Tron</li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-gray-500 uppercase">Use cases</h1>
              <ul className="text-black space-y-2">
                <li>Metaverse Platforms</li>
                <li>Marketplaces</li>
                <li>Defi</li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/tools" className="text-white">
          Leaderboard
        </Link>
      </div>

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
        <div className="fixed top-0 right-0 bg-gray-500 overflow-hidden transition-transform transform w-64 z-[1000]">
          <div className="absolute top-4 right-4">
            <FaTimes
              className="text-black cursor-pointer"
              onClick={closeMobileMenu}
            />
          </div>
          <ul className="md:flex flex-col ml-8 space-y-4 mt-8">
            <li className="hover:text-gray-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/solutions">Projects</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/pricing">Protocols</Link>
            </li>
          </ul>

          {/* Horizontal Divider */}
          <hr className="border-t my-4 border-gray-100" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
