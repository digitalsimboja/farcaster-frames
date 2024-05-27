import Image from "next/image";

const Leaderboard: React.FC = () => {
  return (
    <div className="mt-12 md:mt-24">
      <div className="mb-4 md:mb-8">
        <h2 className="font-bold text-xl md:text-3xl tracking-wider mb-2">
          WarpHeroes Leaderboard
        </h2>
        <p className="max-w-3xl text-gray-500 ">
          This board shows top WarpHeroes. The first leaderboard round will be
          closed in July. Top 100 WarpHeroes will receive a non-transferable
          Mystery Box NFT unlocking physical merchandise.
        </p>
      </div>
      <div className="flex items-center space-x-2 mb-4 ">
        <h2 className="font-bold text-xl md:text-2xl tracking-wide">
          WarpHeroes
        </h2>
        <span className="border border-purple-400 rounded-full py-1 px-4 text-sm cursor-pointer align-middle">
          View all
        </span>
      </div>
      <span className="block items-center justify-center mb-4 border-b-[1px] border-gray-700 "></span>

      <div className="mt-4 md:mt-6">
        <div className=" shadow-lg shadow-pink-700 hover:shadow-gray-500 h-full md:h-80 bg-gray-900">
          <div className="flex justify-around items-center p-4 md:p-8 text-2xl">
            <h2>Rank</h2>
            <h2>User</h2>
            <h2>Projects</h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
