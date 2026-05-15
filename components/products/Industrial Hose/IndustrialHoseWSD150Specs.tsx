'use client';

const specData = [
  { idMm: "32", idInch: "1-1/4", odInch: "1-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "0.97", weightLb: "0.67", br: "256" },
  { idMm: "38", idInch: "1-1/2", odInch: "1-15/16", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "1.27", weightLb: "0.87", br: "304" },
  { idMm: "51", idInch: "2", odInch: "2-15/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "1.72", weightLb: "1.18", br: "408" },
  { idMm: "63", idInch: "2-1/2", odInch: "3-1/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "2.37", weightLb: "1.63", br: "508" },
  { idMm: "76", idInch: "3", odInch: "3-3/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "2.79", weightLb: "1.91", br: "608" },
  { idMm: "102", idInch: "4", odInch: "4-21/32", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "4.53", weightLb: "3.04", br: "816" },
  { idMm: "152", idInch: "6", odInch: "6-47/64", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "7.93", weightLb: "5.37", br: "1216" },
  { idMm: "203", idInch: "8", odInch: "8-55/64", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "10.18", weightLb: "6.84", br: "1216" },
  { idMm: "254", idInch: "10", odInch: "11-1/64", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "14.80", weightLb: "9.94", br: "2032" },
  { idMm: "305", idInch: "12", idInch2: "12", odInch: "13-15/64", wpAtm: "10", wpPsi: "150", bpAtm: "30", bpPsi: "450", weightKg: "24.63", weightLb: "16.55", br: "2600" },
];

export default function IndustrialHoseWSD150Specs() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1250px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              SUNFLEX WSD150 Technical Data
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase">I.D.</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">O.D. (inch)</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase text-[#af0000]">Working Pressure</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Bursting Pressure</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Weight (Nominal)</th>
                  <th className="py-4 px-2 bg-zinc-50 uppercase">Bending Radius (mm)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-2 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">kg/m</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">lbs/ft</th>
                  <th className="py-2 px-2 italic">mm</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900">{row.idInch}</td>
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
