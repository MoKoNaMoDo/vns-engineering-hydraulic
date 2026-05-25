'use client';

import { useTranslations } from 'next-intl';

export default function CamlockTable() {
  const t = useTranslations('CamlockTable');

  const rows = [
    { material: "Stainless Steel (SS304/316)", size: '1/2" - 6"', pressure: "~150-250 PSI (10-17 bar)", hasNote: true,  indKey: "ind1" },
    { material: "Aluminium",                   size: '1/2" - 6"', pressure: "~50-150 PSI (4-10 bar)",  hasNote: false, indKey: "ind2" },
    { material: "Brass",                       size: '1/2" - 4"', pressure: "~100-250 PSI (7-17 bar)", hasNote: false, indKey: "ind3" },
    { material: "Polypropylene (PP)",          size: '1/2" - 4"', pressure: "~50-100 PSI (3-7 bar)",   hasNote: false, indKey: "ind4" },
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

      <div className="relative z-20 w-full py-16 px-4 md:px-12 flex flex-col items-center">
        <div className="mb-8 text-center max-w-[1200px] w-full">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            {t('title')}
            <span className="block mt-2 text-[#ff4d4d]">(CAMLOCK COUPLING) TECHNICAL DATA</span>
          </h2>
          <div className="mt-4 h-1.5 w-48 bg-[#af0000] mx-auto" />
        </div>

        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase">PRODUCT SPECIFICATIONS</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[14px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase min-w-[200px]">{t('colMaterial')}</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[150px]">{t('colSize')}</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[250px]">{t('colPressure')}</th>
                  <th className="py-5 px-4 bg-zinc-50 uppercase min-w-[350px]">{t('colIndustries')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 border-r border-zinc-200 font-black text-[#af0000] text-left">{row.material}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-900">{row.size}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 font-bold text-blue-700">
                      <div>{row.pressure}</div>
                      {row.hasNote && <div className="text-[11px] text-zinc-500 font-medium mt-1">{t('ssNote')}</div>}
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
