import Image from "next/image";

interface ProjectsProps {
  imagePath: string;
  name: string;
  text: string;
}
const Projects: ProjectsProps[] = [
  {
    imagePath: "/images/ethereum.png",
    name: "Etheruem",
    text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/aave.jpeg",
    name: "AAVE",
    text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/base.png",
    name: "Base",
    text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/farcaster.jpeg",
    name: "Farcaster",
    text: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
];
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

      <section className=" bg-violet-100 py-4 px-4 md:px-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24">
          <div className="flex col-span-1 p-4 bg-gradient-to-tr from-gray-200 via-purple-50 to-pink-200 h-full rounded-xl shadow-lg shadow-violet-500/50">
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
              <div className="mt-4 flex flex-col gap-2 md:flex-row ">
                <div className="flex md:flex-row md:w-auto w-full space-x-2">
                  <button className="bg-purple-600 rounded-sm text-white px-4 py-2 md:px-4 md:py-2 w-full md:w-auto">
                    Learn More!
                  </button>
                  <button className="bg-pink-600 rounded-sm text-white px-4 py-2 md:px-4 w-full md:w-auto">
                    Earn More!
                  </button>
                </div>
                <span className="bg-black text-white py-2 px-4 rounded-md md:px-4 md:py-2 text-center">
                  Meet us on <span className="underline">Warpcast</span>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 ">
            <div className="flex-grow p-4 ">
              <h2 className="text-lg font-semibold tracking-wider">
                Popular Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 ">
              {Projects.map((project, index) => {
                return (
                  <div key={index} className="shadow-md shadow-gray-500/50 p-4 rounded bg-white">
                    <div className="flex justify-between items-center">
                      <h3 className="pt-0 pb-4 text-purple-700 font-md tracking-wider">
                        {project.name}
                      </h3>
                    </div>
                    <Image
                      src={project.imagePath}
                      alt="Etheruem"
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <div className="overflow-hidden line-clamp-3">
                      <p className="font-light text-sm">{project.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
