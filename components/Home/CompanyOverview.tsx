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
  { name: "Fitting and adapter", image: "/products/fittings.png", angle: -90, href: "#" },
  { name: "Hydraulic Hose", image: "/products/hydraulic-hose.png", angle: -30, href: "/products/hydraulic-hose" },
  { name: "Steam Hose", image: "/products/steam-hose.png", angle: 30, href: "#" },
  { name: "PTFE Hose/ Teflon Hose", image: "/products/ptfe-hose.png", angle: 90, href: "/products/ptfe-teflon-hose" },
  { name: "Metal Hose", image: "/products/metal-hose.png", angle: 150, href: "/products/stainless-steel-flexible-hose" },
  { name: "Industrial Hose", image: "/products/industrial-hose.png", angle: 210, href: "#" },
];

export default function CompanyOverview() {
  const [radius, setRadius] = useState(260);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 140 : 260);
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
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        
        .animate-letter { animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-item { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .animate-diagram-item { opacity: 0; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        
        .path-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
        }
        .group:hover .path-draw {
          animation: drawLine 0.6s ease-out forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
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

          <div className="flex items-center justify-center py-10">
            <div className="relative h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px]">

              <div className="animate-item absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-dashed border-[#af0000]/20" style={{ animationDelay: "1.8s" }} />

              <div className="animate-diagram-item absolute left-1/2 top-1/2 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-[#af0000] text-center shadow-[0_0_30px_rgba(175,0,0,0.4)] border-4 border-white md:h-36 md:w-36" style={{ animationDelay: "1.5s", transform: "translate(-50%, -50%)" }}>
                <span className="text-2xl font-black text-white md:text-3xl tracking-wide">Service</span>
              </div>

              {isMounted && diagramItems.map((item, idx) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                const isLeftSide = item.angle > 90 && item.angle < 270;

                return (
                  <div
                    key={item.name}
                    className="animate-diagram-item absolute z-20 flex flex-col items-center justify-center group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${2.0 + (idx * 0.15)}s`,
                    }}
                  >
                    <div className="relative flex h-28 w-28 md:h-40 md:w-40 items-center justify-center rounded-full border-[2px] border-dashed border-[#af0000]/40 bg-white p-3 shadow-lg transition-all duration-300 group-hover:border-[#af0000]">
                      <span className="relative z-10 text-center text-[11px] font-black leading-tight text-black underline decoration-[1.5px] underline-offset-2 decoration-black/60 transition-colors duration-300 group-hover:text-[#af0000] md:text-[14px]">
                        {item.name}
                      </span>

                      {/* =========================================
                          🟢 VERSION 1: ลูกศรวาดวนรอบขอบวงกลม (Active) 🟢
                          ========================================= */}
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

                      {/* =========================================
                          🔴 VERSION 2: ลูกศรสไลด์ลงมาจากตัวหนังสือ (Commented Out) 🔴
                          หากต้องการใช้งาน ให้ลบ Comment {/ * ... * /} ออก และปิด Version 1 
                          ========================================= */}
                      {/* 
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 -translate-y-4 scale-95 origin-top transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#af0000] drop-shadow-md">
                          {isLeftSide ? (
                            <g>
                              <path d="M 50 15 Q 90 50 25 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                              <polyline points="35,70 25,80 35,85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          ) : (
                            <g>
                              <path d="M 50 15 Q 10 50 75 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                              <polyline points="65,70 75,80 65,85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          )}
                        </svg>
                      </div> 
                      */}

                    </div>

                    <div
                      className={`absolute z-30 h-12 w-12 overflow-hidden rounded-full border-[2px] border-white bg-zinc-200 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:border-[#af0000] md:h-16 md:w-16 ${isLeftSide ? "-bottom-3 -left-3 md:-bottom-4 md:-left-4" : "-bottom-3 -right-3 md:-bottom-4 md:-right-4"
                        }`}
                    >
                      <div className="flex h-full w-full items-center justify-center text-[8px] font-bold text-zinc-500 md:text-[10px]">
                        [IMAGE]
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