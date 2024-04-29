import Link from "next/link"
import { IoChevronDownSharp } from "react-icons/io5";

const DesktopNav: React.FC = () => {
    return (
        <div className="hidden md:flex justify-between gap-8 items-center font-bold relative">
        <div className="relative group flex items-center z-[1000]">
          <Link href="">Solutions</Link>
          <IoChevronDownSharp className="ml-1 transform -translate-y-0.2 text-black" />
          <div className="absolute opacity-0 bg-black  z-[1000]  top-full left-0 group-hover:opacity-80 border border-gray-300 shadow-md p-4 rounded-md w-[600px] h-[300px] grid grid-cols-3 gap-8 transition-opacity duration-300">
            <div className="flex flex-col space-y-4 ">
              <h1 className="text-gray-500 uppercase">Projects</h1>
              <ul className="text-white space-y-2">
                <li>
                  <i className="fas fa-robot"></i>AAVE
                </li>
                <li>
                  <i className="fas fa-android"></i> 1Inch
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> Balancer
                </li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-gray-500 uppercase">Protocols</h1>
              <ul className="text-white space-y-2">
                <li>Etheruem Foundation</li>
                <li>Polygon</li>
                <li>Tron</li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-gray-500 uppercase">Use cases</h1>
              <ul className="text-white space-y-2">
                <li>Metaverse Platforms</li>
                <li>Marketplaces</li>
                <li>Defi</li>
                <li>
                  <i className="fas fa-user-secret"></i> ...Other
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/tools" className="text-black">
          Leaderboard
        </Link>
      </div>
    )
}

export default DesktopNav;