import ProductMenu from "@/components/about/ProductMenu";
import ContactSection from "@/components/about/ContactSection";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#f8f3ee] text-[#1d1715] pb-10">
      <section className="mx-auto grid max-w-[1320px] gap-8 px-4 py-12 md:grid-cols-[374px_1fr] lg:px-8">
        <ProductMenu />

        <div className="pt-2">
          {/* Title */}
          <div className="mb-10">
            <h1 className="inline-block border-b-[3px] border-[#b23131] pb-1 text-4xl font-black tracking-tight text-black">
              รายละเอียดการติดต่อ
            </h1>
          </div>

          {/* CONTACT US header */}
          <div className="text-center mb-8">
            <h2 className="text-[26px] font-black tracking-widest text-[#e61e1e]">
              CONTACT <span className="text-black">US</span>
            </h2>
          </div>

          {/* 3-column Box */}
          <div className="mx-auto max-w-[900px] border-[4px] border-black bg-white py-16 px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:divide-x-[3px] md:divide-black">
              
              {/* Address */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center text-[#c31a1a]">
                  <svg className="h-[80px] w-[80px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-[26px] font-black text-[#581515]">Address</h3>
                <p className="text-[17px] font-semibold leading-[1.6] text-[#5a4843]">
                  6,122/124 Sukhumvit<br />
                  Road, Bang Mueang<br />
                  Subdistrict, Mueang<br />
                  District, Samut Prakan<br />
                  Province 10270
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-[#c31a1a] bg-white text-[#c31a1a]">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.75 0 .97-.65.97-1.19v-3.44c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-[26px] font-black text-[#581515]">Phone</h3>
                <p className="text-[19px] font-semibold text-[#5a4843]">
                  02-759 8229
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-[#c31a1a] bg-white text-[#c31a1a]">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="mb-4 text-[26px] font-black text-[#581515]">Email</h3>
                <p className="text-[16px] font-semibold text-[#5a4843] break-all">
                  vnsengineering777@gmail.com
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
