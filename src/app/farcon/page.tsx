import Navbar from "@/components/Navbar";
import { config } from "@/config/config";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Evveland Farcon",
    description: "A Farcon Admission for Evveland",
    openGraph: {
      title: "Evveland Farcon",
      description: "A Farcon Admission for Evveland",
      images: [`${config.hostUrl}/images/farcon/farcon-1.jpeg`],
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": `${config.hostUrl}/images/farcon/farcon-1.jpeg
      `,
      "fc:frame:button:1": "Vote Evveland!",
      "fc:frame:post_url": `${config.hostUrl}/api/farcon`,
    },
  };

export default function Farcon() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm">
        <Navbar />
        <div>
          <h1 className="text-black font-bold">Evveland Farcon</h1>
        </div>
      </div>
    </main>
  );
}
