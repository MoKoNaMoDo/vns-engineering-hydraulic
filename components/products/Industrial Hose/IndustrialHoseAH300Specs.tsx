'use client';

const specData = [
  { idMm: "32", idInch: "1-1/4", odMm: "44", odInch: "1-3/4", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "0.85", weightLb: "0.58" },
  { idMm: "38", idInch: "1-1/2", odMm: "52", odInch: "2", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "1.30", weightLb: "0.80" },
  { idMm: "51", idInch: "2", odMm: "66", odInch: "2-23/32", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "1.52", weightLb: "1.04" },
  { idMm: "63", idInch: "2-1/2", odMm: "79", odInch: "3-7/32", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "2.26", weightLb: "1.56" },
  { idMm: "76", idInch: "3", odMm: "94", odInch: "3-25/32", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "2.22", weightLb: "1.52" },
  { idMm: "102", idInch: "4", odMm: "121", odInch: "4-13/16", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "2.22", weightLb: "1.52" },
  { idMm: "102", idInch: "4", odMm: "121", odInch: "4-13/16", wpAtm: "20", wpPsi: "300", bpAtm: "60", bpPsi: "900", weightKg: "4.00", weightLb: "2.74" },
];

export default function IndustrialHoseAH300Specs() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      <div className="absolute inset-0 z-0 bg-zinc-900" />
      <div className="absolute inset-0 bg-black/40 z-[5]" /> {/* Darken background */}
      
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              SUNFLEX AH300 Technical Data
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase">I.D.</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">O.D.</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase text-[#af0000]">Working Pressure</th>
                  <th colSpan={2} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Bursting Pressure</th>
                  <th colSpan={2} className="py-4 px-2 bg-zinc-50 uppercase">Weight (Nominal)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-2 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">atm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">kg/m</th>
                  <th className="py-2 px-2 italic">lbs/ft</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900">{row.idInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.odMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-bold">{row.odInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-blue-700">{row.wpAtm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.wpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.bpAtm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.bpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900">{row.weightKg}</td>
                    <td className="py-2.5 px-2 text-zinc-500">{row.weightLb}</td>
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
