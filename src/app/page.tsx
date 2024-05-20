import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-black text-white ">
      <Navbar />
      <div className={cn("container mx-auto px-4 py-32 w-full h-full")}>
        <Feed />
        {/* <Hero /> */}
        <Footer />
      </div>
    </main>
  );
}
