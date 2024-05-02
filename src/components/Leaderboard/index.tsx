import Image from "next/image";

const Leaderboard: React.FC = () => {
  return (
    <div className="mt-12 md:mt-24 font-bold text-3xl ">
      <h1 className="font-bold text-md md:text-2xl tracking-wide mb-4 md:mb-8">
        Top 10 WarpHeroes
      </h1>
      <div className="flex items-center justify-center mb-4 md:mb-8">
        <Image
          src="/images/leaderboard.jpg"
          width={100}
          height={100}
          alt="To 10 WarpHeroes"
        />
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

      <div className="max-w-full grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="relative w-64 h-full flex flex-col rounded-2xl bg-white cursor-pointer shadow-lg text-sm transform transition-transform scale-100 hover:scale-105">
          <Image
            width={50}
            height={50}
            src=""
            alt="Top 10 WarpHeroes"
            className="overflow-hidden object-cover h-24 object-top w-full rounded-t-2xl min-h-[98px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
