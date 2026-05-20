"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "AAROHI DESAI",
    text: "The drape and fall of this silk is incredibly luxurious. Received so many compliments at the wedding!",
    productName: "The Royal Crimson",
    productImage: "/hero.png",
    rating: 5,
  },
  {
    id: 2,
    name: "MEERA SHAH",
    text: "Absolutely stunning craftsmanship. The zari work shines beautifully in the evening light.",
    productName: "Midnight Silk",
    productImage: "/black.png",
    rating: 5,
  },
  {
    id: 3,
    name: "KAVYA PATEL",
    text: "Very elegant and light to carry. The organza feels like a dream.",
    productName: "Blush Organza",
    productImage: "/pink.png",
    rating: 5,
  },
  {
    id: 4,
    name: "ANANYA RAO",
    text: "Pure authentic Banarasi weave. You can tell it's directly from Surat's best looms. Highly recommended.",
    productName: "Yellow Heritage",
    productImage: "/yellow.png",
    rating: 5,
  },
  {
    id: 5,
    name: "SIMRAN KAUR",
    text: "Wore this for my reception and it was perfect. The ivory color is so rich and pristine.",
    productName: "Ivory Dreams",
    productImage: "/silk.png",
    rating: 5,
  },
];

export default function CustomerReviews() {
  // Duplicate reviews for seamless infinite scrolling
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#FDFBF7] py-24 border-t border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-light font-serif text-[#1A1A1A] mb-6">Our Happy Customers</h2>
        
        <div className="flex justify-center items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#1A1A1A]/70 uppercase tracking-widest text-xs font-medium">Real People. Real Experiences.</p>
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative max-w-[1920px] mx-auto group">
        {/* Gradient fades on edges for premium feel */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-8">
          {duplicatedReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="w-[85vw] md:w-[400px] flex-none mx-4 md:mx-6 bg-white p-8 md:p-10 border border-[#1A1A1A]/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 select-none cursor-default"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg font-serif text-[#1A1A1A] leading-relaxed mb-6 flex-grow">
                "{review.text}"
              </p>
              
              <p className="uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 font-bold mb-8">
                {review.name}
              </p>
              
              <div className="flex flex-col items-center gap-3 mt-auto">
                <div className="w-16 h-16 relative rounded-full overflow-hidden border border-[#1A1A1A]/10 bg-[#E8DCC9]">
                  <Image src={review.productImage} alt={review.productName} fill sizes="64px" className="object-cover" draggable={false} />
                </div>
                <p className="text-xs text-[#1A1A1A]/70 font-medium">
                  {review.productName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
