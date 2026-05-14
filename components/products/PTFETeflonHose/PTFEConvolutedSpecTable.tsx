'use client';

const specData = [
  { dash: "-4", inch: '1/4', id_mm: 6.60, od_mm: 10.4, wp_psi: 2500, wp_bar: 175, bp_psi: 10000, bp_bar: 700, br_mm: 20, weight: 149 },
  { dash: "-5", inch: '5/16', id_mm: 8.18, od_mm: 12.4, wp_psi: 2300, wp_bar: 160, bp_psi: 9200, bp_bar: 640, br_mm: 20, weight: 170 },
  { dash: "-6", inch: '3/8', id_mm: 9.65, od_mm: 13.7, wp_psi: 2200, wp_bar: 150, bp_psi: 8800, bp_bar: 600, br_mm: 20, weight: 182 },
  { dash: "-8", inch: '1/2', id_mm: 12.83, od_mm: 18.4, wp_psi: 1960, wp_bar: 135, bp_psi: 7840, bp_bar: 540, br_mm: 25, weight: 289 },
  { dash: "-10", inch: '5/8', id_mm: 16.00, od_mm: 21.0, wp_psi: 1450, wp_bar: 100, bp_psi: 5800, bp_bar: 400, br_mm: 50, weight: 349 },
  { dash: "-12", inch: '3/4', id_mm: 19.18, od_mm: 25.9, wp_psi: 1160, wp_bar: 80, bp_psi: 4640, bp_bar: 320, br_mm: 65, weight: 494 },
  { dash: "-14", inch: '7/8', id_mm: 22.23, od_mm: 29.7, wp_psi: 870, wp_bar: 60, bp_psi: 3480, bp_bar: 240, br_mm: 80, weight: 565 },
  { dash: "-16", inch: '1"', id_mm: 25.53, od_mm: 33.8, wp_psi: 800, wp_bar: 55, bp_psi: 3200, bp_bar: 220, br_mm: 90, weight: 677 },
  { dash: "-20", inch: '1-1/4', id_mm: 31.58, od_mm: 42.7, wp_psi: 665, wp_bar: 45, bp_psi: 2660, bp_bar: 180, br_mm: 110, weight: 891 },
  { dash: "-24", inch: '1-1/2', id_mm: 38.23, od_mm: 48.0, wp_psi: 510, wp_bar: 35, bp_psi: 2040, bp_bar: 140, br_mm: 150, weight: 959 },
  { dash: "-32", inch: '2"', id_mm: 50.93, od_mm: 61.5, wp_psi: 365, wp_bar: 25, bp_psi: 1460, bp_bar: 100, br_mm: 200, weight: 1309 },
];

export default function PTFEConvolutedSpecTable() {
  return (
    <section className="relative w-full overflow-hidden mt-8 min-h-[600px] flex items-center">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1614934986218-4775b8719246?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay to darken background slightly for contrast */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center bg-black/10">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.5)]">

          {/* <div className="bg-[#af0000] px-4 py-2">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">PTFE Convoluted Technical Data</h4>
          </div> */}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-white text-black border-b-2 border-zinc-300">
                  <th className="py-2 px-1 border-r border-zinc-300">Dash</th>
                  <th className="py-2 px-1 border-r border-zinc-300">ID (inch)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">ID (mm)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">OD (mm)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">WP (psi)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">WP (bar)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">BP (psi)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">BP (bar)</th>
                  <th className="py-2 px-1 border-r border-zinc-300">BR (mm)</th>
                  <th className="py-2 px-1">Weight (g/m)</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2 px-1 border-r border-zinc-200 font-black text-[#af0000]">{row.dash}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.inch}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.id_mm.toFixed(2)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.od_mm.toFixed(1)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_psi}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_bar}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bp_psi}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bp_bar}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.br_mm}</td>
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
