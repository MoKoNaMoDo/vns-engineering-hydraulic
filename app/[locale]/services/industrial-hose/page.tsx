import IndustrialHose from "@/components/Home/Services/IndustrialHose";
import ProductMenu from "@/components/about/ProductMenu";
import ContactSection from "@/components/about/ContactSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#dcdcdc] pt-24">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* Left Sidebar - Menu */}
          <div className="lg:sticky lg:top-28 order-2 lg:order-1">
            <ProductMenu />
          </div>

          {/* Right Content - Main */}
          <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-4 shadow-inner order-1 lg:order-2">
            <IndustrialHose />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20">
        <ContactSection />
      </div>
    </main>
  );
}
