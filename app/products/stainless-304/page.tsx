import ProductDetail from "@/components/products/ProductDetail";
import ProductSpecs from "@/components/products/ProductSpecs";
import ContactSection from "@/components/about/ContactSection";
import ProductMenu from "@/components/about/ProductMenu";

export default function Stainless304Page() {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* Upper Section: Menu + Product Detail */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr] lg:items-start">
          <aside className="hidden md:block">
            <ProductMenu />
          </aside>
          <main className="overflow-hidden bg-white shadow-xl ring-1 ring-black/5 rounded-2xl">
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
