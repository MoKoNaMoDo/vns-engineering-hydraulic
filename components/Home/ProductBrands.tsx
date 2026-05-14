const brands = [
  { name: "TOYOX", logo: "" },
  { name: "SUNFLEX", logo: "" },
  { name: "PLATINUM", logo: "" },
  { name: "BRIDGESTONE", logo: "" },
  { name: "YOKOHAMA", logo: "" },
];

export default function ProductBrands() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          
          {/* Left Decorative Bar */}
          <div className="h-16 w-full max-w-[200px] bg-gradient-to-r from-white via-[#ff0000] to-[#ff0000] md:h-20" />

          {/* Label */}
          <h2 className="shrink-0 text-3xl font-black text-black">
            Product Brand
          </h2>

          {/* Brands Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-end">
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="flex h-32 w-32 items-center justify-center border-[2px] border-[#af0000] bg-white p-2 shadow-sm transition-transform hover:scale-105 md:h-40 md:w-40"
              >
                {/* Image Placeholder */}
                <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-[10px] font-bold text-zinc-300">
                  {brand.name} LOGO
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
