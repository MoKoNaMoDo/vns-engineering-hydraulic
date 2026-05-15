import ProductMenu from "@/components/about/ProductMenu";
import SectionText from "@/components/about/SectionText";
import ShopPhoto from "@/components/about/ShopPhoto";
import CompanyStrengths from "@/components/about/CompanyStrengths";
import ContactSection from "@/components/about/ContactSection";

const services = [
  "ผลิตหัวสาย (HOSE FITTINGS) ทุกประเภท ทั้งสแตนเลส เหล็ก และทองเหลือง",
  "จำหน่ายและประกอบ สายไฮดรอลิค (HYDRAULIC HOSE)",
  "จำหน่ายและประกอบ สายสแตนเลสถัก (STAINLESS STEEL FLEXIBLE HOSE)",
  "จำหน่ายและประกอบ สายเทฟลอน (PTFE HOSE)",
  "บริการประกอบสายตามแบบ (CUSTOM ASSEMBLY)",
  "ให้คำปรึกษาและออกแบบระบบสาย",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-8 md:grid-cols-[350px_1fr] lg:px-8">
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        <main className="pt-1">
          <div className="mb-16 inline-block rounded-xl bg-white px-8 py-3 text-4xl font-black text-black shadow-[10px_14px_22px_rgba(0,0,0,.45)] ring-1 ring-black/10">
            เกี่ยวกับเรา
          </div>

          <article className="mx-auto max-w-[900px] text-center">
            <h1 className="inline-block border-b border-[#cf2f2f] px-2 pb-1 text-4xl font-black tracking-tight text-black">
              V.N.S ENGINEERING HYDRAUIC CO.,LTD
            </h1>
            <div className="mt-9 space-y-2 text-[20px] font-medium leading-[1.38] text-black">
              <p>
                บริษัท วี.เอ็น.เอส วิศวกรรม ไฮดรอลิค จำกัด (VNS HYDRAULIC ENGINEERING) ก่อตั้งขึ้นในปี พ.ศ. 2542
              </p>
              <p>
                บริษัทเป็นผู้เชี่ยวชาญด้านงานวิศวกรรมไฮดรอลิค และงานผลิตชิ้นส่วนอุตสาหกรรม โดยเริ่มต้นจากโรงกลึงที่มุ่งเน้นการผลิตหัวสาย (FITTINGS) คุณภาพสูงจากวัสดุหลากหลายประเภท ได้แก่ สแตนเลส เหล็ก และทองเหลือง เพื่อรองรับความต้องการของลูกค้าในภาคอุตสาหกรรมชั้นนำของประเทศ
              </p>
              <p>
                ด้วยประสบการณ์ยาวนานกว่า 20 ปี บริษัทได้พัฒนาและขยายธุรกิจสู่การเป็นตัวแทนจำหน่ายและผู้ให้บริการระบบสายอุตสาหกรรมแบบครบวงจร ครอบคลุมทั้งงานจัดหา ออกแบบ และประกอบสายตามความต้องการเฉพาะของลูกค้า
              </p>
            </div>
          </article>

          <div className="mx-auto mt-10 grid max-w-[900px] gap-8 text-[20px] leading-[1.32] md:grid-cols-[1fr_400px] md:items-end">
            <div>
              <SectionText title="สินค้าและบริการหลัก" items={services} />
              <div className="mt-10">
                <h2 className="font-black">วิสัยทัศน์</h2>
                <p>
                  มุ่งสู่การเป็นผู้นำด้านงานระบบสายอุตสาหกรรมและงานไฮดรอลิคแบบครบวงจร ที่ลูกค้าไว้วางใจในคุณภาพและบริการ
                </p>
              </div>
              <div className="mt-10">
                <h2 className="font-black">พันธกิจ</h2>
                <p>•พัฒนาสินค้าและบริการให้ได้มาตรฐานอุตสาหกรรม</p>
                <p>•ส่งมอบงานที่มีคุณภาพ ตรงเวลา</p>
                <p>•สร้างความพึงพอใจสูงสุดให้กับลูกค้า</p>
              </div>
            </div>

            <ShopPhoto className="mx-auto w-full max-w-[400px]" />
          </div>
        </main>
      </section>

      <CompanyStrengths />
      <ContactSection />
    </div>
  );
}
