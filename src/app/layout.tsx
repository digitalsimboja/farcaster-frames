import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@/config/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evveland Weekly Contest",
  description: "A weekly contest by Evveland",
  openGraph: {
    title: "Evveland Weekly Contest",
    description: "A weekly contest by Evveland",
    images: [`${config.hostUrl}/images/og.png`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${config.hostUrl}/images/og.jpeg
    `,
    "fc:frame:button:1": "Start Quiz!",
    "fc:frame:post_url": `${config.hostUrl}/api/questions?id=0`,
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
