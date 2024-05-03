import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 via-purple-50 to-pink-200 ">
      <div className="">
        <Navbar />
        <Hero />
        <Sponsors />

        <Footer />
      </div>
    </main>
  );
}
