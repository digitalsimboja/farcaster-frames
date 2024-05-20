import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { useApp } from "@/context/AppContext";
import useLocalStorage from "@/hooks/use-local-storage-state";
import { UserInfo } from "../../types";
import Image from "next/image";
import SignIn from "../ui/SignIn";

const DesktopNav: React.FC = () => {
  const { userData, fid } = useApp();
  const [user, _1, removeItem] = useLocalStorage<UserInfo>("user");

  const handleSignout = () => {
    removeItem();
    window.location.reload();
  };

  return (
    <>
      <div className="hidden md:flex justify-between gap-8 items-center font-bold relative ">
        <div className="relative group flex items-center">
          <Link href="" className="">
            Projects
          </Link>
          <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 " />
        </div>
        <Link href="/jobs" className="">
          Dex Jobs
        </Link>
        <Link href="/quiz" className="">
          Take Quiz!
        </Link>
        <Link
          href="/signup"
          className="border border-violet-700  rounded-full px-4 py-1"
        >
          Get Started
        </Link>
        <div className="">
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
              <button onClick={handleSignout}>Sign Out</button>
            </div>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
