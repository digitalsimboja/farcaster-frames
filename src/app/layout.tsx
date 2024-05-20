import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@/config/config";
import { AppProvider } from "@/context/AppContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WarpHeroes contest",
  description: "Become a WarpHero by validating your knowledge of protocols",
  openGraph: {
    title: "WarpHeroes contest",
    description: "Become a WarpHero by validating your knowledge of protocols",
    images: [`${config.hostUrl}/images/ethereum/og.png`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${config.hostUrl}/images/ethereum/og.jpeg
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
      <AppProvider>
        <body className={inter.className}>
          <ToastContainer />
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
