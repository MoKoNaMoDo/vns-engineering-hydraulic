"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "หัวสายสแตนเลส 304", href: "/products/stainless-304" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#141111]/86 shadow-[0_10px_28px_rgba(20,8,6,.34)] backdrop-blur-[1px]">
      <div className="mx-auto flex h-10 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8 md:h-[70px]">
        <Link href="/" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#8d0d18] bg-[#fffaf5] shadow-xl md:h-32 md:w-32 translate-y-1 md:translate-y-4">
          <div className="text-center font-black leading-none text-[#8d0d18]">
            <div className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-full border-2 border-[#8d0d18] text-[9px] md:h-14 md:w-14 md:border-4 md:text-xs">VNS</div>
            <div className="text-[5px] text-[#1d1715] md:text-[10px]">บริษัท วี เอ็น เอส</div>
          </div>
        </Link>
        
        <nav className="hidden flex-1 items-center justify-center gap-12 text-[24px] font-black text-white md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="underline decoration-white decoration-2 underline-offset-4 drop-shadow hover:text-[#dfc1ad] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center text-2xl text-white hover:text-[#dfc1ad] md:hidden"
          aria-expanded={isOpen}
          aria-label="เปิดเมนูหลัก"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-y border-[#8d0d18]/20 bg-[#141111] px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 text-base font-black text-white underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
