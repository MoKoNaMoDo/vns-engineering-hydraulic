'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const diagramItems = [
  { nameKey: "Hydraulic Hose", image: "/products/product/hydraulic-hose.png", x: 0, y: -176, href: "/services/hydraulic-hose" },
  { nameKey: "Fitting and adapter", image: "/products/products/ChatGPT Image May 10, 2026, 02_48_05 PM.png", x: 152, y: -88, href: "/services/fitting-and-adapter" },
  { nameKey: "Steam Hose", image: "/products/products/43024.png", x: 152, y: 88, href: "/services/steam-hose" },
  { nameKey: "PTFE Hose/ Teflon Hose", image: "/products/products/PTFE.-removebg-preview.png", x: 0, y: 176, href: "/services/ptfe-teflon-hose" },
  { nameKey: "Metal Hose", image: "/products/Overview/Flexible Hose.png", x: -152, y: 88, href: "/services/metal-hose" },
  { nameKey: "Industrial Hose", image: "/products/Overview/ChatGPT_Image_May_10__2026__02_21_51_PM-removebg-preview.png", x: -152, y: -88, href: "/services/industrial-hose" },
];

export default function CompanyOverview() {
  const t = useTranslations("CompanyOverview");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const services = [t("service1"), t("service2"), t("service3"), t("service4"), t("service5"), t("service6")];
  const industries = [t("industry1"), t("industry2"), t("industry3"), t("industry4"), t("industry5")];

  const renderAnimatedLetters = (text: string, delayOffset: number = 0) => {
    const characters =
      typeof Intl !== "undefined" && Intl.Segmenter
        ? Array.from(new Intl.Segmenter("th", { granularity: "grapheme" }).segment(text)).map((s) => s.segment)
        : text.split("");
    return characters.map((char, index) => (
      <span key={index} className="animate-letter inline-block opacity-0" style={{ animationDelay: `${delayOffset + index * 0.02}s` }}>
        {char === " " ? " " : char}
      </span>
    ));
  };

  return (
    <section className="bg-[#dcdcdc] py-16 text-black overflow-hidden font-sans">
      <style>{`
        @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          70% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes arrowCurveDraw { from { stroke-dashoffset: 50; opacity: 0; } to { stroke-dashoffset: 0; opacity: 1; } }
        .animate-letter { animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-item { opacity: 0; animation: fadeInUp 0.7s ease-out forwards; }
        .animate-diagram-item { opacity: 0; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-header-arrow { animation: arrowCurveDraw 0.6s ease-out 0.8s forwards; opacity: 0; stroke-dasharray: 50; }
        @keyframes goldPulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.65; transform: translate(-50%, -50%) scale(1.2); }
        }
        .animate-gold-pulse { animation: goldPulse 3s ease-in-out infinite; }
        .clip-hex { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="mb-14 flex flex-col items-start max-w-[1050px] mx-auto w-full">
          <h2 className="w-full text-left text-[26px] font-black uppercase tracking-tight sm:text-[34px] md:text-[42px] leading-none">
            {renderAnimatedLetters("V.N.S ENGINEERING HYDRAULIC CO.,LTD", 0)}
          </h2>
          <div className="mt-6 relative w-full pl-10 sm:pl-12 md:pl-16 text-left animate-item" style={{ animationDelay: "0.6s" }}>
            <div className="absolute left-2 top-[-10px] md:left-4 md:top-[-12px] w-5 h-7 sm:w-6 sm:h-8 md:w-7 md:h-9 border-l-[3px] border-b-[3px] border-[#af0000] rounded-bl-xl after:content-[''] after:absolute after:bottom-[-6px] after:right-[-6px] after:w-0 after:h-0 after:border-t-[5px] after:border-t-transparent after:border-b-[5px] after:border-b-transparent after:border-l-[8px] after:border-l-[#af0000]" />
            <p className="text-[14px] font-bold text-[#4a4a4a] sm:text-[16px] md:text-[19px] leading-relaxed tracking-wide">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="animate-item relative overflow-hidden rounded-xl bg-white/40 p-8 shadow-inner md:p-12" style={{ animationDelay: "1.2s" }}>
            <div className="absolute inset-0 z-0 opacity-20">
              <Image src="/43740.jpg" alt="Background" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">{t("servicesTitle")}</h3>
                <ul className="space-y-2 text-[18px] font-bold leading-tight">
                  {services.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 animate-item" style={{ animationDelay: `${1.4 + idx * 0.1}s` }}>
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[26px] font-black text-[#af0000]">{t("industriesTitle")}</h3>
                <ul className="space-y-2 text-[18px] font-bold leading-tight">
                  {industries.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 animate-item" style={{ animationDelay: `${2.0 + idx * 0.1}s` }}>
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile diagram */}
          <div className="block md:hidden py-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-4 justify-items-center">
              {diagramItems.map((item, idx) => (
                <Link key={item.nameKey} href={item.href} className="animate-item relative w-[150px] h-[130px] bg-gradient-to-br from-[#f2f2f2] via-[#e5e5e5] to-[#d8d8d8] hover:from-[#d84a4a] hover:via-[#b40000] hover:to-[#7a0000] clip-hex shadow-[0_10px_24px_rgba(0,0,0,0.08),_inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 group p-[2px]" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                  <div className="absolute inset-[2px] bg-gradient-to-br from-[#eeeeee] via-[#e5e5e5] to-[#dddddd] clip-hex h-[calc(100%-4px)] w-[calc(100%-4px)]">
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-10" />
                    <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#e9e9e9] via-[#dedede] to-[#d3d3d3] z-0 shadow-[inset_8px_10px_18px_rgba(255,255,255,0.34),_inset_-9px_-11px_18px_rgba(0,0,0,0.045),_0_6px_14px_rgba(0,0,0,0.045)] border border-[#e2e2e2]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-3">
                      <span className="text-center text-[10px] font-black leading-tight text-zinc-900 max-w-[90px] mb-1">{item.nameKey}</span>
                      <div className="relative w-14 h-8">
                        <Image src={item.image} alt={item.nameKey} fill className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]" sizes="60px" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop diagram */}
          <div className="hidden md:flex items-center justify-center py-10">
            <div className="relative h-[500px] w-[500px] md:h-[600px] md:w-[600px] scale-90 lg:scale-100 transition-transform duration-300">
              <div className="animate-gold-pulse absolute left-1/2 top-1/2 w-[320px] h-[320px] bg-gradient-to-r from-[#ffd500] via-[#f59e0b] to-[#f97316] rounded-full blur-3xl z-10" style={{ pointerEvents: "none", transform: "translate(-50%, -50%)" }} />
              <div className="animate-diagram-item absolute left-1/2 top-1/2 z-30 w-[150px] h-[130px] md:w-[190px] md:h-[165px] transition-all duration-500 ease-out" style={{ animationDelay: "1.5s", transform: "translate(-50%, -50%)" }}>
                <div className="relative w-full h-full bg-gradient-to-br from-[#ffd700] via-[#f59e0b] to-[#78350f] clip-hex p-[3px] shadow-[0_20px_70px_rgba(234,179,8,0.65),_0_0_50px_rgba(251,191,36,0.4),_0_5px_0_rgba(120,53,15,0.5)]">
                  <div className="absolute inset-[3px] bg-gradient-to-br from-[#fef3c7] via-[#fbbf24] to-[#b45309] clip-hex flex flex-col items-center justify-center h-[calc(100%-6px)] w-[calc(100%-6px)]">
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-full bg-gradient-to-b from-[#fbbf24]/30 to-[#92400e]/30 shadow-[inset_0_3px_8px_rgba(0,0,0,0.2),_inset_0_-2px_4px_rgba(255,255,255,0.08)] border border-yellow-200/30 z-0" />
                    <span className="relative z-10 text-2xl font-black text-black md:text-3.5xl tracking-wide uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Service</span>
                  </div>
                </div>
              </div>
              {isMounted && diagramItems.map((item, idx) => (
                <div key={item.nameKey} className="animate-diagram-item absolute z-20" style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)`, transform: "translate(-50%, -50%)", animationDelay: `${1.7 + idx * 0.1}s` }}>
                  <Link href={item.href} className="block relative w-[150px] h-[130px] md:w-[190px] md:h-[165px] transition-all duration-500 ease-out group cursor-pointer">
                    <div className="relative w-full h-full bg-gradient-to-br from-[#f2f2f2] via-[#e5e5e5] to-[#d8d8d8] group-hover:from-[#d84a4a] group-hover:via-[#b40000] group-hover:to-[#7a0000] clip-hex p-[2px] transition-all duration-500 ease-out shadow-[0_14px_34px_rgba(0,0,0,0.09),_inset_0_1px_0_rgba(255,255,255,0.7)] group-hover:shadow-[0_16px_38px_rgba(175,0,0,0.18),_inset_0_1px_0_rgba(255,255,255,0.45)]">
                      <div className="absolute inset-[2px] bg-gradient-to-br from-[#eeeeee] via-[#e5e5e5] to-[#dddddd] clip-hex h-[calc(100%-4px)] w-[calc(100%-4px)] transition-all duration-500 ease-out">
                        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />
                        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full bg-gradient-to-br from-[#e9e9e9] via-[#dedede] to-[#d3d3d3] z-0 transition-all duration-500 shadow-[inset_10px_12px_24px_rgba(255,255,255,0.34),_inset_-11px_-13px_24px_rgba(0,0,0,0.045),_0_7px_16px_rgba(0,0,0,0.045)] border border-[#e2e2e2]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                          <span className="text-center text-[10px] font-black leading-tight text-zinc-900 transition-colors duration-500 md:text-[13px] max-w-[95px] md:max-w-[125px] mb-1 md:mb-2">{item.nameKey}</span>
                          <div className="relative w-16 h-10 md:w-24 md:h-14 transition-all duration-500 ease-out">
                            <Image src={item.image} alt={item.nameKey} fill className="object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.15)]" sizes="100px" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
