"use client";

import { UserData } from "@/database/user";
import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FC } from "react";
import { config } from "@/config/config";

export const revalidate = 3600;

type LeaderboardProps = {
  userData: UserData[];
};

const DisplayLeaderboard: FC<LeaderboardProps> = ({ userData }) => {
  return (
    <>
      {userData.map((user, index) => (
        <div key={index} className="bg-gray-700 p-2 md:p-4 w-full">
          <div className="flex items-center justify-between text-2xl md:text-4xl">
            <div className="flex items-center">
              <FaTrophy className="text-yellow-500 mr-2 md:mr-4" />
              <h2>{user.username}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Leaderboard: React.FC = async () => {
  const userData = await fetchAllUserData();

  return (
    <div className="mt-12 md:mt-24">
      <div className="mb-4 md:mb-8">
        <h2 className="font-bold text-xl md:text-3xl tracking-wider mb-2">
          WarpHeroes Leaderboard
        </h2>
        <p className="max-w-3xl text-gray-500">
          This board shows top WarpHeroes. The first leaderboard round will be
          closed in July. Top 100 WarpHeroes will receive a non-transferable
          Mystery Box NFT unlocking physical merchandise.
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
            {userData && <DisplayLeaderboard userData={userData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

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
  }
};
