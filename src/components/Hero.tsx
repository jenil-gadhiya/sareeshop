"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
    )
      .fromTo(
        title1Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.5"
      )
      .fromTo(
        title2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FDFBF7] flex items-center justify-center"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/hero.png"
          alt="Luxury Saree Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
        <p
          ref={subtitleRef}
          className="text-[#FDFBF7]/80 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 opacity-0 font-medium"
        >
          The Art of Woven Poetry
        </p>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#FDFBF7] font-light leading-tight overflow-hidden pb-2">
          <div ref={title1Ref} className="opacity-0">Sanvika</div>
        </h1>
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#FDFBF7] font-light leading-tight italic overflow-hidden mb-12">
          <div ref={title2Ref} className="opacity-0">Saree.</div>
        </h1>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 items-center opacity-0">
          <Link href="/collections" className="px-8 py-4 bg-[#FDFBF7] text-[#1A1A1A] uppercase tracking-widest text-xs hover:bg-[#E8DCC9] transition-colors duration-500">
            Explore Collection
          </Link>
          <Link href="/collections" className="px-8 py-4 border border-[#FDFBF7]/50 text-[#FDFBF7] uppercase tracking-widest text-xs hover:bg-[#FDFBF7]/10 transition-colors duration-500 glass">
            Bridal Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
