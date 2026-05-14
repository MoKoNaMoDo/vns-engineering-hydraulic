'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
  "ผลิตหัวสาย (Hose Fittings) ทุกประเภท ทั้งสแตนเลส เหล็ก และทองเหลือง",
  "จำหน่ายและประกอบ สายไฮดรอลิค (Hydraulic Hose)",
  "จำหน่ายและประกอบ สายสแตนเลสถัก (Stainless Steel Flexible Hose)",
  "จำหน่ายและประกอบ สายเทฟลอน (PTFE Hose)",
  "บริการประกอบสายตามแบบ (Custom Assembly)",
  "ให้คำปรึกษาและออกแบบระบบสายอุตสาหกรรม",
];

const industries = [
  "อุตสาหกรรมเครื่องจักรกลหนัก",
  "อุตสาหกรรมอาหารและเครื่องดื่ม",
  "อุตสาหกรรมยาและเคมี",
  "ระบบไอน้ำ และงานพลังงาน",
  "อุตสาหกรรมทั่วไป",
];

const diagramItems = [
  { name: "Fitting and adapter", image: "/products/fittings.png", angle: -90 },
  { name: "Hydraulic Hose", image: "/products/hydraulic-hose.png", angle: -30 },
  { name: "Steam Hose", image: "/products/steam-hose.png", angle: 30 },
  { name: "PTFE Hose/ Teflon Hose", image: "/products/ptfe-hose.png", angle: 90 },
  { name: "Metal Hose", image: "/products/metal-hose.png", angle: 150 },
  { name: "Industrial Hose", image: "/products/industrial-hose.png", angle: 210 },
];

export default function CompanyOverview() {
  // รัศมีของ Diagram (ขยายให้กว้างขึ้นเพื่อรองรับวงกลมที่มี Text)
  const [radius, setRadius] = useState(260);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      // หน้าจอมือถือรัศมี 140px, หน้าจอ Desktop รัศมี 260px
      setRadius(window.innerWidth < 768 ? 140 : 260);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderAnimatedLetters = (text, delayOffset = 0) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block opacity-0"
        style={{ animationDelay: `${delayOffset + index * 0.03}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="bg-[#dcdcdc] py-16 text-black overflow-hidden font-sans">

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .animate-letter { animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-item { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .animate-diagram-item { opacity: 0; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <h2 className="text-[32px] font-black uppercase tracking-tight md:text-[42px]">
            {renderAnimatedLetters("V.N.S ENGINEERING HYDRAULIC CO.,LTD", 0)}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-[14px] font-bold md:text-[18px] animate-item" style={{ animationDelay: "1s" }}>
            <span className="text-[#af0000]">
              <svg className="h-6 w-6 rotate-[-45deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 7v4H5.83l3.58 3.59L8 16l-6-6 6-6 1.41 1.41L5.83 9H21V7z" />
              </svg>
            </span>
            <p className="max-w-[800px] leading-tight text-[#4a4a4a]">
              ผู้ผลิตหัวสายไฮดรอลิค, สแตนเลส SUS 304,316, ทองเหลือง BRAS,
              เหล็กเพลาขาว SS400, หัวสายไฮดรอลิคหลากหลายรูปแบบ
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">

          {/* Left Side: Text Lists with Background */}
          <div className="animate-item relative overflow-hidden rounded-xl bg-white/40 p-8 shadow-inner md:p-12" style={{ animationDelay: "1.2s" }}>
            <div className="absolute inset-0 z-0 opacity-20">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>

            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">สินค้าและบริการหลัก</h3>
                <ul className="space-y-2 text-[18px] font-bold leading-tight">
                  {services.map((s, idx) => (
                    <li key={s} className="flex items-start gap-2 animate-item" style={{ animationDelay: `${1.4 + (idx * 0.1)}s` }}>
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">กลุ่มอุตสาหกรรมที่ให้บริการ</h3>
                <ul className="space-y-2 text-[18px] font-bold leading-tight">
                  {industries.map((i, idx) => (
                    <li key={i} className="flex items-start gap-2 animate-item" style={{ animationDelay: `${2.0 + (idx * 0.1)}s` }}>
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Circular Service Diagram */}
          <div className="flex items-center justify-center py-10">
            {/* ขยาย Container ให้ใหญ่ขึ้นเพื่อรองรับวงกลม Text ที่มีขนาดใหญ่ */}
            <div className="relative h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px]">

              {/* Connecting Lines / Dashed Circle */}
              <div className="animate-item absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-dashed border-[#af0000]/20" style={{ animationDelay: "1.8s" }} />

              {/* Center Circle */}
              <div className="animate-diagram-item absolute left-1/2 top-1/2 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-[#af0000] text-center shadow-[0_0_30px_rgba(175,0,0,0.4)] md:h-36 md:w-36" style={{ animationDelay: "1.5s" }}>
                <span className="text-2xl font-black text-white md:text-3xl">Service</span>
              </div>

              {isMounted && diagramItems.map((item, idx) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                // เช็คว่าไอเทมนี้อยู่ซีกซ้าย หรือ ซีกขวา ของวงกลม
                const isLeftSide = item.angle > 90 && item.angle < 270;

                return (
                  <div
                    key={item.name}
                    className="animate-diagram-item absolute z-20 flex flex-col items-center justify-center group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${2.0 + (idx * 0.15)}s`,
                    }}
                  >
                    {/* 1. วงกลมหลัก (เส้นประสีแดง + ข้อความ) */}
                    <div className="relative flex h-28 w-28 md:h-40 md:w-40 items-center justify-center rounded-full border-[2px] border-dashed border-[#af0000] bg-white p-3 shadow-lg">
                      <span className="text-center text-[11px] font-black leading-tight text-black underline decoration-2 underline-offset-4 decoration-[#af0000]/60 md:text-[15px]">
                        {item.name}
                      </span>
                    </div>

                    {/* 2. ลูกศรชี้ (โค้งๆ ตามรูป) */}
                    <div
                      className={`absolute bottom-3 w-6 h-6 text-[#af0000] md:bottom-6 md:w-8 md:h-8 transition-transform group-hover:scale-110 ${isLeftSide ? "left-6 md:left-8" : "right-6 md:right-8"
                        }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {isLeftSide ? (
                          // ลูกศรโค้งชี้ซ้ายล่าง
                          <><path d="M18 5 Q 18 15 8 16" /><polyline points="12,12 6,16 12,20" /></>
                        ) : (
                          // ลูกศรโค้งชี้ขวาล่าง
                          <><path d="M6 5 Q 6 15 16 16" /><polyline points="12,12 18,16 12,20" /></>
                        )}
                      </svg>
                    </div>

                    {/* 3. วงกลมรูปภาพเล็กๆ ห้อยติดขอบ */}
                    <div
                      className={`absolute -bottom-2 h-14 w-14 overflow-hidden rounded-full border-2 border-[#af0000] bg-zinc-200 shadow-md transition-transform duration-300 group-hover:scale-110 md:-bottom-4 md:h-20 md:w-20 ${isLeftSide ? "-left-2 md:-left-4" : "-right-2 md:-right-4"
                        }`}
                    >
                      {/* ตรงนี้เอารูปจริงมาใส่ใน Next Image ทีหลังได้เลยครับ */}
                      <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-[8px] font-bold text-zinc-400 md:text-[10px]">
                        IMAGE
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}