'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "SUNFLEX DH300", "BUNKERING HOSE", "ท่อดูดส่งน้ำมันงานหนัก",
  "ท่อเรือ", "ท่อท่าเรือ", "สายอุตสาหกรรม",
  "HEAVY DUTY OIL HOSE"
];



export default function IndustrialHoseDH300() {
  return (
    <section className="bg-white py-12 font-sans border-t border-zinc-100">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* <button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95"
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
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/Picture5.png"
                    alt="INDUSTRIAL HOSE DH300"
                    fill
                    className="object-contain transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Link href="/products/industrial-hose" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">สายยางส่งลมอุตสาหกรรม (DH300)</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-start text-3xl font-black text-black">
              <span>INDUSTRIAL HOSE</span>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-black text-[#af0000]">SUNFLEX DH300</h2>
              <h3 className="text-xl font-bold leading-relaxed text-zinc-800">
                ท่อดูด-ส่งน้ำมันสำหรับงานหนัก (BUNKERING)
              </h3>
              <p className="text-xl font-medium text-zinc-600 leading-relaxed">
                ออกแบบมาเพื่อการใช้งานหนักในท่าเรือและบนเรือ สามารถทนแรงดันได้สูงถึง 300 PSI
                และทนความร้อนได้ถึง +100°C โครงสร้างทนต่อการเสียดสี, น้ำมัน, โอโซน และสภาพอากาศได้ดีเยี่ยม
              </p>
              <div className="rounded-2xl bg-zinc-50 p-6 space-y-3">
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">อุณหภูมิใช้งาน: -40°C ถึง +100°C</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">ขนาด: 4" ถึง 12"</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">เหมาะสำหรับงาน: เรือและท่าเรือ (Dock & Offshore)</span>
                </div>
              </div>
            </div>

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

            <ProductTags tags={tags} categoryHref="/products/industrial-hose" />
          </div>
        </div>
      </div>
    </section>
  );
}
