'use client';

import Image from "next/image";

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
              {/* Detail Badge - Restored to Center with Hover Effect */}
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                <button className="rounded-xl bg-white px-8 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 text-black border-2 border-zinc-200 transition-all hover:-translate-y-1 hover:bg-[#af0000] hover:text-white cursor-pointer active:scale-95">
                  รายละเอียดสินค้า
                </button>
              </div>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop"
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
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#af0000]/10 text-[#af0000]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                  </svg>
                </div>
                <span className="text-lg font-black text-zinc-800">แท็กที่เกี่ยวข้อง:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded-lg bg-zinc-100 px-4 py-1.5 text-sm font-bold text-zinc-600 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-[#af0000] hover:text-white hover:shadow-md active:translate-y-0"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
