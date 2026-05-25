import ProductMenu from "@/components/about/ProductMenu";
import Camlock from "@/components/products/Camlock/Camlock";
import CamlockTable from "@/components/products/Camlock/CamlockTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Camlock Coupling ข้อต่อแคมล็อค - V.N.S Engineering Hydraulic",
  description: "จำหน่ายข้อต่อแคมล็อค (Camlock Coupling) หลากหลายวัสดุ ทั้งสแตนเลส อลูมิเนียม ทองเหลือง และพีพี สำหรับงานลำเลียงของไหลอุตสาหกรรม",
  keywords: [
    "CAMLOCK",
    "KAMLOK",
    "ข้อต่อแคมล็อค",
    "STAINLESS CAMLOCK",
    "ALUMINIUM CAMLOCK",
    "ข้อต่อสวมเร็ว",
    "แคมล็อคทองเหลือง",
    "แคมล็อค PP",
    "Camlock Coupling",
    "V.N.S Engineering",
  ],
};

export default function CamlockPage() {
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
            <Camlock />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <CamlockTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
