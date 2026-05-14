import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "V.N.S. ENGINEERING HYDRAULIC | จำหน่ายอุปกรณ์ไฮดรอลิคและข้อต่ออุตสาหกรรม",
  description: "ผู้เชี่ยวชาญด้านระบบไฮดรอลิคและข้อต่ออุตสาหกรรม หัวสายสแตนเลส 304 และอุปกรณ์วิศวกรรมครบวงจร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
