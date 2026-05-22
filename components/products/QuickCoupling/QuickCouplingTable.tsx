'use client';

const couplingData = [
  {
    material: "Stainless Steel (304/316)",
    size: '1/8", 1/4", 3/8", 1/2", 3/4", 1"',
    pressure: "10-20 bar (150-300 psi) ขึ้นไป",
    industry: "อาหารและเครื่องดื่ม, ยา, เคมี, ทะเล, น้ำยาทำความสะอาด"
  },
  {
    material: "Brass (ทองเหลือง)",
    size: '1/8", 1/4", 3/8", 1/2"',
    pressure: "7-15 bar (100-220 psi)",
    industry: "งานลมอด, เครื่องจักรทั่วไป, งานซ่อมบำรุง"
  },
  {
    material: "Steel (Carbon / Alloy Steel)",
    size: '1/4", 3/8", 1/2", 3/4", 1"',
    pressure: "10-30 bar (150-450 psi)",
    industry: "งานก่อสร้าง, งานไฮดรอลิก, โรงงานอุตสาหกรรมหนัก"
  },
  {
    material: "Aluminium (อลูมิเนียม)",
    size: '1/4", 3/8", 1/2"',
    pressure: "5-10 bar (70-150 psi)",
    industry: "อุตสาหกรรมเบา, งานทั่วไปที่ไม่ต้องการแรงดันสูง"
  },
  {
    material: "Polypropylene (PP) / Engineering Plastic",
    size: '1/4", 3/8", 1/2"',
    pressure: "3-7 bar (50-100 psi)",
    industry: "อุตสาหกรรมเคมีเบา, การเกษตร, ระบบน้ำทำความสะอาด"
  }
];

export default function QuickCouplingTable() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex items-center mt-12">
      {/* High-fidelity background with overlay */}
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
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              ข้อต่อแบบสวมเร็ว (QUICK COUPLING) Technical Data
            </h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-center border-collapse text-[14px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase min-w-[200px]">วัสดุ (Material)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[200px]">ขนาดที่มี (Nominal Size)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[200px]">ช่วงแรงดันใช้งาน (ประมาณ)</th>
                  <th className="py-5 px-4 bg-zinc-50 uppercase min-w-[300px]">อุตสาหกรรมที่เหมาะสม</th>
                </tr>
              </thead>
              <tbody>
                {couplingData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 border-r border-zinc-200 font-black text-[#af0000] text-left">{row.material}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-900">{row.size}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 font-bold text-blue-700">{row.pressure}</td>
                    <td className="py-4 px-4 text-zinc-600 text-left leading-relaxed">{row.industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer note */}
          <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-200">
            <p className="text-[12px] text-zinc-500 italic">
              * ข้อมูลเบื้องต้นอาจมีการเปลี่ยนแปลงตามยี่ห้อและมาตรฐานการผลิต กรุณาติดต่อฝ่ายขายเพื่อยืนยันข้อมูลล่าสุด
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
