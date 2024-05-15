"use client";
import { Leaders } from '@/config/data';
import Link from 'next/link';

export interface WarpHeroesLeaders {
  name: string;
  description: string;
  username: string;
  profileURL: string;
}

const WarpHeroes: React.FC = () => {
  return (
    <div>
      <div className="border-b-[2px] w-full md:max-w-7xl  flex justify-between  mb-4">
        <div>
          <div className="flex items-center space-x-2 justify-start mb-2">
            <h3 className="font-semibold text-md md:text-xl tracking-wider">
              Leaderboard
            </h3>
            <button className="text-sm py-1 px-2 cursor-pointer rounded">
              View all
            </button>
          </div>
          <p className="text-sm md:text-md font-light tracking-wider mb-2">
            Here is out top 10 WarpHeroes
          </p>
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
      {/* Warp Heroes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        {Leaders.map((leader, index) => {
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
