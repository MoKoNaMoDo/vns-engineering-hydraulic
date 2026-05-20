"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Search, X, ChevronRight, Menu } from "lucide-react";
import { searchItems } from "@/constants/search-items";
import { usePathname } from "next/navigation";
import ViewCounter from "./ViewCounter";

const navLinks = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "หัวสายสแตนเลส 304", href: "/products/stainless-304" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchItems>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = searchItems.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(query);
      const keywordMatch = item.keywords?.some((kw) => kw.toLowerCase().includes(query)) || false;
      return nameMatch || keywordMatch;
    });
    setSearchResults(filtered);
  }, [searchQuery]);

  // Listen for escape key press to close search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-500 ${isScrolled
          ? "bg-[#141111]/95 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-transparent py-4"
        }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8d0d18] to-transparent opacity-50" />

      <style jsx global>{`
        @keyframes logoUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(24px); opacity: 1; }
        }
        @keyframes navStagger {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .vns-logo-up {
          animation: logoUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .vns-nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .vns-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #8d0d18;
          transition: width 0.3s ease;
          box-shadow: 0 0 8px #ff4d4d;
        }
        .vns-nav-link:hover::after, .vns-nav-link.active::after {
          width: 100%;
        }
        .vns-nav-link:hover {
          color: #dfc1ad;
          text-shadow: 0 0 15px rgba(223, 193, 173, 0.4);
        }
      `}</style>

      <div className="mx-auto flex h-10 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8 md:h-[70px]">
        {/* Logo Section */}
        <Link
          href="/"
          className="vns-logo-up group relative z-50 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#8d0d18] bg-white shadow-xl transition-all duration-500 hover:scale-110 md:h-24 md:w-24"
        >
          <div className="relative h-full w-full">
            <Image
              src="/vns-logo copy.png"
              alt="VNS Logo"
              fill
              sizes="(max-width: 768px) 56px, 96px"
              className="object-contain p-1 transition-transform duration-500 group-hover:rotate-[360deg]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-6 text-[18px] font-black text-white md:flex lg:gap-10 lg:text-[22px] whitespace-nowrap shrink-0">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`vns-nav-link px-2 uppercase tracking-tight ${isActive ? 'active text-[#dfc1ad]' : ''}`}
                style={{
                  animation: `navStagger 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Button (Desktop) */}
          <div className="hidden md:flex">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#8d0d18]/20 hover:border-[#8d0d18]/50 hover:text-[#dfc1ad] active:scale-95 shadow-sm cursor-pointer"
              title="ค้นหาสินค้า"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Global View Counter */}
          <div className="shrink-0 scale-90 sm:scale-100">
            <ViewCounter
              slug="vns-global"
              mode="increment"
              className="!bg-[#1a1717] !border-white/10 !text-white hover:!border-[#8d0d18]/40 transition-colors cursor-default"
              iconSize={13}
            />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={() => {
                setIsSearchOpen(true);
                if (isOpen) setIsOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-95"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isSearchOpen) setIsSearchOpen(false);
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all border ${isOpen ? 'bg-[#8d0d18] text-white border-[#8d0d18]' : 'bg-white/5 text-white border-white/10'
                }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Global Desktop & Mobile Spotlight Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-[#0a0a0a]/80 p-4 pt-[12vh] md:pt-[15vh] backdrop-blur-md"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchQuery("");
          }}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#141111]/98 p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-3xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInUp 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
          >
            {/* Search Input Area */}
            <div className="relative flex items-center rounded-2xl border border-[#8d0d18]/30 bg-white/5 p-2 focus-within:border-[#8d0d18] focus-within:bg-[#1a1717] focus-within:shadow-[0_0_15px_rgba(141,13,24,0.2)] transition-all">
              <Search className="ml-2.5 h-4.5 w-4.5 text-[#8d0d18] shrink-0" />
              <input
                type="text"
                placeholder="พิมพ์สิ่งที่ต้องการค้นหา (เช่น สายไฮดรอลิค, สแตนเลส)..."
                className="ml-3 h-10 w-full bg-transparent pr-3 text-base text-white placeholder-white/30 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="mr-1 rounded-xl bg-white/5 p-2 text-white/40 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results / Suggestions Area */}
            <div className="mt-5 max-h-[50vh] overflow-y-auto pr-1">
              {searchQuery ? (
                <div>
                  {searchResults.length > 0 ? (
                    <div className="grid gap-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#8d0d18] px-1">ผลการค้นหา ({searchResults.length})</p>
                      {searchResults.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="group flex items-center justify-between rounded-xl bg-white/5 border border-transparent p-3.5 transition-all hover:border-[#8d0d18]/20 hover:bg-[#8d0d18]/10"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white group-hover:text-[#dfc1ad] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">
                              {item.category}
                            </span>
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-[#8d0d18] group-hover:text-white">
                            <ChevronRight className="h-4 w-4 text-[#dfc1ad] group-hover:text-white" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <Search className="mx-auto h-10 w-10 text-white/10 mb-2.5" />
                      <p className="text-sm text-white/40">ไม่พบข้อมูลที่เกี่ยวข้องกับ "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid gap-4 py-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 px-1 mb-2.5">คำค้นหายอดนิยม</p>
                    <div className="flex flex-wrap gap-2">
                      {["สายไฮดรอลิค", "สายเทฟลอน", "สแตนเลส 304", "Toyox", "Steam Hose", "R14"].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="rounded-full bg-white/5 border border-white/5 px-3.5 py-1.5 text-xs text-white/70 hover:bg-[#8d0d18]/20 hover:border-[#8d0d18]/40 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="fixed inset-x-0 top-[72px] bottom-0 z-[90] flex flex-col bg-[#141111]/98 p-6 backdrop-blur-xl md:hidden"
          style={{ animation: 'slideInUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-xl font-black text-white transition-all active:scale-95 active:bg-[#8d0d18]/20 ${pathname === link.href ? 'border-[#8d0d18] bg-[#8d0d18]/10 text-[#dfc1ad]' : ''
                  }`}
                style={{
                  animation: `navStagger 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s forwards`,
                  opacity: 0
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronRight className={`h-5 w-5 ${pathname === link.href ? 'text-[#8d0d18]' : 'text-white/20'}`} />
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-10 text-center">
            <div className="mb-4 flex justify-center gap-4">
              {/* Social icons placeholder if needed */}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">
              V.N.S. Engineering Hydraulic
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}


