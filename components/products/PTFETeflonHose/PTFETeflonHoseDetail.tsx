'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "PTFE",
  "PTFE HOSE",
  "สายเทปลอน",
  "TEFLON HOSE",
  "สายทนความร้อน",
  "CHEMICAL HOSE",
  "PLOY HOSE",
  "สาย R14",
  "สายทนเคมี",
  "HIG TEMPERATURE HOSE"
];

export default function PTFETeflonHoseDetail() {
  return (
    <section className="bg-white py-16 font-sans">
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
                    src="/products/products/42115.jpg"
                    alt="PTFE Teflon Hose R14"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <Link href="/products/ptfe-teflon-hose" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">สายเทฟล่อนเรียบ (PTFE Teflon)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Information and Tags */}
          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-4xl font-black text-zinc-900 self-center lg:self-start">
              <span className="text-center uppercase">PTFE HOSE / TEFLON HOSE</span>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-4 text-[19px] font-bold leading-relaxed text-[#1d1715]">
              <h2 className="text-2xl font-black mb-4">PTFE TEFLON HOSE <span className="text-[#af0000]">R14</span></h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                  ทนสารเคมีสูงมาก &rarr; กรด ด่าง SOLVENT แทบทั้งหมดใช้ได้
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                  ไม่ดูดซึม / ไม่ปนเปื้อน (NON-CONTAMINATION) &rarr; ใช้กับอาหาร/ยาได้
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                  ผิวในลื่นมาก (LOW FRICTION) &rarr; ลดการอุดตัน
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                  ทน UV / โอโซน / ไม่เสื่อมง่าย
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                  เป็นฉนวนไฟฟ้า (ELECTRICAL INSULATION)
                </li>
                <li className="flex items-start gap-3 text-blue-700">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  ต่ำสุด: -70°C ถึง -196°C (บางรุ่นพิเศษ)
                </li>
                <li className="flex items-start gap-3 text-orange-600">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                  ใช้งานปกติ: -65°C ถึง +260°C
                </li>
                <li className="pt-2 font-black text-[#af0000]">
                  จุดเด่นคือ "ทนทั้งร้อนจัด + เย็นจัด" ในเส้นเดียว
                </li>
              </ul>
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
            <ProductTags tags={tags} categoryHref="/products/ptfe-teflon-hose" />
          </div>

        </div>
      </div>
    </section>
  );
}
