import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@/config/config";

const inter = Inter({ subsets: ["latin"] });

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Start Quiz!",
    },
  ],
  image: {
    src: `${config.hostUrl}/images/og.jpeg`,
  },
  input: {
    text: "Your Email",
  },
  postUrl: `${config.hostUrl}/api/questions`,
});

export const metadata: Metadata = {
  title: "Evveland Metaverse Framecast",
  description: "Framecast by Evveland Metaverse",
  openGraph: {
    images: [
      {
        url: `${config.hostUrl}/images/og.jpeg`,
        width: 800,
        height: 600,
      },
    ],
  },
  other: {
    ...frameMetadata,
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
