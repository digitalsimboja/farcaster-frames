import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import Navbar from "@/components/Navigation/Navbar";


import Protocol from "@/components/Protocol";
import Referral from "@/components/Referral";
import Roadmap from "@/components/Roadmap";
import Tokenomic from "@/components/Tokenomic";

export default function Home() {
  return (
    <main className="min-h-screen   bg-black text-white ">
      <div className="max-w-7xl px-4 mx-auto">
        <Navbar />

        {/* <Feed /> */}
        <Hero />
        <Feature />
        <GetStarted />
        <Protocol />
        <Roadmap />
        <Referral />
        <Leaderboard />
        {/* <Tokenomic /> */}
        <Footer />
      </div>
    </main>
  );
}
