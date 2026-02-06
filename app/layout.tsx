import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社ジャカコン - コンテナハウス・トランクルームのパイオニア",
    template: "%s | 株式会社ジャカコン",
  },
  description: "コンテナハウス、トランクルームの販売・レンタルなら株式会社ジャカコン。10,000件以上の実績を持つパイオニア企業。沖縄・大阪・東京を拠点に、おしゃれで高品質なコンテナ建築を提供します。",
  keywords: ["コンテナ", "コンテナハウス", "トランクルーム", "コンテナ販売", "コンテナレンタル", "ジャカコン", "沖縄", "大阪", "東京"],
  openGraph: {
    title: "株式会社ジャカコン - コンテナハウスの未来を創造する",
    description: "コンテナハウス・トランクルームのパイオニア。10,000件以上の実績。販売・レンタル対応。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社ジャカコン",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ジャカコン",
    description: "コンテナハウス・トランクルームのパイオニア",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
