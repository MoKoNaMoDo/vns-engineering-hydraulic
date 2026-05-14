import Image from "next/image";
import Link from "next/link";

const productLinks = [
  "Hydraulic Hose",
  "Stainless Steel Flexible Hose",
  "PTFE Hose / Teflon Hose",
  "สายR7 Thermoplastic Hose",
  "สายสตีม Steam Hose",
  "สายอุตสาหกรรม Industrial Hose",
  "สาย TOYOX",
  "Quick Coupling",
  "Tube Fittings/Instrument Fittings",
];

export default function Home() {
  return (
    <div className="w-full bg-[#f8f3ee] text-[#1d1715]">

      <section className="bg-[#f7f3ef] px-5 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
          <div className="overflow-hidden border border-[#d6c8bf] shadow-[0_18px_40px_rgba(60,24,18,.14)]">
            <h2 className="bg-[#ae3030] px-5 py-4 text-2xl font-black text-white underline decoration-white underline-offset-4">
              หัวสายสแตนเลส 304
            </h2>
            <div className="divide-y divide-[#e7d6ca] text-xl md:text-2xl">
              {productLinks.map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? "/products" : "/products/stainless-304"}
                  className={`block px-5 py-4 underline underline-offset-4 transition hover:bg-[#b73333] hover:text-white ${index % 2 === 0 ? "bg-[#f4dfcf]" : "bg-[#d8d8d8]"}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <article className="bg-[#ffffff]/80 p-8 shadow-[0_18px_45px_rgba(60,24,18,.10)] ring-1 ring-[#d9c9bf]">
              <p className="text-sm font-black uppercase tracking-[.22em] text-[#9d0614]">V.N.S Engineering Hydraulic</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#1f1715]">ผลิตและจำหน่ายอุปกรณ์ไฮดรอลิคสำหรับงานอุตสาหกรรม</h2>
              <p className="mt-5 text-lg leading-8 text-[#4a403d]">
                โฟกัสงานหัวสายไฮดรอลิค สแตนเลส ทองเหลือง เหล็ก และข้อต่อหลายรูปแบบสำหรับระบบที่ต้องการความทนทานและความแม่นยำในการประกอบ
              </p>
            </article>
            <article className="relative min-h-[330px] overflow-hidden bg-[#5b0b08] shadow-[0_18px_45px_rgba(60,24,18,.18)]">
              <Image
                src="/products/sunflex-wsd150.png"
                alt="ตัวอย่างสินค้าไฮดรอลิค"
                fill
                className="object-cover opacity-88"
                sizes="(min-width: 768px) 420px, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(91,11,8,.82))]" />
              <Link href="/products" className="absolute bottom-6 left-6 bg-[#9d0614] px-6 py-3 text-lg font-black text-white underline underline-offset-4">
                ดูสินค้า
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
