import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SxcMC",
  description: "クロスプレイ対応のMinecraftサーバー。新しい地形で経済サバイバル。",
  openGraph: {
    images: ["https://sxcmc.vercel.app/images/banner.webp"]
  },
  verification: {
    google: "BCXkHuN0X-nlOp144yNpu54ds-BW9CnzTcDFeZsB0Os",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
