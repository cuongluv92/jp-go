import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Sans } from "next/font/google";

import { AppChrome } from "@/components/app-chrome";
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
  title: "jp-go",
  description: "Ứng dụng học từ vựng tiếng Nhật: flashcard, luyện tập và ôn tập theo lịch lặp lại ngắt quãng.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "jp-go",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${notoSans.variable} ${notoSansJp.variable} h-full`}>
      <body className="flex h-full min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <VocabularyProvider>
          <AppChrome>{children}</AppChrome>
        </VocabularyProvider>
      </body>
    </html>
  );
}
