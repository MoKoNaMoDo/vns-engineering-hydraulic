import ProductMenu from "@/components/about/ProductMenu";
import HydraulicHoseDetail from "@/components/products/HydraulicHose/HydraulicHoseDetail";
import HydraulicHoseDetail2SN from "@/components/products/HydraulicHose/HydraulicHoseDetail2SN";
import HydraulicHoseDetail4SP from "@/components/products/HydraulicHose/HydraulicHoseDetail4SP";
import HydraulicHoseDetail4SH from "@/components/products/HydraulicHose/HydraulicHoseDetail4SH";
import ProductTags from "@/components/products/หัวสายสแตนเลส 304/ProductTags";
import ContactSection from "@/components/about/ContactSection";

const hydraulicHoseTags = [
  "HYDRAULIC HOSE",
  "สายไฮดรอลิคแรงดันสูง",
  "สายไฮดรอลิค 1/4",
  "สายไฮดรอลิค 1/2",
  "สายไฮดรอลิค 3/8",
  "สายไฮดรอลิค 1 นิ้ว",
  "สายไฮดรอลิคใกล้ฉัน",
  "4SP",
  "4SH",
  "4,000PSI",
  "3,000PSI",
];

export const metadata = {
  title: "Hydraulic Hose Catalog - V.N.S Engineering Hydraulic",
  description: "รายละเอียดสินค้า สายไฮดรอลิค 1SN, 2SN, 4SP และ 4SH DIN EN 853/856 พร้อมตารางสเป็คทางเทคนิคครบวงจร",
};

export default function HydraulicHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      {/* Hero Header */}
      {/* <div className="bg-zinc-900 py-12 text-center text-white">
        <h1 className="text-3xl font-black uppercase tracking-[0.2em] md:text-4xl">
          Product Specification
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 bg-[#af0000]" />
      </div> */}

      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 rounded-2xl bg-white p-2 shadow-xl md:p-6 lg:p-8">
          <HydraulicHoseDetail />
          <HydraulicHoseDetail2SN />
          <HydraulicHoseDetail4SP />
          <HydraulicHoseDetail4SH />

          <ProductTags tags={hydraulicHoseTags} />
        </main>
      </section>

      {/* Footer Contact Section for conversion */}
      <ContactSection />
    </div>
  );
}
