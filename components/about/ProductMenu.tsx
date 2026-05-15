'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface SubItem {
  name: string;
  href: string;
}

interface ProductLink {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const productLinks: ProductLink[] = [
  { name: "หัวสายสแตนเลส 304", href: "/products/stainless-304" },
  {
    name: "Hydraulic Hose",
    href: "/products/hydraulic-hose",
    subItems: [
      { name: "Hydraulic Hose 1SN", href: "/products/hydraulic-hose#1sn" },
      { name: "Hydraulic Hose 2SN", href: "/products/hydraulic-hose#2sn" },
      { name: "Hydraulic Hose 4SP", href: "/products/hydraulic-hose#4sp" },
      { name: "Hydraulic Hose 4SH", href: "/products/hydraulic-hose#4sh" },
    ]
  },
  {
    name: "Stainless Steel Flexible Hose",
    href: "/products/stainless-steel-flexible-hose",
    subItems: [
      { name: "ท่ออ่อนสแตนเลส (Intro)", href: "/products/stainless-steel-flexible-hose#intro" },
      { name: "เลือกหัว-ท้าย ความยาว", href: "/products/stainless-steel-flexible-hose#custom-options" },
    ]
  },
  {
    name: "PTFE Hose / Teflon Hose",
    href: "/products/ptfe-teflon-hose",
    subItems: [
      { name: "PTFE Smooth Bore (R14)", href: "/products/ptfe-teflon-hose#r14" },
      { name: "PTFE Convoluted (ลูกฟูก)", href: "/products/ptfe-teflon-hose#convoluted" },
    ]
  },
  { name: "สายR7 Thermoplastic Hose", href: "/products/r7-thermoplastic-hose" },
  { name: "สายสตีม Steam Hose", href: "/products/steam-hose" },
  {
    name: "สายอุตสาหกรรม Industrial Hose",
    href: "/products/industrial-hose",
    subItems: [
      { name: "SUNFLEX OSD150", href: "/products/industrial-hose#osd150" },
      { name: "SUNFLEX AH300", href: "/products/industrial-hose#ah300" },
      { name: "SUNFLEX CSD150", href: "/products/industrial-hose#csd150" },
      { name: "SUNFLEX WSD150", href: "/products/industrial-hose#wsd150" },
      { name: "SUNFLEX DH300", href: "/products/industrial-hose#dh300" },
    ]
  },
  { name: "สาย TOYOX", href: "/products/toyox" },
  { name: "Quick Coupling", href: "/products/quick-coupling" },
  { name: "Tube Fittings/Instrument Fittings", href: "/products/tube-fittings" },
  { name: "Hydraulic Ball Valve", href: "/products/hydraulic-ball-valve" },
  { name: "Camlock Coupling", href: "/products/camlock-coupling" },
  { name: "บริการตัดแป๊ป อุตสาหกรรม ทุกชนิด", href: "/products/industrial-pipe-service" },
];

export default function ProductMenu() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // กางเมนูอัตโนมัติหากหน้าปัจจุบันอยู่ในหมวดหมู่ย่อย
  useEffect(() => {
    const activeParent = productLinks.find(link =>
      pathname === link.href || link.subItems?.some(sub => pathname === sub.href)
    );
    if (activeParent && activeParent.subItems) {
      setExpandedItems(prev => prev.includes(activeParent.name) ? prev : [...prev, activeParent.name]);
    }
  }, [pathname]);

  const toggleExpand = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  return (
    <aside className="sticky top-24 hidden h-fit w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl lg:block">

      {/* Header with gradient and icon */}
      <div className="bg-gradient-to-r from-[#af3030] to-[#8e2525] px-6 py-5">
        <h2 className="flex items-center gap-3 text-xl font-black text-white">
          <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
          เมนูสินค้า
        </h2>
      </div>

      <nav className="flex flex-col">
        {productLinks.map((item, index) => {
          const isExactActive = pathname === item.href;
          const isChildActive = item.subItems?.some(sub => pathname === sub.href);
          const isParentActive = isExactActive || isChildActive; // Active ถ้ารวมตัวมันเองหรือลูกๆ

          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isExpanded = expandedItems.includes(item.name);

          return (
            // 🔴 1. คุม Background และ Hover state จากจุดเดียวที่ Container นอกสุด
            <div
              key={item.name}
              className={`group relative flex flex-col transition-colors duration-300 border-b border-zinc-50 last:border-0 ${isParentActive
                ? "bg-[#af3030]/5"
                : index % 2 === 0 ? "bg-[#fafafa]" : "bg-white"
                } hover:bg-[#af3030]/10`}
            >

              {/* แถบสีแดงซ้ายมือ (Indicator) */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-[#af3030] transition-transform duration-300 origin-top ${isParentActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                  }`}
              />

              {/* 🔴 2. จับ Link และ Button ไว้ในแถวเดียวกันโดยไม่มีการแยกสีพื้นหลัง */}
              <div className="flex items-stretch justify-between w-full">
                <Link
                  href={item.href}
                  className={`flex-1 px-6 py-4 transition-all duration-300 ${isParentActive ? "text-[#af3030] pl-8" : "text-zinc-700 group-hover:pl-8 group-hover:text-[#af3030]"
                    }`}
                >
                  <span className="text-[16px] font-bold">
                    {item.name}
                  </span>
                </Link>

                {/* ปุ่มกางเมนู (ปรับให้เนียนไปกับกล่อง ไม่ดูเป็นปุ่มสี่เหลี่ยมแยกออกมา) */}
                {hasSubItems ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpand(item.name);
                    }}
                    className={`px-5 flex items-center justify-center transition-colors duration-300 ${isParentActive ? "text-[#af3030]" : "text-zinc-400 group-hover:text-[#af3030]"
                      }`}
                  >
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  /* ไอคอนลูกศรชี้ขวา สำหรับเมนูที่ไม่มีลูก */
                  <div className="px-5 flex items-center justify-center">
                    <svg
                      className={`h-5 w-5 transition-all duration-300 ${isExactActive ? "translate-x-0 text-[#af3030] opacity-100" : "-translate-x-2 text-zinc-300 opacity-0 group-hover:translate-x-0 group-hover:text-[#af3030] group-hover:opacity-100"
                        }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* 🔴 3. Sub Items (กางออกแบบ Smooth ด้วย CSS Grid) */}
              {hasSubItems && (
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden flex flex-col bg-white/50">
                    {/* เส้นแบ่งย่อยๆ คั่นระหว่าง Parent / Child */}
                    <div className="h-[1px] w-[85%] mx-auto bg-zinc-200/50" />

                    <div className="py-2">
                      {item.subItems?.map((sub) => {
                        const isSubActive = pathname === sub.href;

                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`group/sub flex items-center gap-3 px-10 py-2.5 text-[14px] transition-all duration-300 ${isSubActive
                              ? "font-bold text-[#af3030] bg-[#af3030]/5"
                              : "font-medium text-zinc-500 hover:text-[#af3030] hover:bg-zinc-50"
                              }`}
                          >
                            <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${isSubActive ? "bg-[#af3030] scale-125" : "bg-zinc-300 group-hover/sub:bg-[#af3030]"
                              }`} />
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </nav>
    </aside>
  );
}