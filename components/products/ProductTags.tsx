'use client';

import Link from "next/link";
import { Tag } from "lucide-react";
import { usePathname } from "next/navigation";
import ViewCounter from "@/components/ViewCounter";

interface ProductTagsProps {
  tags: string[];
  categoryHref: string;
}

export default function ProductTags({ tags, categoryHref }: ProductTagsProps) {
  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").filter(Boolean).join("-") : "";

  // Smart href resolver to mirror original logic on all pages
  const getHref = (tag: string) => {
    const normalizedTag = tag.toUpperCase();
    
    // Stainless Steel / 304 / 316 / SUS / SS specific redirect
    if (
      normalizedTag === "SS304" ||
      normalizedTag === "SUS304" ||
      normalizedTag === "SS316" ||
      normalizedTag === "SUS316" ||
      normalizedTag.includes("304") ||
      normalizedTag.includes("316") ||
      normalizedTag.includes("สแตนเลส") ||
      normalizedTag.includes("STAINLESS")
    ) {
      return "/products/stainless-304";
    }
    
    return categoryHref;
  };

  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center gap-3 justify-center lg:justify-start">
        <div className="flex items-center gap-2">
          <Tag size={20} className="text-[#af0000]" />
          <span className="text-lg font-black text-zinc-800">แท็ก:</span>
        </div>
        <ViewCounter 
          slug={slug} 
          mode="increment" 
          className="text-[13px] font-extrabold text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/50 flex items-center gap-1.5 select-none hover:bg-zinc-200/50 transition-colors" 
          iconSize={15} 
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={getHref(tag)}
            className="rounded-lg border border-zinc-200 bg-[#f4f4f4] px-4 py-2 text-[15px] font-bold text-[#455a64] transition-all hover:bg-[#af0000] hover:text-white hover:shadow-md active:scale-95"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
