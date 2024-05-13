"use client";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "../Carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
              <p>
                Warpheroes enables Web3 builders - developers and enthusiasts
                alike to demonstrate their expertise and connect with protocols
                efficiently via gamified challenges on Warpcast.
              </p>
              <div className="flex flex-col md:flex-row space-x-2">
                <div className="flex md:flex-row md:w-auto w-full space-x-2 mb-4 md:mb-0">
                  <button className="bg-purple-600 rounded-full  text-white px-4 py-2 md:px-4 w-full md:w-auto whitespace-nowrap">
                    Learn More!
                  </button>
                  <button className="bg-pink-600 rounded-full text-white px-4 py-2 md:px-4 w-full md:w-auto whitespace-nowrap">
                    Earn More!
                  </button>
                </div>
                <span className="bg-black text-white py-2 px-4 rounded-md md:px-4 md:py-2 text-center">
                  Meet us on <span className="underline">Warpcast</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6">
            <div className="px-4 pb-8 mx-auto mb-8 max-w-7xl">
              <div className="flex justify-center gap-3">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
