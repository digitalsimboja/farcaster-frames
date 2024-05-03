import TopCard from "./TopCard";
import WarpHeroes from "./WarpHeroes";

const Hero: React.FC = () => {
  return (
    <>
      <section className=" max-w-7xl mx-auto">
        <div className="overflow-hidden w-full md:mb-4 mb-2">
          <p className="animate-marquee whitespace-nowrap text-pink-600 font-light text-sm md:text-lg ">
            By cultivating a community through our quiz-based Proof of
            Expertise, Warpheroes strives to be the pivotal gamified community
            bridging individuals with protocols, fostering both growth and
            innovation in the Web3 ecosystem.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-br from-gray-200 via-purple-50 to-pink-200 py-4 px-4 md:px-24">
        <TopCard />
        <WarpHeroes />
      </section>
    </>
  );
};

export default Hero;
