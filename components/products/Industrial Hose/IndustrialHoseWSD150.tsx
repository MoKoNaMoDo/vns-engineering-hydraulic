'use client';

import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "SUNFLEX WSD150", "WATER SUCTION", "ท่อดูดน้ำ",
  "ท่อส่งน้ำเสีย", "ท่อดูดโคลน", "สายอุตสาหกรรม",
  "HEAVY DUTY WATER HOSE"
];

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function IndustrialHoseWSD150() {
  return (
    <section className="bg-white py-12 border-t border-zinc-100">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                  รายละเอียดสินค้า
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/industrial-hose-wsd150.png"
                    alt="INDUSTRIAL HOSE WSD150"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center">
                  สายยางอุตสาหกรรม
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-start text-4xl font-black text-zinc-900">
              <span>INDUSTRIAL HOSE</span>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-black text-[#af0000]">SUNFLEX WSD150</h2>
              <h3 className="text-xl font-bold leading-relaxed text-zinc-800">
                สายดูดและจ่ายน้ำแรงดัน 150 PSI
              </h3>
              <p className="text-xl font-medium text-zinc-600 leading-relaxed">
                เหมาะสำหรับงานน้ำเสีย, น้ำโสโครก, โคลน และของเหลวทั่วไปที่มีค่า PH 5-8
                โครงสร้างแข็งแรงเสริมด้วยเส้นใยสังเคราะห์และลวดเสริมแรง ทนต่อการขัดถูและสภาพอากาศได้ดีเยี่ยม
              </p>
              <div className="rounded-2xl bg-zinc-50 p-6 space-y-3">
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">อุณหภูมิใช้งาน: -40°C ถึง +85°C</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">ขนาด: 1-1/4" ถึง 12"</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#af0000] font-black">•</span>
                  <span className="font-bold text-zinc-800">ทนแรงดูดสุญญากาศและแรงดัน 150 PSI</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg">
                <FacebookIcon size={24} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg">
                <span className="text-[10px] font-black leading-none scale-75">LINE</span>
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Tag size={20} className="text-[#af0000]" />
                <span className="text-lg font-black text-zinc-800">แท็ก:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/products/industrial-hose"
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
