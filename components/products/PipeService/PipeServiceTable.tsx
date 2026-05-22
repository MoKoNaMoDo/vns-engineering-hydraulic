'use client';

const pipeServiceTableData = [
  {
    material: "Carbon Steel",
    size: '1/8" - 2"',
    pressure: "~3,000 - 6,000 psi (~207 - 414 bar)",
    type: "2-way, 3-way",
    note: "ใช้มากในงาน hydraulic high pressure; บางรุ่น high-pressure พิเศษถึง 7,250 psi (500 bar)"
  },
  {
    material: "Alloy Steel",
    size: '1/8" - 2"',
    pressure: "~5,000 - 7,500 psi (~345 - 517 bar)",
    type: "2-way, 3-way",
    note: "แข็งแรงกว่า carbon steel; เหมาะกับงาน hydraulic/industrial pressure สูงมาก"
  },
  {
    material: "304 / 316 Stainless Steel",
    size: '1/8" - 2"',
    pressure: "~1,000 - 6,000 psi (~69 - 414 bar)",
    type: "2-way, 3-way",
    note: "316SS ทนการกัดกร่อนสูง เหมาะกับน้ำ, น้ำทะเล, เคมี; รุ่น instrumentation มักอยู่ที่ ~1,000 psi แต่รุ่น heavy duty ถึง 6,000 psi"
  },
  {
    material: "Brass",
    size: '1/8" - 2"',
    pressure: "~600 - 1,000 psi (~40 - 69 bar)",
    type: "2-way, 3-way",
    note: "ใช้ในระบบทั่วไป (น้ำ, น้ำมันบางชนิด, อากาศ); ไม่เหมาะกับ hydraulic high pressure"
  }
];

export default function PipeServiceTable() {
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

      <div className="relative z-20 w-full py-16 px-4 md:px-12 flex flex-col items-center">
        <div className="mb-8 text-center max-w-[1200px] w-full">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            ตาราง — วัสดุและความสามารถรับแรงดันของ
            <span className="block mt-2 text-[#ff4d4d]">ท่อแป๊ปอุตสาหกรรม (ที่รับตัดและดัด)</span>
          </h2>
          <div className="mt-4 h-1.5 w-48 bg-[#af0000] mx-auto" />
        </div>

        <div className="w-full max-w-[1200px] overflow-hidden rounded-sm border-[4px] border-[#af0000] bg-white shadow-2xl">
          <div className="bg-[#af0000] px-6 py-3">
            <h4 className="text-white font-black text-lg uppercase flex items-center gap-3">
              TECHNICAL DATA SHEET - PIPE BENDING & CUTTING
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-center border-collapse text-[14px] font-bold">
              <thead>
                <tr className="bg-zinc-100 text-black border-b-2 border-zinc-300">
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 text-[#af0000] uppercase min-w-[180px]">วัสดุตัวเรือน </th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[120px]">ขนาด (Inch)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[220px]">ความสามารถรับแรงดัน (Typical)</th>
                  <th className="py-5 px-4 border-r border-zinc-300 bg-zinc-50 uppercase min-w-[180px]">ชนิดวาล์ว(2-way / 3-way )</th>
                  <th className="py-5 px-4 bg-zinc-50 uppercase min-w-[300px]">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                {pipeServiceTableData.map((row, idx) => (
                  <tr key={idx} className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-4 border-r border-zinc-200 font-black text-[#af0000] text-left">{row.material}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-900">{row.size}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 font-bold text-blue-700">{row.pressure}</td>
                    <td className="py-4 px-4 border-r border-zinc-200 text-zinc-800">{row.type}</td>
                    <td className="py-4 px-4 text-zinc-600 text-left leading-relaxed">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-200">
            <p className="text-[12px] text-zinc-500 italic">
              * ข้อมูลเบื้องต้นอ้างอิงตามมาตรฐานสากล ความดันใช้งานจริงอาจขึ้นอยู่กับอุณหภูมิและชนิดของสารไหลในระบบ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
