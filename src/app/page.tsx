import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
      </div>
    </main>
  );
}
