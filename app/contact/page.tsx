export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="relative py-32 bg-zinc-900 border-b border-white/5">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            มีข้อสงสัยหรือต้องการใบเสนอราคา? ทีมงานของเราพร้อมให้บริการคุณ
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">ข้อมูลการติดต่อ</h2>
                <div className="space-y-6">
                  <ContactInfoItem 
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="ที่อยู่"
                    content="123 ถนนอุตสาหกรรม, เขตบางนา, กรุงเทพมหานคร 10260"
                  />
                  <ContactInfoItem 
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                    title="โทรศัพท์"
                    content="02-xxx-xxxx, 08x-xxx-xxxx"
                  />
                  <ContactInfoItem 
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="อีเมล"
                    content="info@vns-engineering.com"
                  />
                  <ContactInfoItem 
                    icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="เวลาทำการ"
                    content="จันทร์ - เสาร์: 08:30 - 17:30 น."
                  />
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="aspect-video w-full rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                 <p className="text-zinc-500 font-medium italic">Google Maps Coming Soon...</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/10 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">ส่งข้อความหาเรา</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">ชื่อ-นามสกุล</label>
                    <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="คุณสมชาย ใจดี" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">อีเมล</label>
                    <input type="email" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="somchai@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">หัวข้อสอบถาม</label>
                  <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="เช่น ขอใบเสนอราคา หัวสายสแตนเลส 304" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">ข้อความ</label>
                  <textarea className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white h-40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="รายละเอียดที่คุณต้องการสอบถาม..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
        <p className="text-zinc-400 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
