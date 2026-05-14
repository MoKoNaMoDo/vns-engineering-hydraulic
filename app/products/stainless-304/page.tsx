import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "hose-end-01",
    name: "หัวสายสแตนเลส 304 เกลียวนอก (BSP)",
    sku: "VNS-SS-001",
    price: "450 - 1,200 ฿",
    image: "https://images.unsplash.com/photo-1530124560612-3bd9a1803750?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "hose-end-02",
    name: "หัวสายสแตนเลส 304 เกลียวใน (JIC)",
    sku: "VNS-SS-002",
    price: "480 - 1,500 ฿",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hose-end-03",
    name: "ข้อต่อสแตนเลส 304 งอ 90 องศา",
    sku: "VNS-SS-003",
    price: "600 - 2,500 ฿",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "hose-end-04",
    name: "หัวสายสแตนเลส 304 แบบสวมเร็ว",
    sku: "VNS-SS-004",
    price: "900 - 3,200 ฿",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Stainless304Page() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="relative py-24 bg-zinc-900/50 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-zinc-500 mb-6 text-sm">
            <Link href="/products" className="hover:text-white">สินค้า</Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">หัวสายสแตนเลส 304</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">หัวสายสแตนเลส 304</h1>
          <p className="mt-4 text-zinc-400 max-w-3xl leading-relaxed">
            หัวสายและข้อต่อสแตนเลสเกรด 304 คุณภาพสูง ทนทานต่อการกัดกร่อนจากสารเคมีและความชื้น 
            เหมาะสำหรับการใช้งานในอุตสาหกรรมอาหาร เคมี และระบบไฮดรอลิคที่ต้องการความสะอาดและความทนทานเป็นพิเศษ
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-zinc-800">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{product.sku}</span>
                  <h3 className="font-bold text-white leading-tight h-12 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-blue-500 font-bold">{product.price}</span>
                    <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">สนใจสินค้าหรือต้องการขนาดพิเศษ?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            เราสามารถจัดหาหัวสายสแตนเลส 304 ขนาดพิเศษและเกรดอื่นๆ (เช่น 316) ตามความต้องการของคุณ 
            ติดต่อทีมขายของเราเพื่อขอใบเสนอราคา
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-zinc-100 transition-colors">
            ติดต่อสอบถามตอนนี้
          </Link>
        </div>
      </section>
    </div>
  );
}
