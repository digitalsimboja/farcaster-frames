import { GiJourney } from "react-icons/gi";
import { MdQuiz } from "react-icons/md";
import { RiNftFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import Image from "next/image";

const StartJourney = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:py-24">
      <div className="uppercase font-bold tracking-widest text-lg md:text-5xl">
        <h2 className="mb-0 md:mb-4">Begin Your</h2>
        <div className="flex items-center space-x-2">
          <span className="text-outline">Journey</span>
          <GiJourney className="text-3xl md:text-5xl text-violet-500" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ul className="text-md md:text-lg py-2 md:py-8 space-y-4">
          <li className="flex items-center text-xl md:text-3xl">
            <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-pink-500 rounded-full mr-2">
              <MdQuiz className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            Take the Quiz!
          </li>
          <li className="flex items-center text-xl md:text-3xl">
            <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-violet-500 rounded-full mr-2">
              <RiNftFill className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            Mint a WarpHero Pass
          </li>
          <li className="flex items-center text-xl md:text-3xl">
            <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-full mr-2">
              <MdLeaderboard className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            Join the Community Leaderboard
          </li>
          <li className="flex items-center text-xl md:text-3xl">
            <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full mr-2">
              <IoIosCloudDone className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
            Congrats! You are now a WarpHero
          </li>
        </ul>
      </div>
    </div>
  );
};

const GetStarted: React.FC = () => {
  return (
    <section className="mt-12 md:mt-24">
      <div className="flex flex-col-reverse md:flex-row mr-0 md:mr-24 justify-between md:gap-8">
        <StartJourney />
        <div className="flex items-center justify-center py-4 md:py-0">
          <div className="pl-0 md:pl-24">
            <Image
              src="/images/get-started.png"
              alt="Get started"
              width={960}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
