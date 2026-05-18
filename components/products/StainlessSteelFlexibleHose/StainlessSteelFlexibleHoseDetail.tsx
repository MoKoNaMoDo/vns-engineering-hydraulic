'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "FLEXIBLE HOSE",
  "ท่ออ่อนสแตนเลส",
  "สายเฟล็กซ์",
  "สายทนเคมี",
  "สายทนความร้อน",
  "SS304",
  "METAL HOSE",
  "STAINLESS HOSE",
  "STAINLESS STEEL FITTING",
  "SS316L",
  "SS321",
  "SS FLANGE",
  "HIGH TEMPERATURE HOSE",
  "เชื่อมสายสแตนเลส",
  "ประกอบสายสแตนเลส",
  "SUS304",
  "SUS316"
];

export default function StainlessSteelFlexibleHoseDetail() {
  return (
    <section className="bg-white py-12 font-sans border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Image with Badges */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge - Restored to Center */}
              <button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95"
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
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/Flexble-removebg-preview.png"
                    alt="Stainless Steel Flexible Hose with Flanges"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <Link href="/products/stainless-steel-flexible-hose" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">ท่ออ่อนสแตนเลส (SS Flexible Hose)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Options */}
          <div className="flex flex-col">
            <div className="relative mb-6 flex flex-col items-center lg:items-start">
              <h1 className="text-3xl font-black text-black">Stainless Steel Flexible Hose</h1>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </div>

            <div className="space-y-6 text-base text-black">
              <h2 className="text-2xl font-black text-center mb-4">เลือกหัว-ท้าย ความยาว</h2>

              {/* Flange Section */}
              <div className="space-y-1">
                <p className="font-black text-lg">หัว-ท้าย หน้าแปลน</p>
                <p><span className="font-black">มาตรฐาน :</span> JIS 5K, JIS 10K, JIS 20K, PN10, PN16, PN25, PN40, ANSI 150P, ANSI 150P, ANSI 300P</p>
                <p><span className="font-black">วัสดุ :</span> เหล็ก SS400, สแตนเลส 304, สแตนเลส 316, ชุบกัลวาไนซ์ HDG</p>
              </div>

              {/* Fittings Section */}
              <div className="space-y-1">
                <p className="font-black text-lg">หัว-ท้าย ข้อต่อ</p>
                <p><span className="font-black">ชนิด :</span> หัวแฟร์, หัวไฮดรอลิกค์, นิปเปิ้ล เกลียวนอก, ยูเนียน เกลียวใน, ต่อตรง เกลียวใน, ข้อต่อสวมเร็ว Camlock Quick Coupling Part A, B, C, D, DC, DP, E, F และอื่นๆ</p>
                <p><span className="font-black">วัสดุ :</span> เหล็ก SS400, สแตนเลส 304, สแตนเลส 316, สแตนเลส 316L, ชุบกัลวาไนซ์ HDG</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4 self-center lg:self-start">
              <a href="https://www.facebook.com/profile.php?id=100037191445975" target="_blank" rel="noopener noreferrer" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              <a href="https://line.me/ti/p/~tonmasadora" target="_blank" rel="noopener noreferrer" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg">
                  <div className="flex flex-col items-center justify-center scale-75">
                    <span className="text-[10px] font-black leading-none">LINE</span>
                    <div className="h-[2px] w-8 bg-white/30 my-[2px]" />
                    <span className="text-[10px] font-black leading-none">OFFICIAL</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Tags Section */}
            <ProductTags tags={tags} categoryHref="/products/stainless-steel-flexible-hose" />
          </div>
        </div>
      </div>
    </section>
  );
}
