'use client';

import { useTranslations } from 'next-intl';

export default function QuickCouplingTable() {
  const t = useTranslations('QuickCouplingTable');

  const rows = [
    { material: "Stainless Steel (304/316)",             size: '1/8", 1/4", 3/8", 1/2", 3/4", 1"', pressureKey: "pressure1", indKey: "ind1" },
    { material: "Brass",                                 size: '1/8", 1/4", 3/8", 1/2"',           pressure: "7-15 bar (100-220 psi)",       indKey: "ind2" },
    { material: "Steel (Carbon / Alloy Steel)",          size: '1/4", 3/8", 1/2", 3/4", 1"',       pressure: "10-30 bar (150-450 psi)",      indKey: "ind3" },
    { material: "Aluminium",                             size: '1/4", 3/8", 1/2"',                 pressure: "5-10 bar (70-150 psi)",        indKey: "ind4" },
    { material: "Polypropylene (PP) / Engineering Plastic", size: '1/4", 3/8", 1/2"',             pressure: "3-7 bar (50-100 psi)",         indKey: "ind5" },
  ] as const;

  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex items-center mt-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40"
          style={{ backgroundImage: "url('/products/products/Industrial Hose.jpg')" }}
        />
      </div>

      <div className="relative z-20 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase">{t('header')}</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-center border-collapse text-[14px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase min-w-[200px]">{t('colMaterial')}</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[200px]">{t('colSize')}</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[200px]">{t('colPressure')}</th>
                  <th className="py-5 px-4 bg-zinc-50 uppercase min-w-[300px]">{t('colIndustry')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 border-r border-zinc-200 font-black text-[#af0000] text-left">{row.material}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-900">{row.size}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 font-bold text-blue-700">
                      {'pressureKey' in row ? t(row.pressureKey) : row.pressure}
                    </td>
                    <td className="py-4 px-4 text-zinc-600 text-left leading-relaxed">{t(row.indKey)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-200">
            <p className="text-[12px] text-zinc-500 italic">{t('footer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
