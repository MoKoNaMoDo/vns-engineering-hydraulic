'use client'; // บังคับให้คอมโพเนนต์นี้ทำงานฝั่ง Client เพื่อให้ใช้ window ได้

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
  // 1. สร้าง State สำหรับเก็บค่า Radius และเช็คว่าโหลดฝั่ง Client หรือยัง
  const [radius, setRadius] = useState(220); // ค่าเริ่มต้นที่ 220 ตามธีมเดิม
  const [isMounted, setIsMounted] = useState(false);

  // 2. ใช้ useEffect เพื่อดึงค่า window หลังจาก Component เมานท์ลงเบราว์เซอร์แล้ว
  useEffect(() => {
    setIsMounted(true); // บอกว่าตอนนี้อยู่บน Client แล้ว

    const handleResize = () => {
      // ปรับขนาด Radius ตามหน้าจออย่างปลอดภัย
      setRadius(window.innerWidth < 768 ? 160 : 220);
    };

    handleResize(); // เซ็ตค่าครั้งแรก
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ฟังก์ชันทำ Animation ตัวอักษรค่อยๆ เลื่อนเข้ามาทีละตัว
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
    <section className="bg-[#dcdcdc] py-12 text-black overflow-hidden">

      {/* แทรก CSS Animations ไว้ในคอมโพเนนต์ */}
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
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .animate-letter { animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-item { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .animate-diagram-item { opacity: 0; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-black uppercase tracking-tight md:text-[42px]">
            {renderAnimatedLetters("V.N.S ENGINEERING HYDRAULIC CO.,LTD", 0)}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2 text-[14px] font-bold md:text-[18px] animate-item" style={{ animationDelay: "1s" }}>
            <span className="text-[#b10000]">
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

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">

          {/* Left Side: Text Lists with Background */}
          <div className="animate-item relative overflow-hidden rounded-xl bg-white/40 p-8 shadow-inner md:p-12" style={{ animationDelay: "1.2s" }}>
            {/* Faded Background Image Placeholder */}
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
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">
                  สินค้าและบริการหลัก
                </h3>
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
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">
                  กลุ่มอุตสาหกรรมที่ให้บริการ
                </h3>
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
            <div className="relative h-[450px] w-[450px] md:h-[600px] md:w-[600px]">

              {/* Center Circle */}
              <div className="animate-diagram-item absolute left-1/2 top-1/2 z-20 flex h-32 w-32 items-center justify-center rounded-full bg-[#af0000] text-center shadow-[0_0_30px_rgba(175,0,0,0.5)] md:h-40 md:w-40" style={{ animationDelay: "1.5s" }}>
                <span className="text-2xl font-black text-white md:text-3xl">Service</span>
              </div>

              {/* Connecting Lines / Dashed Circle */}
              <div className="animate-item absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-[#af0000]/30" style={{ animationDelay: "1.8s" }} />

              {/* Outer Circles - รอให้ Component Mount ฝั่ง Client ก่อนเพื่อป้องกัน Error และจัดวงกลมให้ตรงกับขนาดจอ */}
              {isMounted && diagramItems.map((item, idx) => {
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={item.name}
                    className="animate-diagram-item absolute z-10 flex flex-col items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${2.0 + (idx * 0.15)}s`,
                    }}
                  >
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-dashed border-[#ff0000] bg-white p-2 shadow-lg transition-transform hover:scale-110 md:h-36 md:w-36">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100">
                        {/* Real images would go here, using placeholder for now */}
                        <div className="flex h-full w-full items-center justify-center text-center text-[10px] font-bold text-zinc-400">
                          [IMAGE]
                        </div>
                      </div>

                      {/* Arrow to center */}
                      <div
                        className="absolute h-6 w-6 text-[#af0000]"
                        style={{
                          transform: `rotate(${item.angle + 180}deg) translateY(-20px)`,
                        }}
                      >
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                      </div>
                    </div>
                    <span className="mt-3 max-w-[120px] text-center text-[14px] font-black leading-tight text-black md:text-[18px]">
                      {item.name}
                    </span>
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