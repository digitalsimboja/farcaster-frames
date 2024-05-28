import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <>
      <section className="">
        <div className="py-4 ml-4 md:ml-12 max-w-5xl overflow-hidden w-full">
          <p className="animate-marquee whitespace-nowrap text-pink-500  text-sm md:text-lg ">
            By cultivating a community through our quiz-based Proof of
            Expertise, Warpheroes strives to be the pivotal gamified community
            bridging individuals with protocols, fostering both growth and
            innovation in the Web3 ecosystem.
          </p>
        </div>
      </section>
      <section className="py-8 md:py-32 mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-0 md:pt-24">
            <div className="flex flex-col gap-4 justify-start">
              <div>
                <h2 className="text-2xl md:text-7xl pb-1 md:pb-4 font-bold tracking-wide">
                  WarpHeroes
                </h2>
                <p className="text-lg font-light tracking-wider">
                  Optimizing web3 Building through Proof of Expertise &
                  peer-to-peer skill validation
                </p>
              </div>
              <div>
                <p className="text-lg font-light tracking-normal">
                  Warpheroes enables Web3 builders - developers and enthusiasts
                  alike to demonstrate their expertise and connect with
                  protocols efficiently via gamified challenges on Warpcast.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 space-x-2 py-4 md:py-8 items-center ">
                <div className="space-x-4 ju">
                  <Link
                    href={"https://warpcast.com/~/channel/warpheroes"}
                    target="_blank"
                    className="btn-primary w-full md:w-auto text-center text-xs md:text-md"
                  >
                    Learn More!
                  </Link>
                  <Link
                    href={"https://warpcast.com/~/channel/warpheroes"}
                    target="_blank"
                    className="btn-secondary w-full md:w-auto text-center  text-xs md:text-md"
                  >
                    Earn More!
                  </Link>
                </div>
                <div>
                  <Link
                    href={"https://warpcast.com/~/channel/warpheroes"}
                    target="_blank"
                  >
                    <span className="bg-black text-white text-center w-full md:w-auto">
                      Meet us on <span className="underline">Warpcast</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/hero.jpeg"
              alt="WarpHeroes-landing"
              width={500}
              height={400}
              className="opacity-50"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
