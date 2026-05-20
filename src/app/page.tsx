import Hero from "@/components/Hero";
import Storytelling from "@/components/Storytelling";
import Collections from "@/components/Collections";
import WebGLFabric from "@/components/WebGLFabric";
import ReelShowcase from "@/components/ReelShowcase";
import CustomerReviews from "@/components/CustomerReviews";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-[#FDFBF7] min-h-screen">
      <Hero />
      <Storytelling />
      <WebGLFabric />
      <Collections />
      <ReelShowcase />
      <CustomerReviews />
      
      {/* Social Proof & Trust Layer */}
      <section className="w-full bg-[#E8DCC9]/30 py-20 px-4 md:px-8 border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Authentic Surat Weaves</h2>
            <p className="text-[#1A1A1A]/70 text-sm max-w-sm font-light">Direct from our master weavers to your wardrobe. 100% genuine silk, no middlemen.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
            <div>
              <p className="text-2xl font-serif text-[#1A1A1A]">10k+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mt-1">Happy Brides</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#1A1A1A]/20" />
            <div>
              <p className="text-2xl font-serif text-[#1A1A1A]">4.9/5</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mt-1">Customer Rating</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#1A1A1A]/20" />
            <div>
              <p className="text-2xl font-serif text-[#1A1A1A]">60+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mt-1">Years of Legacy</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#FDFBF7] py-20 border-t border-[#1A1A1A]/10 text-[#1A1A1A] text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-serif">Sanvika Saree</h2>
        <div className="flex gap-8 justify-center mb-12 uppercase tracking-widest text-xs opacity-70 flex-wrap px-4">
          <Link href="https://instagram.com" target="_blank" className="hover:opacity-100 hover:text-[#5E1914] transition-colors">Instagram</Link>
          <Link href="https://wa.me/919825146267" target="_blank" className="hover:opacity-100 hover:text-[#5E1914] transition-colors">WhatsApp</Link>
          <Link href="/collections" className="hover:opacity-100 hover:text-[#5E1914] transition-colors">Collections</Link>
          <Link href="/contact" className="hover:opacity-100 hover:text-[#5E1914] transition-colors">Contact</Link>
        </div>
        <p className="text-xs opacity-40">© {new Date().getFullYear()} Sanvika Saree. All rights reserved.</p>
      </footer>
    </main>
  );
}
