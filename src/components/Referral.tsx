import Image from "next/image";

const Referral: React.FC = () => {
  return (
    <section className="mt-8 md:mt-32">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 space-x-0 md:space-x-24">
        <Image
          src="/images/earn-warps.png"
          alt="Invite friends and earn"
          width={600}
          height={500}
        />
        <div className="py-4 md:py-24 space-x-0">
          <h2 className="text-2xl md:text-4xl font-bold uppercase  mb-2 tracking-wide md:tracking-wider">
            Invite your friends & Earn Free $DEGEN
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-xl">
            Recast, like and share the community channel and earn rewards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Referral;
