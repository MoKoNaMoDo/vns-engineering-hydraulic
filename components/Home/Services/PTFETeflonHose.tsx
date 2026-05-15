'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  {
    title: "PTFE TEFLON HOSE R14",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    label: (
      <div className="flex items-center gap-1.5">
        <span className="text-[#dc2626] font-black">PTFE TEFLON</span>
        <span className="text-black font-black">HOSE R14</span>
      </div>
    ),
    href: "/products/ptfe-teflon-hose#r14"
  },
  {
    title: "PTFE CONVOLUTED TEFLON HOSE",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    label: (
      <div className="flex flex-col items-center">
        <span className="text-[#0055cc] font-black border-b-[2.5px] border-[#0055cc] leading-none pb-1 mb-1.5">PTFE CONVOLUTED</span>
        <span className="text-black font-black border-b-[2.5px] border-black leading-none pb-0.5">TEFLON HOSE</span>
      </div>
    ),
    href: "/products/ptfe-teflon-hose#convoluted"
  }
];

export default function PTFETeflonHose() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 font-sans overflow-hidden">

      {/* 🔴 CSS Animations */}
      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* ลูกศร 1 (ชี้ลงขวา) */
        @keyframes popInArrow1 {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) rotate(15deg); }
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.1) rotate(15deg); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(15deg); }
        }
        /* ลูกศร 2 (ชี้ขึ้นซ้าย) */
        @keyframes popInArrow2 {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) rotate(195deg); }
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.1) rotate(195deg); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(195deg); }
        }

        .animate-card-1 { opacity: 0; animation: floatUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards; }
        .animate-arrow-1 { opacity: 0; animation: popInArrow1 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards; }
        .animate-card-2 { opacity: 0; animation: floatUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s forwards; }
        .animate-arrow-2 { opacity: 0; animation: popInArrow2 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards; }
      `}</style>

      <div className="max-w-[1000px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight inline-block border-b-2 border-black pb-1">
            PTFE Hose/Teflon Hose
          </h2>
        </div>

        {/* 📦 Layout กล่องเยื้องแบบอิสระ */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-0 mt-8">

          {/* =========================================
              ITEM 1: กล่องซ้ายบน
              ========================================= */}
          <div className="w-full md:w-[48%] animate-card-1 relative z-20">
            <Link href={items[0].href} className="group block relative w-full max-w-[400px] mx-auto md:mr-auto md:ml-0">
              <div className="relative aspect-[4/3] w-full rounded-2xl border-[1.5px] border-[#dc2626] bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden">
                <Image
                  src={items[0].image}
                  alt={items[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 500px, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max z-30 transition-transform duration-300 group-hover:scale-105">
                <div className="bg-white rounded-[10px] py-2 px-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-gray-200">
                  <div className="text-[12px] md:text-[14px] whitespace-nowrap">
                    {items[0].label}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* =========================================
              ARROW 1: ลูกศรบน (ชี้ลงไปหารูปขวาล่าง)
              ========================================= */}
          {isMounted && (
            <div className="hidden md:flex animate-arrow-1 absolute top-[30%] left-[58%] z-10 w-20 h-24 md:w-24 md:h-28">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <path
                  d="M 20 20 Q 55 20 70 50 L 55 55 L 90 80 L 95 40 L 80 45 Q 65 5 15 5 Z"
                  fill="#dc2626"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* =========================================
              ARROW 2: ลูกศรล่าง (ชี้กลับขึ้นไปหารูปซ้ายบน)
              ========================================= */}
          {isMounted && (
            <div className="hidden md:flex animate-arrow-2 absolute top-[65%] left-[35%] z-10 w-20 h-24 md:w-24 md:h-28">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <path
                  d="M 20 20 Q 55 20 70 50 L 55 55 L 90 80 L 95 40 L 80 45 Q 65 5 15 5 Z"
                  fill="#dc2626"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* =========================================
              ITEM 2: กล่องขวาล่าง 
              ========================================= */}
          <div className="w-full md:w-[48%] md:mt-[300px] animate-card-2 relative z-20">
            <div className="relative w-full max-w-[400px] mx-auto md:ml-auto md:mr-0">
              <Link href={items[1].href} className="group block relative w-full">
                <div className="relative aspect-[4/3] w-full rounded-2xl border-[1.5px] border-[#dc2626] bg-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl overflow-hidden">
                  <Image
                    src={items[1].image}
                    alt={items[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 500px, 100vw"
                  />
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max z-30 transition-transform duration-300 group-hover:scale-105">
                  <div className="bg-white rounded-[10px] py-3 px-6 shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-gray-200">
                    <div className="text-[12px] md:text-[14px] whitespace-nowrap">
                      {items[1].label}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}