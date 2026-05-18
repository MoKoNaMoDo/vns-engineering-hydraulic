'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "BALL VALVE", "BALL VALVE STAINLESS STEEL", "บอลวาล์ว"
];



export default function BallValve() {
  return (
    <section className="bg-white py-4">
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
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                  รายละเอียดสินค้า
                </div>
              </div>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/hydraulic-ball-valve.png"
                    alt="HYDRAULIC BALL VALVE"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <Link href="/products/hydraulic-ball-valve" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">บอลวาล์วไฮดรอลิก (Hydraulic Ball Valve)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <div className="relative inline-flex flex-col items-center lg:items-start self-center lg:self-start">
              <h1 className="text-4xl font-black text-zinc-900 uppercase">HYDRAULIC BALLVALVE</h1>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </div>

            <div className="mt-8 space-y-8 text-zinc-800">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#af0000] text-center lg:text-left">HYDRAULIC BALL VALVE (1/8" - 2")</h3>
                <p className="text-lg font-medium leading-relaxed text-center lg:text-left">
                  HYDRAULIC BALL VALVE (วาล์วบอลระบบไฮดรอลิก) เป็นอุปกรณ์เปิด-ปิดการไหลของของไหล 
                  (ส่วนมากคือน้ำมันไฮดรอลิก) ที่ทนแรงดันสูง ใช้งานง่ายและซีลแน่น จึงถูกใช้ในหลายอุตสาหกรรมหลัก ดังนี้
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-black border-l-4 border-[#af0000] pl-4">คุณลักษณะเด่น (Key Features)</h4>
                <ul className="grid grid-cols-1 gap-3 pl-4 font-bold text-zinc-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#af0000]" />
                    เปิด-ปิดเร็วเพียง 90° (Quarter Turn)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#af0000]" />
                    ซีลแน่น Zero Leakage (ไม่รั่วซึม)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#af0000]" />
                    รองรับแรงดันสูง High Pressure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#af0000]" />
                    โครงสร้างแข็งแรง อายุการใช้งานยาว
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#af0000]" />
                    Maintenance ต่ำ ดูแลง่าย
                  </li>
                </ul>
              </div>

              {/* Material Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-black border-l-4 border-blue-600 pl-4">โครงสร้างวัสดุ (Material)</h4>
                <ul className="space-y-2 pl-4 text-lg font-medium text-zinc-700">
                  <li>• <span className="font-bold">Body:</span> Carbon Steel / Stainless Steel (SS316)</li>
                  <li>• <span className="font-bold">Ball:</span> Chrome Plated / Stainless</li>
                  <li>• <span className="font-bold">Seat:</span> PTFE (Teflon) ทนสารเคมีและความร้อน</li>
                  <li>• <span className="font-bold">แรงดัน:</span> PN250 – PN800 (ประมาณ 3,600 – 11,600 PSI)</li>
                  <li>• <span className="font-bold">อุณหภูมิ:</span> -20°C ถึง 180°C (ขึ้นกับวัสดุ)</li>
                  <li>• <span className="font-bold">ขนาด:</span> 1/4" - 2" (หรือมากกว่าในบางรุ่น)</li>
                  <li>• <span className="font-bold">ประเภท:</span> 2-WAY / 3-WAY</li>
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
            <ProductTags tags={tags} categoryHref="/products/hydraulic-ball-valve" />
          </div>

        </div>
      </div>
    </section>
  );
}
