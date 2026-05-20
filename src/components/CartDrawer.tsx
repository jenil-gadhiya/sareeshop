"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.4 });
      gsap.to(drawerRef.current, { x: "0%", duration: 0.6, ease: "power3.out" });
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.4 });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.6, ease: "power3.inOut" });
    }
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={closeCart}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] opacity-0 pointer-events-none"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FDFBF7] shadow-2xl z-[70] translate-x-full flex flex-col"
      >
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-[#1A1A1A]/10">
          <h2 className="text-2xl font-serif text-[#1A1A1A]">Your Selection</h2>
          <button onClick={closeCart} className="text-[#1A1A1A] p-2 text-sm uppercase tracking-widest">
            Close ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[#1A1A1A]/50">
              <p className="uppercase tracking-widest text-sm mb-4">Your bag is empty</p>
              <button onClick={closeCart} className="border-b border-[#1A1A1A]/30 pb-1 hover:text-[#1A1A1A] transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="relative w-24 aspect-[3/4] bg-[#E8DCC9]">
                    <Image src={item.image} alt={item.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-lg font-serif text-[#1A1A1A]">{item.title}</h3>
                      <p className="text-[#1A1A1A]/60 text-sm mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#1A1A1A]">{item.price}</p>
                      <button onClick={() => removeItem(item.id)} className="text-xs uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#5E1914] transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 md:p-8 border-t border-[#1A1A1A]/10 bg-[#FDFBF7]">
            <button className="w-full py-4 bg-[#1A1A1A] text-[#FDFBF7] uppercase tracking-widest text-sm hover:bg-[#5E1914] transition-colors duration-500">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
