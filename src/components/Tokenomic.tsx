const TokenBreakdown = () => {
  return (
    <div className="flex items-center flex-col gap-4 md:gap-8 mt-6 md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        <div className="flex flex-col gap-2 rounded-2xl  bg-gray-900 w-full h-full md:h-80 md:w-[500px]">
          <div className="flex justify-between bg-gradient-to-r from-pink-500 to-violet-700 via-pink-500 rounded-2xl p-4 md:p-8">
            <p className="font-bold md:text-2xl text-sm">Token Name: </p>
            <p className="font-bold md:text-2xl text-sm">WARPH</p>
          </div>
          <div className="flex justify-between p-4 md:p-8">
            <p className="font-bold md:text-2xl text-sm">
              Initial Circulating Supply:
            </p>
            <p className="font-bold md:text-2xl text-sm">37.5M</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-2xl  bg-gray-900 w-full h-full md:h-80 md:w-[500px]">
          <div className="flex justify-between bg-gradient-to-r from-pink-500 to-violet-700 via-pink-500 rounded-2xl p-4 md:p-8">
            <p className="font-bold md:text-2xl text-sm">Token Type: </p>
            <p className="font-bold md:text-2xl text-sm">ERC20 (Base)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col gap-2 rounded-2xl  bg-gray-900 w-full h-full md:h-80 md:w-[500px] space-x-4 md:space-x-12">
          <div className="flex justify-between bg-gradient-to-r from-pink-500 to-violet-700 via-pink-500  p-4 md:p-8 rounded-2xl">
            <p className="font-bold md:text-2xl text-sm">Token Name: </p>
            <p className="font-bold md:text-2xl text-sm">WARPH</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-2xl  bg-gray-900 w-full h-full md:h-80 md:w-[500px] space-x-4 md:space-x-12">
          <div className="flex justify-between bg-gradient-to-r from-pink-500 to-violet-700 via-pink-500  p-4 md:p-8 rounded-2xl">
            <p className="font-bold md:text-2xl text-sm">Token Type: </p>
            <p className="font-bold md:text-2xl text-sm">ERC20 (Base)</p>
          </div>
        </div>
      </div>

      <div>Fiirs row</div>
      <div>Fiirs row</div>
    </div>
  );
};

const Tokenomic: React.FC = () => {
  return (
    <section className="mt-4 md:mt-24">
      <div className="">
        <h2 className="text-2xl md:text-4xl  text-center font-bold uppercase  mb-4 md:mb-8 tracking-wide md:tracking-wider">
          Tokenomics <span className="text-outline"> breakdown</span>
        </h2>
        <TokenBreakdown />
      </div>
    </section>
  );
};

export default Tokenomic;
