import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신혜의 영단어장",
  description: "영단어 카드와 뜻·철자 퀴즈로 매일 가볍게 암기해요.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
