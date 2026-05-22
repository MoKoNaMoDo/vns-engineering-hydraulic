import ProductMenu from "@/components/about/ProductMenu";
import BallValve from "@/components/products/BallValve/BallValve";
import BallValveTable from "@/components/products/BallValve/BallValveTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Hydraulic Ball Valve วาล์วบอลไฮดรอลิก - V.N.S Engineering Hydraulic",
  description: "จำหน่ายวาล์วบอลไฮดรอลิก (Hydraulic Ball Valve) แรงดันสูง หลากหลายวัสดุ ทั้ง Carbon Steel, Stainless Steel และ Brass สำหรับงานอุตสาหกรรม",
  keywords: [
    "BALL VALVE",
    "BALL VALVE STAINLESS STEEL",
    "บอลวาล์ว",
    "บอลวาล์วไฮดรอลิค",
    "วาล์วบอลสแตนเลส",
    "วาล์วบอล Carbon Steel",
    "วาล์วบอล Brass",
    "วาล์วอุตสาหกรรม",
    "V.N.S Engineering",
  ],
};

export default function BallValvePage() {
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
            <BallValve />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <BallValveTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
