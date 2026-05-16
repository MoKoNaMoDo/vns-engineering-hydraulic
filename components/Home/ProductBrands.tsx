'use client';
import Image from 'next/image';

const brands = [
  { name: "TOYOX", logo: "/products/logo/Toyox.png" },
  { name: "SUNFLEX", logo: "/products/logo/SUNFLEX.png" }, // ยังไม่มีไฟล์โลโก้ Sunflex ในโฟลเดอร์
  { name: "PLATINUM", logo: "/products/logo/PLATINUM.png" },
  { name: "BRIDGESTONE", logo: "/products/logo/Bridgestone.png" },
  { name: "YOKOHAMA", logo: "/products/logo/YOKOHOMA.png" },
];

export default function ProductBrands() {

  // ฟังก์ชันแยกตัวอักษรให้ค่อยๆ ลอยเข้ามาทีละตัว
  const renderAnimatedLetters = (text, delayOffset = 0, speed = 0.05) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block opacity-0"
        style={{ animationDelay: `${delayOffset + index * speed}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="bg-white py-12 overflow-hidden font-sans">

      {/* 🔴 CSS Animations */}
      <style>{`
        /* แอนิเมชันสำหรับกล่องแบรนด์ลอยจากล่างขึ้นบน */
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* แอนิเมชันสำหรับตัวอักษรสไลด์เข้ามา */
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        /* แอนิเมชันแถบสีแดงยืดออก */
        @keyframes expandWidth {
          from { opacity: 0; transform: scaleX(0); transform-origin: left; }
          to { opacity: 1; transform: scaleX(1); transform-origin: left; }
        }
        
        .animate-letter {
          animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-card {
          opacity: 0;
          animation: floatUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-bar {
          opacity: 0;
          animation: expandWidth 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4">
        {/* ใช้ justify-between เพื่อให้ Title อยู่ซ้าย และ Logos ไปกองทางขวา (ในจอใหญ่) */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-8 lg:gap-12">

          {/* Left Section: แถบสีแดง + ตัวหนังสือ */}
          <div className="flex w-full flex-col items-center gap-6 md:w-auto md:flex-row">
            {/* Decorative Bar - ใส่แอนิเมชันยืดตัว */}
            <div className="animate-bar h-12 w-[120px] bg-gradient-to-r from-white via-[#ff0000] to-[#af0000] md:h-20 md:w-[150px] lg:w-[200px]" />

            {/* Label - เรียกฟังก์ชันตัวหนังสือมาทีละตัว (เริ่มที่ 0.3s) */}
            <h2 className="shrink-0 text-xl font-bold uppercase tracking-widest text-black md:text-2xl">
              {renderAnimatedLetters("Product Brand", 0.3)}
            </h2>
          </div>

          {/* Right Section: Brands Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-start">
            {brands.map((brand, index) => {
              // คำนวณ Delay ให้โลโก้ค่อยๆ ลอยมาทีละกล่อง (เริ่มหลังจากตัวหนังสือมาครบ)
              const cardDelay = 0.8 + index * 0.15;

              return (
                <div
                  key={brand.name}
                  className="animate-card flex h-20 w-fit shrink-0 items-center justify-center border-[2px] border-[#af0000] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl md:h-24 lg:h-28 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-full w-auto object-contain transition-transform duration-300"
                    />
                  ) : (
                    /* Image Placeholder */
                    <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-center text-[10px] font-bold text-zinc-400 transition-colors hover:bg-zinc-100">
                      {brand.name} LOGO
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}