"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div 
        className={`hidden md:flex justify-end items-center py-3 w-full transition-colors duration-300 border-b ${
          isScrolled 
            ? "bg-gray-50 text-gray-700 border-gray-100" 
            : "bg-black/40 text-white border-white/10 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-end items-center gap-8 text-sm font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <span className="opacity-70 text-xs uppercase tracking-widest">Tokyo</span>
            <a href="tel:03-6264-0215" className="hover:underline text-base font-bold">03-6264-0215</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70 text-xs uppercase tracking-widest">Osaka</span>
            <a href="tel:06-6390-3200" className="hover:underline text-base font-bold">06-6390-3200</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70 text-xs uppercase tracking-widest">Main office</span>
            <a href="tel:098-860-2335" className="hover:underline text-base font-bold">098-860-2335</a>
          </div>
          <div className="opacity-90 border-l pl-8 border-current text-xs">
            受付時間 平日 9:00～18:00
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-2xl font-bold tracking-widest ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            JACACON
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Projects", "About", "Philosophy", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`px-5 py-2 text-sm font-medium uppercase tracking-wider border transition-colors ${
              isScrolled
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 md:hidden flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-4 w-full">
            {["Projects", "About", "Philosophy", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-900 text-sm font-medium uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Mobile Contact Info */}
          <div className="w-full px-6 pt-6 border-t border-gray-100 flex flex-col items-center gap-6 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-center w-full max-w-sm">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">Tokyo</span>
                <a href="tel:03-6264-0215" className="text-lg font-bold">03-6264-0215</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">Osaka</span>
                <a href="tel:06-6390-3200" className="text-lg font-bold">06-6390-3200</a>
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">Main office</span>
                <a href="tel:098-860-2335" className="text-lg font-bold">098-860-2335</a>
              </div>
            </div>
            <div className="text-gray-500 border-t border-gray-100 w-full pt-4 text-center font-medium">
              受付時間 平日 9:00～18:00
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
