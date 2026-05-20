"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    title: "Bridal Edit",
    description: "Opulent pure silk and intricate zari work for the modern bride.",
    image: "/bridal.png",
    alignment: "left",
  },
  {
    title: "Banarasi Heritage",
    description: "Timeless weaves that carry the legacy of centuries.",
    image: "/hero.png",
    alignment: "right",
  },
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".collection-card");

    cards.forEach((card, index) => {
      const image = card.querySelector(".collection-image");
      const text = card.querySelector(".collection-text");

      // Image Parallax
      gsap.fromTo(
        image,
        { scale: 1.1, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text Reveal
      gsap.fromTo(
        text,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20 md:mb-32 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6">Curated Collections</h2>
          <p className="text-[#5E1914] uppercase tracking-widest text-sm font-medium">Discover Our Signature Edits</p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={cn(
                "collection-card flex flex-col gap-8 md:gap-16 items-center",
                collection.alignment === "left" ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-3/5 overflow-hidden group rounded-sm">
                <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                  <div className="collection-image absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/5 collection-text flex flex-col justify-center px-4 md:px-12">
                <h3 className="text-4xl md:text-5xl font-light mb-6">{collection.title}</h3>
                <p className="text-lg text-[#1A1A1A]/70 font-light mb-10 leading-relaxed">
                  {collection.description}
                </p>
                <Link href="/collections" className="inline-block self-start uppercase tracking-widest text-xs border border-[#1A1A1A]/30 px-8 py-4 hover:bg-[#1A1A1A] hover:text-[#FDFBF7] transition-all duration-500">
                  Explore {collection.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
