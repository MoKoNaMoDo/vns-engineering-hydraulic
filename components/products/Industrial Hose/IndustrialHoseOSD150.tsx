'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "INDUSTRIAL HOSE", "SUNFLEX OSD150", "ท่อดูดส่งน้ำมัน",
  "OIL SUCTION HOSE", "สายยางอุตสาหกรรม", "ท่อทนน้ำมัน",
  "สายน้ำมันรถบรรทุก", "HEAVY DUTY HOSE"
];



export default function IndustrialHoseOSD150() {
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
                className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95 animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}
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
                    src="/products/products/Picture1.png"
                    alt="INDUSTRIAL HOSE"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Industrial Blue Badge */}
              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <Link href="/products/industrial-hose" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center transform transition- transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">สายยางดูด-ส่งน้ำมันอุตสาหกรรม (OSD150)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-3xl font-black text-black self-center lg:self-start">
              <span className="text-center">INDUSTRIAL HOSE</span>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-6 text-center lg:text-left">
              <h2 className="text-2xl font-black text-[#af0000]">SUNFLEX OSD150</h2>
              <h3 className="text-xl font-bold leading-relaxed text-[#1d1715]">
                ท่อดูด-ส่งน้ำมัน (OIL SUCTION/DISCHARGE HOSE) 150 PSI
              </h3>
              
              <div className="space-y-4 text-xl font-medium text-zinc-800 leading-relaxed">
                <p>
                  ใช้กับรถบรรทุกน้ำมันและรถแทงก์ในการดูดและส่งน้ำมัน สามารถทนแรงดูดสุญญากาศได้เต็มที่ 
                  ใช้กับผลิตภัณฑ์ปิโตรเลียมหลากหลายชนิดที่มีสารอะโรเมติกได้สูงสุดถึง 50%
                </p>
                <div className="rounded-2xl bg-zinc-50 p-6">
                   <ul className="space-y-3">
                     <li className="flex gap-2">
                       <span className="text-[#af0000] font-black">•</span>
                       <span>ช่วงอุณหภูมิการใช้งาน: -40°C (-40°F) ถึง +100°C (+212°F)</span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-[#af0000] font-black">•</span>
                       <span>ขนาดที่รองรับ: ตั้งแต่ 1" ถึง 12"</span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-[#af0000] font-black">•</span>
                       <span>ทนแรงดันทำงาน (WP): 150 PSI (10 ATM)</span>
                     </li>
                     <li className="flex gap-2">
                       <span className="text-[#af0000] font-black">•</span>
                       <span>ทนแรงดันระเบิด (Bursting): 450 PSI (30 ATM)</span>
                     </li>
                   </ul>
                </div>
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
            <ProductTags tags={tags} categoryHref="/products/industrial-hose" />
          </div>

        </div>
      </div>
    </section>
  );
}
