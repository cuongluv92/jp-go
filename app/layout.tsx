import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Sans } from "next/font/google";

import { BottomNav } from "@/components/bottom-nav";
import { TopHeader } from "@/components/top-header";
import { VocabularyProvider } from "@/lib/data/vocabulary-context";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "jp-go — Học tiếng Nhật",
  description: "Ứng dụng học từ vựng tiếng Nhật: flashcard, luyện tập và ôn tập theo lịch lặp lại ngắt quãng.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${notoSans.variable} ${notoSansJp.variable} h-full`}>
      <body className="flex h-full min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        <VocabularyProvider>
          <TopHeader />
          <main className="mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg">{children}</main>
          <BottomNav />
        </VocabularyProvider>
      </body>
    </html>
  );
}
