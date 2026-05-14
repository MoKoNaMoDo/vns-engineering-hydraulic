import ProductMenu from "@/components/about/ProductMenu";
import StainlessSteelFlexibleHoseIntro from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseIntro";
import StainlessSteelFlexibleHoseSpecTable from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseSpecTable";
import StainlessSteelFlexibleHoseDetail from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseDetail";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Stainless Steel Flexible Hose - V.N.S Engineering Hydraulic",
  description: "รายละเอียดสินค้า ท่ออ่อนสแตนเลส Stainless Steel Flexible Hose ทนความร้อนสูง -200°C ถึง 400°C",
};

export default function StainlessSteelFlexibleHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* Container for Side-by-Side Layout */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          {/* Left Sidebar Menu */}
          <aside className="hidden md:block">
            <ProductMenu />
          </aside>

          {/* Right Content Area */}
          <div className="flex flex-col gap-8">
            
            {/* 1. Custom Options (Flanges & Fittings) - MOVED TO TOP */}
            <main className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12">
              <StainlessSteelFlexibleHoseDetail />
            </main>

            {/* 2. General Introduction */}
            <section className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12 border-t border-zinc-100">
              <StainlessSteelFlexibleHoseIntro />
            </section>

          </div>
        </div>
      </div>

      {/* 3. Technical Spec Table (Separator) */}
      <div className="mt-12">
        <StainlessSteelFlexibleHoseSpecTable />
      </div>

      {/* Footer Contact Section */}
      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
