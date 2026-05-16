import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";

const tags = [
  "หัวสายสแตนเลส304", "หัวสายสแตนเลส316",
  "SUS304", "SUS316",
  "JIC MALE", "NPT MALE",
  "FITTING", "BSPT MALE",
  "หัวพ่นสี", "หัวสายงานพิเศษ"
];

export default function ProductDetail() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
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
                    src="/products/products/Picture8.png"
                    alt="หัวสายสแตนเลส 304"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Category Badge Below Image */}
              <div className="mt-4 flex justify-center">
                <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg">
                  ข้อต่อไฮดรอลิค
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information and Tags */}
          <div className="flex flex-col">
            <h1 className="relative inline-flex flex-col items-center lg:items-center text-4xl font-black text-zinc-900 self-center lg:self-start">
              <span className="text-center">หัวสายสแตนเลส 304</span>
              <div className="mt-2 h-1.5 w-40 bg-[#af0000]" />
            </h1>

            <p className="mt-8 text-xl font-bold leading-relaxed text-[#1d1715]">
              ข้อต่อไฮดรอลิค เหล็ก สแตนเลส ทองเหลือง / 45' 90' องศา เราเป็นผู้ผลิตหัวสายไฮดรอลิคตาม รูปแบบต่างๆ หรือออกแบบใหม่ สเป็คพิเศษ ที่คุณลูกค้าต้องการใน อุตสาหกรรม ยินดีให้คำปรึกษาหากคุณลูกค้าต้องการ
            </p>

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
              <div className="mb-4 flex items-center gap-2">
                <Tag size={20} className="text-[#af0000]" />
                <span className="text-lg font-black text-zinc-800">แท็ก:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/products/stainless-304"
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
