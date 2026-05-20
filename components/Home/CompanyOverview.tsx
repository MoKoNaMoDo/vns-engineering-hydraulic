'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
  { name: "Hydraulic Hose", image: "/products/product/hydraulic-hose.png", x: 0, y: -176, href: "/services/hydraulic-hose" },
  { name: "Fitting and adapter", image: "/products/Overview/ChatGPT Image May 10, 2026, 02_48_05 PM.png", x: 152, y: -88, href: "/services/fitting-and-adapter" },
  { name: "Steam Hose", image: "/products/products/43024.jpg", x: 152, y: 88, href: "/services/steam-hose" },
  { name: "PTFE Hose/ Teflon Hose", image: "/products/products/PTFE.-removebg-preview.png", x: 0, y: 176, href: "/services/ptfe-teflon-hose" },
  { name: "Metal Hose", image: "/products/Overview/Flexible Hose.png", x: -152, y: 88, href: "/services/metal-hose" },
  { name: "Industrial Hose", image: "/products/Overview/ChatGPT_Image_May_10__2026__02_21_51_PM-removebg-preview.png", x: -152, y: -88, href: "/services/industrial-hose" },
];

export default function CompanyOverview() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderAnimatedLetters = (text: string, delayOffset: number = 0) => {
    // ใช้ Intl.Segmenter ป้องกันสระภาษาไทยและวรรณยุกต์แยกออกจากพยัญชนะ
    const characters = typeof Intl !== "undefined" && Intl.Segmenter
      ? Array.from(new Intl.Segmenter("th", { granularity: "grapheme" }).segment(text)).map(s => s.segment)
      : text.split("");

    return characters.map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block opacity-0"
        style={{ animationDelay: `${delayOffset + index * 0.02}s` }}
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
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        /* อนิเมชันเส้นโค้งของลูกศรแดงในส่วนหัวข้อ */
        @keyframes arrowCurveDraw {
          from { stroke-dashoffset: 50; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        
        .animate-letter { animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-item { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .animate-diagram-item { opacity: 0; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-header-arrow { animation: arrowCurveDraw 0.6s ease-out 0.8s forwards; opacity: 0; stroke-dasharray: 50; }
        
        .clip-hex {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 relative z-10">

        {/* 🔴 ส่วนหัวข้อหลัก (Header Area) แก้ไขระบบโครงสร้างลูกศรให้ได้สัดส่วนสวยงามคงที่ */}
        <div className="mb-14 flex flex-col items-start max-w-[1050px] mx-auto w-full">
          {/* ชื่อบริษัทหลัก */}
          <h2 className="w-full text-left text-[26px] font-black uppercase tracking-tight sm:text-[34px] md:text-[42px] leading-none">
            {renderAnimatedLetters("V.N.S ENGINEERING HYDRAULIC CO.,LTD", 0)}
          </h2>

          {/* ส่วนประโยคคำอธิบายเยื้องขวา พร้อมกล่องลูกศรโครงสร้างคงที่ */}
          <div
            className="mt-6 relative w-full pl-10 sm:pl-12 md:pl-16 text-left animate-item"
            style={{ animationDelay: "0.6s" }}
          >
            {/* 🔴 ลูกศรแดงดีไซน์ใหม่ด้วย HTML/CSS Border: สัดส่วนสมบูรณ์แบบ ไม่บิดเบี้ยว */}
            <div
              className="absolute left-2 top-[-10px] md:left-4 md:top-[-12px] w-5 h-7 sm:w-6 sm:h-8 md:w-7 md:h-9 
                 border-l-[3px] border-b-[3px] border-[#af0000] rounded-bl-xl
                 after:content-[''] after:absolute after:bottom-[-6px] after:right-[-6px]
                 after:w-0 after:h-0 
                 after:border-t-[5px] after:border-t-transparent 
                 after:border-b-[5px] after:border-b-transparent 
                 after:border-l-[8px] after:border-l-[#af0000]"
            />

            {/* ข้อความบรรยายเยื้องขวา */}
            <p className="text-[14px] font-bold text-[#4a4a4a] sm:text-[16px] md:text-[19px] leading-relaxed tracking-wide">
              ผู้ผลิตหัวสายไฮดรอลิค, สแตนเลส SUS 304,316, ทองเหลือง BRAS,
              เหล็กเพลาขาว SS400, หัวสายไฮดรอลิคหลากหลายรูปแบบ
            </p>
          </div>
        </div>

        {/* ส่วน Grid แสดงเนื้อหาหลัก ด้านซ้ายบอร์ด/ด้านขวาวงกลม */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="animate-item relative overflow-hidden rounded-xl bg-white/40 p-8 shadow-inner md:p-12" style={{ animationDelay: "1.2s" }}>
            <div className="absolute inset-0 z-0 opacity-20">
              <Image
                src="/43740.jpg"
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

          {/* 📱 แผนผังบริการสำหรับอุปกรณ์มือถือ (< 768px) */}
          <div className="block md:hidden py-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4 justify-items-center">
              {diagramItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="animate-item relative w-[150px] h-[130px] bg-gradient-to-br from-white via-[#d1d5db] to-[#9ca3af] active:from-red-400 active:to-[#af0000] clip-hex shadow-md transition-all duration-300 active:scale-95 group p-[2px]"
                  style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}
                >
                  <div className="absolute inset-[2px] bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] clip-hex h-[calc(100%-4px)] w-[calc(100%-4px)]">
                    {/* Bevel highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />

                    {/* Circular Dome Plate with 3D tactile effect */}
                    <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-white z-0 shadow-[0_3px_8px_rgba(0,0,0,0.03),_inset_0_1.5px_3px_rgba(255,255,255,0.9)] border border-white/60" />

                    {/* Content Stack - perfectly centered inside the 3D circle to prevent diagonal clipping overflow */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-3">
                      <span className="text-center text-[10px] font-black leading-tight text-zinc-900 max-w-[90px] mb-1">
                        {item.name}
                      </span>
                      <div className="relative w-14 h-8">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
                          sizes="60px"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 💻 แผนผังไดอะแกรมรังผึ้ง สำหรับแท็บเล็ตและเดสก์ท็อป (>= 768px) */}
          <div className="hidden md:flex items-center justify-center py-10">
            <div className="relative h-[500px] w-[500px] md:h-[600px] md:w-[600px] scale-90 lg:scale-100 transition-transform duration-300">

              {/* 🌟 Golden Ambient Glow behind Center Hexagon */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-gradient-to-r from-[#ffd500] to-[#f59e0b] rounded-full blur-3xl opacity-20 animate-pulse z-10"
                style={{ pointerEvents: "none" }}
              />

              {/* Central Hexagon */}
              <div
                className="animate-diagram-item absolute left-1/2 top-1/2 z-30 w-[150px] h-[130px] md:w-[190px] md:h-[165px] transition-all duration-500 ease-out hover:scale-105"
                style={{
                  animationDelay: "1.5s",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {/* 3D Gold Hexagon with Bevel Border */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#fef08a] via-[#f59e0b] to-[#b45309] clip-hex p-[2px] shadow-[0_12px_35px_rgba(234,179,8,0.3)]">
                  <div className="absolute inset-[2px] bg-gradient-to-br from-[#ffd500] via-[#fbbf24] to-[#d97706] clip-hex flex flex-col items-center justify-center h-[calc(100%-4px)] w-[calc(100%-4px)]">

                    {/* Glossy top reflection highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />

                    {/* Circular Dome Plate behind Center Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-full bg-gradient-to-b from-[#d97706]/15 to-[#fbbf24]/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] border border-yellow-300/20 z-0" />

                    <span className="relative z-10 text-2xl font-black text-black md:text-3.5xl tracking-wide uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
                      Service
                    </span>
                  </div>
                </div>
              </div>

              {isMounted && diagramItems.map((item, idx) => {
                return (
                  <div
                    key={item.name}
                    className="animate-diagram-item absolute z-20"
                    style={{
                      left: `calc(50% + ${item.x}px)`,
                      top: `calc(50% + ${item.y}px)`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${1.7 + (idx * 0.1)}s`,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block relative w-[150px] h-[130px] md:w-[190px] md:h-[165px] transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-108 group cursor-pointer"
                    >
                      {/* Hexagon Wrapper with light gray 3D border that changes to VNS red on hover */}
                      <div className="relative w-full h-full bg-gradient-to-br from-white via-[#d1d5db] to-[#9ca3af] group-hover:from-red-400 group-hover:via-[#af0000] group-hover:to-[#7a0000] clip-hex p-[2px] transition-all duration-500 ease-out shadow-[0_8px_25px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_45px_rgba(175,0,0,0.2)]">

                        {/* Inner Card - Soft white-to-light-gray background */}
                        <div className="absolute inset-[2px] bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] clip-hex h-[calc(100%-4px)] w-[calc(100%-4px)] transition-all duration-500 ease-out">

                          {/* Subtle Inner 3D Highlight Line (like a glossy reflection edge) */}
                          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />

                          {/* 3D Circular Background Plate (Soft Pure White Dome Circle matching the mockup) with bevel highlight */}
                          <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full bg-white z-0 transition-transform duration-500 group-hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.03),_inset_0_2px_4px_rgba(255,255,255,0.9)] border border-white/60 group-hover:shadow-[0_8px_20px_rgba(175,0,0,0.08)]" />

                          {/* Content Stack - perfectly centered inside the 3D circle to prevent diagonal clipping overflow */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">

                            {/* Product Title */}
                            <span className="text-center text-[10px] font-black leading-tight text-zinc-900 transition-colors duration-500 md:text-[13px] max-w-[95px] md:max-w-[125px] group-hover:text-black mb-1 md:mb-2">
                              {item.name}
                            </span>

                            {/* Product Image - scales and lifts slightly on hover */}
                            <div className="relative w-16 h-10 md:w-24 md:h-14 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-0.5">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,0.04)] group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
                                sizes="100px"
                              />
                            </div>

                          </div>
                        </div>
                      </div>
                    </Link>
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