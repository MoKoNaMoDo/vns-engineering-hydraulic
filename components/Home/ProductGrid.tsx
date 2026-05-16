'use client';

import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "หัวสายสแตนเลส 304", image: "/products/products/43395.jpg", href: "/products/stainless-304" },
  { name: "HYDRAULIC HOSE", image: "/products/products/HYDRAULIC HOSE.png", href: "/products/hydraulic-hose" },
  { name: "STAINLESS STEEL FLEXIBLE HOSE", image: "/products/products/Flexible Hose.png", href: "/products/stainless-steel-flexible-hose" },
  { name: "PTFE HOSE/TEFLON HOSE", image: "/products/products/PTFE.png", href: "/products/ptfe-teflon-hose" },
  { name: "R7-THERMOPLASTIC HOSE", image: "/products/product/สกรีนช็อต 2026-05-16 223511.png", href: "/products/r7-thermoplastic-hose" },
  { name: "STEAM HOSE", image: "/products/product/สกรีนช็อต 2026-05-16 223715.png", href: "/products/steam-hose" },
  { name: "TOYOX", image: "/products/logo/Toyox.png", href: "/products/toyox" },
  { name: "INDUSTRIAL HOSE", image: "/products/products/Industrial Hose.jpg", href: "/products/industrial-hose" },
  { name: "TUBE FITTINGS", image: "/products/products/TUBE.png", href: "/products/tube-fittings" },
  { name: "CAMLOCK COUPLING", image: "/products/products/CAMLOCK COUPLING.png", href: "/products/camlock-coupling" },
  { name: "QUICK COUPLING", image: "/products/products/Quick.png", href: "/products/quick-coupling" },
  { name: "HYDRAULIC BALL VALVE", image: "/products/product/hydraulic-ball-valve.png", href: "/products/hydraulic-ball-valve" },
  // 🔴 ภาพนี้เป็นภาพยาว
  { name: "บริการตัดแป๊ป อุตสาหกรรม", image: "/products/products/ดัดแป๊บ.png", href: "/products/industrial-pipe-service" },
];

export default function ProductGrid() {

  // ฟังก์ชันแยกตัวอักษรให้ค่อยๆ ลอยขึ้นมาทีละตัว
  const renderAnimatedLetters = (text: string, delayOffset: number = 0, speed: number = 0.04) => {
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
    <section className="bg-[#e5e5e5] py-16 overflow-hidden font-sans">

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

        {/* Header - ลอยมาทีละตัว */}
        <div className="mb-14 text-center">
          <h2 className="inline-block border-b-[3px] border-black pb-2 text-3xl font-black uppercase tracking-widest text-black md:text-4xl">
            {renderAnimatedLetters("PRODUCTS", 0, 0.05)}
          </h2>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-6">
          {products.map((product, index) => {
            const cardDelay = 0.2 + index * 0.1;
            const textDelay = cardDelay + 0.3;

            // 🔴 1. ตรวจสอบเงื่อนไข: ถ้าเป็นภาพ "บริการตัดแป๊ป..." (ภาพสุดท้าย) 
            const isWideImage = product.name === "บริการตัดแป๊ป อุตสาหกรรม";

            return (
              <Link
                key={product.name}
                href={product.href}
                className="flex w-[140px] flex-col items-center sm:w-[180px] lg:w-[210px] group"
              >
                {/* 1. Product Image Box (มีกรอบแดงเส้นประ) */}
                <div
                  // 🔴 2. ถ้าเป็นภาพยาว ให้เปลี่ยนพื้นหลังกล่องเป็นสีเทาอ่อนเพื่อให้ดูกลืนไปกับภาพ ไม่โล่งเกินไป
                  className={`animate-image-box relative aspect-square w-full overflow-hidden border-[1.5px] border-dashed border-[#ff0000] shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-solid group-hover:border-[#8b1a1a] group-hover:shadow-xl cursor-pointer ${isWideImage ? 'bg-zinc-100' : 'bg-white'
                    }`}
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      // 🔴 3. ส่วนสำคัญ: สลับคลาส object-contain / object-cover
                      // ถ้าเป็นภาพยาว ใช้ object-contain (และใส่ Padding นิดนึงเพื่อความสวยงาม) เพื่อให้ภาพทั้งใบหดตัวมาอยู่ในกล่อง
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isWideImage ? 'object-contain p-2' : 'object-cover'
                        }`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-[10px] font-bold text-zinc-400">
                      [IMAGE]
                    </div>
                  )}
                </div>

                {/* 2. Product Label (มีขีดเส้นใต้สีแดง) */}
                <div className="mt-4 w-full flex flex-col items-center justify-center px-1">
                  <h3 className="text-center text-[12px] font-black uppercase tracking-tight text-[#7a1818] transition-colors duration-300 md:text-[14px] group-hover:text-[#ff0000] leading-snug underline decoration-[2px] underline-offset-[5px] decoration-[#7a1818] group-hover:decoration-[#ff0000]">
                    {renderAnimatedLetters(product.name, textDelay, 0.02)}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}