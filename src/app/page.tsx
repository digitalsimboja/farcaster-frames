import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-8 md:px-48 pt-8 h-[500px] md:h-[700px]">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
