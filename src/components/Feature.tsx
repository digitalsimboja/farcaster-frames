import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Feature: React.FC = () => {
  return (
    <>
      <section className="relative py-12">
        <div className="flex justify-around md:flex-row flex-col gap-4 relative">
          <div className="md:relative relative h-[400px] md:h-auto">
            <div className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full bg-gray-900 left-8 md:left-32 top-20 md:top-40"></div>
            <div className="absolute top-5 md:top-10 left-5 md:left-10 w-8 h-8 md:w-16 md:h-16 rounded-full bg-pink-900"></div>
            <div className="absolute top-12 md:top-24 left-20 md:left-40 w-6 h-6 md:w-12 md:h-12 rounded-full bg-blue-900"></div>
            <div className="absolute bottom-10 md:bottom-20 md:top-32 left-20 md:left-40 w-10 h-10 md:w-20 md:h-20 rounded-full bg-violet-900"></div>
            <div className="absolute top-24 md:top-48 right-6 md:right-12 w-4 h-4 md:w-8 md:h-8 rounded-full bg-green-500"></div>
            <div className="absolute bottom-5 md:bottom-10 right-12 md:right-24 w-5 h-5 md:w-10 md:h-10 rounded-full bg-violet-500"></div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
              <h2 className="font-bold text-2xl md:text-3xl uppercase tracking-wide">
                What is it?
              </h2>
              <p className="uppercase text-outline font-bold tracking-widest text-lg md:text-5xl text-center">
                WarpHeroes?
              </p>
            </div>
            <div>
              <ul className="list-none space-y-2 text-md md:text-xl">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">
                    <FaCircleCheck />
                  </span>
                  Gamified skill validation
                </li>
                <li className="flex items-center">
                  <span className=" mr-2 text-green-500">
                    <FaCircleCheck />
                  </span>
                  Proof of expertise
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaCircleCheck />
                  </span>
                  Community and protocol connection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
