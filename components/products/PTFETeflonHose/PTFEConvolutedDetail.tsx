'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

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
              <div className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap">
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 hover:bg-zinc-50 transition-colors cursor-default">
                  รายละเอียดสินค้า
                </div>
              </div>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/42117.jpg"
                    alt="PTFE Convoluted Teflon Hose"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <Link href="/products/ptfe-teflon-hose" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg text-center leading-tight transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">สายเทฟล่อนลอน (PTFE Convoluted)</Link>
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
            <ProductTags tags={tags} categoryHref="/products/ptfe-teflon-hose" />
          </div>

        </div>
      </div>
    </section>
  );
}
