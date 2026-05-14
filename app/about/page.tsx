import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="relative py-32 bg-zinc-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
            alt="Factory"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            V.N.S. Engineering Hydraulic - มุ่งมั่นสู่ความเป็นเลิศด้านวิศวกรรมไฮดรอลิค
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">ประวัติและความเป็นมา</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                V.N.S. Engineering Hydraulic ก่อตั้งขึ้นด้วยความตั้งใจที่จะเป็นผู้ให้บริการอุปกรณ์ไฮดรอลิคและข้อต่ออุตสาหกรรมที่มีคุณภาพสูงสุดในประเทศไทย 
                เราสั่งสมประสบการณ์และความเชี่ยวชาญมาอย่างยาวนาน เพื่อตอบสนองความต้องการของลูกค้าในกลุ่มอุตสาหกรรมต่างๆ
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                เรามุ่งเน้นการคัดสรรสินค้าจากผู้ผลิตชั้นนำทั่วโลก เพื่อให้มั่นใจว่าลูกค้าของเราจะได้รับสินค้าที่มีมาตรฐานระดับสากล 
                ทนทาน และคุ้มค่ากับการลงทุน
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?q=80&w=2076&auto=format&fit=crop"
                alt="Engineering Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">พันธกิจ (Mission)</h3>
              <p className="text-zinc-400 leading-relaxed">
                ส่งมอบผลิตภัณฑ์และบริการด้านวิศวกรรมไฮดรอลิคที่เปี่ยมด้วยคุณภาพและนวัตกรรม 
                เพื่อช่วยเพิ่มประสิทธิภาพในการทำงานและลดต้นทุนให้กับลูกค้าของเรา
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">วิสัยทัศน์ (Vision)</h3>
              <p className="text-zinc-400 leading-relaxed">
                มุ่งสู่การเป็นผู้นำด้านการจัดจำหน่ายอุปกรณ์ไฮดรอลิคและข้อต่ออุตสาหกรรมอันดับหนึ่งในใจลูกค้า 
                ด้วยความเป็นเลิศด้านผลิตภัณฑ์และการบริการที่เป็นเลิศ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
