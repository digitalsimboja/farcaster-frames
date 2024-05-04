import { Projects } from "@/config/data";
import Image from "next/image";

const TopCard: React.FC = () => {
  return (
    <div className="">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex col-span-1 items-center p-8 mr-4 mb-8 text-sm rounded-2xl border-4 border-white backdrop-blur md:col-span-6 sm:mr-8 lg:mr-20 z-100 bg-gradient-to-tr from-gray-200 via-purple-50 to-pink-200">
            <div className="flex flex-col justify-between gap-4">
              <h2 className="pt-0 pb-4 text-2xl">Evveland WarpHeroes</h2>
              <p>
                Optimizing web3 Building through Proof of Expertise &
                peer-to-peer skill validation
              </p>
              <p >
                Warpheroes enables Web3 builders - developers and enthusiasts
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
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24 mb-4 md:mb-8">
    //   <div className="flex col-span-1 p-4 bg-gradient-to-tr from-gray-200 via-purple-50 to-pink-200 h-full rounded-xl shadow-lg shadow-violet-500/50">
    //     <div className="flex flex-col gap-4">
    //       <h1 className="font-bold tracking-wide text-2xl md:text-4xl lg:text-xl">
    //         Evveland WarpHeroes
    //       </h1>
    //       <p className="text-sm tracking-wider md:text-base">
    //         Optimizing web3 Building through Proof of Expertise & peer-to-peer
    //         skill validation
    //       </p>
    //       <p className="text-sm md:text-base">
    //         Warpheroes enables Web3 builders—developers and enthusiasts alike—to
    //         demonstrate their expertise and connect with protocols efficiently
    //         via gamified challenges on Warpcast.
    //       </p>
          // <div className="mt-4 flex flex-col gap-2 md:flex-row ">
          //   <div className="flex md:flex-row md:w-auto w-full space-x-2">
          //     <button className="bg-purple-600 rounded-sm text-white px-4 py-2 md:px-4 md:py-2 w-full md:w-auto">
          //       Learn More!
          //     </button>
          //     <button className="bg-pink-600 rounded-sm text-white px-4 py-2 md:px-4 w-full md:w-auto">
          //       Earn More!
          //     </button>
          //   </div>
          //   <span className="bg-black text-white py-2 px-4 rounded-md md:px-4 md:py-2 text-center">
          //     Meet us on <span className="underline">Warpcast</span>
          //   </span>
          // </div>
    //     </div>
    //   </div>

    //   <div className="col-span-1 md:col-span-2 ">
    //     <div className="flex-grow p-4 ">
    //       <div className="flex justify-between">
    //         <h2 className="text-lg font-semibold tracking-wider">
    //           Popular Projects
    //         </h2>
    //         <div className="flex">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 mr-2 text-gray-500"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             cursor={"pointer"}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M15 19l-7-7 7-7"
    //             />
    //           </svg>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             cursor={"pointer"}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M9 5l7 7-7 7"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="overflow-x-auto">
    //       <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4 ">
    //         {Projects.map((project, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className="shadow-md shadow-gray-500/50 p-4 rounded bg-white transform transition-transform scale-100 hover:scale-105 hover:shadow-lg hover:shadow-violet-400"
    //             >
    //               <div className="flex justify-between items-center">
    //                 <h3 className="pt-0 pb-4 text-purple-700 font-md tracking-wider">
    //                   {project.name}
    //                 </h3>
    //               </div>
    //               <Image
    //                 src={project.imagePath}
    //                 alt="Etheruem"
    //                 width={80}
    //                 height={80}
    //                 className="rounded-full mb-4"
    //               />
    //               <div className="overflow-hidden line-clamp-3">
    //                 <p className="font-light text-sm">{project.description}</p>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TopCard;
