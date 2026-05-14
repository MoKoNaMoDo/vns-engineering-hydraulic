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

const strengths = [
  "สแตนเลส SUS 304,316",
  "ทองเหลือง BRASS",
  "เหล็กเพลาขาว SS400",
  "หัวสายไฮดรอลิคหลากหลายรูปแบบ",
];

export default function Home() {
  return (
    <div className="w-full bg-[#f8f3ee] text-[#1d1715]">
      <section className="relative isolate min-h-[245px] overflow-hidden bg-[#dfc1ad] md:min-h-[720px]">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[1fr_26vw]">
          <div className="relative min-h-[245px] md:min-h-[720px]">
            <Image
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
              alt="โรงงานอุตสาหกรรมสำหรับระบบไฮดรอลิค"
              fill
              priority
              className="object-cover object-center opacity-75 sepia-[.25]"
              sizes="(min-width: 768px) 74vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(228,191,167,.86),rgba(238,218,199,.52)_48%,rgba(80,30,24,.20))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_38%,rgba(255,238,214,.46),transparent_34%)]" />
          </div>

          <div className="relative hidden min-h-[720px] border-l border-[#650f12]/30 md:block">
            <Image
              src="/products/sunflex-wsd150.png"
              alt="สายไฮดรอลิคและข้อต่อ"
              fill
              priority
              className="object-cover object-center contrast-110 saturate-125"
              sizes="26vw"
            />
            <div className="absolute inset-0 bg-[#2a0506]/10" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[245px] max-w-7xl items-center px-5 pb-7 pt-11 sm:px-8 md:min-h-[720px] md:pb-20 md:pt-24 lg:px-10">
          <div className="max-w-[780px] md:ml-16">
            <h1 className="text-[25px] font-black leading-[1.2] tracking-tight text-[#9d0614] drop-shadow-[1px_1px_0_rgba(255,245,236,.45)] sm:text-[60px] md:text-[68px] lg:text-[70px]">
              V.N.S ENGINEERING<br />
              HYDRAULIC CO.,LTD
            </h1>
            <div className="mt-4 space-y-0.5 text-[16px] font-black leading-[1.28] text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,.55)] sm:mt-8 sm:space-y-2 sm:text-[35px] md:text-[36px]">
              <p>ผู้ผลิตหัวสายไฮดรอลิค</p>
              {strengths.map((item) => (
                <p key={item}>-{item}</p>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/about"
          className="absolute bottom-0 right-[26vw] z-20 hidden bg-[#ff120d] px-16 py-7 text-2xl font-black text-white underline decoration-white underline-offset-4 shadow-2xl transition hover:bg-[#b20b13] md:block"
        >
          รายละเอียดบริษัท
        </Link>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-8 bg-[#5b0b08] md:h-0" />
      </section>

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
