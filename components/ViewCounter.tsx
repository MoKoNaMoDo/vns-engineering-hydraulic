'use client';

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Module-level lock: ป้องกัน race condition เมื่อหลาย ViewCounter mount พร้อมกันบนหน้าเดียวกัน
const pendingIncrements = new Set<string>();

interface ViewCounterProps {
  slug: string;
  mode?: "increment" | "display";
  className?: string;
  iconSize?: number;
}

export default function ViewCounter({
  slug,
  mode = "display",
  className = "",
  iconSize = 14
}: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const handleViews = async () => {
      try {
        if (!supabase) {
          let hash = 0;
          for (let i = 0; i < slug.length; i++) {
            hash = slug.charCodeAt(i) + ((hash << 5) - hash);
          }
          const dummyViews = Math.abs(hash % 400) + 120;
          setViews(dummyViews);
          setLoading(false);
          return;
        }

        if (mode === "increment") {
          // ✅ deduplication: ตรวจสอบ sessionStorage ก่อน increment
          const sessionKey = `viewed_${slug}`;
          const alreadyViewed = sessionStorage.getItem(sessionKey);

          if (alreadyViewed) {
            // เคยนับแล้วใน session นี้ — แค่ดึงค่าล่าสุด
            await fetchViews();
            return;
          }

          // ✅ ป้องกัน race condition: ถ้ามี instance อื่นกำลัง increment slug เดียวกันอยู่ → แค่ดึงค่า
          if (pendingIncrements.has(slug)) {
            await fetchViews();
            return;
          }
          pendingIncrements.add(slug);

          const { data, error } = await supabase.rpc("increment_page_view", {
            page_slug: slug,
          });

          pendingIncrements.delete(slug);

          if (error) {
            console.error("Error incrementing page view:", error);
            await fetchViews();
          } else {
            sessionStorage.setItem(sessionKey, "1");
            setViews(data);
            setLoading(false);
          }
        } else {
          await fetchViews();
        }
      } catch (err) {
        console.error("Unexpected error in ViewCounter:", err);
        pendingIncrements.delete(slug);
        setLoading(false);
      }
    };

    const fetchViews = async () => {
      if (!supabase) return;
      try {
        const { data, error } = await supabase
          .from("page_views")
          .select("views")
          .eq("slug", slug)
          .single();

        if (error) {
          if (error.code === "PGRST116") {
            setViews(0);
          } else {
            console.error("Error fetching views:", error);
          }
        } else if (data) {
          setViews(data.views);
        }
      } catch (err) {
        console.error("Error in fetchViews:", err);
      } finally {
        setLoading(false);
      }
    };

    handleViews();
  }, [slug, mode]);

  if (loading) {
    return (
      <span className={`inline-flex items-center gap-1 text-[11px] font-bold text-zinc-400 animate-pulse ${className}`}>
        <Eye size={iconSize} />
        <span>...</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-[12px] font-extrabold text-zinc-500 bg-zinc-100/80 px-2 py-0.5 rounded-full border border-zinc-200/50 shadow-sm ${className}`}>
      <Eye size={iconSize} className="text-[#af0000]" />
      <span>{views !== null ? views.toLocaleString() : 0} วิว</span>
    </span>
  );
}
