'use client';

import Link from "next/link";
import { Tag } from "lucide-react";

interface ProductTagsProps {
  tags: string[];
}

export default function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="mt-12 border-t border-zinc-100 pt-8">
      {/* Title with Red Icon Box */}
      <div className="mb-6 flex items-center gap-2">
        <Tag size={24} className="text-[#af0000]" />
        <h3 className="text-2xl font-black text-zinc-800">แท็ก:</h3>
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
