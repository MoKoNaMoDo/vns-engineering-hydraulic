import CompanyOverview from "@/components/Home/CompanyOverview";
import ProductBrands from "@/components/Home/ProductBrands";
import ProductGrid from "@/components/Home/ProductGrid";
import ContactSection from "@/components/about/ContactSection";

export default function Home() {
  return (
    <div className="w-full bg-[#f8f3ee] text-[#1d1715]">
      {/* Main Home Page Sections */}
      <CompanyOverview />
      <ProductBrands />
      <ProductGrid />
      
      {/* Global Bottom Section */}
      <ContactSection />
    </div>
  );
}
