import { Projects } from "@/config/data";
import Link from "next/link";

const Defi: React.FC = () => {
  return (
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
  );
};

export default Defi;
