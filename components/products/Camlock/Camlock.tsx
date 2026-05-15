'use client';

import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "CAMLOCK", "KAMLOK", "ข้อต่อแคมล็อค", "STAINLESS CAMLOCK", "ALUMINIUM CAMLOCK"
];

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Camlock() {
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
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                  รายละเอียดสินค้า
                </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/camlock-coupling.png"
                    alt="CAMLOCK COUPLING"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center">
                  CAMLOCK COUPLING
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <div className="relative inline-flex flex-col items-center lg:items-start self-center lg:self-start">
              <h1 className="text-4xl font-black text-zinc-900 uppercase">CAMLOCK COUPLING</h1>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </div>

            <div className="mt-8 space-y-6 text-zinc-800">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#af0000] text-center lg:text-left">ข้อต่อแคมล็อค (Camlock Coupling)</h3>
                <p className="text-lg font-medium leading-relaxed text-center lg:text-left">
                  หรือที่เรียกว่า "ข้อต่อเร็วแบบคันโยก" เป็นระบบข้อต่อที่ออกแบบมาเพื่อการเชื่อมต่อที่รวดเร็วและปลอดภัย 
                  ไม่ต้องใช้เครื่องมือพิเศษ นิยมใช้ในอุตสาหกรรมการลำเลียงของไหลทุกประเภท
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black border-l-4 border-[#af0000] pl-4">คุณสมบัติเด่น</h4>
                <ul className="space-y-3 pl-4 font-bold text-zinc-700">
                  <li>• ติดตั้งและถอดประกอบได้รวดเร็วเพียงปลายนิ้ว</li>
                  <li>• ระบบล็อกหนาแน่น ป้องกันการรั่วซึมได้ดีเยี่ยม</li>
                  <li>• มีให้เลือกหลายประเภท (Type A, B, C, D, E, F, DC, DP)</li>
                  <li>• ทนทานต่อการใช้งานหนักและสารเคมีหลากหลายชนิด</li>
                </ul>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <FacebookIcon size={24} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                 <div className="flex flex-col items-center justify-center scale-75">
                    <span className="text-[10px] font-black leading-none">LINE</span>
                 </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Tag size={20} className="text-[#af0000]" />
                <span className="text-lg font-black text-zinc-800">แท็ก:</span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg bg-zinc-200 px-4 py-2 text-sm font-bold text-zinc-700 shadow-inner ring-1 ring-black/5"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
