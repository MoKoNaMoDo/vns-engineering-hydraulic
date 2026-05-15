'use client';

const products = [
  { name: "หัวสายสแตนเลส 304", image: "" },
  { name: "HYDRAULIC HOSE", image: "" },
  { name: "STAINLESS STEEL FLEXIBLE HOSE", image: "" },
  { name: "PTFE HOSE/TEFLON HOSE", image: "" },
  { name: "R7-THERMOPLASTIC HOSE", image: "" },
  { name: "STEAM HOSE", image: "" },
  { name: "TOYOX", image: "" },
  { name: "INDUSTRIAL HOSE", image: "" },
  { name: "TUBE FITTINGS", image: "" },
  { name: "CAMLOCK COUPLING", image: "" },
  { name: "QUICK COUPLING", image: "" },
  { name: "HYDRAULIC BALL VALVE", image: "" },
  { name: "บริการดัดแป๊ปอุตสาหกรรม", image: "" },
];

export default function ProductGrid() {

  // ฟังก์ชันแยกตัวอักษรให้ค่อยๆ ลอยขึ้นมาทีละตัว
  // เพิ่มพารามิเตอร์ speed เพื่อปรับความเร็วให้เข้ากับแต่ละจุด
  const renderAnimatedLetters = (text, delayOffset = 0, speed = 0.04) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="animate-letter inline-block opacity-0"
        style={{ animationDelay: `${delayOffset + index * speed}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="bg-[#dcdcdc] py-16 overflow-hidden font-sans">

      {/* 🔴 CSS Animation */}
      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLetterUp {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* แอนิเมชันสำหรับตัวอักษรทีละตัว */
        .animate-letter {
          animation: floatLetterUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        /* แอนิเมชันสำหรับกล่องรูปภาพ */
        .animate-image-box {
          opacity: 0;
          animation: floatUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-4">

        {/* Header - ให้ลอยมาทีละตัวแบบเดิม */}
        <div className="mb-14 text-center">
          <h2 className="inline-block border-b-4 border-black pb-2 text-4xl font-black uppercase tracking-widest text-black">
            {renderAnimatedLetters("PRODUCTS", 0, 0.05)}
          </h2>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {products.map((product, index) => {
            // คำนวณเวลาเริ่มต้นของแต่ละการ์ด (ไล่ลำดับทีละ 0.1s)
            const cardDelay = 0.3 + index * 0.1;
            // ให้ตัวหนังสือเริ่มลอยมาหลังจากรูปภาพเริ่มแสดงไปแล้ว 0.3 วินาที
            const textDelay = cardDelay + 0.3;

            return (
              <div
                key={product.name}
                className="flex w-[160px] flex-col items-center sm:w-[200px] lg:w-[210px]"
              >
                {/* 1. Product Image Box (ลอยมาก่อน) */}
                <div
                  className="animate-image-box group relative aspect-square w-full overflow-hidden border-[3px] border-dashed border-[#ff0000] bg-white p-2 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-solid hover:border-[#af0000] hover:shadow-2xl cursor-pointer"
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-[10px] font-bold text-zinc-400 transition-colors group-hover:bg-zinc-50">
                    [IMAGE]
                  </div>
                </div>

                {/* 2. Product Label (ตัวหนังสือลอยตามมาทีละตัว) */}
                <h3 className="mt-5 w-full text-center text-[13px] font-bold uppercase tracking-normal leading-snug text-[#6b2525] transition-colors duration-300 md:text-[15px]">
                  {/* เรียกใช้ฟังก์ชันแยกตัวอักษร และส่งค่า delay เริ่มต้นของข้อความไป */}
                  {renderAnimatedLetters(product.name, textDelay, 0.02)}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}