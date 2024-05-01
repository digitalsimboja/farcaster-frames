import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="px-4 md:px-24 pt-8">
        <Navbar />
        <Hero />
        <Leaderboard />
      </div>
    </main>
  );
}
