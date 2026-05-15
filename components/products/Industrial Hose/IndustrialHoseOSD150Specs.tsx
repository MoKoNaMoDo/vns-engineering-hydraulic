'use client';

const specData = [
  { idMm: "25", idInch: "1", odInch: "1-3/8", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "0.79", weightLb: "0.54", br: "150" },
  { idMm: "32", idInch: "1-1/4", odInch: "1-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "0.97", weightLb: "0.66", br: "192" },
  { idMm: "38", idInch: "1-1/2", odInch: "1-29/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "1.40", weightLb: "0.98", br: "228" },
  { idMm: "45", idInch: "1-3/4", odInch: "2-5/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "1.81", weightLb: "1.24", br: "266" },
  { idMm: "51", idInch: "2", odInch: "2-1/2", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "1.81", weightLb: "1.24", br: "306" },
  { idMm: "64", idInch: "2-1/2", odInch: "3-1/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "2.28", weightLb: "1.95", br: "378" },
  { idMm: "76", idInch: "3", odInch: "3-17/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "2.93", weightLb: "2.01", br: "428" },
  { idMm: "102", idInch: "4", odInch: "4-17/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "3.78", weightLb: "2.83", br: "612" },
  { idMm: "152", idInch: "6", odInch: "6-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "5.20", weightLb: "6.05", br: "912" },
  { idMm: "203", idInch: "8", odInch: "8-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "9.00", weightLb: "6.43", br: "1650" },
  { idMm: "254", idInch: "10", odInch: "10-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "28.50", weightLb: "19.15", br: "2600" },
  { idMm: "305", idInch: "12", odInch: "12-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "28.50", weightLb: "19.15", br: "2600" },
];

export default function IndustrialHoseOSD150Specs() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1250px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
          <div className="bg-[#af0000] px-8 py-4">
            <h4 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-white animate-pulse" />
              SUNFLEX OSD150 Technical Specifications
            </h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase">Inside Diameter (I.D.)</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase" rowSpan={2}>Outside Diameter (O.D.) inch</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Working Pressure</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Bursting Pressure</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Weight (Nominal)</th>
                  <th className="py-4 px-2 bg-zinc-50 uppercase" rowSpan={2}>Bending Radius (mm)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-2 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">kg/m</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">lbs/ft</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors group">
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900 group-hover:text-[#af0000] transition-colors">{row.idInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-bold">{row.odInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-blue-700">{row.wpAtm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.wpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.bpAtm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.bpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900">{row.weightKg}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-500">{row.weightLb}</td>
                    <td className="py-2.5 px-2 bg-zinc-50 font-black text-zinc-900">{row.br}</td>
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
