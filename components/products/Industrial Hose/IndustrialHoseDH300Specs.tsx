'use client';

const specData = [
  { idInch: "4", idMm: "102", odMm: "126", br: "815", weight: "6.351", fitting: "9.2" },
  { idInch: "6", idMm: "152", odMm: "182", br: "1215", weight: "11.93", fitting: "17.4" },
  { idInch: "8", idMm: "203", odMm: "237", br: "2035", weight: "16.84", fitting: "28.4" },
  { idInch: "10", idMm: "254", odMm: "289", br: "2035", weight: "22.75", fitting: "42.0" },
  { idInch: "12", idMm: "305", odMm: "347", br: "2600", weight: "33.18", fitting: "46.0" },
];

export default function IndustrialHoseDH300Specs() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop")',
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
              SUNFLEX DH300 Technical Data
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th colSpan={3} className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase">Nominal Bore</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase text-blue-700">Bend Radius</th>
                  <th className="py-4 px-2 border-r border-zinc-300 bg-zinc-50 uppercase">Hose Weight</th>
                  <th className="py-4 px-2 bg-zinc-50 uppercase text-[#af0000]">Swaged Fittings Weight</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300 text-[11px]">
                  <th className="py-2 px-2 border-r border-zinc-300 italic">ID inch</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">OD mm</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">(mm/mtr)</th>
                  <th className="py-2 px-2 border-r border-zinc-300 italic">(kg/mtr)</th>
                  <th className="py-2 px-2 italic">(kg/end)</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-3 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idInch}</td>
                    <td className="py-3 px-2 border-r border-zinc-200 text-zinc-900">{row.idMm}</td>
                    <td className="py-3 px-2 border-r border-zinc-200 font-bold">{row.odMm}</td>
                    <td className="py-3 px-2 border-r border-zinc-200 text-blue-700">{row.br}</td>
                    <td className="py-3 px-2 border-r border-zinc-200">{row.weight}</td>
                    <td className="py-3 px-2 font-black text-[#af0000]">{row.fitting}</td>
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
