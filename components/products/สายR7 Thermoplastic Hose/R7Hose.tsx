'use client';

import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";



const tags = [
  "PVC HOSE", "สาย R7", "สายคู่ R7", "สายเทอร์โม",
  "THERMOPLASTIC HOSE", "สายไฮดรอลิค", "ท่อไฮดรอลิค",
  "ท่อยาง", "TWIN HOSE"
];

export default function R7Hose() {
  return (
    <section className="bg-white py-12 font-sans overflow-hidden">
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-right { animation: slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-slide-left { animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-fade-scale { animation: fadeInScale 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Image and Badges */}
          <div className="flex flex-col items-center lg:items-start animate-slide-left">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge (Bubble with shadow) */}
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

              {/* Product Image Wrapper with Red Border */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/r7-hose.png"
                    alt="R7-THERMOPLASTIC HOSE"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* R7 Blue Badge Below Image */}
              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[160px] text-center block">สายไฮดรอลิก R7 Thermoplastic</div>
              </div>
            </div>
          </div>

          {/* Right Column: Information and Tags */}
          <div className="flex flex-col animate-slide-right">
            {/* Title with Red Underline */}
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-3xl font-black text-black self-center lg:self-start">
              <span className="text-center">R7-THERMOPLASTIC HOSE</span>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </h1>

            {/* Description Section */}
            <div className="mt-8 space-y-4">
              <p className="text-xl font-bold leading-relaxed text-[#1d1715]">
                สายไฮดรอลิคเทอร์โมพลาสติก R7 (SAE 100 R7)
              </p>
              <div className="text-xl font-medium leading-relaxed text-zinc-800">
                เป็นสายแรงดันปานกลาง (70-210 bar) โครงสร้างประกอบด้วยท่อชั้นในเทอร์โมพลาสติก
                เสริมความแข็งแรงด้วยใยสังเคราะห์ถัก และผิวภายนอกทนการเสียดสี (MSHA approved)
                เหมาะสำหรับน้ำมันไฮดรอลิค น้ำ และงานทั่วไป มีความยืดหยุ่นสูง น้ำหนักเบา ทนอุณหภูมิ
                (-40°C ถึง +100°C)
              </div>
            </div>

            {/* Social Share Icons */}
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
            <ProductTags tags={tags} categoryHref="/products/r7-thermoplastic-hose" />
          </div>

        </div>
      </div>
    </section>
  );
}

