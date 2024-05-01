const Hero: React.FC = () => {
  return (
    <>
      <section className=" max-w-7xl mx-auto">
        <div className="overflow-hidden w-full">
          <p className="animate-marquee whitespace-nowrap text-pink-600 font-light ">
            By cultivating a community through our quiz-based Proof of
            Expertise, Warpheroes strives to be the pivotal gamified community
            bridging individuals with protocols, fostering both growth and
            innovation in the Web3 ecosystem.
          </p>
        </div>
      </section>

      <section className="md:mt-12 mt-8 bg-violet-100 py-4 px-4 md:px-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24">
          <div className="flex col-span-1 p-4 bg-gradient-to-tr from-gray-200 via-purple-50 to-pink-200 h-full rounded-xl">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold tracking-wide text-2xl md:text-4xl lg:text-xl">
                Evveland WarpHeroes
              </h1>
              <p className="text-sm tracking-wider md:text-base">
                Optimizing web3 Building through Proof of Expertise &
                peer-to-peer skill validation
              </p>
              <p className="text-sm md:text-base">
                Warpheroes enables Web3 builders—developers and enthusiasts
                alike—to demonstrate their expertise and connect with protocols
                efficiently via gamified challenges on Warpcast.
              </p>
              <div className="mt-4 flex space-x-2 items-center">
                <button className="bg-purple-600 rounded-full text-white px-4 py-2">
                  Learn More!
                </button>
                <button className="bg-pink-600 rounded-full text-white px-4 py-2">
                  Earn More!
                </button>
                <span>
                  Meet us on <span className="underline">Warpcast</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col justify-start">
            <div className="flex-grow p-4 bg-gray-200 rounded-xl">Column 2</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
