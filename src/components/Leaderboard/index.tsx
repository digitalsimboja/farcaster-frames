const Leaderboard: React.FC = () => {
  return (
    <div className="mt-12 md:mt-24 font-bold text-3xl mb-4">
      <h1 className="font-bold text-md md:text-2xl tracking-wide mb-4 md:mb-8">
        Top 10 WarpHeroes
      </h1>
      <div className="flex items-center justify-center mb-4 md:mb-8">
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
      </div>

      <div className="flex items-center space-x-2 mb-4 ">
        <h2 className="font-bold text-xl md:text-2xl tracking-wide">WarpHeroes</h2>
        <span className="border border-purple-400 rounded-full py-1 px-4 text-sm cursor-pointer align-middle">
          View all
        </span>
      </div>
      
      <div className="max-w-full grid grid-cols-1 md:grid-cols-5 gap-4">
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
        <img src="/images/leaderboard.jpg" alt="Top 10 WarpHeroes" />
      </div>
    </div>
  );
};

export default Leaderboard;
