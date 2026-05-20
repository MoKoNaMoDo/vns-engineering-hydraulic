import ProductMenu from "@/components/about/ProductMenu";
import HydraulicHoseDetail from "@/components/products/HydraulicHose/HydraulicHoseDetail";
import HydraulicHoseDetail2SN from "@/components/products/HydraulicHose/HydraulicHoseDetail2SN";
import HydraulicHoseDetail4SP from "@/components/products/HydraulicHose/HydraulicHoseDetail4SP";
import HydraulicHoseDetail4SH from "@/components/products/HydraulicHose/HydraulicHoseDetail4SH";
import ProductTags from "@/components/products/หัวสายสแตนเลส 304/ProductTags";
import ContactSection from "@/components/about/ContactSection";
import ViewCounter from "@/components/ViewCounter";

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
  title: "สายไฮดรอลิคแรงดันสูง (Hydraulic Hose) มาตรฐาน DIN | V.N.S Engineering",
  description: "จำหน่ายสายไฮดรอลิคคุณภาพสูง 1SN, 2SN, 4SP, 4SH มาตรฐาน DIN EN 853/856 ทนแรงดันสูง บริการประกอบหัวสายตามสั่ง ส่งตรงทั่วประเทศไทย",
  keywords: [
    "HYDRAULIC HOSE",
    "สายไฮดรอลิคแรงดันสูง",
    "สายไฮดรอลิค 1/4",
    "สายไฮดรอลิค 1/2",
    "สายไฮดรอลิค 3/8",
    "สายไฮดรอลิค 1 นิ้ว",
    "สายไฮดรอลิคใกล้ฉัน",
    "ประกอบสายไฮดรอลิค",
    "4SP DIN EN 856",
    "4SH DIN EN 856",
    "3,000PSI",
    "4,000PSI",
    "V.N.S Engineering Hydraulic"
  ],
};

export default function HydraulicHosePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "สายไฮดรอลิคแรงดันสูง (Hydraulic Hose) V.N.S Engineering",
    "image": "https://vns-engineering.com/products/products/HYDRAULIC%20HOSE.png",
    "description": "จำหน่ายและประกอบสายไฮดรอลิคแรงดันสูง 1SN, 2SN, 4SP, 4SH มาตรฐาน DIN EN 853/856 คุณภาพสูง ทนแรงดันสูง 3000-4000 PSI",
    "brand": {
      "@type": "Brand",
      "name": "V.N.S Engineering"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "THB",
      "lowPrice": "0",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="flex justify-end px-2 sm:px-4">
            <ViewCounter slug="hydraulic-hose" mode="increment" />
          </div>
          <div id="1sn" className="scroll-mt-24">
            <HydraulicHoseDetail />
          </div>
          <div id="2sn" className="scroll-mt-24">
            <HydraulicHoseDetail2SN />
          </div>
          <div id="4sp" className="scroll-mt-24">
            <HydraulicHoseDetail4SP />
          </div>
          <div id="4sh" className="scroll-mt-24">
            <HydraulicHoseDetail4SH />
          </div>

          <ProductTags tags={hydraulicHoseTags} />
        </main>
      </section>

      {/* Footer Contact Section for conversion */}
      <ContactSection />
    </div>
  );
}
