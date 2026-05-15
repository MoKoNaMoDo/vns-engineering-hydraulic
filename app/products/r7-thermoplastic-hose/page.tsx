import ProductMenu from "@/components/about/ProductMenu";
import R7Hose from "@/components/products/สายR7 Thermoplastic Hose/R7Hose";
import R7SpecsTable from "@/components/products/สายR7 Thermoplastic Hose/R7SpecsTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "R7 Thermoplastic Hose - V.N.S Engineering Hydraulic",
  description: "สายไฮดรอลิคเทอร์โมพลาสติก R7 (SAE 100 R7) เป็นสายแรงดันปานกลาง (70-210 bar) โครงสร้างประกอบด้วยท่อชั้นในเทอร์โมพลาสติก",
};

export default function R7HosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8 h-fit">
          <R7Hose />
        </main>
      </section>

      {/* Full Width Specs Table Section (Separator style) */}
      <R7SpecsTable />

      <ContactSection />
    </div>


  );
}

