import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";

import { AppChrome } from "@/components/app-chrome";
import { VocabularyProvider } from "@/lib/data/vocabulary-context";
import { ThemeProvider } from "@/lib/theme-context";

import "./globals.css";

// Chặn hydration-flash: đọc theme đã lưu và set data-theme lên <html> TRƯỚC
// khi React chạy, để người dùng đã chọn tối không bị chớp sáng 1 nhịp khi
// tải lại trang. Mặc định (không có gì trong localStorage, hoặc bị chặn) là
// sáng - không đọc prefers-color-scheme hệ điều hành, theo đúng yêu cầu "giữ
// nền trắng làm mặc định, chỉ đổi khi người dùng tự bật".
const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem("jp-go-theme");if(t==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
  themeColor: "#4338ca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${notoSansJp.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex h-full min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <VocabularyProvider>
            <AppChrome>{children}</AppChrome>
          </VocabularyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
