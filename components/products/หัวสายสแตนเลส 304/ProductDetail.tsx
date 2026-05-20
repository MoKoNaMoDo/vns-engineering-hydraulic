'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "หัวสายสแตนเลส304", "หัวสายสแตนเลส316",
  "SUS304", "SUS316",
  "JIC MALE", "NPT MALE",
  "FITTING", "BSPT MALE",
  "หัวพ่นสี", "หัวสายงานพิเศษ"
];

export default function ProductDetail() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Image and Badges */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge */}
              <a 
                href="/PDF/Hydraulic_20hose_20fitting_20specification.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <div className="flex items-center gap-2 rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-[#af0000]/20 group-hover:bg-zinc-50 transition-colors">
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
              </a>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/Picture8.png"
                    alt="หัวสายสแตนเลส 304"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <Link href="/products/stainless-304" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">หัวสายสแตนเลส 304 (Stainless Steel Fittings)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Information and Tags */}
          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-4xl font-black text-zinc-900 self-center lg:self-start">
              <span className="text-center">หัวสายสแตนเลส 304</span>
              <div className="mt-2 h-1.5 w-40 bg-[#af0000]" />
            </h1>

            <p className="mt-8 text-xl font-bold leading-relaxed text-[#1d1715]">
              ข้อต่อไฮดรอลิค เหล็ก สแตนเลส ทองเหลือง / 45' 90' องศา เราเป็นผู้ผลิตหัวสายไฮดรอลิคตาม รูปแบบต่างๆ หรือออกแบบใหม่ สเป็คพิเศษ ที่คุณลูกค้าต้องการใน อุตสาหกรรม ยินดีให้คำปรึกษาหากคุณลูกค้าต้องการ
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
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
            <ProductTags tags={tags} categoryHref="/products/stainless-304" />
          </div>

        </div>
      </div>
    </section>
  );
}
