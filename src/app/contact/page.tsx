"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ContactPage() {
  useEffect(() => {
    gsap.fromTo(
      ".contact-element",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="w-full bg-[#FDFBF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Information */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-[#5E1914] uppercase tracking-widest text-sm font-medium mb-6 contact-element">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-light font-serif text-[#1A1A1A] leading-tight mb-12 contact-element">
            Book a Private <br className="hidden md:block" /> Consultation.
          </h1>
          <p className="text-lg text-[#1A1A1A]/70 font-light leading-relaxed mb-16 max-w-md contact-element">
            Whether you are looking for a bespoke bridal piece or have inquiries about our curated collections, our team is here to assist you with a personalized experience.
          </p>

          <div className="space-y-12">
            <div className="contact-element">
              <h3 className="uppercase tracking-widest text-xs text-[#1A1A1A] font-medium mb-4">The Flagship Studio</h3>
              <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                101 Heritage Weaves Building,<br />
                Ring Road, Surat, Gujarat 395002<br />
                India
              </p>
            </div>
            
            <div className="contact-element">
              <h3 className="uppercase tracking-widest text-xs text-[#1A1A1A] font-medium mb-4">Direct Inquiries</h3>
              <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                <a href="mailto:concierge@sanvikasaree.com" className="hover:text-[#5E1914] transition-colors">concierge@sanvikasaree.com</a><br />
                <a href="tel:+919825146267" className="hover:text-[#5E1914] transition-colors">+91 98251 46267</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <form 
            className="w-full max-w-md bg-white p-8 md:p-12 shadow-2xl border border-[#1A1A1A]/5 contact-element"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-serif text-[#1A1A1A] mb-8">Send a Message</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mb-2">Nature of Inquiry</label>
                <select 
                  id="inquiry"
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors rounded-none"
                >
                  <option>Bridal Consultation</option>
                  <option>Collection Inquiry</option>
                  <option>Wholesale</option>
                  <option>Press & Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block uppercase tracking-widest text-[10px] text-[#1A1A1A]/50 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none rounded-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 mt-4 bg-[#1A1A1A] text-[#FDFBF7] uppercase tracking-widest text-xs hover:bg-[#5E1914] transition-colors duration-500"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}
