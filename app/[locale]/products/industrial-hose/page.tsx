import ProductMenu from "@/components/about/ProductMenu";
import IndustrialHoseOSD150 from "@/components/products/Industrial Hose/IndustrialHoseOSD150";
import IndustrialHoseOSD150Specs from "@/components/products/Industrial Hose/IndustrialHoseOSD150Specs";
import IndustrialHoseAH300 from "@/components/products/Industrial Hose/IndustrialHoseAH300";
import IndustrialHoseAH300Specs from "@/components/products/Industrial Hose/IndustrialHoseAH300Specs";
import IndustrialHoseCSD150 from "@/components/products/Industrial Hose/IndustrialHoseCSD150";
import IndustrialHoseCSD150Specs from "@/components/products/Industrial Hose/IndustrialHoseCSD150Specs";
import IndustrialHoseWSD150 from "@/components/products/Industrial Hose/IndustrialHoseWSD150";
import IndustrialHoseWSD150Specs from "@/components/products/Industrial Hose/IndustrialHoseWSD150Specs";
import IndustrialHoseDH300 from "@/components/products/Industrial Hose/IndustrialHoseDH300";
import IndustrialHoseDH300Specs from "@/components/products/Industrial Hose/IndustrialHoseDH300Specs";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Industrial Hose (สายยางอุตสาหกรรม) - V.N.S Engineering Hydraulic",
  description: "SUNFLEX Industrial Hose Collection: OSD150, AH300, CSD150, WSD150, DH300. High-quality industrial hoses for oil, air, water, cement, and bunkering applications.",
  keywords: [
    "INDUSTRIAL HOSE",
    "สายยางอุตสาหกรรม",
    "SUNFLEX OSD150",
    "ท่อดูดส่งน้ำมัน",
    "OIL SUCTION HOSE",
    "ท่อทนน้ำมัน",
    "SUNFLEX AH300",
    "AIR HOSE",
    "WATER HOSE",
    "ท่อลม",
    "ท่อน้ำ",
    "SUNFLEX CSD150",
    "CEMENT HOSE",
    "ท่อดูดส่งซีเมนต์",
    "ท่อส่งทราย",
    "SUNFLEX WSD150",
    "ท่อดูดน้ำ",
    "ท่อส่งน้ำเสีย",
    "SUNFLEX DH300",
    "BUNKERING HOSE",
    "ท่อเรือ",
    "HEAVY DUTY HOSE",
    "V.N.S Engineering",
  ],
};

export default function IndustrialHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* --- OSD150 Section (With Sidebar) --- */}
      <section id="osd150" className="mx-auto grid max-w-[1400px] gap-8 px-4 pt-12 pb-6 md:grid-cols-[350px_1fr] lg:px-8 scroll-mt-24">
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <ProductMenu />
          </div>
        </aside>
        <main className="flex flex-col h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <IndustrialHoseOSD150 />
          </div>
        </main>
      </section>
      {/* Full Width Cut Table */}
      <IndustrialHoseOSD150Specs />

      {/* --- AH300 Section (Spacer aside to maintain alignment) --- */}
      <section id="ah300" className="mx-auto grid max-w-[1400px] gap-8 px-4 pt-12 pb-6 md:grid-cols-[350px_1fr] lg:px-8 scroll-mt-24">
        <aside className="hidden md:block" aria-hidden="true" /> {/* Empty spacer */}
        <main className="flex flex-col h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <IndustrialHoseAH300 />
          </div>
        </main>
      </section>
      <IndustrialHoseAH300Specs />

      {/* --- CSD150 Section --- */}
      <section id="csd150" className="mx-auto grid max-w-[1400px] gap-8 px-4 pt-12 pb-6 md:grid-cols-[350px_1fr] lg:px-8 scroll-mt-24">
        <aside className="hidden md:block" aria-hidden="true" />
        <main className="flex flex-col h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <IndustrialHoseCSD150 />
          </div>
        </main>
      </section>
      <IndustrialHoseCSD150Specs />

      {/* --- WSD150 Section --- */}
      <section id="wsd150" className="mx-auto grid max-w-[1400px] gap-8 px-4 pt-12 pb-6 md:grid-cols-[350px_1fr] lg:px-8 scroll-mt-24">
        <aside className="hidden md:block" aria-hidden="true" />
        <main className="flex flex-col h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <IndustrialHoseWSD150 />
          </div>
        </main>
      </section>
      <IndustrialHoseWSD150Specs />

      {/* --- DH300 Section --- */}
      <section id="dh300" className="mx-auto grid max-w-[1400px] gap-8 px-4 pt-12 pb-6 md:grid-cols-[350px_1fr] lg:px-8 scroll-mt-24">
        <aside className="hidden md:block" aria-hidden="true" />
        <main className="flex flex-col h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <IndustrialHoseDH300 />
          </div>
        </main>
      </section>
      <IndustrialHoseDH300Specs />

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
