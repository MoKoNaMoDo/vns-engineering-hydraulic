import Image from "next/image";

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
  return (
    <section className="bg-[#dcdcdc] py-12 text-black">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-black uppercase tracking-tight md:text-[42px]">
            V.N.S ENGINEERING HYDRAUIC CO.,LTD
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2 text-[14px] font-bold md:text-[18px]">
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
          <div className="relative overflow-hidden rounded-xl bg-white/40 p-8 shadow-inner md:p-12">
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
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-2">
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
                  {industries.map((i) => (
                    <li key={i} className="flex items-start gap-2">
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
              <div className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#af0000] text-center shadow-[0_0_30px_rgba(175,0,0,0.5)] md:h-40 md:w-40">
                <span className="text-2xl font-black text-white md:text-3xl">Service</span>
              </div>

              {/* Connecting Lines / Dashed Circle */}
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-[#af0000]/30" />

              {/* Outer Circles */}
              {diagramItems.map((item, idx) => {
                const radius = 220; // Radius of the diagram
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={item.name}
                    className="absolute z-10 flex flex-col items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[3px] border-dashed border-[#ff0000] bg-white p-2 shadow-lg transition-transform hover:scale-110 md:h-36 md:w-36">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100">
                        {/* Real images would go here, using placeholder for now */}
                        <div className="flex h-full w-full items-center justify-center text-center text-[10px] font-bold text-zinc-400">
                           [IMAGE]
                        </div>
                      </div>
                      
                      {/* Arrow to center (Simplified visual) */}
                      <div 
                        className="absolute h-6 w-6 text-[#af0000]"
                        style={{
                          transform: `rotate(${item.angle + 180}deg) translateY(-20px)`,
                        }}
                      >
                         <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
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
