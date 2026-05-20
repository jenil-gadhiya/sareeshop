"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: "1", title: "The Royal Crimson", price: "₹ 45,000", image: "/hero.png", tag: "Best Seller" },
  { id: "2", title: "Ivory Dreams", price: "₹ 52,000", image: "/silk.png", tag: "New Arrival" },
  { id: "3", title: "Midnight Silk", price: "₹ 60,000", image: "/black.png", tag: "" },
  { id: "4", title: "Blush Organza", price: "₹ 38,500", image: "/pink.png", tag: "Trending" },
  { id: "5", title: "Golden Hour", price: "₹ 41,000", image: "/bridal.png", tag: "Limited Edition" },
  { id: "6", title: "Yellow Heritage", price: "₹ 48,000", image: "/yellow.png", tag: "" },
];

export default function CollectionsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <main className="w-full bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <p className="text-[#5E1914] uppercase tracking-widest text-xs font-bold mb-4">
            Authentic Surat Textile Heritage
          </p>
          <h1 className="text-5xl md:text-8xl font-light font-serif mb-6 text-[#1A1A1A]">
            The Collections.
          </h1>
          <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto font-light mb-10">
            Explore our latest collection of handcrafted luxury textiles, where every weave tells a story of elegance and tradition.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Bridal", "Festive", "Party", "Under ₹40k"].map((cat, i) => (
              <button 
                key={cat}
                className={`px-6 py-2 uppercase tracking-widest text-[10px] sm:text-xs transition-colors duration-300 border ${
                  i === 0 
                    ? "bg-[#1A1A1A] text-[#FDFBF7] border-[#1A1A1A]" 
                    : "bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {products.map((product) => (
            <Link href={`/collections/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 rounded-sm bg-[#E8DCC9]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Product Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-[#FDFBF7] text-[#1A1A1A] px-3 py-1 text-[10px] uppercase tracking-widest font-bold shadow-sm">
                    {product.tag}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-[#FDFBF7] text-[#1A1A1A] px-6 py-2 uppercase tracking-widest text-xs">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">{product.title}</h3>
                <p className="text-[#1A1A1A]/70 font-light">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
