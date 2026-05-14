import ProductGrid from "@/components/Home/ProductGrid";
import ContactSection from "@/components/about/ContactSection";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Product Page replaced with Product Grid */}
      <ProductGrid />
      
      {/* Contact Section at the bottom */}
      <ContactSection />
    </div>
  );
}
