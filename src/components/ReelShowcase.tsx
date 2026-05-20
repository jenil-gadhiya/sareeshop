"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reels = [
  {
    id: 1,
    title: "Midnight Elegance",
    price: "₹ 52,000",
    image: "/black.png",
  },
  {
    id: 2,
    title: "Blush Organza",
    price: "₹ 38,500",
    image: "/pink.png",
  },
  {
    id: 3,
    title: "Golden Banarasi",
    price: "₹ 41,000",
    image: "/yellow.png",
  },
];

export default function ReelShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reelCards = document.querySelectorAll(".reel-card");

    reelCards.forEach((card) => {
      const textOverlay = card.querySelector(".reel-text");

      gsap.fromTo(
        textOverlay,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#FDFBF7] py-10 md:py-20">
      <div className="max-w-md mx-auto relative md:border md:border-[#1A1A1A]/10 md:rounded-3xl overflow-hidden shadow-2xl bg-[#1A1A1A]">
        <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center pointer-events-none">
          <h3 className="text-[#FDFBF7] uppercase tracking-widest text-xs drop-shadow-md">Couture Reels</h3>
          <div className="w-8 h-1 bg-[#FDFBF7] rounded-full drop-shadow-md" />
        </div>

        <div className="w-full h-[85vh] md:h-[800px] overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
          {reels.map((reel) => (
            <div key={reel.id} className="reel-card relative w-full h-full snap-start snap-always">
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="reel-text absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col gap-4">
                <h4 className="text-[#FDFBF7] text-3xl font-light">{reel.title}</h4>
                <p className="text-[#E8DCC9] text-lg">{reel.price}</p>
                <div className="flex gap-4 mt-4">
                  <Link href={`/collections/${reel.id}`} className="flex-1 flex items-center justify-center bg-[#FDFBF7] text-black py-3 uppercase tracking-wider text-xs font-medium hover:bg-[#E8DCC9] transition-colors">
                    Shop Now
                  </Link>
                  <Link href={`/collections/${reel.id}`} className="w-12 h-12 border border-[#FDFBF7]/30 flex items-center justify-center text-[#FDFBF7] hover:bg-[#FDFBF7]/10 transition-colors glass">
                    +
                  </Link>
                </div>
              </div>
            </div>
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
    </section>
  );
}
