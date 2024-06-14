"use client";

import { UserData } from "@/database/user";
import { FaSpinner, FaTrophy } from "react-icons/fa";
import { FC, useEffect, useState } from "react";
import { config } from "@/config/config";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer";
import { timeStringToMilliseconds } from "@/utils/helpers";

export const revalidate = 3600;

type LeaderboardProps = {
  userData: UserData[];
};

const DisplayLeaderboard: FC<LeaderboardProps> = ({ userData }) => {
  return (
    <>
      {userData.map((user, index) => (
        <div
          key={index}
          className="bg-gray-700 p-2 md:p-4 w-full scale-100 hover:scale-105 rounded-xl"
        >
          <div className="flex items-center justify-between text-sm md:text-2xl">
            <div className="flex items-center">
              {index + 1 === 1 ? (
                <FaTrophy className="text-yellow-500 mr-2 md:mr-4" />
              ) : (
                <h2 className="mr-2 md:mr-4 text-pink-500"> #{index + 1}</h2>
              )}
              <h2>{user.username}</h2>
            </div>
            <div className="flex items-center mr-2 md:mr-4">
              <div className="w-4 h-4 mr-2 bg-green-500 rounded-full "></div>
              <h2>{user.completionTime}ms</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const fetchAllUserData = async () => {
  try {
    const response = await fetch(`${config.hostUrl}/api/users`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const result = await response.json();
    const { data } = result;

    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return [];
  }
};

const Leaderboard: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const userDataList: UserData[] = await fetchAllUserData();
      const sortedUserDataList = userDataList.sort(
        (a, b) =>
          timeStringToMilliseconds(a.completionTime) -
          timeStringToMilliseconds(b.completionTime)
      );
      const slicedUserDataList = sortedUserDataList.slice(0, 20);
      console.log(slicedUserDataList);
      setUserData(slicedUserDataList);
      setLoading(false);
    };

    fetchData();
  }, []);
 

  return (
    <>
      <div className="max-w-7xl px-4 mx-auto">
        <Navbar />
        <div className="mt-12 md:mt-24 mb-4 md:mb-24">
          <div className="mb-4 md:mb-8">
            <h2 className="font-bold text-xl md:text-3xl tracking-wider mb-2">
              WarpHeroes Leaderboard
            </h2>
            <p className="max-w-3xl text-gray-500">
              This board shows top WarpHeroes. The first leaderboard round will
              be closed on July 5th. Top 100 WarpHeroes will receive a
              non-transferable Mystery Box NFT unlocking physical merchandise.
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="font-bold text-xl md:text-2xl tracking-wide">
              WarpHeroes
            </h2>
            <span className="border border-purple-400 rounded-full py-1 px-4 text-sm cursor-pointer align-middle">
              View all
            </span>
          </div>
          <span className="block items-center justify-center mb-4 border-b-[1px] border-gray-700"></span>

          <div className="mt-4 md:mt-6">
            <div className="shadow-lg shadow-pink-700 hover:shadow-gray-500 h-full md:h-80 bg-gray-900">
              <div className="flex flex-col items-center p-4 md:p-8 space-y-4 md:space-y-8">
                {loading ? (
                  <FaSpinner className="animate-spin text-4xl text-gray-500 text-center" />
                ) : (
                  <DisplayLeaderboard userData={userData} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Leaderboard;
