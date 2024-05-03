import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
