import { Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const tags = [
  "HYDRAULIC HOSE", "สายไฮดรอลิค", "1SN",
  "SAE 100 R1AT", "DIN EN 853", "สายแรงดันสูง",
  "สายน้ำมันไฮดรอลิค"
];

const specData = [
  { dn: 5, inch: "3/16", size: -3, id: 4.8, od: 11.8, opBar: 250, opPsi: 3625, test: 500, burst: 1000, bending: 90, weight: 0.190 },
  { dn: 6, inch: "1/4", size: -4, id: 6.4, od: 13.4, opBar: 225, opPsi: 3265, test: 450, burst: 900, bending: 100, weight: 0.230 },
  { dn: 8, inch: "5/16", size: -5, id: 7.9, od: 15.0, opBar: 215, opPsi: 3120, test: 430, burst: 850, bending: 115, weight: 0.270 },
  { dn: 10, inch: "3/8", size: -6, id: 9.5, od: 17.4, opBar: 180, opPsi: 2610, test: 360, burst: 720, bending: 130, weight: 0.345 },
  { dn: 12, inch: "1/2", size: -8, id: 12.7, od: 20.6, opBar: 160, opPsi: 2320, test: 320, burst: 640, bending: 180, weight: 0.425 },
  { dn: 16, inch: "5/8", size: -10, id: 15.9, od: 23.7, opBar: 130, opPsi: 1885, test: 260, burst: 520, bending: 200, weight: 0.510 },
  { dn: 19, inch: "3/4", size: -12, id: 19.0, od: 27.7, opBar: 105, opPsi: 1525, test: 210, burst: 420, bending: 240, weight: 0.645 },
  { dn: 25, inch: "1", size: -16, id: 25.4, od: 35.6, opBar: 88, opPsi: 1276, test: 175, burst: 350, bending: 300, weight: 0.945 },
  { dn: 31, inch: "1 1/4", size: -20, id: 31.8, od: 43.5, opBar: 63, opPsi: 914, test: 150, burst: 250, bending: 420, weight: 1.295 },
  { dn: 38, inch: "1 1/2", size: -24, id: 38.1, od: 50.6, opBar: 50, opPsi: 725, test: 100, burst: 200, bending: 500, weight: 1.590 },
  { dn: 51, inch: "2", size: -32, id: 50.8, od: 64.0, opBar: 40, opPsi: 580, test: 80, burst: 160, bending: 630, weight: 2.120 },
];

export default function HydraulicHoseDetail() {
  return (
    <section className="bg-white py-12 text-black font-sans">
      <div className="mx-auto max-w-[1200px] px-4">
        
        {/* Header Badge */}
        <div className="mb-8 inline-block rounded-full bg-zinc-100 px-6 py-2 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] border border-zinc-200">
          <span className="text-xl font-black text-zinc-800">รายละเอียดสินค้า</span>
        </div>

        {/* Top Content: Image and Description */}
        <div className="grid gap-10 lg:grid-cols-2 items-start mb-16">
          
          {/* Left Side: Product Image */}
          <div className="relative w-full max-w-[480px]">
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white">
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
                  alt="Hydraulic Hose 1SN"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Category Tag */}
            <div className="mt-4 flex justify-center">
              <div className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg">
                สายไฮดรอลิค
              </div>
            </div>
          </div>

          {/* Right Side: Product Description */}
          <div className="pt-4 lg:pt-0">
            <h1 className="text-4xl font-black text-zinc-900 mb-2">Hydraulic Hose</h1>
            <h2 className="text-3xl font-black mb-6">
              1SN <span className="text-[#af0000]">DIN EN 853</span> SAE 100 R1AT
            </h2>
            
            <ul className="space-y-4 text-lg font-bold text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                ยางในและยางนอกผลิตจากยางสังเคราะห์คุณภาพสูง
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#af0000]" />
                เสริมแรงด้วยลวดถักหนึ่งเส้นที่ทำจากลวดเหล็กกล้า ชุบแข็งและอบคืนตัว พร้อมเคลือบผิวป้องกัน
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

            {/* Social icons */}
            <div className="mt-8 flex gap-4">
              <a href="#" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group transition-all hover:scale-110 active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg">
                  <div className="flex flex-col items-center justify-center scale-75">
                    <span className="text-[10px] font-black leading-none">LINE</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Tags section */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Tag size={20} className="text-[#af0000]" />
                <span className="text-lg font-black text-zinc-800">แท็ก:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href="/products/hydraulic-hose"
                    className="rounded-lg border border-zinc-200 bg-[#f4f4f4] px-4 py-2 text-[15px] font-bold text-[#455a64] transition-all hover:bg-[#af0000] hover:text-white hover:shadow-md active:scale-95"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
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
