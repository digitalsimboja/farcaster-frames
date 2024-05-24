import Feature from "@/components/Feature";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen   bg-black text-white ">
      <div className="max-w-7xl px-4 mx-auto">
        <Navbar />

        {/* <Feed /> */}
        <Hero />
        <Feature />
        <GetStarted />
        <Footer />
      </div>
    </main>
  );
}
