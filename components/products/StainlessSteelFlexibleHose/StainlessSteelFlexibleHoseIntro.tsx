'use client';

import Link from "next/link";

import Image from "next/image";

export default function StainlessSteelFlexibleHoseIntro() {
  return (
    <section className="bg-white py-12 font-sans border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Column: Image with Badges */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge - Restored to Center with Hover Effect */}
              <button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <div className="flex items-center gap-2 rounded-xl bg-white px-8 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-[#af0000]/20 group-hover:bg-zinc-50 transition-colors">
                  รายละเอียดสินค้า
                  <svg 
                    className="w-5 h-5 text-[#af0000] animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Product Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/af-single-braid-large.jpg"
                    alt="Stainless Steel Flexible Hose Detail"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image - Blue Rectangle */}
              <div className="mt-0 flex justify-center">
                <Link href="/products/stainless-steel-flexible-hose" className="bg-[#3b6db4] px-16 py-4 text-3xl font-black text-white shadow-lg -translate-y-6 transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">ท่ออ่อนสแตนเลส (SS Flexible Hose)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications */}
          <div className="flex flex-col">
            <div className="relative mb-6 flex flex-col items-center lg:items-start">
              <h1 className="text-3xl font-black text-black">Stainless Steel Flexible Hose</h1>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-black text-black flex items-center gap-2">
                  Code : SUS321/304
                </div>
                <div className="text-2xl font-black text-black flex items-center gap-2">
                  Temperature : -200°C to 400°C
                </div>
              </div>

              <p className="text-xl font-bold leading-relaxed text-black mt-4 text-center lg:text-left">
                ท่ออ่อน (Flexible Hose) หรือท่อเฟล็กซ์ มีความยืดหยุ่นสูง งอได้ถึง 360°
                ผลิตจากวัสดุ เช่น สแตนเลส (SUS304, 316) หรือ PVC เสริมโครงลวดสปริง
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
