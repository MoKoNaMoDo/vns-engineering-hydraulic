import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "stainless-304",
    name: "หัวสายสแตนเลส 304",
    description: "หัวสายคุณภาพสูง ทนทานต่อการกัดกร่อน สำหรับงานอุตสาหกรรมและเคมี",
    image: "https://images.unsplash.com/photo-1530124560612-3bd9a1803750?q=80&w=1000&auto=format&fit=crop",
    count: 12
  },
  {
    id: "hydraulic-hoses",
    name: "สายไฮดรอลิค",
    description: "สายไฮดรอลิคแรงดันสูง หลากหลายขนาดตามมาตรฐาน SAE และ DIN",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
    count: 25
  },
  {
    id: "adapters",
    name: "ข้อต่อไฮดรอลิค",
    description: "ข้อต่อเหล็กและสแตนเลสหลากหลายรูปแบบ สำหรับงานติดตั้งระบบ",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
    count: 40
  },
  {
    id: "valves",
    name: "วาล์วและอุปกรณ์ควบคุม",
    description: "บอลวาล์ว เช็ควาล์ว และอุปกรณ์ควบคุมแรงดันคุณภาพสูง",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2070&auto=format&fit=crop",
    count: 15
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="relative py-32 bg-zinc-900 border-b border-white/5">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">สินค้าของเรา</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            เลือกสรรอุปกรณ์ไฮดรอลิคและข้อต่ออุตสาหกรรมคุณภาพสูงจากหมวดหมู่ต่างๆ ของเรา
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={`/products/${category.id}`}
                className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 flex items-end p-8"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full space-y-3">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold text-white rounded-full uppercase tracking-wider">
                    {category.count} รายการ
                  </span>
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-zinc-300 max-w-md group-hover:text-white transition-colors">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:translate-x-1 transition-transform">
                    เลือกดูสินค้า
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
