const Hero: React.FC = () => {
  return (
    <>
      <section className="px-4 max-w-7xl mx-auto">
        <div className="overflow-hidden w-full">
          <p className="animate-marquee whitespace-nowrap text-pink-600 font-light ">
            Este es un texto que se desplaza horizontalmente. Puedes agregar más
            contenido aquí si lo deseas.
          </p>
        </div>
      </section>
      <div className="md:mt-12 mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24">
          <div className="flex col-span-1 p-4 bg-gradient-to-tr from-gray-200 via-purple-50 to-pink-200 h-full rounded-xl">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold tracking-wide text-sm md:text-lg lg:text-xl">
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
              <p className="text-sm md:text-base"> <span className="bg-blue-500 p-2 rounded text-white">Learn More  </span> | <span className="bg-blue-500 p-2 rounded text-white">Earn More  </span>  | Meet us on <span className="underline"><a href="#">Warpcast</a></span>.</p>
              
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col justify-start">
            <div className="flex-grow p-4 bg-gray-200 rounded-xl">Column 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
