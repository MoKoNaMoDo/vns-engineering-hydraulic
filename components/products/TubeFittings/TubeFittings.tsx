'use client';

import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "ข้อต่อสแตนเลส", "ฟิตติ้งสแตนเลส", "FITTING", "ข้อต่อตาไก่", "BITE TYPE FITTINGS", "JISB2351"
];



export default function TubeFittings() {
  return (
    <section className="bg-white py-12 font-sans">
      <style jsx>{`
        @keyframes slide-in-from-left {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-from-right {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-scale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-left { animation: slide-in-from-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slide-right { animation: slide-in-from-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-scale { animation: fade-in-scale 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* Left Column: Image and Badges */}
          <div className="flex flex-col items-center lg:items-start animate-slide-left">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge */}
              {/* <button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}
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
              </button> */}

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/tube-fittings.png"
                    alt="TUBE FITTINGS / INSTRUMENT FITTINGS"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center block">ข้อต่อตาไก่สแตนเลส (Tube Fittings)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <div className="relative inline-flex flex-col items-center lg:items-start self-center lg:self-start">
              <h1 className="text-3xl font-black text-black">TUBE FITTINGS</h1>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </div>

            <div className="mt-8 space-y-6 text-center lg:text-left">
              <div className="space-y-4 text-xl font-bold text-zinc-800 leading-relaxed">
                <p className="text-xl font-black text-zinc-600">(TUBE FITTINGS / INSTRUMENT FITTINGS)</p>
                <p className="text-xl font-medium text-zinc-800">ซึ่งนิยมใช้ในระบบ น้ำมัน, ก๊าซ, ไฮดรอลิก, และปิโตรเคมี</p>
                
                <ul className="space-y-3 text-left text-[17px] font-medium text-zinc-700 mt-6 border-l-4 border-[#af0000] pl-6">
                  <li>
                    <span className="font-black text-zinc-900">•OIL & GAS (น้ำมันและก๊าซ):</span> ใช้ในท่อส่งก๊าซ, น้ำมัน, น้ำยาเคมี
                  </li>
                  <li>
                    <span className="font-black text-zinc-900">•PETROCHEMICAL (ปิโตรเคมี):</span> ระบบท่อในโรงงานเคมี, ผลิตภัณฑ์เคมี
                  </li>
                  <li>
                    <span className="font-black text-zinc-900">•HYDRAULIC SYSTEM (ไฮดรอลิก):</span> ต่อท่อแรงดันสูงในเครื่องจักร, ปั๊ม, วาล์ว
                  </li>
                  <li>
                    <span className="font-black text-zinc-900">•INSTRUMENTATION (เครื่องมือวัด):</span> ต่อกับ PRESSURE GAUGE, FLOW METER, ANALYZER
                  </li>
                  <li>
                    <span className="font-black text-zinc-900">•FOOD & PHARMA (อาหารและยา):</span> เมื่อใช้สแตนเลส 316L (SANITARY GRADE)
                  </li>
                </ul>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
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

            {/* Tags */}
            <ProductTags tags={tags} categoryHref="/products/tube-fittings" />
          </div>

        </div>
      </div>
    </section>
  );
}
