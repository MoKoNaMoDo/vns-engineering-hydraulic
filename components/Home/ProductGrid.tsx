const products = [
  { name: "หัวสายสแตนเลส 304", image: "" },
  { name: "HYDRAULIC HOSE", image: "" },
  { name: "STAINLESS STEEL FLEXIBLE HOSE", image: "" },
  { name: "PTFE HOSE/TEFLON HOSE", image: "" },
  { name: "R7-THERMOPLASTIC HOSE", image: "" },
  { name: "STEAM HOSE", image: "" },
  { name: "TOYOX", image: "" },
  { name: "INDUSTRIAL HOSE", image: "" },
  { name: "TUBE FITTINGS", image: "" },
  { name: "CAMLOCK COUPLING", image: "" },
  { name: "QUICK COUPLING", image: "" },
  { name: "HYDRAULIC BALL VALVE", image: "" },
  { name: "บริการดัดแป๊ปอุตสาหกรรม", image: "" },
];

export default function ProductGrid() {
  return (
    <section className="bg-[#dcdcdc] py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-4 border-black pb-2 text-4xl font-black uppercase tracking-widest text-black">
            PRODUCTS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {products.map((product) => (
            <div 
              key={product.name} 
              className="flex w-[160px] flex-col items-center sm:w-[200px] lg:w-[210px]"
            >
              {/* Product Box with Red Dashed Border */}
              <div className="group relative aspect-square w-full overflow-hidden border-2 border-dashed border-[#ff0000] bg-white p-2 shadow-md transition-all hover:border-solid hover:shadow-xl">
                <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-[10px] font-bold text-zinc-300">
                   IMAGE
                </div>
              </div>

              {/* Product Label */}
              <h3 className="mt-4 w-full text-center text-[14px] font-black uppercase leading-tight text-[#6b2525] md:text-[15px]">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
