import ProductMenu from "@/components/about/ProductMenu";
import SteamHose from "@/components/products/Steam Hose/SteamHose";
import SteamHoseSpecsTable from "@/components/products/Steam Hose/SteamHoseSpecsTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "Steam Hose (สายสตีม) - V.N.S Engineering Hydraulic",
  description: "STEAM HOSE (สายไอน้ำ) ทนความร้อนสูง 170-210°C ทนแรงดัน 10-20 BAR เหมาะสำหรับระบบ Boiler งานอาหาร และเคมี",
};

export default function SteamHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8 h-fit">
          <SteamHose />
        </main>
      </section>

      {/* Full Width Specs Table Section */}
      <SteamHoseSpecsTable />

      <ContactSection />
    </div>
  );
}
