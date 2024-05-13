import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white ">
      <div className="">
        <Navbar />
        {/* <Hero /> */}
        <Footer />
      </div>
    </main>
  );
}
