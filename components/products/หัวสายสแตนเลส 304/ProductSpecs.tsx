import Image from "next/image";

const specs = [
  "JM-BMT (JIC-BSPT MALE)",
  "JM-JM (JIC-JIC MALE)",
  "JM-SMO (JIC MALE - SAE ORING)",
  "JM-BMO (JIC-BSPP ORING MALE)",
  "JM-PM (JIC MALE-BSPT MALE)",
  "BMT-BMT (BSPT-BSPT MALE)",
  "BMT-BMO (BSPT-BSPP ORING MALE)",
  "BM-BM (BSP 60 MALE)",
  "BM-BMO (BSP MALE - BSP MALE ORING)",
  "BM-BS (PF MALE-PF FEMALE SWIVEL)",
  "BMI-BMT (JIS GAS MALE-BSPT MALE)",
  "BMI-PM (JIS GAS MALE-BSPT MALE)",
  "BMI-BMI (JIS GAS MALE)",
  "PN-PN (BSPT-FEMALE)",
  "KM-KM (KOMATSU METRIC)",
  "KM-BMT (KOMATSU METRIC-BSPT MALE)",
  "KM-KMO (KOMATSU METRIC-ORING)",
];

export default function ProductSpecs() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 items-center lg:grid-cols-2">

          {/* Left Side: Product Cluster Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/products/products/ChatGPT Image 18 พ.ค. 2569 20_19_16.png"
              alt="Product Catalog Cluster"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          {/* Right Side: Specifications List */}
          <div className="flex flex-col">
            <ul className="space-y-1 text-base font-medium text-black md:text-lg">
              {specs.map((spec, index) => (
                <li key={index} className="hover:text-[#af0000] cursor-default transition-colors">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
