'use client';

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProductGrid() {
  const t = useTranslations("ProductGrid");

  const products = [
    { nameKey: "stainless304", name: t("stainless304"), image: "/products/products/43395.jpg", href: "/products/stainless-304" },
    { nameKey: "HYDRAULIC HOSE", name: "HYDRAULIC HOSE", image: "/products/products/HYDRAULIC HOSE.png", href: "/products/hydraulic-hose" },
    { nameKey: "STAINLESS STEEL FLEXIBLE HOSE", name: "STAINLESS STEEL FLEXIBLE HOSE", image: "/products/products/Flexible Hose.png", href: "/products/stainless-steel-flexible-hose" },
    { nameKey: "PTFE HOSE/TEFLON HOSE", name: "PTFE HOSE/TEFLON HOSE", image: "/products/products/PTFE.png", href: "/products/ptfe-teflon-hose" },
    { nameKey: "R7-THERMOPLASTIC HOSE", name: "R7-THERMOPLASTIC HOSE", image: "/products/product/สกรีนช็อต 2026-05-16 223511.png", href: "/products/r7-thermoplastic-hose" },
    { nameKey: "STEAM HOSE", name: "STEAM HOSE", image: "/products/product/สกรีนช็อต 2026-05-16 223715.png", href: "/products/steam-hose" },
    { nameKey: "TOYOX", name: "TOYOX", image: "/products/product/toyox2z-z566056134181.jpg", href: "/products/toyox" },
    { nameKey: "INDUSTRIAL HOSE", name: "INDUSTRIAL HOSE", image: "/products/products/Industrial Hose.jpg", href: "/products/industrial-hose" },
    { nameKey: "TUBE FITTINGS", name: "TUBE FITTINGS", image: "/products/products/TUBE.png", href: "/products/tube-fittings" },
    { nameKey: "CAMLOCK COUPLING", name: "CAMLOCK COUPLING", image: "/products/products/CAMLOCK COUPLING.png", href: "/products/camlock-coupling" },
    { nameKey: "QUICK COUPLING", name: "QUICK COUPLING", image: "/products/products/Quick.png", href: "/products/quick-coupling" },
    { nameKey: "HYDRAULIC BALL VALVE", name: "HYDRAULIC BALL VALVE", image: "/products/product/hydraulic-ball-valve.png", href: "/products/hydraulic-ball-valve" },
    { nameKey: "pipeService", name: t("pipeService"), image: "/products/products/ดัดแป๊บ.png", href: "/products/industrial-pipe-service" },
  ];

  const renderAnimatedLetters = (text: string, delayOffset: number = 0, speed: number = 0.04) => {
    const characters =
      typeof Intl !== "undefined" && Intl.Segmenter
        ? Array.from(new Intl.Segmenter("th", { granularity: "grapheme" }).segment(text)).map((s) => s.segment)
        : text.split("");
    return characters.map((char, index) => (
      <span key={index} className="animate-letter inline-block opacity-0" style={{ animationDelay: `${delayOffset + index * speed}s` }}>
        {char === " " ? " " : char}
      </span>
    ));
  };

  return (
    <section className="bg-[#e5e5e5] py-16 overflow-hidden font-sans">
      <style>{`
        @keyframes floatUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatLetterUp { from { opacity: 0; transform: translateY(15px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-letter { animation: floatLetterUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-image-box { opacity: 0; animation: floatUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-14 text-center">
          <h2 className="inline-block border-b-[3px] border-black pb-2 text-3xl font-black uppercase tracking-widest text-black md:text-4xl">
            {renderAnimatedLetters(t("title"), 0, 0.05)}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-6">
          {products.map((product, index) => {
            const cardDelay = 0.2 + index * 0.1;
            const textDelay = cardDelay + 0.3;
            const isWideImage = product.nameKey === "pipeService";

            return (
              <Link key={product.nameKey} href={product.href} className="flex w-[140px] flex-col items-center sm:w-[180px] lg:w-[210px] group">
                <div
                  className={`animate-image-box relative aspect-square w-full overflow-hidden border-[1.5px] border-dashed border-[#ff0000] shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-solid group-hover:border-[#8b1a1a] group-hover:shadow-xl cursor-pointer ${isWideImage ? "bg-zinc-100" : "bg-white"}`}
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isWideImage ? "object-contain p-2" : "object-cover"}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-[10px] font-bold text-zinc-400">[IMAGE]</div>
                  )}
                </div>
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
