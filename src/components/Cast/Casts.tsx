"use client";

import { useApp } from "@/context/AppContext";
import { CastWithInteractions } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import { useState } from "react";
import { Button } from "../ui/button";
import Cast from "../Cast";
import { MyCasts } from "./MyCasts";

interface Props {
  feed: CastWithInteractions[];
}

export const Casts: React.FC<Props> = ({ feed }) => {
  const [all, setAll] = useState(true);
  const { fid } = useApp();

  return (
    <div className="md:px-20 px-6 mb-10">
      <div className="flex items-center justify-between sm:flex-row flex-col gap-2 sm:gap-0">
        <div className="flex gap-4">
          <Button
            onClick={() => setAll(true)}
            className={`${
              all
                ? "border-blue-500 text-blue-500"
                : "border-[#272B30] text-gray-200"
            }
           rounded-full border-2 px-6 py-2 bg-transparent hover:bg-white/15 hover:text-white
          `}
            variant="outline"
          >
            All Casts
          </Button>
          <Button
            onClick={() => setAll(false)}
            className={`${
              !all
                ? "border-blue-500 text-blue-500"
                : "border-[#272B30] text-gray-200"
            }
           rounded-full border-2 px-6 py-2 bg-transparent hover:bg-white/15 hover:text-white
          `}
            disabled={!fid}
            variant="outline"
          >
            My casts
          </Button>
        </div>

        <p className="text-[#646D7A] text-sm font-semibold cursor-pointer text-center">
          ✨ Try hovering over any cast and click to mint it
        </p>
        <div />
      </div>

      {all ? (
        <div className="flex flex-col gap-4 pt-6">
          {feed.map((cast) => {
            if (cast.text) {
              return <Cast key={cast.thread_hash} cast={cast} />;
            }
          })}
        </div>
      ) : (
        <MyCasts />
      )}
    </div>
  );
};
