import Image from "next/image";
import Link from "next/link";
import ProductMenu from "@/components/about/ProductMenu";
import SectionText from "@/components/about/SectionText";
import ShopPhoto from "@/components/about/ShopPhoto";
import { MailIcon, PhoneIcon } from "@/components/about/Icons";
import Navbar from "@/components/Navbar";

const services = [
  "ผลิตหัวสาย (HOSE FITTINGS) ทุกประเภท ทั้งสแตนเลส เหล็ก และทองเหลือง",
  "จำหน่ายและประกอบ สายไฮดรอลิค (HYDRAULIC HOSE)",
  "จำหน่ายและประกอบ สายสแตนเลสถัก (STAINLESS STEEL FLEXIBLE HOSE)",
  "จำหน่ายและประกอบ สายเทฟลอน (PTFE HOSE)",
  "บริการประกอบสายตามแบบ (CUSTOM ASSEMBLY)",
  "ให้คำปรึกษาและออกแบบระบบสาย",
];

const strengths = [
  "ประสบการณ์ยาวนานตั้งแต่ปี 2542",
  "ผลิตและประกอบงานเอง ควบคุมคุณภาพได้ทุกขั้นตอน",
  "รองรับงานสั่งทำตามแบบ (MADE-TO-ORDER)",
  "สินค้าคุณภาพ รองรับงานอุตสาหกรรมหนักและงานเฉพาะทาง",
  "ให้บริการรวดเร็ว ตอบโจทย์ลูกค้าโรงงาน",
];

const industries = [
  "อุตสาหกรรมเครื่องจักรกลหนัก",
  "อุตสาหกรรมอาหารและเครื่องดื่ม",
  "อุตสาหกรรมยาและเคมี",
  "ระบบไอน้ำ และงานพลังงาน",
  "อุตสาหกรรมทั่วไป",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-8 md:grid-cols-[374px_1fr] lg:px-8">
        <ProductMenu />

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

      <section className="bg-[#dedede] py-8">
        <div className="mx-auto grid max-w-[1060px] gap-8 px-4 md:grid-cols-[390px_1fr] md:items-center">
          <ShopPhoto className="w-full" />
          <div className="grid gap-8 text-[18px] font-medium leading-[1.35] md:grid-cols-[1fr_300px] md:items-end">
            <div>
              <h2 className="font-black">จุดเด่นของบริษัท</h2>
              {strengths.map((item) => (
                <p key={item}>•{item}</p>
              ))}
            </div>
            <div className="relative pl-2">
              <div className="mb-3 hidden h-20 w-28 rotate-[22deg] rounded-[50%] border-b-[10px] border-[#c40008] md:block" />
              <h2 className="font-black">กลุ่มอุตสาหกรรมที่ให้บริการ</h2>
              {industries.map((item) => (
                <p key={item}>•{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-block text-sm font-black uppercase tracking-widest text-[#af3030]">Contact Information</span>
              <h2 className="text-4xl font-black text-[#1d1715] md:text-5xl lg:text-6xl leading-tight">
                บริษัท วี.เอ็น.เอส <br/>
                <span className="text-[#af3030]">วิศวกรรม ไฮดรอลิค</span> จำกัด
              </h2>
              
              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f3ef] text-[#af3030] shadow-sm border border-[#af3030]/10">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1d1715]">ที่อยู่สำนักงาน</h4>
                    <p className="mt-1 text-xl text-[#4a403d] leading-relaxed">
                      6,122/124 ถนนสุขุมวิท ตำบลบางเมือง <br className="hidden md:block"/>
                      อำเภอเมือง จังหวัดสมุทรปราการ 10270
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <MailIcon />
                  <div>
                    <h4 className="text-lg font-bold text-[#1d1715]">อีเมล</h4>
                    <p className="mt-1 text-2xl font-black text-[#af3030]">vnsengineering777@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <PhoneIcon />
                  <div>
                    <h4 className="text-lg font-bold text-[#1d1715]">เบอร์โทรศัพท์</h4>
                    <p className="mt-1 text-2xl font-black text-[#af3030]">02-759 8229</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-zinc-100 flex flex-wrap items-center gap-10">
                <div>
                  <p className="text-sm font-bold text-[#4a403d] uppercase tracking-wider mb-4">ช่องทางการติดตาม</p>
                  <div className="flex gap-4">
                    <a href="#" className="grid h-12 w-12 place-items-center rounded-xl bg-[#1877f2] text-2xl font-black text-white hover:scale-110 transition-transform">f</a>
                    <a href="#" className="grid h-12 w-12 place-items-center rounded-xl bg-[#06c755] text-[10px] font-black text-white hover:scale-110 transition-transform">LINE</a>
                  </div>
                </div>
                <div className="relative group">
                  <div className="h-32 w-32 border-4 border-[#1d1715] bg-white p-2 shadow-xl group-hover:shadow-2xl transition-shadow">
                    <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#000_0_8px,#fff_8px_16px),repeating-linear-gradient(0deg,transparent_0_10px,rgba(255,255,255,.75)_10px_18px)] opacity-90" />
                  </div>
                  <p className="mt-2 text-center text-xs font-bold text-[#4a403d]">สแกนเพื่อเพิ่มเพื่อน</p>
                </div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#f7f3ef] -rotate-1 lg:block hidden"></div>
              <div className="relative overflow-hidden rounded-2xl border-4 border-[#1d1715] bg-white shadow-2xl">
                <div className="bg-[#1d1715] px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-black text-white">แผนที่บริษัท</h3>
                  <span className="text-xs text-zinc-400 font-medium">VNS Engineering Location</span>
                </div>
                <div className="relative h-[450px] overflow-hidden bg-[#e8eef3] lg:h-[550px]">
                  {/* Stylized Abstract Map Background */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute left-[-80px] top-16 h-20 w-[120%] rotate-[-12deg] bg-[#91aac3]" />
                    <div className="absolute left-[-60px] top-48 h-28 w-[120%] rotate-[2deg] bg-[#88a5c0]" />
                    <div className="absolute left-10 top-80 h-12 w-[120%] rotate-[-3deg] bg-[#c4d2df]" />
                  </div>
                  
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 p-4 opacity-30">
                    {Array.from({ length: 48 }).map((_, index) => (
                      <span key={index} className="h-full w-full rounded-sm bg-[#f3f0e8] ring-1 ring-[#cfd6dc]" />
                    ))}
                  </div>

                  {/* Marker and Popup */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#af3030] px-4 py-2 text-sm font-black text-white shadow-xl animate-bounce">
                        บริษัท วี เอ็น เอส วิศวกรรม ไฮดรอลิค
                        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#af3030]"></div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#af3030] ring-[8px] ring-[#af3030]/20 animate-pulse"></div>
                      <div className="absolute inset-0 h-8 w-8 rounded-full border-4 border-white"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 backdrop-blur shadow-lg border border-zinc-200">
                    <p className="text-sm font-bold text-[#1d1715]">📍 เปิดใน Google Maps เพื่อนำทาง</p>
                    <button className="mt-2 w-full rounded-lg bg-[#1d1715] py-2 text-xs font-black text-white uppercase tracking-wider hover:bg-[#af3030] transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
