import { Thermometer } from "lucide-react";

const specData = [
  { code: "EF148-02", dash: "-02", dn: "03", idInch: "1/8", idMm: "3.2", odInch: "0.320", odMm: "8.1", wpPsi: "3,000", wpBar: "210", bpPsi: "12,000", bpBar: "840", brInch: "1.0", brMm: "25", weight: "57.0" },
  { code: "EF148-03", dash: "-03", dn: "05", idInch: "3/16", idMm: "4.8", odInch: "0.405", odMm: "10.3", wpPsi: "3,000", wpBar: "210", bpPsi: "12,000", bpBar: "840", brInch: "1.0", brMm: "25", weight: "80.0" },
  { code: "EF148-04", dash: "-04", dn: "06", idInch: "1/4", idMm: "6.4", odInch: "0.490", odMm: "12.4", wpPsi: "2,750", wpBar: "190", bpPsi: "11,000", bpBar: "760", brInch: "1.3", brMm: "32", weight: "114.0" },
  { code: "EF148-05", dash: "-05", dn: "08", idInch: "5/16", idMm: "8.0", odInch: "0.560", odMm: "14.2", wpPsi: "2,500", wpBar: "175", bpPsi: "10,000", bpBar: "700", brInch: "1.8", brMm: "45", weight: "142.0" },
  { code: "EF148-06", dash: "-06", dn: "10", idInch: "3/8", idMm: "9.5", odInch: "0.620", odMm: "15.7", wpPsi: "2,250", wpBar: "155", bpPsi: "9,000", bpBar: "630", brInch: "2.2", brMm: "55", weight: "164.0" },
  { code: "EF148-08", dash: "-08", dn: "12", idInch: "1/2", idMm: "12.7", odInch: "0.760", odMm: "19.3", wpPsi: "2,050", wpBar: "140", bpPsi: "8,200", bpBar: "560", brInch: "3.0", brMm: "77", weight: "229.0" },
  { code: "EF148-10", dash: "-10", dn: "16", idInch: "5/8", idMm: "16.0", odInch: "0.910", odMm: "23.1", wpPsi: "1,500", wpBar: "105", bpPsi: "6,000", bpBar: "420", brInch: "4.3", brMm: "110", weight: "295.0" },
  { code: "EF148-12", dash: "-12", dn: "20", idInch: "3/4", idMm: "19.0", odInch: "1.040", odMm: "26.4", wpPsi: "1,300", wpBar: "90", bpPsi: "5,200", bpBar: "360", brInch: "5.5", brMm: "140", weight: "356.0" },
  { code: "EF148-16", dash: "-16", dn: "25", idInch: "1", idMm: "25.4", odInch: "1.310", odMm: "33.3", wpPsi: "1,000", wpBar: "70", bpPsi: "4,000", bpBar: "280", brInch: "8.0", brMm: "200", weight: "504.0" },
  { code: "EF148-20", dash: "-20", dn: "32", idInch: "1 1/4", idMm: "31.8", odInch: "1.654", odMm: "42.0", wpPsi: "1,000", wpBar: "70", bpPsi: "4,000", bpBar: "280", brInch: "12.0", brMm: "300", weight: "737.0" },
];

export default function R7SpecsTable() {
  return (
    <section className="relative w-full overflow-hidden min-h-[700px] flex items-center mt-12">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-fade-scale">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase tracking-widest flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              R7-Thermoplastic Hose Technical Data
            </h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[12px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-3 px-2 border-r border-zinc-300 bg-zinc-50" rowSpan={2}>Item Code</th>
                  <th className="py-3 px-2 border-r border-zinc-300 bg-zinc-50" rowSpan={2}>Dash Size</th>
                  <th className="py-3 px-2 border-r border-zinc-300 bg-zinc-50" rowSpan={2}>DN</th>
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50 text-[#af0000]">Internal Diameter (ID)</th>
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50">Outside Diameter (OD)</th>
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50">Working Pressure (WP)</th>
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50">Burst Pressure (BP)</th>
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50">Min. Bend Radius</th>
                  <th className="py-3 px-2 bg-zinc-50" rowSpan={2}>Weight (g/m)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-1 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">bar</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">psi</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">bar</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">mm</th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-zinc-800">{row.code}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-zinc-500">{row.dash}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.dn}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.idInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.idMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-bold">{row.odInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.odMm}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 text-blue-700">{row.wpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-black text-[#af0000]">{row.wpBar}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.bpPsi}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.bpBar}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.brInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.brMm}</td>
                    <td className="py-2.5 px-2 bg-zinc-50 font-black">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Info */}
          <div className="bg-zinc-900 px-6 py-4 flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <Thermometer size={20} className="text-[#af0000]" />
              <div className="text-[13px] font-bold">
                <span className="text-[#af0000] mr-2">Temperature Range:</span>
                <span>Continuous: -40°C to +100°C</span>
              </div>
            </div>
            <div className="text-[12px] text-zinc-400 italic font-medium">
              Temp. not to exceed +70°C for Air and Water based fluids
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

