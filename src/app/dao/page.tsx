import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navigation/Navbar";
import { FaCircleCheck } from "react-icons/fa6";
import Footer from "@/components/Footer";
const DAO:React.FC = () => {
    return (
        <>
          <div className="max-w-7xl px-4 mx-auto">
            <Navbar />
            <section className="py-8 md:py-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div className="flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-2xl md:text-7xl pb-1 md:pb-4 font-bold tracking-wide">
                     Join the best Founder Community on Farcaster
                    </h2>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FaCircleCheck className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-500">
                        Warpheroes is a truly decentralized community, all the way from its origin.
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-500">
                        As a token-gated community, each NFT represents 1 vote. 
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-500">
                        Anyone can make a proposal, and each proposal needs 51% of votes in favor to be approved.
                        </span>
                      </div>
                    </div>
                  </div>
    
                  <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-12 items-center">
                    <div className="flex flex-col md:flex-row gap-4">
                      <Link
                        href={"https://warpcast.com/~/channel/warpheroes"}
                        target="_blank"
                        className="btn-primary text-center text-sm"
                      >
                        Join Community
                      </Link>
                      <Link
                        href={"https://warpcast.com/~/channel/warpheroes"}
                        target="_blank"
                        className="btn-secondary text-center text-sm"
                      >
                        Tip for Building
                      </Link>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        href={"https://warpcast.com/~/channel/warpheroes"}
                        target="_blank"
                      >
                        <span className="bg-black text-white px-4 py-2 text-center text-sm inline-block">
                          Meet us on <span className="underline">Warpcast</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
    
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/earn-warps.png"
                    alt="Get started"
                    width={960}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      );
}

export default DAO;