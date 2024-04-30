import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";

const DesktopNav: React.FC = () => {
  return (
    <div className="hidden md:flex justify-between gap-8 items-center font-bold relative">
      <div className="relative group flex items-center">
        <Link href="" className="">
          About
        </Link>
        <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 " />
      </div>
      <Link href="/contact" className="">
        Play to Earn
      </Link>
      <Link href="/login" className="">
        Take Quiz
      </Link>
      <Link
        href="/signup"
        className="border border-purple-500 rounded-full px-4 py-1"
      >
        Get Started
      </Link>
    </div>
  );
};

export default DesktopNav;
