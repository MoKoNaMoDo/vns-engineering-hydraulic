import ProductMenu from "@/components/about/ProductMenu";
import Toyox from "@/components/products/Toyox/Toyox";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "สาย TOYOX - V.N.S Engineering Hydraulic",
  description: "ท่ออ่อนเสริมโครงสร้าง วัสดุหลัก PVC เสริมแรง ลวดสปริง ทนอุณหภูมิ -5 ถึง 60C สายลม สายน้ำมัน สารเคมี สายอเนกประสงค์คุณภาพสูงจาก TOYOX",
  keywords: [
    "TOYOX",
    "โตโยกซ์",
    "สายยางอุตสาหกรรม",
    "สายดูด ส่งอาหาร",
    "สายดูดความร้อน",
    "ท่อยางอเนกประสงค์",
    "ท่อดูดทนเคมี",
    "สายยางอเนกประสงค์",
    "สายพ่นสี",
    "สายยางซิลิโคนทนความร้อน",
    "สายลำเลียงเม็ดพลาสติก",
    "V.N.S Engineering",
  ],
};

export default function ToyoxPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <ProductMenu />
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <Toyox />
          </div>
        </main>
      </section>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
