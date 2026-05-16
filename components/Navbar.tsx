"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Search, X, ChevronRight, Menu } from "lucide-react";
import { searchItems } from "@/constants/search-items";
import { usePathname } from "next/navigation";

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

    const filtered = searchItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-[100] w-full transition-all duration-500 ${
        isScrolled 
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
        <nav className="hidden flex-1 items-center justify-center gap-6 text-[18px] font-black text-white md:flex lg:gap-10 lg:text-[22px]">
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
        <div className="flex items-center gap-4">
          {/* Search Desktop */}
          <div className="relative hidden items-center md:flex" ref={searchRef}>
            <div 
              className={`flex items-center overflow-hidden rounded-full border transition-all duration-500 ${
                isSearchOpen 
                  ? "w-72 border-[#8d0d18] bg-[#1a1717] shadow-[0_0_15px_rgba(141,13,24,0.3)]" 
                  : "w-11 border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex h-10 w-11 shrink-0 items-center justify-center text-white transition-colors hover:text-[#dfc1ad]"
              >
                <Search className={`h-5 w-5 transition-transform duration-300 ${isSearchOpen ? 'scale-90' : ''}`} />
              </button>
              <input
                type="text"
                placeholder="ค้นหาที่คุณต้องการ..."
                className={`h-10 w-full bg-transparent px-2 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                  isSearchOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
              />
              {isSearchOpen && searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mr-2 p-1 text-white/30 transition-colors hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Results Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute right-0 top-full mt-4 w-[400px] overflow-hidden rounded-2xl border border-[#8d0d18]/20 bg-[#141111]/98 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                   style={{ animation: 'slideInUp 0.3s ease-out forwards' }}>
                <div className="max-h-[60vh] overflow-y-auto p-3">
                  {searchResults.length > 0 ? (
                    <div className="grid gap-2">
                      {searchResults.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="group flex items-center justify-between rounded-xl border border-transparent p-3 transition-all hover:border-[#8d0d18]/30 hover:bg-[#8d0d18]/10"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white group-hover:text-[#dfc1ad]">
                              {item.name}
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8d0d18]">
                              {item.category}
                            </span>
                          </div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 opacity-0 transition-all group-hover:opacity-100">
                            <ChevronRight className="h-4 w-4 text-[#dfc1ad]" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mb-2 flex justify-center text-white/10">
                        <Search className="h-12 w-12" />
                      </div>
                      <p className="text-sm text-white/40">ไม่พบสิ่งที่ต้องการค้นหาสำหรับ "{searchQuery}"</p>
                    </div>
                  )}
                </div>
                <div className="border-t border-white/5 bg-[#0a0a0a] p-3 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                    V.N.S. Engineering Quality Service
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isOpen) setIsOpen(false);
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                isSearchOpen ? 'bg-[#8d0d18] text-white' : 'bg-white/5 text-white'
              }`}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isSearchOpen) setIsSearchOpen(false);
              }}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                isOpen ? 'bg-[#8d0d18] text-white' : 'bg-white/5 text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/5 bg-[#141111] px-4 py-6 shadow-2xl md:hidden"
             style={{ animation: 'slideInUp 0.3s ease-out forwards' }}>
          <div className="relative mb-6 flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 focus-within:border-[#8d0d18]/50">
            <Search className="ml-3 h-5 w-5 text-[#8d0d18]" />
            <input
              type="text"
              placeholder="ค้นหาสินค้าหรือบริการที่คุณต้องการ..."
              className="ml-3 h-12 w-full bg-transparent text-lg text-white outline-none placeholder:text-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-[70vh] overflow-y-auto pb-4">
            {searchQuery && (
              <div className="grid gap-3">
                {searchResults.length > 0 ? (
                  searchResults.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between rounded-2xl bg-white/5 p-5 active:bg-white/10"
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-white">{item.name}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8d0d18]">{item.category}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/20" />
                    </Link>
                  ))
                ) : (
                  <div className="py-20 text-center text-white/30">
                    <p>ไม่พบข้อมูลที่เกี่ยวข้อง</p>
                  </div>
                )}
              </div>
            )}
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
                className={`flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-xl font-black text-white transition-all active:scale-95 active:bg-[#8d0d18]/20 ${
                  pathname === link.href ? 'border-[#8d0d18] bg-[#8d0d18]/10 text-[#dfc1ad]' : ''
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


