'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import ViewCounter from "@/components/ViewCounter";

const itemDefs = [
  {
    titleKey: "stainless304Label",
    image: "/products/products/43395.jpg",
    labelParts: { prefix: "", highlight: "304", suffix: "" },
    href: "/products/stainless-304"
  },
  {
    title: "TUBE FITTINGS",
    image: "/products/product/tube-fittings.png",
    labelParts: { prefix: "TUBE", highlight: "FITTINGS", suffix: "" },
    href: "/products/tube-fittings"
  },
  {
    title: "CAMLOCK COUPLING",
    image: "/products/product/camlock-coupling.png",
    labelParts: { prefix: "CAMLOCK", highlight: "COUPLING", suffix: "" },
    href: "/products/camlock-coupling"
  },
  {
    title: "QUICK COUPLING",
    image: "/products/product/quick-couplings.png",
    labelParts: { prefix: "QUICK", highlight: "COUPLING", suffix: "" },
    href: "/products/quick-coupling"
  },
  {
    title: "HYDRAULIC BALL VALVE",
    image: "/products/product/hydraulic-ball-valve.png",
    labelParts: { prefix: "HYDRAULIC", highlight: "BALL VALVE", suffix: "" },
    href: "/products/hydraulic-ball-valve"
  },
  {
    titleKey: "pipeServiceLabel",
    image: "/products/product/pipe-bending-service.png",
    labelParts: { prefix: "", highlight: "ดัดแป๊ป", suffix: "" },
    href: "/products/industrial-pipe-service"
  }
];

export default function FittingAndAdapter() {
  const t = useTranslations('FittingAndAdapter');
  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").filter(Boolean).join("-") : "";

  const items = itemDefs.map((def) => {
    if (def.titleKey === "stainless304Label") {
      const label = t('stainless304Label');
      return {
        ...def,
        title: label,
        label: <p>{label.replace("304", "")} <span className="text-[#af0000]">304</span></p>
      };
    }
    if (def.titleKey === "pipeServiceLabel") {
      const label = t('pipeServiceLabel');
      return {
        ...def,
        title: label,
        label: <p>{label.split("ดัดแป๊ป")[0]}<span className="text-[#af0000]">ดัดแป๊ป</span>{label.split("ดัดแป๊ป")[1]}</p>
      };
    }
    const { prefix, highlight } = def.labelParts;
    return {
      ...def,
      label: <p><span className="text-[#af0000]">{prefix}</span> {highlight}</p>
    };
  });

  return (
    <section className="py-12 px-4 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-16 inline-block border-b-4 border-[#af0000] pb-2 uppercase tracking-tight">
          Fitting and Adapter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 justify-items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href as any}
              className="group relative w-full max-w-[480px] block transition-transform duration-300 active:scale-[0.98]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border-[3px] border-[#6b0000] shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] group-hover:border-[#af0000]">
                <Image
                  src={item.image}
                  alt={item.title ?? ""}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 768px) 500px, 100vw"
                />
                {/* Subtle Inner Shadow */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)]" />
              </div>

              {/* Label Container - Pill Shape */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] min-w-[280px] z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="bg-white border-[2.5px] border-zinc-900 rounded-2xl py-4 px-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[12px_12px_0px_rgba(175,0,0,1)] group-hover:border-[#af0000]">
                  <div className="text-lg md:text-xl font-black uppercase tracking-tight text-zinc-900 text-center flex items-center justify-center gap-1">
                    {item.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <ViewCounter slug={slug} mode="increment" iconSize={14} />
        </div>
      </div>
    </section>
  );
}
