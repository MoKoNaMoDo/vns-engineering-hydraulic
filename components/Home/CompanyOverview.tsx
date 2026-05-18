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
  { name: "Fitting and adapter", image: "/products/Overview/ChatGPT Image May 10, 2026, 02_48_05 PM.png", angle: -90, href: "/services/fitting-and-adapter" },
  { name: "Hydraulic Hose", image: "/products/product/hydraulic-hose.png", angle: -30, href: "/services/hydraulic-hose" },
  { name: "Steam Hose", image: "/products/products/43024.jpg", angle: 30, href: "/services/steam-hose" },
  { name: "PTFE Hose/ Teflon Hose", image: "/products/products/PTFE.-removebg-preview.png", angle: 90, href: "/services/ptfe-teflon-hose" },
  { name: "Metal Hose", image: "/products/Overview/Flexible Hose.png", angle: 150, href: "/services/metal-hose" },
  { name: "Industrial Hose", image: "/products/Overview/ChatGPT_Image_May_10__2026__02_21_51_PM-removebg-preview.png", angle: 210, href: "/services/industrial-hose" },
];

export default function CompanyOverview() {
  const [radius, setRadius] = useState(210);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 110 : 210);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderAnimatedLetters = (text: string, delayOffset: number = 0) => {
    return text.split("").map((char, index) => (
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
        
        .path-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }
        .group:hover .path-draw {
          animation: drawLine 0.6s ease-out forwards;
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

          {/* แผนผังไดอะแกรมวงกลม */}
          <div className="flex items-center justify-center py-10">
            <div className="relative h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px]">

              <div
                className="animate-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-dashed border-[#af0000]/20"
                style={{
                  animationDelay: "1.8s",
                  width: radius * 2,
                  height: radius * 2
                }}
              />

              <div className="animate-diagram-item absolute left-1/2 top-1/2 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-[#af0000] text-center shadow-[0_0_30px_rgba(175,0,0,0.4)] border-4 border-white md:h-36 md:w-36" style={{ animationDelay: "1.5s", transform: "translate(-50%, -50%)" }}>
                <span className="text-2xl font-black text-white md:text-3xl tracking-wide">Service</span>
              </div>

              {isMounted && diagramItems.map((item, idx) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                const isLeftSide = item.angle >= 90 && item.angle < 270;

                return (
                  <Link
                    href={item.href}
                    key={item.name}
                    className="animate-diagram-item absolute z-20 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${2.0 + (idx * 0.15)}s`,
                    }}
                  >
                    <div className="relative flex h-28 w-28 md:h-40 md:w-40 flex-col items-center justify-center rounded-full border-[2px] border-dashed border-[#af0000]/40 bg-white p-3 shadow-lg transition-all duration-300 group-hover:border-[#af0000]">

                      {/* ไอคอนลูกศรชี้เข้าหาชื่อข้อความตรงคอมโพเนนต์วงกลมวงนอก */}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 opacity-0 -translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[#af0000] mb-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                      </svg> */}

                      <span className="relative z-10 text-center text-[11px] font-black leading-tight text-black underline decoration-[1.5px] underline-offset-2 decoration-[#af0000] transition-colors duration-300 md:text-[14px]">
                        {item.name}
                      </span>

                      <div className="absolute inset-[-15%] z-0 h-[130%] w-[130%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#af0000]">
                          {isLeftSide ? (
                            <g>
                              <path
                                d="M 50 10 A 40 40 0 0 1 50 90 Q 35 90 20 80"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                className="path-draw"
                              />
                              <polyline
                                points="30,73 20,80 28,88"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="path-draw"
                              />
                            </g>
                          ) : (
                            <g>
                              <path
                                d="M 50 10 A 40 40 0 0 0 50 90 Q 65 90 80 80"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                className="path-draw"
                              />
                              <polyline
                                points="70,73 80,80 72,88"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="path-draw"
                              />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`absolute z-30 h-14 w-14 overflow-hidden rounded-full border-[2.5px] border-white bg-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-[#af0000] md:h-20 md:w-20 ${isLeftSide ? "-bottom-3 -left-3 md:-bottom-4 md:-left-4" : "-bottom-3 -right-3 md:-bottom-4 md:-right-4"
                        }`}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 56px, 80px"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}