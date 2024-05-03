import Link from "next/link";

interface WarpHeroesLeaders {
  name: string;
  description: string;
  username: string;
  profileURL: string;
}

const Leaders: WarpHeroesLeaders[] = [
  {
    name: "Nexus",
    description:
      " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    username: "evveland.xyz",
    profileURL:
      "https://e7.pngegg.com/pngimages/527/535/png-clipart-gamecube-controller-nintendo-game-controllers-video-game-consoles-cube-purple-blue.png",
  },
  {
    name: "Nexus",
    description:
      " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    username: "evveland.xyz",
    profileURL:
      "https://e7.pngegg.com/pngimages/527/535/png-clipart-gamecube-controller-nintendo-game-controllers-video-game-consoles-cube-purple-blue.png",
  },
  {
    name: "Nexus",
    description:
      " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    username: "evveland.xyz",
    profileURL:
      "https://e7.pngegg.com/pngimages/527/535/png-clipart-gamecube-controller-nintendo-game-controllers-video-game-consoles-cube-purple-blue.png",
  },
  {
    name: "Nexus",
    description:
      " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    username: "evveland.xyz",
    profileURL:
      "https://e7.pngegg.com/pngimages/527/535/png-clipart-gamecube-controller-nintendo-game-controllers-video-game-consoles-cube-purple-blue.png",
  },
  {
    name: "Nexus",
    description:
      " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    username: "evveland.xyz",
    profileURL:
      "https://e7.pngegg.com/pngimages/527/535/png-clipart-gamecube-controller-nintendo-game-controllers-video-game-consoles-cube-purple-blue.png",
  },
];

const WarpHeroes: React.FC = () => {
  return (
    <div>
      <div className="border-b-[2px]  mb-4">
        <div className="flex items-center space-x-2 justify-start">
          <h1 className="font-semibold tracking-wider text-md md:text-2xl ">
            Leaderboard
          </h1>
          <button className="bg-sky-300 py-1 px-2 rounded-full text-sm md:text-lg font-semibold hover:bg-sky-500 text-white cursor-pointer">
            View all
          </button>
        </div>
        <p className="text-sm md:text-md font-light tracking-wider mb-2">
          Here is out top 10 WarpHeroes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Grid Items or Cards */}
        {Leaders.map((leader, index) => {
          return (
            <div key={index} className="relative w-64 h-full flex flex-col rounded-2xl bg-white cursor-pointer shadow-lg text-sm transition-transform transform  scale-100 hover:scale-105 ">
              <Link href="https://venue.evveland.com/">
                <img
                  src="https://images.vexels.com/media/users/3/146835/raw/4fa5697db3abeba4798811609b85d70c-flat-sunset-background-illustration.jpg"
                  className="w-full object-cover object-top h-[96px] overflow-hidden rounded-t-2xl min-h-[98px]"
                />
              </Link>
              <div className="flex flex-col justify-between gap-3 p-3 h-full">
                <div className="">
                  <div className="flex justify-between items-center mb-2 border-b-[1px]">
                    <h3 className="pt-0 text-sm tracking-wider mb-2">
                      {leader.name}
                    </h3>
                  </div>
                  <p className="overflow-hidden line-clamp-3 font-light">
                    {leader.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <img
                      className="w-10 h-10 rounded-full "
                      src={leader.profileURL}
                    />
                    <a
                      href="https://highlight.xyz"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="truncate overflow-hidden max-w-[180px] bg-bg-card-secondary rounded-2xl text-center cursor-pointer hover:bg-flouro px-3 py-2 ">
                        {leader.username}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarpHeroes;
