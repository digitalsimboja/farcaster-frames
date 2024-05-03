import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <Navbar />
        <Hero />

        <section className=" mt-4 ">
          <div className="flex justify-center items-center text-purple-700 mt-4 md:mt-12 relative">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM5 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM8 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-2 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <h3 className="font-semibold tracking-wider text-md md:text-lg">
                Projects
              </h3>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
