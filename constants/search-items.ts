export interface SearchItem {
  name: string;
  href: string;
  category: string;
  keywords: string[];
}

export const searchItems: SearchItem[] = [
  {
    name: "สายไฮดรอลิค (HYDRAULIC HOSE)",
    href: "/products/hydraulic-hose",
    category: "สินค้า",
    keywords: ["สายไฮดรอลิค", "ไฮดรอลิก", "hydraulic", "hose", "สายน้ำมัน", "แรงดันสูง"]
  },
  {
    name: "สายเทฟลอน PTFE (PTFE HOSE/TEFLON HOSE)",
    href: "/products/ptfe-teflon-hose",
    category: "สินค้า",
    keywords: ["สายเทฟลอน", "teflon", "ptfe", "สายทนความร้อน", "สายถักสแตนเลส", "r14"]
  },
  {
    name: "สายสแตนเลสถัก (STAINLESS STEEL FLEXIBLE HOSE)",
    href: "/products/stainless-steel-flexible-hose",
    category: "สินค้า",
    keywords: ["สแตนเลส", "สายถัก", "flexible", "hose", "ท่ออ่อน", "สายน้ำร้อน", "สแตนเลสถัก"]
  },
  {
    name: "หัวสายสแตนเลส 304 (Stainless 304)",
    href: "/products/stainless-304",
    category: "สินค้า",
    keywords: ["สแตนเลส", "หัวสาย", "304", "stainless", "ข้อต่อสแตนเลส"]
  },
  {
    name: "สายเทอร์โมพลาสติก (R7-THERMOPLASTIC HOSE)",
    href: "/products/r7-thermoplastic-hose",
    category: "สินค้า",
    keywords: ["เทอร์โมพลาสติก", "r7", "thermoplastic", "hose"]
  },
  {
    name: "สายส่งไอน้ำ (STEAM HOSE)",
    href: "/products/steam-hose",
    category: "สินค้า",
    keywords: ["สายไอน้ำ", "steam", "hose", "ท่อส่งไอน้ำ", "ท่อไอน้ำ"]
  },
  {
    name: "สายอุตสาหกรรม TOYOX",
    href: "/products/toyox",
    category: "สินค้า",
    keywords: ["toyox", "โตโยกซ์", "สายอุตสาหกรรม", "ท่อลม", "ท่อน้ำ"]
  },
  {
    name: "สายอุตสาหกรรม (INDUSTRIAL HOSE)",
    href: "/products/industrial-hose",
    category: "สินค้า",
    keywords: ["industrial", "hose", "สายลม", "สายน้ำ", "ท่อส่งน้ำ", "ท่อลม"]
  },
  {
    name: "ข้อต่อท่อ (TUBE FITTINGS)",
    href: "/products/tube-fittings",
    category: "สินค้า",
    keywords: ["ข้อต่อ", "fitting", "tube", "ทองเหลือง", "ตาไก่", "ข้อต่อตาไก่"]
  },
  {
    name: "ข้อต่อสวมเร็ว Camlock (CAMLOCK COUPLING)",
    href: "/products/camlock-coupling",
    category: "สินค้า",
    keywords: ["camlock", "coupling", "ข้อต่อสวมเร็ว", "แคมล็อค", "สวมเร็ว"]
  },
  {
    name: "ข้อต่อสวมเร็ว Quick (QUICK COUPLING)",
    href: "/products/quick-coupling",
    category: "สินค้า",
    keywords: ["quick", "coupling", "ข้อต่อสวมเร็ว", "ควิก", "ควิกคอปปิ้ง"]
  },
  {
    name: "บอลวาล์วไฮดรอลิค (HYDRAULIC BALL VALVE)",
    href: "/products/hydraulic-ball-valve",
    category: "สินค้า",
    keywords: ["บอลวาล์ว", "valve", "hydraulic", "ball", "วาล์วไฮดรอลิค"]
  },
  {
    name: "บริการตัดแป๊ป อุตสาหกรรม",
    href: "/products/industrial-pipe-service",
    category: "บริการ",
    keywords: ["ตัดแป๊ป", "อุตสาหกรรม", "pipe", "service", "ดัดแป๊ป", "ดัดท่อ"]
  },
  {
    name: "เกี่ยวกับเรา (About Us)",
    href: "/about",
    category: "หน้าเพจ",
    keywords: ["เกี่ยวกับเรา", "ประวัติ", "บริษัท", "vns", "about"]
  },
  {
    name: "ติดต่อเรา (Contact Us)",
    href: "/contact",
    category: "หน้าเพจ",
    keywords: ["ติดต่อเรา", "เบอร์โทร", "แผนที่", "ที่อยู่", "contact", "email"]
  },
  {
    name: "หน้าหลัก (Home)",
    href: "/",
    category: "หน้าเพจ",
    keywords: ["หน้าแรก", "หน้าหลัก", "home"]
  }
];
