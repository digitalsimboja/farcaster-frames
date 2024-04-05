import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@/config/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evveland Metaverse Framecast",
  description: "Framecast by Evveland Metaverse",
  other: {
    ["fc:frame"]: "vNext",
    ["fc:frame:image"]: "https://frames-gilt.vercel.app/site-preview.jpg",
    ["fc:frame:button:1"]: "Start Quiz",
    ["fc:frame:post_url"]: `${config.hostUrl}/api/api/questions?id=1`,
  },
  openGraph: {
    images: [
      {
        url: `${config.hostUrl}/images/og.jpeg`,
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
