'use client';

import Link from "next/link";
import { Tag } from "lucide-react";
import { usePathname } from "next/navigation";
import ViewCounter from "@/components/ViewCounter";

interface ProductTagsProps {
  tags: string[];
}

export default function ProductTags({ tags }: ProductTagsProps) {
  const pathname = usePathname();
  const slug = pathname ? pathname.split("/").pop() || "" : "";

  return (
    <div className="mt-12 border-t border-zinc-100 pt-8">
      {/* Title with Red Icon Box */}
      <div className="mb-6 flex items-center gap-3 justify-center lg:justify-start">
        <div className="flex items-center gap-2">
          <Tag size={24} className="text-[#af0000]" />
          <h3 className="text-2xl font-black text-zinc-800">แท็ก:</h3>
        </div>
        <ViewCounter 
          slug={slug} 
          mode="increment" 
          className="text-[14px] font-extrabold text-zinc-600 bg-zinc-100 px-3.5 py-1.5 rounded-full border border-zinc-200/50 flex items-center gap-1.5 select-none hover:bg-zinc-200/50 transition-colors" 
          iconSize={16} 
        />
      </div>

      {/* Tag Items List */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Link
            key={tag}
            href="/products/stainless-304"
            className="rounded-lg border border-zinc-200 bg-[#f4f4f4] px-4 py-2 text-[15px] font-bold text-[#455a64] transition-all hover:bg-[#af0000] hover:text-white hover:shadow-md active:scale-95"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
