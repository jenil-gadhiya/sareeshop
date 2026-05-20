"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Storytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textElements = textRef.current?.children;
    const image = imageRef.current;

    if (!section || !textElements || !image) return;

    // Text reveal animation
    gsap.fromTo(
      textElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    // Image parallax
    gsap.fromTo(
      image,
      { yPercent: -20, scale: 1.1 },
      {
        yPercent: 20,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 md:py-48 bg-[#FDFBF7] text-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm">
          <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/fabric.png"
              alt="Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="flex flex-col justify-center space-y-8 max-w-xl">
          <p className="text-[#5E1914] uppercase tracking-widest text-sm font-medium">
            Crafted in Surat
          </p>
          <h2 className="text-4xl md:text-6xl leading-tight">
            Where tradition meets <span className="italic font-light">modern elegance.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A1A1A]/70 font-light leading-relaxed">
            Every thread tells a story of centuries-old craftsmanship. We weave the rich heritage of Surat into contemporary silhouettes, creating masterpieces that transcend time. Experience the finest silk, meticulously handcrafted for the modern connoisseur.
          </p>
          <div className="pt-8">
            <Link href="/story" className="inline-flex group items-center gap-4 text-sm uppercase tracking-widest border-b border-black pb-2 hover:text-[#5E1914] hover:border-[#5E1914] transition-colors duration-300">
              Discover Our Heritage
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
