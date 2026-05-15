'use client';

import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "CONVOLUTED HOSE",
  "เทปลอนตัวหนอน",
  "PTFE HOSE",
  "TEFLON HOSE",
  "สายเทปลอน",
  "PTFE",
  "สายทนเคมี",
  "ANTISTATIC"
];

export default function PTFEConvolutedDetail() {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Image and Badges */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge */}
              <button className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap transition-all hover:scale-110 active:scale-95">
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 hover:bg-zinc-50">
                  รายละเอียดสินค้า
                </div>
              </button>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1614934986218-4775b8719246?q=80&w=2070&auto=format&fit=crop"
                    alt="PTFE Convoluted Teflon Hose"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg text-center leading-tight">
                  PTFE<br/>CONVOLUTED
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information and Tags */}
          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-4xl font-black text-zinc-900 self-center lg:self-start">
              <span className="text-center uppercase text-[30px] lg:text-4xl">PTFE HOSE / TEFLON HOSE</span>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-4 text-[17px] font-bold leading-relaxed text-[#1d1715]">
              <h2 className="text-2xl font-black mb-4">PTFE CONVOLUTED TEFLON HOSE</h2>
              
              <p className="mb-4">
                <span className="text-[#af0000]">PTFE CONVOLUTED (สายเทปลอนลอน)</span> เป็นสายที่ใช้กันเยอะในงานอุตสาหกรรมระดับสูง เพราะ <span className="font-black text-black">"ยืดหยุ่น + ทนเคมี + ทนความร้อนสูง"</span> เดี๋ยวผมสรุปให้แบบใช้งานจริง
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-black border-b border-zinc-200 pb-2">คุณสมบัติหลัก (PTFE CONVOLUTED HOSE)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                    โครงสร้างเป็น ลอน (CORRUGATED) &rarr; โค้งงอได้ดีกว่าสาย PTFE แบบเรียบ
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                    ผิวในเป็น PTFE (TEFLON) &rarr; ไม่เกาะติด (NON-STICK)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                    ทนสารเคมีเกือบทุกชนิด (กรด, ด่าง, SOLVENT)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                    ไม่ทำปฏิกิริยากับของไหล &rarr; เหมาะกับ FOOD / PHARMA
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                    ทน UV / โอโซน / ไม่เสื่อมง่าย
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
                    มีแบบ ANTISTATIC ป้องกันไฟฟ้าสถิต
                  </li>
                </ul>

                <h3 className="text-lg font-black border-b border-zinc-200 pb-2 mt-6">อุณหภูมิ (TEMPERATURE)</h3>
                <p>โดยทั่วไป:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-orange-600">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    ประมาณ -54°C ถึง +260°C
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a href="#" className="transition-transform hover:scale-110">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-2xl text-white shadow-lg">f</div>
              </a>
              <a href="#" className="transition-transform hover:scale-110">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] p-2 shadow-lg">
                  <div className="text-[10px] font-black text-white">LINE</div>
                </div>
              </a>
            </div>

            {/* Tags Section */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Tag size={20} className="text-[#af0000]" />
                <span className="text-lg font-black text-zinc-800">แท็ก:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/products/ptfe-teflon-hose"
                    className="rounded-lg border border-zinc-200 bg-[#f4f4f4] px-4 py-2 text-[15px] font-bold text-[#455a64] transition-all hover:bg-[#af0000] hover:text-white hover:shadow-md active:scale-95"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
