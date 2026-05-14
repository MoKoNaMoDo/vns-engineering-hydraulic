import ShopPhoto from "./ShopPhoto";

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

export default function CompanyStrengths() {
  return (
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
  );
}
