"use client";

import Link from "next/link";
import Image from "next/image";
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
      <style jsx global>{`
        @keyframes logoUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(24px); opacity: 1; }
        }
        @keyframes navItemFade {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .vns-logo-up {
          animation: logoUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .vns-nav-item {
          animation: navItemFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <div className="mx-auto flex h-10 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8 md:h-[70px]">
        <Link 
          href="/" 
          className="vns-logo-up relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#8d0d18] bg-white shadow-xl md:h-24 md:w-24"
        >
          <div className="relative h-full w-full">
            <Image
              src="/vns-logo copy.png"
              alt="VNS Logo"
              fill
              sizes="(max-width: 768px) 56px, 96px"
              className="object-contain p-1"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden flex-1 items-center justify-center gap-12 text-[24px] font-black text-white md:flex">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="vns-nav-item opacity-0 underline decoration-white decoration-2 underline-offset-4 drop-shadow hover:text-[#dfc1ad] transition-colors"
              style={{ animationDelay: `${200 + (index * 100)}ms` }}
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
