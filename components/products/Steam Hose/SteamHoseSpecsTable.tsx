'use client';

import { Thermometer } from "lucide-react";

const specData = [
  { code: "FC472-06", dash: "-06", dn: "10", idInch: "3/8", idMm: "10.0", odInch: "0.77", odMm: "19.5", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "130", weight: "0.421" },
  { code: "FC472-08", dash: "-08", dn: "12", idInch: "1/2", idMm: "12.5", odInch: "0.91", odMm: "25.0", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "150", weight: "0.589" },
  { code: "FC472-12", dash: "-12", dn: "19", idInch: "3/4", idMm: "19.0", odInch: "1.18", odMm: "30.0", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "180", weight: "0.846" },
  { code: "FC472-16", dash: "-16", dn: "25", idInch: "1", idMm: "25.4", odInch: "1.45", odMm: "36.8", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "180", weight: "1.095" },
  { code: "FC472-20", dash: "-20", dn: "32", idInch: "1 1/4", idMm: "31.5", odInch: "1.77", odMm: "45.5", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "180", weight: "1.505" },
  { code: "FC472-24", dash: "-24", dn: "38", idInch: "1 1/2", idMm: "38.0", odInch: "1.95", odMm: "49.5", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "180", weight: "1.780" },
  { code: "FC472-32", dash: "-32", dn: "51", idInch: "2", idMm: "51.0", odInch: "2.52", odMm: "64.0", wpPsi: "290", wpBar: "20", brInch: "260", brMm: "180", weight: "2.589" },
  { code: "FC472-40", dash: "-63", dn: "63", idInch: "2 1/2", idMm: "63.0", odInch: "3.27", odMm: "83.0", wpPsi: "290", wpBar: "20", brInch: "266", brMm: "180", weight: "3.421" },
  { code: "FC472-48", dash: "-48", dn: "76", idInch: "3", idMm: "76.0", odInch: "3.86", odMm: "88.0", wpPsi: "290", wpBar: "20", brInch: "265", brMm: "180", weight: "4.214" },
  { code: "FC472-48", dash: "-76", dn: "76", idInch: "3", idMm: "76.0", odInch: "3.86", odMm: "98.0", wpPsi: "290", wpBar: "20", brInch: "285", brMm: "725", weight: "4.962" },
];

export default function SteamHoseSpecsTable() {
  return (
    <section className="relative w-full overflow-hidden min-h-[600px] flex items-center mt-12">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[5]" />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase tracking-widest flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Steam Hose (FC472) Technical Data
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
                  <th colSpan={2} className="py-2 px-2 border-r border-zinc-300 bg-zinc-50">Min. Bend Radius (BR/r)</th>
                  <th className="py-3 px-2 bg-zinc-50" rowSpan={2}>Weight (kg/m)</th>
                </tr>
                <tr className="bg-white text-zinc-600 border-b border-zinc-300">
                  <th className="py-1 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">mm</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">inch</th>
                  <th className="py-1 px-2 border-r border-zinc-300 italic">mm</th>
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
                    <td className="py-2.5 px-2 border-r border-zinc-200">{row.brInch}</td>
                    <td className="py-2.5 px-2 border-r border-zinc-200 font-bold">{row.brMm}</td>
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
                <span>Continuous: Up to +210°C Steam</span>
              </div>
            </div>
            <div className="text-[12px] text-zinc-400 italic font-medium">
              Ensure proper fittings and safety protocols for high-pressure steam applications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
