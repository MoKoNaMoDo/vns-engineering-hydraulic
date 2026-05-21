import ProductMenu from "@/components/about/ProductMenu";
import PipeService from "@/components/products/PipeService/PipeService";
import PipeServiceTable from "@/components/products/PipeService/PipeServiceTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "บริการตัดแป๊บอุตสาหกรรม - V.N.S Engineering Hydraulic",
  description: "บริการตัดแป๊บ ดัดท่อไฮดรอลิค และออกแบบงานตัดแปลงท่ออุตสาหกรรมทุกชนิด โดยทีมงานช่างผู้เชี่ยวชาญ รับทั้งงานด่วนและงานจำนวนมาก",
  keywords: [
    "บริการตัดแป๊บอุตสาหกรรม",
    "บริการตัดแป๊บ",
    "ดัดท่อไฮดรอลิค",
    "ตัดท่ออุตสาหกรรม",
    "ดัดแป๊บ",
    "งานท่ออุตสาหกรรม",
    "V.N.S Engineering",
  ],
};

export default function IndustrialPipeServicePage() {
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
            <PipeService />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <PipeServiceTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
