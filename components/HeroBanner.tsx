"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const strengths = [
  "สแตนเลส SUS 304,316",
  "ทองเหลือง BRASS",
  "เหล็กเพลาขาว SS400",
  "หัวสายไฮดรอลิคหลากหลายรูปแบบ",
];

export default function HeroBanner() {
  const pathname = usePathname();

  const renderAnimatedLetters = (text: string, baseDelay: number) => {
    return text.split("").map((char, index) => (
      <span
        key={`${char}-${index}`}
        className="vns-letter"
        style={{ animationDelay: `${baseDelay + index * 20}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section key={pathname} className="relative isolate min-h-[245px] overflow-hidden bg-[#9d0614] md:min-h-[720px]">
      <style jsx global>{`
        @keyframes customSlideLeft {
          from { transform: translateX(-150px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes customSlideUp {
          from { transform: translateY(200px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes customFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .vns-slide-left {
          animation: customSlideLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .vns-slide-up {
          animation: customSlideUp 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .vns-fade-in {
          animation: customFadeIn 1.5s ease-out forwards;
        }
        @keyframes customLetterIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .vns-letter {
          display: inline-block;
          opacity: 0;
          animation: customLetterIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <div className="absolute inset-0">
        {/* Main Background Image (Factory) - Emphasized with Slow Slide Up */}
        <div className="vns-slide-up absolute inset-0">
          <Image
            src="/products/products/S__6217772.jpg"
            alt="โรงงานอุตสาหกรรมสำหรับระบบไฮดรอลิค"
            fill
            priority
            className="object-cover object-center brightness-100"
            sizes="100vw"
          />
          {/* Neutral overlay for text contrast instead of yellow tint */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Overlapping Secondary Image (Hoses) - Reduced Width for Emphasis on Primary */}
        <div
          className="vns-slide-up absolute top-0 right-0 hidden h-full w-[35vw] md:block"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 60%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 60%)',
            animationDelay: '200ms'
          }}
        >
          <Image
            src="/products/products/S__6217773.jpg"
            alt="สายไฮดรอลิคและข้อต่อ"
            fill
            priority
            className="object-cover object-center contrast-105 saturate-110 brightness-105"
            sizes="35vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#2a0506]/10 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[245px] max-w-7xl items-center px-5 pb-7 pt-11 sm:px-8 md:min-h-[720px] md:pb-20 md:pt-24 lg:px-10">
        <div className="max-w-[850px] md:ml-16">
          {/* Main Title - Character by Character (Starts Last) */}
          <h1 className="text-[25px] font-black leading-[1.2] tracking-tight text-[#9d0614] drop-shadow-[1px_1px_0_rgba(255,245,236,.45)] sm:text-[60px] md:text-[68px] lg:text-[70px]">
            {renderAnimatedLetters("V.N.S ENGINEERING", 1200)}
            <br />
            {renderAnimatedLetters("HYDRAULIC CO.,LTD", 1600)}
          </h1>

          {/* Strengths List - Even Faster */}
          <div className="vns-slide-up opacity-0 mt-4 space-y-0.5 text-[16px] font-black leading-[1.28] text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,.55)] sm:mt-8 sm:space-y-2 sm:text-[35px] md:text-[36px]" style={{ animationDelay: '600ms' }}>
            <p>ผู้ผลิตหัวสายไฮดรอลิค</p>
            {strengths.map((item, index) => (
              <p
                key={item}
                className="vns-slide-up opacity-0"
                style={{ animationDelay: `${800 + (index * 80)}ms` }}
              >
                -{item}
              </p>
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
  );
}
