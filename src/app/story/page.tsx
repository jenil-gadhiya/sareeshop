"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".story-section");

    sections.forEach((section) => {
      const image = section.querySelector(".story-image");
      const text = section.querySelector(".story-text");

      if (image) {
        gsap.fromTo(
          image,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
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
      }

      if (text) {
        gsap.fromTo(
          text.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <main ref={containerRef} className="w-full bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-32">
        <p className="text-[#5E1914] uppercase tracking-widest text-sm font-medium mb-6">
          Our Heritage
        </p>
        <h1 className="text-5xl md:text-8xl font-light font-serif text-[#1A1A1A] leading-tight mb-8">
          Six Decades of <br /> Woven Poetry.
        </h1>
        <p className="text-xl text-[#1A1A1A]/70 font-light leading-relaxed max-w-2xl mx-auto">
          Born in the heart of Surat, Sanvika Saree is a tribute to the timeless artistry of Indian textiles. We blend centuries-old weaving techniques with contemporary silhouettes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32">
        
        {/* Section 1 */}
        <section className="story-section flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] relative bg-[#E8DCC9]">
            <Image src="/hero.png" alt="Craftsmanship" fill sizes="(max-width: 768px) 100vw, 50vw" className="story-image object-cover" />
          </div>
          <div className="w-full md:w-1/2 story-text max-w-lg">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">The Looms of Legacy</h2>
            <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6 font-light">
              Every Sanvika Saree begins its journey on the traditional handlooms of master artisans. Our weavers have inherited techniques passed down through generations, ensuring every motif and every thread carries the soul of authentic craftsmanship.
            </p>
            <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-light">
              We source only the finest pure silk, infusing it with pure zari that shimmers with a quiet, undeniable luxury. It is a slow, deliberate process of creation.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="story-section flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] relative bg-[#E8DCC9]">
            <Image src="/fabric.png" alt="Detail" fill sizes="(max-width: 768px) 100vw, 50vw" className="story-image object-cover" />
          </div>
          <div className="w-full md:w-1/2 story-text max-w-lg">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Modern Heirloom</h2>
            <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6 font-light">
              A saree is not just a garment; it is an heirloom. At Sanvika, we design pieces that are meant to be cherished, worn at momentous occasions, and ultimately passed down to the next generation.
            </p>
            <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-light">
              Our aesthetic is rooted in tradition but speaks to the modern woman—confident, elegant, and uncompromising in her pursuit of luxury.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
