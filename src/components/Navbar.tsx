"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WHAT WE DO", href: "#what-we-do" },
  { label: "SECTORS", href: "#sectors" },
  { label: "MANDATES", href: "#mandates" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "what-we-do", "sectors", "mandates", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black border-b border-[#1E483C] ${
        isScrolled ? "py-2.5 shadow-2xl shadow-black" : "py-3 shadow-lg shadow-black/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
        {/* Exact Logo from Image 1 */}
        <Link
          href="#home"
          className="flex items-center group focus:outline-none"
          aria-label="Manara Nexus Home"
        >
          <div className="relative h-14 sm:h-16 md:h-20 lg:h-[84px] w-52 sm:w-64 md:w-80 lg:w-96 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/images/manara-logo.jpg"
              alt="Manara Nexus Logo"
              fill
              priority
              className="object-contain object-left mix-blend-screen filter brightness-110"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links Matching Image 2 */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-9" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[11.5px] font-medium tracking-[0.22em] uppercase transition-colors duration-200 relative py-2 ${
                  isActive
                    ? "text-brand-gold font-semibold"
                    : "text-[#D2DEE2] hover:text-brand-gold"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-brand-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-brand-gold focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#051410]/98 backdrop-blur-xl border-b border-brand-gold/20 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-semibold text-[#D2DEE2] hover:text-brand-gold py-1.5 border-b border-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
