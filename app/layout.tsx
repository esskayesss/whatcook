import type { Metadata } from "next";
import { EB_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatCook?",
  description: "Find delicious recipes you can make with the stuff you have",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`z-0 text-base flex justify-center ${geistSans.variable} ${geistSans.className} ${garamond.variable} antialiased`}
      >
        <div className="w-full max-w-[600px] max-h-screen h-dvh flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
