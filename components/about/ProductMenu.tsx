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
    <aside className="overflow-hidden border border-[#ded0c5] bg-white text-[24px] shadow-sm">
      <h2 className="bg-[#af3030] px-3 py-3 text-[25px] font-black text-white underline decoration-white underline-offset-4">
        หัวสายสแตนเลส 304
      </h2>
      <nav>
        {productLinks.map((item, index) => (
          <Link
            key={item}
            href={index < 8 ? "/products/stainless-304" : "/products"}
            className={`block px-3 py-4 underline underline-offset-4 ${index % 2 === 0 ? "bg-[#f5e0cf]" : "bg-[#d9d9d9]"}`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
