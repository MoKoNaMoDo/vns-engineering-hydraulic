'use client';

const specData = [
  { idMm: "76", idInch: "3", odMm: "98", wpPsi: "150", bpPsi: "450", weightKg: "2.90", weightLb: "1.92" },
  { idMm: "102", idInch: "4", odMm: "124", wpPsi: "150", bpPsi: "450", weightKg: "4.67", weightLb: "3.11" },
  { idMm: "127", idInch: "5", odMm: "152", wpPsi: "150", bpPsi: "450", weightKg: "5.80", weightLb: "3.90" },
  { idMm: "152", idInch: "6", odMm: "174", wpPsi: "150", bpPsi: "450", weightKg: "10.10", weightLb: "6.25" },
];

export default function IndustrialHoseCSD150Specs() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1000px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              SUNFLEX CSD150 Technical Data
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase">I.D. (mm)</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">I.D. (inch)</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">O.D. (mm)</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase text-[#af0000]">Working Pressure (psi)</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Bursting Pressure (psi)</th>
                  <th colSpan={2} className="py-4 px-2 bg-zinc-50 uppercase">Weight (Nominal)</th>
                </tr>
                <tr className="bg-white text-zinc-500 border-b border-zinc-300 text-[11px]">
                  <th colSpan={5}></th>
                  <th className="py-1 px-2 border-r border-l border-zinc-300 italic">kg/m</th>
                  <th className="py-1 px-2 italic">lbs/ft</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-900">{row.idInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-bold">{row.odMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-blue-700">{row.wpPsi}</td>
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
