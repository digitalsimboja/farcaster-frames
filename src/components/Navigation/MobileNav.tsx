import Link from "next/link";
import { MouseEventHandler } from "react";
import { FaTimes } from "react-icons/fa";

interface MobileNavProps {
  onClose: MouseEventHandler<SVGElement>
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 md:hidden bg-gray-900 overflow-hidden transition-transform transform w-64 z-[1000]">
      <div className="absolute top-4 right-4">
        <FaTimes
          className="text-white cursor-pointer"
          onClick={onClose}
        />
      </div>
      <ul className="md:flex flex-col ml-8 space-y-4 mt-8">
        <li className="hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/concept">Concept</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/dao">DAO</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/leaderboard">Leaderboard</Link>
        </li>
      </ul>

      {/* Horizontal Divider */}
      <hr className="border-t my-4 border-gray-500 mb-4" />
    </div>
  );
};

export default MobileNav;
