export interface SearchItemDef {
  nameKey: string;
  href: string;
  keywords: string[];
}

export const searchItemDefs: SearchItemDef[] = [
  { nameKey: "hydraulicHose", href: "/products/hydraulic-hose", keywords: ["สายไฮดรอลิค", "ไฮดรอลิก", "hydraulic", "hose", "สายน้ำมัน", "แรงดันสูง"] },
  { nameKey: "ptfeHose", href: "/products/ptfe-teflon-hose", keywords: ["สายเทฟลอน", "teflon", "ptfe", "สายทนความร้อน", "สายถักสแตนเลส", "r14"] },
  { nameKey: "stainlessFlexible", href: "/products/stainless-steel-flexible-hose", keywords: ["สแตนเลส", "สายถัก", "flexible", "hose", "ท่ออ่อน", "สายน้ำร้อน", "สแตนเลสถัก"] },
  { nameKey: "stainless304", href: "/products/stainless-304", keywords: ["สแตนเลส", "หัวสาย", "304", "stainless", "ข้อต่อสแตนเลส"] },
  { nameKey: "r7Hose", href: "/products/r7-thermoplastic-hose", keywords: ["เทอร์โมพลาสติก", "r7", "thermoplastic", "hose"] },
  { nameKey: "steamHose", href: "/products/steam-hose", keywords: ["สายไอน้ำ", "steam", "hose", "ท่อส่งไอน้ำ", "ท่อไอน้ำ"] },
  { nameKey: "toyox", href: "/products/toyox", keywords: ["toyox", "โตโยกซ์", "สายอุตสาหกรรม", "ท่อลม", "ท่อน้ำ"] },
  { nameKey: "industrialHose", href: "/products/industrial-hose", keywords: ["industrial", "hose", "สายลม", "สายน้ำ", "ท่อส่งน้ำ", "ท่อลม"] },
  { nameKey: "tubeFittings", href: "/products/tube-fittings", keywords: ["ข้อต่อ", "fitting", "tube", "ทองเหลือง", "ตาไก่", "ข้อต่อตาไก่"] },
  { nameKey: "camlock", href: "/products/camlock-coupling", keywords: ["camlock", "coupling", "ข้อต่อสวมเร็ว", "แคมล็อค", "สวมเร็ว"] },
  { nameKey: "quickCoupling", href: "/products/quick-coupling", keywords: ["quick", "coupling", "ข้อต่อสวมเร็ว", "ควิก", "ควิกคอปปิ้ง"] },
  { nameKey: "ballValve", href: "/products/hydraulic-ball-valve", keywords: ["บอลวาล์ว", "valve", "hydraulic", "ball", "วาล์วไฮดรอลิค"] },
  { nameKey: "pipeService", href: "/products/industrial-pipe-service", keywords: ["ตัดแป๊ป", "อุตสาหกรรม", "pipe", "service", "ดัดแป๊ป", "ดัดท่อ"] },
  { nameKey: "about", href: "/about", keywords: ["เกี่ยวกับเรา", "ประวัติ", "บริษัท", "vns", "about"] },
  { nameKey: "contact", href: "/contact", keywords: ["ติดต่อเรา", "เบอร์โทร", "แผนที่", "ที่อยู่", "contact", "email"] },
  { nameKey: "home", href: "/", keywords: ["หน้าแรก", "หน้าหลัก", "home"] },
];
