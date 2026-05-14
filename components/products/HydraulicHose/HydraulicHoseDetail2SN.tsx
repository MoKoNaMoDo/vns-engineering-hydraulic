'use client';

import Image from "next/image";

const specData = [
  { dn: 5, inch: "3/16", size: -3, id: 4.8, od: 13.4, opBar: 415, opPsi: 6000, test: 830, burst: 1650, bending: 90, weight: 0.310 },
  { dn: 6, inch: "1/4", size: -4, id: 6.4, od: 15.0, opBar: 400, opPsi: 5800, test: 800, burst: 1600, bending: 100, weight: 0.385 },
  { dn: 8, inch: "5/16", size: -5, id: 7.9, od: 16.6, opBar: 350, opPsi: 5075, test: 700, burst: 1400, bending: 115, weight: 0.450 },
  { dn: 10, inch: "3/8", size: -6, id: 9.5, od: 19.0, opBar: 330, opPsi: 4800, test: 660, burst: 1320, bending: 130, weight: 0.555 },
  { dn: 12, inch: "1/2", size: -8, id: 12.7, od: 22.2, opBar: 275, opPsi: 4000, test: 550, burst: 1100, bending: 180, weight: 0.660 },
  { dn: 16, inch: "5/8", size: -10, id: 15.9, od: 25.4, opBar: 250, opPsi: 3625, test: 500, burst: 1000, bending: 200, weight: 0.795 },
  { dn: 19, inch: "3/4", size: -12, id: 19.0, od: 29.3, opBar: 215, opPsi: 3100, test: 430, burst: 850, bending: 240, weight: 0.955 },
  { dn: 25, inch: "1", size: -16, id: 25.4, od: 38.1, opBar: 165, opPsi: 2400, test: 325, burst: 650, bending: 300, weight: 1.370 },
  { dn: 31, inch: "1 1/4", size: -20, id: 31.8, od: 48.3, opBar: 125, opPsi: 1800, test: 250, burst: 500, bending: 420, weight: 2.025 },
  { dn: 38, inch: "1 1/2", size: -24, id: 38.1, od: 54.6, opBar: 90, opPsi: 1300, test: 180, burst: 360, bending: 500, weight: 2.750 },
  { dn: 51, inch: "2", size: -32, id: 50.8, od: 67.3, opBar: 80, opPsi: 1160, test: 160, burst: 320, bending: 630, weight: 3.480 },
];

export default function HydraulicHoseDetail2SN() {
  return (
    <section className="bg-white py-12 text-black font-sans border-t border-zinc-100 mt-16">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Badge */}
        <div className="mb-8 inline-block rounded-full bg-zinc-100 px-6 py-2 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] border border-zinc-200">
          <span className="text-xl font-black text-zinc-800">รายละเอียดสินค้า</span>
        </div>

        {/* Top Content: Image and Description */}
        <div className="grid gap-10 lg:grid-cols-2 items-start mb-16">
          
          {/* Left Side: Product Image */}
          <div className="relative group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[3px] border-[#af0000] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
                alt="Hydraulic Hose 2SN"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Category Tag */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#3b6db4] px-10 py-3 text-2xl font-black text-white shadow-xl z-10 transform skew-x-[-10deg]">
              <span className="inline-block skew-x-[10deg]">สายไฮดรอลิค</span>
            </div>
          </div>

          {/* Right Side: Product Description */}
          <div className="pt-4 lg:pt-0">
            <h1 className="text-4xl font-black text-zinc-900 mb-2">Hydraulic Hose</h1>
            <h2 className="text-3xl font-black mb-6">
              2SN <span className="text-[#af0000]">DIN EN 853</span> SAE 100 R2AT
            </h2>
            
            <ul className="space-y-4 text-lg font-bold text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                ยางในและยางนอกผลิตจากยางสังเคราะห์คุณภาพสูง
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                เสริมแรงด้วยลวดถักสองเส้นที่ทำจากลวดเหล็กกล้า ชุบแข็งและอบคืนตัว พร้อมเคลือบผิวป้องกัน
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                มีคุณสมบัติทนทานต่อการเสียดสีและสภาพอากาศเป็นพิเศษ
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                ทนต่ออุณหภูมิได้ตั้งแต่ -40°C ถึง +100°C และสูงสุดถึง +125°C ในช่วงเวลาสั้นๆ
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                ใช้สำหรับขนส่งน้ำมันไฮดรอลิคชนิดน้ำมันแร่ อิมัลชัน น้ำมัน และน้ำ และสารละลายไกลคอลในน้ำ
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-zinc-200">
          <table className="w-full min-w-[1000px] text-center border-collapse">
            <thead>
              <tr className="bg-[#af0000] text-white">
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Dn</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Inch</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Size</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>i.d.<br/><span className="text-xs font-normal">mm</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>o.d.<br/><span className="text-xs font-normal">mm</span></th>
                <th className="py-2 px-2 border-r border-white/20 border-b border-white/20" colSpan={2}>Operating pressure</th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Test pressure<br/><span className="text-xs font-normal">bar</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Standard bursting<br/><span className="text-xs font-normal">bar min</span></th>
                <th className="py-4 px-2 border-r border-white/20" rowSpan={2}>Min. bending radius<br/><span className="text-xs font-normal">mm</span></th>
                <th className="py-4 px-2" rowSpan={2}>Weight approx. radius<br/><span className="text-xs font-normal">kg/m</span></th>
              </tr>
              <tr className="bg-[#af0000] text-white">
                <th className="py-2 px-2 border-r border-white/20">bar</th>
                <th className="py-2 px-2 border-r border-white/20">psi</th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50'} hover:bg-red-50 transition-colors`}>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.dn}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.inch}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.size}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.id}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.od}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.opBar}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.opPsi}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.test}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.burst}</td>
                  <td className="py-4 font-bold border-r border-zinc-200">{row.bending}</td>
                  <td className="py-4 font-bold">{row.weight.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
