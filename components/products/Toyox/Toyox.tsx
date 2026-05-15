'use client';

import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "TOYOX", "สายยางอุตสาหกรรม", "สายดูด ส่งอาหาร", "สายดูดความร้อน",
  "ท่อยางอเนกประสงค์", "ท่อดูดทนเคมี", "สายยางอเนกประสงค์",
  "สายพ่นสี", "สายยางซิลิโคนทนความร้อน", "สายลำเลียงเม็ดพลาสติก"
];

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Toyox() {
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

          {/* Left Column: Image and Badge */}
          <div className="flex flex-col items-center lg:items-start animate-slide-left">
            <div className="relative w-full max-w-[500px]">
              {/* Product Badge */}
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                <div className="rounded-xl bg-white px-8 py-3 text-2xl font-black shadow-[0_10px_25px_rgba(0,0,0,0.2)] ring-1 ring-black/5 transition-transform hover:scale-105 cursor-default text-zinc-900">
                  รายละเอียดสินค้า
                </div>
              </div>

              {/* Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/toyox-hoses.png"
                    alt="TOYOX Industrial Hoses"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* TOYOX Blue Label */}
              <div className="mt-6 flex justify-center">
                <div className="bg-[#3b6db4] px-12 py-4 text-2xl font-black text-white shadow-xl min-w-[240px] text-center transform hover:scale-105 transition-all">
                  TOYOX
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <div className="relative inline-flex flex-col items-center lg:items-start self-center lg:self-start">
              <h1 className="text-5xl font-black tracking-tighter text-zinc-900">TOYOX</h1>
              <div className="mt-2 h-1.5 w-32 bg-[#af0000]" />
            </div>

            <div className="mt-10 space-y-8">
              <div className="space-y-4 text-xl font-medium text-zinc-700 leading-relaxed text-center lg:text-left">
                <p>
                  ท่ออ่อนเสริมโครงสร้าง วัสดุหลัก PVC เสริมแรง
                  ลวดสปิง ทนอุณภูมิ -c5 ถึง 60c สายลม สายน้ำมัน สทน
                  สารเคมี สายลำเลียงเม็ดพลาสติก สายแก๊ส สายพ่นสี

                  สายยางงานอาหาร สายยางอุตสาหกรรม สาย
                  อเนกประสงค์ทนแรงดันที่ใช้ในงานอุตสาหกรรม

                  สายยาง ท่อยาง ทั้งสายดูดและสายส่ง ท่ออเนกประสงค์
                  สายยางทนก๊าซทนเคมี สายยางทนน้ำมัน

                  วัสดุ / พีวีซี (วัสดุเสริมความแข็งแรง / ด้ายโพลีเอสเตอร์
                  ถัก) ยังมีสายที่เหมาะสมกับใช้งาน อื่นๆอีกมาก
                </p>

              </div>

              {/* Social Link Icons */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                  <FacebookIcon size={28} />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[12px] font-black leading-none">LINE</span>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="pt-6">
                <div className="mb-4 flex items-center gap-3 justify-center lg:justify-start">
                  <Tag size={24} className="text-[#af0000]" />
                  <span className="text-xl font-black text-zinc-800">แท็ก:</span>
                  <div className="rounded-full bg-zinc-200 px-6 py-2 text-lg font-bold text-zinc-700 shadow-inner">
                    TOYOX
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {tags.slice(1).map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full bg-zinc-100 px-5 py-2 text-[15px] font-bold text-zinc-600 shadow-sm ring-1 ring-black/5 transition-all hover:bg-[#af0000] hover:text-white cursor-default"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
