import ProductDetail from "@/components/products/ProductDetail";
import ProductSpecs from "@/components/products/ProductSpecs";
import ContactSection from "@/components/about/ContactSection";
import ProductMenu from "@/components/about/ProductMenu";

export default function Stainless304Page() {
  return (
    <div className="w-full bg-[#f8f3ee] text-[#1d1715]">
      {/* Upper Section: Menu + Product Detail */}
      <section className="bg-[#f7f3ef] px-5 py-12 md:pt-20 md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[380px_1fr] lg:items-start">
          <ProductMenu />
          <main className="overflow-hidden bg-white shadow-lg ring-1 ring-black/5">
            <ProductDetail />
          </main>
        </div>
      </section>

      {/* Middle Section: Full Width Product Specs */}
      <div className="bg-white">
        <ProductSpecs />
      </div>

      {/* Global Bottom Section */}
      <ContactSection />
    </div>
  );
}
