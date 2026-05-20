"use client";

import { useEffect, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCart } from "@/context/CartContext";

gsap.registerPlugin(ScrollTrigger);

// Mock data fetcher based on ID
const getProduct = (id: string) => {
  return {
    id,
    sku: "SVS-2024-RC",
    title: "The Royal Crimson",
    price: "₹ 45,000",
    description: "An opulent deep maroon pure silk saree, handwoven with intricate gold zari work. This masterpiece takes over 120 hours to craft, bringing centuries of Surat's textile heritage to life in a modern, elegant drape.",
    details: [
      "Fabric: 100% Pure Banarasi Silk",
      "Work: Handwoven Gold Zari",
      "Color: Deep Maroon / Crimson",
      "Includes: Unstitched Blouse Piece",
    ],
    images: [
      "/hero.png",
      "/fabric.png",
      "/pink.png",
      "/black.png",
    ],
  };
};

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = getProduct(resolvedParams.id);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  useEffect(() => {
    // Initial fade in
    gsap.fromTo(
      ".pdp-element",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
  };

  const whatsappMessage = encodeURIComponent(`Hello Sanvika Saree, I want to buy:\n\n*${product.title}*\nCode: ${product.sku}\nPrice: ${product.price}\n\nPlease share payment details.`);

  return (
    <main className="w-full bg-[#FDFBF7] min-h-screen pb-24 lg:pb-0">
      <div className="flex flex-col lg:flex-row items-start w-full max-w-[1920px] mx-auto">
        
        {/* Left Column - Sticky Details */}
        <div 
          ref={leftColRef} 
          className="w-full lg:w-2/5 lg:h-fit lg:sticky top-0 p-8 pt-32 lg:p-20 lg:pt-40 border-r border-[#1A1A1A]/10 bg-[#FDFBF7] z-10"
        >
          <Link href="/collections" className="inline-flex items-center gap-2 uppercase tracking-widest text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors mb-12 pdp-element">
            <span>←</span> Back to Collections
          </Link>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] mb-2 pdp-element leading-tight">
              {product.title}
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-4 pdp-element">Product Code: {product.sku}</p>
            
            <div className="flex items-center gap-4 mb-8 pdp-element">
              <p className="text-2xl text-[#1A1A1A] font-medium">{product.price}</p>
              <span className="px-3 py-1 bg-[#5E1914]/10 text-[#5E1914] text-[10px] uppercase tracking-widest font-bold">Only 2 Left in Stock</span>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex flex-col gap-4 mb-12 pdp-element">
              <button
                onClick={handleAddToCart}
                className="w-full py-5 bg-[#1A1A1A] text-[#FDFBF7] uppercase tracking-widest text-sm hover:bg-[#5E1914] transition-colors duration-500"
              >
                Add to Cart
              </button>
              <a 
                href={`https://wa.me/919825146267?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-widest text-sm hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors duration-500 flex items-center justify-center gap-2"
              >
                Buy on WhatsApp
              </a>
            </div>
            
            <p className="text-lg text-[#1A1A1A]/80 font-light leading-relaxed mb-10 pdp-element">
              {product.description}
            </p>

            <div className="space-y-4 mb-10 pdp-element">
              <h3 className="uppercase tracking-widest text-xs text-[#1A1A1A] font-medium mb-4">Details</h3>
              {product.details.map((detail, index) => (
                <p key={index} className="text-[#1A1A1A]/70 font-light text-sm">
                  {detail}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-[#1A1A1A]/10 py-6 mb-12 pdp-element">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/70">Cash on Delivery</p>
                <p className="text-xs font-serif text-[#1A1A1A] mt-1">Available</p>
              </div>
              <div className="text-center border-l border-[#1A1A1A]/10">
                <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/70">Secure Payment</p>
                <p className="text-xs font-serif text-[#1A1A1A] mt-1">100% Safe</p>
              </div>
              <div className="text-center border-l border-[#1A1A1A]/10">
                <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/70">Easy Returns</p>
                <p className="text-xs font-serif text-[#1A1A1A] mt-1">7 Days Policy</p>
              </div>
            </div>
          {/* Sticky Mobile Action Bar */}
          <div className="fixed bottom-0 left-0 w-full bg-[#FDFBF7] p-4 border-t border-[#1A1A1A]/10 z-50 flex flex-row lg:hidden gap-3 pdp-element shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 bg-[#1A1A1A] text-[#FDFBF7] uppercase tracking-widest text-xs hover:bg-[#5E1914] transition-colors duration-500"
            >
              Add to Cart
            </button>
            <a 
              href={`https://wa.me/919825146267?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-widest text-xs hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors duration-500 flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column - Images (Stacked Desktop, Swipe Gallery Mobile) */}
        <div ref={rightColRef} className="w-full lg:w-3/5">
          <div className="flex overflow-x-auto lg:block snap-x snap-mandatory hide-scrollbar">
            {product.images.map((src, index) => (
              <div 
                key={index} 
                className="relative w-full flex-none snap-center h-[60vh] md:h-[70vh] lg:h-screen"
              >
                <Image
                  src={src}
                  alt={`${product.title} detail ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Swipe Indicator */}
          <div className="flex justify-center gap-2 mt-4 mb-8 lg:hidden">
            {product.images.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20" />
            ))}
          </div>
        </div>
        
      </div>
      
      {/* Complete The Look Section */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-24 border-t border-[#1A1A1A]/10 mt-12 bg-[#FDFBF7]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Complete The Look</h2>
          <p className="text-[#1A1A1A]/60 uppercase tracking-widest text-xs">Curated Pairings & Suggestions</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { id: "2", title: "Ivory Dreams", price: "₹ 52,000", image: "/silk.png" },
            { id: "3", title: "Midnight Silk", price: "₹ 60,000", image: "/black.png" },
            { id: "4", title: "Blush Organza", price: "₹ 38,500", image: "/pink.png" },
            { id: "5", title: "Golden Hour", price: "₹ 41,000", image: "/bridal.png" },
          ].map((item) => (
            <Link href={`/collections/${item.id}`} key={item.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#E8DCC9] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-lg font-serif text-[#1A1A1A] mb-1">{item.title}</h3>
              <p className="text-sm text-[#1A1A1A]/70">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}
