import ProductMenu from "@/components/about/ProductMenu";
import QuickCoupling from "@/components/products/QuickCoupling/QuickCoupling";
import QuickCouplingTable from "@/components/products/QuickCoupling/QuickCouplingTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Quick Coupling ข้อต่อสวมเร็ว - V.N.S Engineering Hydraulic",
  description: "จำหน่ายข้อต่อสวมเร็ว (Quick Coupling) หลากหลายวัสดุ ทั้งสแตนเลส ทองเหลือง เหล็ก และอลูมิเนียม สำหรับงานอุตสาหกรรมทุกประเภท",
  keywords: [
    "คัปปลิ้ง",
    "คัปปลิ้งน้ำมัน",
    "QUICK COUPLING",
    "ข้อต่อสวมเร็ว",
    "ควิกคัปปลิ้ง",
    "Quick Disconnect",
    "คัปปลิ้งไฮดรอลิค",
    "V.N.S Engineering",
  ],
};

export default function QuickCouplingPage() {
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
            <QuickCoupling />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <QuickCouplingTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
