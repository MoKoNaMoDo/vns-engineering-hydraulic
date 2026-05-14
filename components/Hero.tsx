import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-blue-900/10 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Engineering Backdrop"
          fill
          className="object-cover object-center grayscale hover:scale-105 transition-transform duration-10000"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left w-full">
        <div className="max-w-2xl">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 animate-in fade-in slide-in-from-left duration-700">
            Professional Engineering Solutions
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-left duration-1000 delay-100">
            V.N.S. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ENGINEERING</span> HYDRAULIC
          </h1>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200">
            ผู้นำเข้าและจัดจำหน่ายอุปกรณ์ไฮดรอลิค ข้อต่ออุตสาหกรรม และหัวสายสแตนเลส 304 
            มาตรฐานสากล สำหรับงานอุตสาหกรรมทุกรูปแบบ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 text-center shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              ดูสินค้าทั้งหมด
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-center border border-white/10"
            >
              ติดต่อสอบถาม
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-zinc-500">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
