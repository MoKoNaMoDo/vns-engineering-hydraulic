'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ViewCounter from "@/components/ViewCounter";

const items = [
  {
    title: "1SN DIN EN 853 SAE 100 R1AT",
    image: "/products/product/hydraulic-hose.png",
    label: <p>1SN <span className="text-[#af0000]">DIN EN 853</span> SAE 100 R1AT</p>,
    href: "/products/hydraulic-hose#1sn"
  },
  {
    title: "2SN DIN EN 853 SAE 100 R2AT",
    image: "/products/product/hydraulic-hose.png",
    label: <p>2SN <span className="text-[#af0000]">DIN EN 853</span> SAE 100 R2AT</p>,
    href: "/products/hydraulic-hose#2sn"
  },
  {
    title: "4SP DIN EN 856",
    image: "/products/product/hydraulic-hose.png",
    label: <p>4SP <span className="text-[#af0000]">DIN EN 856</span></p>,
    href: "/products/hydraulic-hose#4sp"
  },
  {
    title: "4SH DIN EN 856",
    image: "/products/product/hydraulic-hose.png",
    label: <p>4SH <span className="text-[#af0000]">DIN EN 856</span></p>,
    href: "/products/hydraulic-hose#4sh"
  },
  {
    title: "R7-TERMOPLASTIC HOSE",
    image: "/products/product/r7-hose.png",
    label: <p><span className="text-[#af0000]">R7-TERMOPLASTIC</span> HOSE</p>,
    href: "/products/r7-thermoplastic-hose"
  }
];

export default function HydraulicHose() {
  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").filter(Boolean).join("-") : "";

  return (
    <section className="py-12 px-4 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-16 inline-block border-b-4 border-[#af0000] pb-2 uppercase tracking-tight">
          Hydraulic Hose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 justify-items-center">
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="group relative w-full max-w-[480px] block transition-transform duration-300 active:scale-[0.98]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border-[3px] border-[#6b0000] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] group-hover:border-[#af0000]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 500px, 100vw"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]" />
              </div>

              {/* Label Container - Pill Shape */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] min-w-[280px] z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="bg-white border-[2.5px] border-zinc-900 rounded-2xl py-4 px-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_rgba(175,0,0,1)] group-hover:border-[#af0000]">
                  <div className="text-lg md:text-xl font-black uppercase tracking-tight text-zinc-900 text-center flex items-center justify-center gap-1">
                    {item.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <ViewCounter slug={slug} mode="increment" iconSize={14} />
        </div>
      </div>
    </section>
  );
}
