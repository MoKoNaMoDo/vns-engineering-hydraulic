import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              V.N.S. <span className="text-blue-500">ENGINEERING</span> HYDRAULIC
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              จำหน่ายอุปกรณ์ไฮดรอลิคและข้อต่ออุตสาหกรรมคุณภาพสูง พร้อมบริการให้คำปรึกษาโดยผู้เชี่ยวชาญ
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">เมนู</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">หน้าหลัก</Link></li>
              <li><Link href="/products" className="text-sm text-zinc-400 hover:text-white transition-colors">สินค้า</Link></li>
              <li><Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">ติดต่อเรา</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">ติดต่อเรา</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-zinc-400">เลขที่ 123 ถนนอุตสาหกรรม, กรุงเทพฯ 10000</li>
              <li className="text-sm text-zinc-400">โทร: 02-xxx-xxxx</li>
              <li className="text-sm text-zinc-400">Email: contact@vns-engineering.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} V.N.S. Engineering Hydraulic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
