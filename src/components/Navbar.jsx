"use client"
import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

export default function Navbar({ onEnrollClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-[#E3E5E8] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#3BA9A3]" data-testid="link-logo">
           <Image src="/horizontal-original-sin fondo-letras blancas-400x218px.png" alt="logo" width={200} height={50} />
          </a>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-all border-b-2 border-transparent hover:border-[#FF8A5C] ${
                  isScrolled ? "text-[#394D5C]" : "text-white"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Link 
              href="/dashboard"
              className="px-4 py-2 border-2 border-[#E3E5E8] rounded-full font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200 flex items-center gap-2"
              data-testid="button-signin-nav"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
            <button 
              onClick={onEnrollClick}
              className="px-4 py-2 bg-[#FF8A5C] text-white rounded-full font-medium hover:bg-[#FF7A4C] transition-colors duration-200"
              data-testid="button-enroll-nav"
            >
              Enroll Now
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-[#394D5C]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-[#394D5C]" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-[#FF8A5C]/10 rounded-[12px] transition-colors border-l-2 border-transparent hover:border-[#FF8A5C] text-[#394D5C]"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Link 
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-2 border-2 border-[#E3E5E8] rounded-full font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200 flex items-center justify-center gap-2"
              data-testid="button-signin-mobile"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
            <button 
              onClick={() => {
                onEnrollClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-[#FF8A5C] text-white rounded-full font-medium hover:bg-[#FF7A4C] transition-colors duration-200"
              data-testid="button-enroll-mobile"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}