import Image from "next/image";

export default function ShopPhoto({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden border-2 border-[#9b0004] bg-[#f1e7dd] ${className ?? ""}`}>
      <Image
        src="/43740.jpg"
        alt="ภาพตัวอย่างหน้าร้านและสินค้า V.N.S Engineering Hydraulic"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 400px, 100vw"
      />
      <div className="absolute inset-x-0 top-0 bg-[#b23a23]/90 py-1 text-center text-sm font-black text-[#ffe7d2]">
        วี เอ็น เอส วิศวกรรมไฮดรอลิค
      </div>
    </div>
  );
}
