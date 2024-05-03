import Link from "next/link";

interface ProjectsProps {
  imagePath: string;
  projectURL: string;
  name: string;
  description: string;
}

export const Projects: ProjectsProps[] = [
  {
    imagePath: "/images/ethereum.png",
    projectURL: "www.warpheroes.xyz",
    name: "Etheruem",
    description: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/aave.jpeg",
    projectURL: "www.warpheroes.xyz",
    name: "AAVE",
    description: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/base.png",
    projectURL: "www.warpheroes.xyz",
    name: "Base",
    description: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/farcaster.jpeg",
    projectURL: "www.warpheroes.xyz",
    name: "Farcaster",
    description: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
  {
    imagePath: "/images/farcaster.jpeg",
    projectURL: "www.warpheroes.xyz",
    name: "Farcaster",
    description: " Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
  },
];

const Sponsors: React.FC = () => {
  return (
    <>
      <section className="mt-4 mb-2">
        <div className="flex items-center justify-center text-purple-700 mt-4 md:mt-12 ">
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
          <span className="font-semibold tracking-wider text-md md:text-lg">
            Projects
          </span>
        </div>
      </section>
      <section className="  px-4 md:px-24 mt-4">
        <div className="flex w-full md:max-w-7xl justify-between items-center border-b pb-4 mb-4">
          <div className="flex justify-start items-center space-x-4">
            <h3 className="font-semibold text-md md:text-xl tracking-wider">
              Defi
            </h3>
            <button className="text-sm py-1 px-2 cursor-pointer scale-100 shadow-md rounded-full hover:scale-105">
              View all
            </button>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              cursor={"pointer"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              cursor={"pointer"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-5  gap-4">
        {Projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-64 h-full flex flex-col rounded-2xl cursor-pointer shadow-lg text-sm transition-transform transform  scale-100 hover:scale-105 hover:shadow-xl hover:shadow-violet-400"
            >
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
                      {project.name}
                    </h3>
                  </div>
                  <p className="overflow-hidden line-clamp-3 font-light">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <img
                      className="w-10 h-10 rounded-full "
                      src={project.imagePath}
                    />
                    <a
                      href="https://highlight.xyz"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="truncate overflow-hidden max-w-[180px] bg-bg-card-secondary rounded-2xl text-center cursor-pointer hover:bg-flouro px-3 py-2 ">
                        {project.projectURL}
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
      </section>
    </>
  );
};

export default Sponsors;
