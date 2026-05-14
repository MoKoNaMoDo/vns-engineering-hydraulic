"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "หัวสายสแตนเลส 304", href: "/products/stainless-304" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f5f2]">
      <div className="flex h-12 items-center justify-end px-4 text-[#41546b]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-9 w-9 items-center justify-center text-2xl leading-none hover:text-[#8d0d18] md:hidden"
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
