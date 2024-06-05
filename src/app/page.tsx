import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl px-4 mx-auto">
        <Navbar />

        {/* <Feed /> */}
        <Hero />
        {/* <Feature />
        <GetStarted />
        <Protocol />
        <Roadmap />
        <Referral />
        <Leaderboard />
        <Tokenomic /> */}
        <Footer />
      </div>
    </main>
  );
}
