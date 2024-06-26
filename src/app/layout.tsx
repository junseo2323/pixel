import type { Metadata } from "next";

import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixelnetwork",
  description: "Pixel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
            type='text/javascript'
            src='//dapi.kakao.com/v2/maps/sdk.js?appkey=5e0615373dc35881a311b42b6ecb5d34&autoload=false'
          />      
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
