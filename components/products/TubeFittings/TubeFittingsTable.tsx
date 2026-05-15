'use client';

const tubeFittingData = [
  {
    type: "Connector (ข้อต่อตรง)",
    shape: "Coupling, Straight",
    size: '1/8" - 2" (3mm - 50mm)',
    pressure: "3,000 - 6,000 psi (200-400 bar)",
    application: "ต่อท่อแบบตรงในระบบน้ำมัน, ก๊าซ, เครื่องมือวัด"
  },
  {
    type: "Union Valve (ยูเนียนวาล์ว)",
    shape: "Straight Valve",
    size: '1/8" - 1" (3mm - 25mm)',
    pressure: "3,000 - 5,000 psi",
    application: "ใช้เปิด/ปิดการไหลของของเหลวหรือก๊าซ"
  },
  {
    type: "Equal Angle Connector (ข้อต่อมุมฉาก 90°)",
    shape: "Elbow 90°",
    size: '1/8" - 2"',
    pressure: "3,000 - 6,000 psi",
    application: "ใช้เปลี่ยนทิศทางการไหลของท่อ, ระบบที่มีพื้นที่จำกัด"
  },
  {
    type: "Tee Connector (สามทาง)",
    shape: "Tee (Equal / Reducing)",
    size: '1/8" - 2"',
    pressure: "3,000 - 6,000 psi",
    application: "แยกการไหลไป 2 ทาง, ใช้ในไลน์วัดแรงดัน"
  },
  {
    type: "Reducer / Adapter (ตัวลดขนาด)",
    shape: "Straight, Male-Female",
    size: '1/8" -> 2"',
    pressure: "3,000 - 6,000 psi",
    application: "ต่อท่อขนาดต่างกัน, ใช้ในงานไฮดรอลิกและนิวเมติก"
  },
  {
    type: "Ferrule / Sleeve (แหวนรองอัด)",
    shape: "Single / Double Ferrule",
    size: 'รองรับท่อ 1/8" - 2"',
    pressure: "ทำงานร่วมกับตัวข้อต่อ",
    application: "ใช้ล็อกท่อป้องกันการรั่วซึม"
  }
];

export default function TubeFittingsTable() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex items-center mt-12">
      {/* High-fidelity background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40" 
          style={{ backgroundImage: "url('/products/bg/industrial-bg.jpg')" }}
        />
      </div>
      
      <div className="relative z-20 w-full py-16 px-4 md:px-12 flex justify-center">
        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              ตารางข้อมูลข้อต่อและวาล์วในภาพ (Technical Data)
            </h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[14px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase min-w-[200px]">ประเภท (Type)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[150px]">ลักษณะ (Shape)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[180px]">ขนาดที่มี (Size Range)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[200px]">ความดันที่ทนได้ (Pressure)</th>
                  <th className="py-5 px-4 bg-zinc-50 uppercase min-w-[300px]">การใช้งาน (Application)</th>
                </tr>
              </thead>
              <tbody>
                {tubeFittingData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 border-r border-zinc-200 font-black text-[#af0000] text-left">{row.type}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-900">{row.shape}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-800">{row.size}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 font-bold text-blue-700">{row.pressure}</td>
                    <td className="py-4 px-4 text-zinc-600 text-left leading-relaxed">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-200">
            <p className="text-[12px] text-zinc-500 italic">
              * ข้อมูลทางเทคนิคอ้างอิงตามมาตรฐานการผลิตสแตนเลส 316 สำหรับงานอุตสาหกรรมหนัก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
