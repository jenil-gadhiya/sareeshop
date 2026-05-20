"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, cartCount } = useCart();
  const pathname = usePathname();

  // Pages that have a dark hero section at the top
  const hasDarkHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".menu-overlay", { y: "0%", duration: 0.8, ease: "power4.inOut" });
      gsap.fromTo(
        ".menu-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(".menu-overlay", { y: "-100%", duration: 0.8, ease: "power4.inOut" });
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Bridal", href: "/collections/bridal" },
    { name: "Our Story", href: "/story" },
    { name: "Contact", href: "/contact" },
  ];

  // Determine colors based on scroll and page
  const isLightText = hasDarkHero && !isScrolled && !menuOpen;
  const textColor = isLightText ? "text-[#FDFBF7]" : "text-[#1A1A1A]";
  const lineColor = isLightText ? "bg-[#FDFBF7]" : "bg-[#1A1A1A]";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled || menuOpen
            ? "bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-[#1A1A1A]/10"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className={cn("relative z-50 font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300", textColor)}>
            Sanvika Saree.
          </Link>

          <div className="flex items-center gap-6 relative z-50">
            <button
              onClick={openCart}
              className={cn("uppercase tracking-widest text-xs transition-colors duration-300", textColor, isLightText ? "hover:text-[#E8DCC9]" : "hover:text-[#5E1914]")}
            >
              Bag ({cartCount})
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[6px] p-2"
            >
              <span
                className={cn(
                  "block w-8 h-[1px] transition-all duration-500",
                  lineColor,
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                )}
              />
              <span
                className={cn(
                  "block w-8 h-[1px] transition-all duration-500",
                  lineColor,
                  menuOpen ? "opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "block w-8 h-[1px] transition-all duration-500",
                  lineColor,
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div className="menu-overlay fixed inset-0 z-40 bg-[#FDFBF7] -translate-y-full flex items-center">
        <nav className="w-full h-full flex flex-col items-center justify-start overflow-y-auto pt-32 pb-16 gap-8 md:gap-12 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="menu-link text-[#1A1A1A] text-4xl md:text-7xl font-light font-serif hover:text-[#5E1914] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="menu-link mt-12 flex gap-8 uppercase tracking-widest text-xs text-[#1A1A1A]/50">
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">WhatsApp</a>
          </div>
        </nav>
      </div>
    </>
  );
}
