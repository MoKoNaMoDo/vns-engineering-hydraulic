import Image from "next/image";
import { MailIcon, PhoneIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section className="bg-[#fcfcfc] border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">

          {/* Left Column: ข้อมูลติดต่อ (จัดเรียงแนวตั้ง เพื่อความ Clean และแก้อีเมลล้น) */}
          <div className="flex flex-col">
            <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#af3030]">
              Let's Connect
            </span>
            <h2 className="text-4xl font-extrabold text-[#1d1715] md:text-5xl lg:text-6xl leading-tight tracking-tight">
              บริษัท วี.เอ็น.เอส <br />
              <span className="text-[#af3030]">วิศวกรรม ไฮดรอลิค</span> จำกัด
            </h2>

            {/* เปลี่ยนเป็น Flex Column แนวตั้งเว้นระยะห่างให้พอดี */}
            <div className="mt-14 flex flex-col gap-10">

              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#af3030] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 transition-transform duration-300 group-hover:-translate-y-1">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Office Address</h4>
                  <p className="text-lg text-[#1d1715] leading-relaxed font-medium">
                    6, 122-124 ถ. ศรีนครินทร์ ตำบลบางเมือง <br />
                    อำเภอเมืองสมุทรปราการ สมุทรปราการ 10270
                  </p>
                </div>
              </div>

              {/* Email (ได้พื้นที่เต็มบรรทัด หมดปัญหาล้นจอ) */}
              <div className="flex items-start gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#af3030] transition-transform duration-300 group-hover:-translate-y-1">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div className="min-w-0"> {/* min-w-0 ช่วยป้องกัน Flexbox ขยายตัวเกินคอนเทนเนอร์ */}
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:vnsengineering777@gmail.com" className="text-xl font-bold text-[#af3030] hover:text-[#1d1715] transition-colors break-words">
                    vnsengineering777@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone (ลงมาอยู่บรรทัดล่างสุดอย่างสวยงาม) */}
              <div className="flex items-start gap-6 group">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#af3030] transition-transform duration-300 group-hover:-translate-y-1">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:027598229" className="text-xl font-bold text-[#1d1715] hover:text-[#af3030] transition-colors">
                    02-759 8229
                  </a>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-16 pt-10 border-t border-zinc-100 flex flex-wrap items-center gap-8">
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100037191445975" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all font-black text-lg">f</a>
                <a href="https://line.me/ti/p/~tonmasadora" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06c755] text-[11px] text-white shadow-lg shadow-green-500/20 hover:-translate-y-1 transition-all font-black">LINE</a>
              </div>
              <a 
                href="https://line.me/ti/p/~tonmasadora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-zinc-50 p-4 pr-7 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors group"
              >
                <div className="h-16 w-16 bg-white rounded-xl p-1 shadow-sm border border-zinc-200 relative overflow-hidden group-hover:scale-105 transition-transform">
                  <Image 
                    src="/products/QR.png" 
                    alt="LINE QR Code" 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider leading-tight group-hover:text-[#06c755] transition-colors">Scan to Add <br />Line</p>
              </a>
            </div>
          </div>

          {/* Right Column: Google Map ดีไซน์แบบ Clean & Float */}
          <div className="relative h-[500px] lg:h-[650px] w-full group rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-zinc-200 bg-zinc-100 isolate">

            {/* Glassmorphism Floating Badge แทน Header ทึบๆ เดิม */}
            {/* <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-sm border border-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#af3030] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#af3030]"></span>
              </span>
              <span className="text-xs font-bold text-[#1d1715] tracking-[0.15em] uppercase">V.N.S. Location</span>
            </div> */}

            {/* Iframe แผนที่ */}
            <iframe
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?hl=th&q=บริษัท%20วี%20เอ็น%20เอส%20วิศวกรรมไฮดรอลิค%20จำกัด%206,%20122-124%20ถ.%20ศรีนครินทร์%20ตำบล%20บางเมือง%20อำเภอเมืองสมุทรปราการ%20สมุทรปราการ%2010270&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            ></iframe>

            {/* Floating Action Button (ทรงแคปซูล ดูมินิมอล) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-max">
              <a
                href="https://www.google.com/maps/search/?api=1&query=บริษัท%20วี%20เอ็น%20เอส%20วิศวกรรมไฮดรอลิค%20จำกัด%20สมุทรปราการ"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1d1715] text-xs font-bold text-white uppercase tracking-[0.2em] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] hover:bg-[#af3030] transition-all hover:scale-105 active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                <span>แผนที่บริษัท</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}