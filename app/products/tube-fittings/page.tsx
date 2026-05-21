import ProductMenu from "@/components/about/ProductMenu";
import TubeFittings from "@/components/products/TubeFittings/TubeFittings";
import TubeFittingsTable from "@/components/products/TubeFittings/TubeFittingsTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Tube Fittings / Instrument Fittings - V.N.S Engineering Hydraulic",
  description: "จำหน่ายข้อต่อท่อ (Tube Fittings) และข้อต่อเครื่องมือวัด (Instrument Fittings) คุณภาพสูง สำหรับระบบน้ำมัน ก๊าซ และปิโตรเคมี",
  keywords: [
    "ข้อต่อสแตนเลส",
    "ฟิตติ้งสแตนเลส",
    "FITTING",
    "ข้อต่อตาไก่",
    "BITE TYPE FITTINGS",
    "JISB2351",
    "Tube Fittings",
    "Instrument Fittings",
    "ข้อต่อท่อสแตนเลส",
    "ข้อต่อปิโตรเคมี",
    "V.N.S Engineering",
  ],
};

export default function TubeFittingsPage() {
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
            <TubeFittings />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <TubeFittingsTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
