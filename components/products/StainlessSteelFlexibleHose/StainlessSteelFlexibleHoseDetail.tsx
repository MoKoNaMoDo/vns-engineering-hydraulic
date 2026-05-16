'use client';

import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "FLEXIBLE HOSE",
  "ท่ออ่อนสแตนเลส",
  "สายเฟล็กซ์",
  "สายทนเคมี",
  "สายทนความร้อน",
  "SS304",
  "METAL HOSE",
  "STAINLESS HOSE",
  "STAINLESS STEEL FITTING",
  "SS316L",
  "SS321",
  "SS FLANGE",
  "HIGH TEMPERATURE HOSE",
  "เชื่อมสายสแตนเลส",
  "ประกอบสายสแตนเลส",
  "SUS304",
  "SUS316"
];

export default function StainlessSteelFlexibleHoseDetail() {
  return (
    <section className="bg-white py-12 font-sans border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left Column: Image with Badges */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge - Restored to Center */}
              <div className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap">
                <div className="rounded-xl bg-white px-8 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 text-black cursor-default transition-colors hover:bg-zinc-50">
                  รายละเอียดสินค้า
                </div>
              </div>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/products/Flexble-removebg-preview.png"
                    alt="Stainless Steel Flexible Hose with Flanges"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg">
                  ท่ออ่อน
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Options */}
          <div className="flex flex-col">
            <div className="relative mb-6 flex flex-col items-center lg:items-start">
              <h1 className="text-3xl font-black text-black">Stainless Steel Flexible Hose</h1>
              <div className="mt-1 h-[2px] w-full bg-[#af0000]" />
            </div>

            <div className="space-y-6 text-base text-black">
              <h2 className="text-2xl font-black text-center mb-4">เลือกหัว-ท้าย ความยาว</h2>

              {/* Flange Section */}
              <div className="space-y-1">
                <p className="font-black text-lg">หัว-ท้าย หน้าแปลน</p>
                <p><span className="font-black">มาตรฐาน :</span> JIS 5K, JIS 10K, JIS 20K, PN10, PN16, PN25, PN40, ANSI 150P, ANSI 150P, ANSI 300P</p>
                <p><span className="font-black">วัสดุ :</span> เหล็ก SS400, สแตนเลส 304, สแตนเลส 316, ชุบกัลวาไนซ์ HDG</p>
              </div>

              {/* Fittings Section */}
              <div className="space-y-1">
                <p className="font-black text-lg">หัว-ท้าย ข้อต่อ</p>
                <p><span className="font-black">ชนิด :</span> หัวแฟร์, หัวไฮดรอลิกค์, นิปเปิ้ล เกลียวนอก, ยูเนียน เกลียวใน, ต่อตรง เกลียวใน, ข้อต่อสวมเร็ว Camlock Quick Coupling Part A, B, C, D, DC, DP, E, F และอื่นๆ</p>
                <p><span className="font-black">วัสดุ :</span> เหล็ก SS400, สแตนเลส 304, สแตนเลส 316, สแตนเลส 316L, ชุบกัลวาไนซ์ HDG</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4 self-center lg:self-start">
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
                    href={tag === "SS304" || tag === "SUS304" || tag === "หัวสายสแตนเลส 304" ? "/products/stainless-304" : "/products/stainless-steel-flexible-hose"}
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
