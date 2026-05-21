import ProductDetail from "@/components/products/หัวสายสแตนเลส 304/ProductDetail";
import ProductSpecs from "@/components/products/หัวสายสแตนเลส 304/ProductSpecs";
import ContactSection from "@/components/about/ContactSection";
import ProductMenu from "@/components/about/ProductMenu";

export const metadata = {
  title: "หัวสายสแตนเลส 304/316 (Stainless Steel Fitting) - V.N.S Engineering Hydraulic",
  description: "จำหน่ายหัวสายสแตนเลส 304 และ 316 ครบทุกแบบ JIC, NPT, BSPT, FITTING ใช้กับงานไฮดรอลิคและงานอุตสาหกรรม คุณภาพสูง พร้อมส่ง",
  keywords: [
    "หัวสายสแตนเลส304",
    "หัวสายสแตนเลส316",
    "SUS304",
    "SUS316",
    "JIC MALE",
    "NPT MALE",
    "BSPT MALE",
    "FITTING",
    "หัวพ่นสี",
    "หัวสายงานพิเศษ",
    "หัวสายไฮดรอลิค",
    "ข้อต่อสแตนเลส",
    "V.N.S Engineering",
  ],
};

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
