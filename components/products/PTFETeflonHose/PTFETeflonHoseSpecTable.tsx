'use client';

const specData = [
  { size: "-3", inch: "1/8", id_mm: 3.35, od_mm: 6.4, wp_psi: "3,250", wp_bar: 225, bp_psi: "13,040", bp_bar: 900, bend: 40, weight: 65 },
  { size: "-4", inch: "3/16", id_mm: 4.83, od_mm: 7.6, wp_psi: "3,000", wp_bar: 210, bp_psi: "12,000", bp_bar: 840, bend: 50, weight: 81 },
  { size: "-5", inch: "1/4", id_mm: 6.48, id_mm_raw: "6.48", od_mm: 9.7, wp_psi: "3,000", wp_bar: 210, bp_psi: "12,000", bp_bar: 840, bend: 75, weight: 121 },
  { size: "-6", inch: "5/16", id_mm: 8.00, od_mm: 11.2, wp_psi: "2,500", wp_bar: 175, bp_psi: "10,000", bp_bar: 700, bend: 100, weight: 163 },
  { size: "-7", inch: "3/8", id_mm: 9.60, od_mm: 12.6, wp_psi: "2,400", wp_bar: 165, bp_psi: "9,600", bp_bar: 660, bend: 125, weight: 178 },
  { size: "-8", inch: "13/32", id_mm: 10.41, od_mm: 13.5, wp_psi: "2,000", wp_bar: 140, bp_psi: "8,000", bp_bar: 560, bend: 135, weight: 185 },
  { size: "-10", inch: "1/2", id_mm: 12.83, od_mm: 16.5, wp_psi: "1,750", wp_bar: 120, bp_psi: "7,000", bp_bar: 480, bend: 165, weight: 254 },
  { size: "-12", inch: "5/8", id_mm: 16.00, od_mm: 19.8, wp_psi: "1,270", wp_bar: 88, bp_psi: "5,080", bp_bar: 352, bend: 200, weight: 318 },
  { size: "-14", inch: "3/4", id_mm: 19.10, od_mm: 22.9, wp_psi: "1,100", wp_bar: 75, bp_psi: "4,400", bp_bar: 300, bend: 230, weight: 395 },
  { size: "-16", inch: "7/8", id_mm: 22.23, od_mm: 26.2, wp_psi: "900", wp_bar: 62, bp_psi: "3,600", bp_bar: 248, bend: 230, weight: 462 },
  { size: "-18", inch: "1", id_mm: 25.53, od_mm: 29.5, wp_psi: "900", wp_bar: 62, bp_psi: "3,600", bp_bar: 248, bend: 300, weight: 528 },
  { size: "-20", inch: "1-1/8", id_mm: 28.58, od_mm: 33.0, wp_psi: "630", wp_bar: 44, bp_psi: "2,520", bp_bar: 176, bend: 410, weight: 595 },
];

export default function PTFETeflonHoseSpecTable() {
  return (
    <section className="relative w-full overflow-hidden mt-8 min-h-[600px] flex items-center">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531287333317-26896238380e?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay to darken background slightly for contrast */}
      <div className="absolute inset-0 bg-black/30 z-[5]" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center bg-black/10">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-white text-black border-b-2 border-zinc-300">
                  <th className="py-2 px-1 border-r border-zinc-300">size</th>
                  <th className="py-2 px-1 border-r border-zinc-300">ID (inch)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">ID (mm)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">OD (mm)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">WP (psi)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">WP (bar)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">BP (psi)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">BP (bar)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">Bend Radius (mm)</th>
                  <th className="py-2 px-1">Weight (g/m)</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2 px-1 border-r border-zinc-200">{row.size}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.inch}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.id_mm.toFixed(idx === 2 ? 2 : 2)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.od_mm.toFixed(1)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_psi}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_bar}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bp_psi}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bp_bar}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bend}</td>
                    <td className="py-2 px-1">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
