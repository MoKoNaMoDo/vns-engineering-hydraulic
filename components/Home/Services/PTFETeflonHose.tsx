'use client';

import Image from "next/image";

const items = [
  {
    title: "PTFE TEFLON HOSE R14",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    label: <p><span className="text-[#af0000]">PTFE TEFLON</span> HOSE R14</p>,
    href: "/products/ptfe-teflon-hose"
  },
  {
    title: "PTFE CONVOLUTED TEFLON HOSE",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    label: <p><span className="text-[#af0000]">PTFE CONVOLUTED</span> TEFLON HOSE</p>,
    href: "/products/ptfe-teflon-hose"
  }
];

export default function PTFETeflonHose() {
  return (
    <section className="py-12 px-4 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-16 inline-block border-b-4 border-[#af0000] pb-2 uppercase tracking-tight">
          PTFE Hose / Teflon Hose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 justify-items-center">
          {items.map((item, index) => (
            <div key={index} className="group relative w-full max-w-[480px]">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border-[3px] border-[#6b0000] shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] group-hover:border-[#af0000]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
