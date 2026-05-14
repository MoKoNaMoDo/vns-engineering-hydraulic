import ProductMenu from "@/components/about/ProductMenu";
import PTFETeflonHoseDetail from "@/components/products/PTFETeflonHose/PTFETeflonHoseDetail";
import PTFEConvolutedDetail from "@/components/products/PTFETeflonHose/PTFEConvolutedDetail";
import PTFETeflonHoseSpecTable from "@/components/products/PTFETeflonHose/PTFETeflonHoseSpecTable";
import PTFEConvolutedSpecTable from "@/components/products/PTFETeflonHose/PTFEConvolutedSpecTable";
import ContactSection from "@/components/about/ContactSection";

export const metadata = {
  title: "PTFE Teflon Hose R14 - V.N.S Engineering Hydraulic",
  description: "รายละเอียดสินค้า สายเทปลอน PTFE Teflon Hose R14 ทนเคมีและทนความร้อนสูง",
};

export default function PTFETeflonHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* Hero Header */}
      {/* <div className="bg-zinc-900 py-12 text-center text-white">
        <h1 className="text-3xl font-black uppercase tracking-[0.2em] md:text-4xl">
          Product Specification
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 bg-[#af0000]" />
      </div> */}

      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          {/* Left Sidebar Menu */}
          <aside className="hidden md:block">
            <ProductMenu />
          </aside>

          {/* Right Content Area (Detail 1: Standard PTFE) */}
          <main className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12">
            <PTFETeflonHoseDetail />
          </main>
        </div>
      </div>

      {/* Full Width Background Section for Technical Table 1 (Standard PTFE) */}
      <PTFETeflonHoseSpecTable />

      {/* Second Product Detail (Detail 2: Convoluted PTFE) */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          <div className="hidden md:block opacity-0 pointer-events-none">
            <ProductMenu />
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12">
            <PTFEConvolutedDetail />
          </div>
        </div>
      </div>

      {/* Full Width Background Section for Technical Table 2 (Convoluted PTFE) */}
      <PTFEConvolutedSpecTable />

      {/* Footer Contact Section */}
      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
