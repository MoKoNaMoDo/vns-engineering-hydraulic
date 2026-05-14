'use client';

const specData = [
  { dn_in: '1/4', dn_mm: 8, od_in: 0.49, od_mm: 12.5, br_in: 4.0, br_mm: 100, wp_bar: 88, wp_psi: 1276, bp_bar: 350, bp_psi: 5075 },
  { dn_in: '3/8', dn_mm: 10, od_in: 0.66, od_mm: 16.7, br_in: 5.0, br_mm: 125, wp_bar: 70, wp_psi: 1015, bp_bar: 280, bp_psi: 4060 },
  { dn_in: '1/2', dn_mm: 15, od_in: 0.78, od_mm: 19.7, br_in: 5.0, br_mm: 125, wp_bar: 62, wp_psi: 899, bp_bar: 250, bp_psi: 3625 },
  { dn_in: '3/4', dn_mm: 20, od_in: 1.07, od_mm: 27.1, br_in: 6.0, br_mm: 150, wp_bar: 55, wp_psi: 797, bp_bar: 220, bp_psi: 3190 },
  { dn_in: '1', dn_mm: 25, od_in: 1.33, od_mm: 33.7, br_in: 7.0, br_mm: 170, wp_bar: 47, wp_psi: 681, bp_bar: 190, bp_psi: 2755 },
  { dn_in: '1 1/4', dn_mm: 32, od_in: 1.69, od_mm: 43.0, br_in: 8.0, br_mm: 200, wp_bar: 35, wp_psi: 507, bp_bar: 140, bp_psi: 2030 },
  { dn_in: '1 1/2', dn_mm: 40, od_in: 1.96, od_mm: 49.8, br_in: 10.0, br_mm: 250, wp_bar: 25, wp_psi: 362, bp_bar: 100, bp_psi: 1450 },
  { dn_in: '2', dn_mm: 50, od_in: 2.52, od_mm: 64.0, br_in: 14.0, br_mm: 350, wp_bar: 20, wp_psi: 290, bp_bar: 80, bp_psi: 1160 },
  { dn_in: '2 1/2', dn_mm: 65, od_in: 3.09, od_mm: 78.5, br_in: 20.0, br_mm: 500, wp_bar: 15, wp_psi: 217, bp_bar: 60, bp_psi: 870 },
  { dn_in: '3', dn_mm: 80, od_in: 3.95, od_mm: 100, br_in: 21.0, br_mm: 525, wp_bar: 15, wp_psi: 217, bp_bar: 60, bp_psi: 870 },
  { dn_in: '4', dn_mm: 100, od_in: 5.10, od_mm: 130, br_in: 25.0, br_mm: 625, wp_bar: 11, wp_psi: 159, bp_bar: 45, bp_psi: 625 },
  { dn_in: '5', dn_mm: 125, od_in: 6.25, od_mm: 159, br_in: 30.0, br_mm: 750, wp_bar: 10, wp_psi: 145, bp_bar: 40, bp_psi: 580 },
  { dn_in: '6', dn_mm: 159, od_in: 7.20, od_mm: 183, br_in: 36.0, br_mm: 900, wp_bar: 8, wp_psi: 116, bp_bar: 35, bp_psi: 507 },
  { dn_in: '8', dn_mm: 200, od_in: 9.50, od_mm: 241, br_in: 40.0, br_mm: 1020, wp_bar: 8, wp_psi: 116, bp_bar: 35, bp_psi: 507 },
  { dn_in: '10', dn_mm: 250, od_in: 11.40, od_mm: 290, br_in: 48.0, br_mm: 1220, wp_bar: 7, wp_psi: 101, bp_bar: 30, bp_psi: 435 },
];

export default function StainlessSteelFlexibleHoseSpecTable() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1530124566582-a618bc2615ad?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center bg-black/10">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          <div className="bg-[#af0000] px-4 py-2">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">Stainless Steel Flexible Hose Technical Data</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th colSpan={2} className="py-2 px-1 border-r border-zinc-300 bg-zinc-50">Nominal Size DN</th>
                  <th colSpan={2} className="py-2 px-1 border-r border-zinc-300 bg-zinc-50">Nominal O.D.</th>
                  <th colSpan={2} className="py-2 px-1 border-r border-zinc-300 bg-zinc-50">Min. Bend Radius</th>
                  <th colSpan={2} className="py-2 px-1 border-r border-zinc-300 bg-zinc-50">Working Pressure (20°C)</th>
                  <th colSpan={2} className="py-2 px-1 bg-zinc-50">Burst Pressure (20°C)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-1 px-1 border-r border-zinc-300 italic">in.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">mm</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">in.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">mm.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">in.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">mm.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">bar</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">PSI.</th>
                  <th className="py-1 px-1 border-r border-zinc-300 italic">bar</th>
                  <th className="py-1 px-1 italic">PSI.</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2 px-1 border-r border-zinc-200 font-black text-[#af0000]">{row.dn_in}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.dn_mm}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.od_in.toFixed(2)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.od_mm.toFixed(1)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.br_in.toFixed(1)}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.br_mm}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_bar}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.wp_psi}</td>
                    <td className="py-2 px-1 border-r border-zinc-200">{row.bp_bar}</td>
                    <td className="py-2 px-1">{row.bp_psi}</td>
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
