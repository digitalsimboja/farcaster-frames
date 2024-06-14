"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import useLocalStorage from "@/hooks/use-local-storage-state";
import { UserInfo } from "../../types";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { PlusIcon } from "lucide-react";
import Connect from "../ui/connect";

const DesktopNav: React.FC = () => {
  const { userData } = useApp();
  const [user, _1, removeItem] = useLocalStorage<UserInfo>("user");
  const [isOpened, setIsOpened] = useState(false);
  const [text, setText] = useState("");

  const handleSignout = () => {
    removeItem();
    window.location.reload();
  };

  const createCast = async () => {
    if (!user.signerUuid) {
      return;
    }

    const req = await fetch("/api/casts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signerUuid: user.signerUuid,
        text,
      }),
    });

    if (req.ok) {
      alert("Cast created");

      setText("");
    } else {
      alert("Failed to create cast");
    }

    setIsOpened(false);
  };

  const DialogCast = () => {
    return (
      <Dialog open={isOpened} onOpenChange={setIsOpened}>
        <DialogTrigger asChild>
          <button className="bg-[#0091FF] text-white gap-2 rounded-lg h-8 w-28 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
            <PlusIcon width={24} height={24} />
            New Cast
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-[#131417] border-[0.5px] border-[#2B2B2B]">
          <DialogHeader>
            <DialogTitle className="text-white font-semibold text-lg text-center">
              New cast
            </DialogTitle>
          </DialogHeader>

          <div className="flex items-center gap-4 p-4">
            <Image
              src={userData?.pfp.url as string}
              alt="User profile picture"
              width={32}
              height={32}
              className="rounded-full"
            />
            <input
              type="text"
              placeholder="What's happening?"
              className="w-full h-12 p-4 bg-[#1A1C1F] border-[1px] border-[#2B2B2B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <DialogFooter className="border-t-2 border-[#2B2B2B] justify-end pt-4 align-end">
            <DialogClose asChild>
              <button className="border-[#2B2B2B] text-white hover:bg-[#2B2B2B] hover:text-white">
                Cancel
              </button>
            </DialogClose>
            <button
              className="bg-[#0091FF] text-white hover:bg-blue-700"
              onClick={createCast}
            >
              Post
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      <div className="hidden md:flex justify-between gap-8 items-center font-bold relative ">
        <Link href="#" className="">
          Concept
        </Link>
        <Link href="#" className="">
          DAO
        </Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Connect />

        {/* <div className="">
          {userData?.displayName ? (
            <div className="flex items-center gap-4">
              {userData?.pfp.url && (
                <Image
                  src={userData?.pfp.url}
                  alt="User profile image"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <p className="text-sm font-semibold">{userData?.displayName}</p>
              <DialogCast />
              <button onClick={handleSignout}>Sign Out</button>
            </div>
          ) : (
            <SignIn />
          )}
        </div> */}
      </div>
    </>
  );
};

export default DesktopNav;
