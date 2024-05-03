import Link from "next/link";
import Defi from "./Defi";

export interface ProjectsProps {
  imagePath: string;
  projectURL: string;
  name: string;
  description: string;
}

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
       <Defi />
      </section>
    </>
  );
};

export default Sponsors;
