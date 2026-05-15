'use client';

import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "หัวสายสแตนเลส 304", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", href: "/products/stainless-304" },
  { name: "HYDRAULIC HOSE", image: "/products/product/hydraulic-hose.png", href: "/products/hydraulic-hose" },
  { name: "STAINLESS STEEL FLEXIBLE HOSE", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", href: "/products/stainless-steel-flexible-hose" },
  { name: "PTFE HOSE/TEFLON HOSE", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", href: "/products/ptfe-teflon-hose" },
  { name: "R7-THERMOPLASTIC HOSE", image: "/products/product/r7-hose.png", href: "/products/r7-thermoplastic-hose" },
  { name: "STEAM HOSE", image: "/products/product/steam-hose.png", href: "/products/steam-hose" },
  { name: "TOYOX", image: "/products/product/toyox-hoses.png", href: "/products/toyox" },
  { name: "INDUSTRIAL HOSE", image: "/products/product/industrial-hose.png", href: "/products/industrial-hose" },
  { name: "TUBE FITTINGS", image: "/products/product/tube-fittings.png", href: "/products/tube-fittings" },
  { name: "CAMLOCK COUPLING", image: "/products/product/camlock-coupling.png", href: "/products/camlock-coupling" },
  { name: "QUICK COUPLING", image: "/products/product/quick-couplings-types.png", href: "/products/quick-coupling" },
  { name: "HYDRAULIC BALL VALVE", image: "/products/product/hydraulic-ball-valve.png", href: "/products/hydraulic-ball-valve" },
  { name: "บริการตัดแป๊ป อุตสาหกรรม ทุกชนิด", image: "/products/product/pipe-bending-service.png", href: "/products/industrial-pipe-service" },
];

export default function ProductGrid() {

  // ฟังก์ชันแยกตัวอักษรให้ค่อยๆ ลอยขึ้นมาทีละตัว
  const renderAnimatedLetters = (text: string, delayOffset = 0, speed = 0.04) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block opacity-0"
        style={{ animationDelay: `${delayOffset + index * speed}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="bg-[#dcdcdc] py-16 overflow-hidden font-sans">

      {/* 🔴 CSS Animation */}
      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLetterUp {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-letter {
          animation: floatLetterUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-image-box {
          opacity: 0;
          animation: floatUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-4">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="inline-block border-b-4 border-black pb-2 text-4xl font-black uppercase tracking-widest text-black">
            {renderAnimatedLetters("PRODUCTS", 0, 0.05)}
          </h2>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {products.map((product, index) => {
            const cardDelay = 0.3 + index * 0.1;
            const textDelay = cardDelay + 0.3;

            return (
              <Link
                key={product.name}
                href={product.href}
                className="flex w-[160px] flex-col items-center sm:w-[200px] lg:w-[210px] group"
              >
                {/* 1. Product Image Box */}
                <div
                  className="animate-image-box relative aspect-square w-full overflow-hidden border-[3px] border-dashed border-[#ff0000] bg-white p-2 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:border-solid group-hover:border-[#af0000] group-hover:shadow-2xl cursor-pointer"
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  {product.image ? (
                    <div className="relative h-full w-full overflow-hidden">
                       <Image 
                         src={product.image} 
                         alt={product.name} 
                         fill 
                         sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 210px"
                         className="object-cover transition-transform duration-500 group-hover:scale-110"
                       />
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-[10px] font-bold text-zinc-400 transition-colors group-hover:bg-zinc-50">
                      [IMAGE]
                    </div>
                  )}
                </div>

                {/* 2. Product Label */}
                <h3 className="mt-5 w-full text-center text-[13px] font-bold uppercase tracking-normal leading-snug text-[#6b2525] transition-colors duration-300 md:text-[15px] group-hover:text-[#af0000]">
                  {renderAnimatedLetters(product.name, textDelay, 0.02)}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}