import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rena Wang Personal Portfolio",
  description: "AI 产品经理 / 工程管理硕士个人门户网站"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
