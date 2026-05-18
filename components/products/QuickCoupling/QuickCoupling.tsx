'use client';

import Link from "next/link";
import Image from "next/image";
import ProductTags from "@/components/products/ProductTags";

const tags = [
  "คัปปลิ้ง", "คัปปลิ้งน้ำมัน", "QUICK COUPLING"
];

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function QuickCoupling() {
  return (
    <section className="bg-white py-4">
      <style jsx>{`
        @keyframes slide-in-from-left {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-from-right {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-scale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-left { animation: slide-in-from-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slide-right { animation: slide-in-from-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-scale { animation: fade-in-scale 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          
          {/* Left Column: Image and Badges */}
          <div className="flex flex-col items-center lg:items-start animate-slide-left">
            <div className="relative w-full max-w-[480px]">
              {/* Detail Badge */}
              <div className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap animate-fade-scale" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <div className="rounded-xl bg-white px-6 py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 transition-transform hover:scale-105 cursor-default">
                  รายละเอียดสินค้า
                </div>
              </div>

              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#af0000] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/products/product/quick-couplings-types.png"
                    alt="QUICK COUPLING TYPES"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-4 flex justify-center animate-fade-scale" style={{ animationDelay: '0.6s', opacity: 0 }}>
                <Link href="/products/quick-coupling" className="bg-[#3b6db4] px-8 py-3 text-xl font-black text-white shadow-lg min-w-[200px] text-center transform transition- transition-all duration-300 hover:bg-[#af0000] hover:scale-105 cursor-pointer block text-center">ข้อต่อสวมเร็วไฮดรอลิก (Quick Coupling)</Link>
              </div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col animate-slide-right">
            <h1 className="relative inline-flex flex-col items-center lg:items-start text-4xl font-black text-zinc-900 self-center lg:self-start">
              <span>QUICK COUPLING</span>
              <div className="mt-2 h-1.5 w-48 bg-[#af0000]" />
            </h1>

            <div className="mt-8 space-y-6 text-center lg:text-left">
              <div className="space-y-4 text-xl font-bold text-zinc-800 leading-relaxed">
                <p className="text-2xl font-black text-[#af0000] lg:text-left">คุณสมบัติของ QUICK COUPLING (ข้อต่อสวมเร็ว)</p>
                <ul className="space-y-2 text-left text-lg font-medium text-zinc-700">
                  <li>1. เชื่อมต่อ-ถอดได้รวดเร็ว ไม่ต้องใช้เครื่องมือ</li>
                  <li>2. ลดเวลาการทำงาน เพิ่มประสิทธิภาพในระบบ</li>
                  <li>3. มีระบบล็อคอัตโนมัติ ป้องกันการหลุดระหว่างใช้งาน</li>
                  <li>4. ซีลแน่น ลดการรั่วซึม (LEAKAGE ต่ำ)</li>
                  <li>5. รองรับแรงดันได้ทั้งต่ำและสูง (ขึ้นอยู่กับรุ่น)</li>
                  <li>6. วัสดุหลากหลาย เช่น สแตนเลส เหล็ก ทองเหลือง</li>
                  <li>7. ใช้งานได้กับของไหลหลายประเภท เช่น น้ำ ลม น้ำมัน สารเคมี</li>
                </ul>
                <p className="text-xl font-black text-zinc-800 mt-4 lg:text-left">
                  บำรุงรักษาง่าย อายุการใช้งานยาวนาน
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <FacebookIcon size={24} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer">
                 <div className="flex flex-col items-center justify-center scale-75">
                    <span className="text-[10px] font-black leading-none">LINE</span>
                 </div>
              </div>
            </div>

            {/* Tags */}
            <ProductTags tags={tags} categoryHref="/products/quick-coupling" />
          </div>

        </div>
      </div>
    </section>
  );
}
