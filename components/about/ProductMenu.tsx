import Link from "next/link";

const productLinks = [
  "Hydraulic Hose",
  "Stainless Steel Flexible Hose",
  "PTFE Hose / Teflon Hose",
  "สายR7 Thermoplastic Hose",
  "สายสตีม Steam Hose",
  "สายอุตสาหกรรม Industrial Hose",
  "สาย TOYOX",
  "Quick Coupling",
  "Tube Fittings/Instrument Fittings",
  "Hydraulic Ball Valve",
  "Camlock Coupling",
  "บริการตัดแป๊ป อุตสาหกรรม ทุกชนิด",
];

export default function ProductMenu() {
  return (
    <aside className="sticky top-24 hidden h-fit w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl lg:block">
      {/* Header with gradient and icon */}
      <Link href="/products/stainless-304" className="block transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
        <div className="bg-gradient-to-r from-[#af3030] to-[#8e2525] px-6 py-5">
          <h2 className="flex items-center gap-3 text-xl font-black text-white">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
            หัวสายสแตนเลส 304
          </h2>
        </div>
      </Link>

      <nav className="flex flex-col">
        {productLinks.map((item, index) => (
          <Link
            key={item}
            href={
              item === "Hydraulic Hose" ? "/products/hydraulic-hose" :
                item === "PTFE Hose / Teflon Hose" ? "/products/ptfe-teflon-hose" :
                  item === "Stainless Steel Flexible Hose" ? "/products/stainless-steel-flexible-hose" :
                    item === "สายR7 Thermoplastic Hose" ? "/products/r7-thermoplastic-hose" :
                      item === "สายสตีม Steam Hose" ? "/products/steam-hose" :
                        item === "สายอุตสาหกรรม Industrial Hose" ? "/products/industrial-hose" :
                          (index < 8 ? "/products/stainless-304" : "/products")
            }
            className={`group relative flex items-center justify-between px-6 py-4 transition-all duration-300 hover:bg-[#af0000]/5 ${index % 2 === 0 ? "bg-[#fcfafa]" : "bg-white"
              }`}
          >
            {/* Hover Indicator Line */}
            <div className="absolute left-0 h-0 w-1 bg-[#af3030] transition-all duration-300 group-hover:h-full" />

            <span className="relative z-10 text-[17px] font-bold text-zinc-700 transition-colors duration-300 group-hover:pl-2 group-hover:text-[#af3030]">
              {item}
            </span>

            {/* Hover Arrow Icon */}
            <svg
              className="h-5 w-5 -translate-x-2 text-zinc-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#af3030] group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </nav>

      {/* Footer Decoration */}
      <div className="bg-zinc-50 px-6 py-4 text-center">
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
          V.N.S. Engineering Product Catalog
        </p>
      </div>
    </aside>
  );
}
