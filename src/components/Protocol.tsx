import { ReactElement } from "react";
import { BiCertification } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { MdOutlineVisibility } from "react-icons/md";

type ProjectDetailsType = {
  title: string;
  description: string;
  icon: ReactElement;
};

const projectDetails: ProjectDetailsType[] = [
  {
    title: "Targeted Talent Acquisition",
    description:
      "Leverage WarpHeroes to identify and recruit skilled individuals who have demonstrated expertise through specific challenges related to your projects.",
    icon: <BiCertification className="text-white w-6 h-6 md:w-8 md:h-8" />,
  },
  {
    title: "Community Engagement",
    description:
      "Foster a vibrant community of developers and enthusiasts who are actively engaged with your projects. The gamified challenges and quizzes create a dynamic and interactive way for users to learn about and contribute to your protocol.",
    icon: <CgCommunity className="text-white w-6 h-6 md:w-8 md:h-8" />,
  },
  {
    title: "Enhanced Project Visibility",
    description:
      "Gain increased visibility and adoption. As users complete challenges and earn NFTs related to specific your protocol, the exposure and hands-on experience drive broader awareness and utilization of your technologies and solutions in the wider Web3 community.",
    icon: <MdOutlineVisibility className="text-white w-6 h-6 md:w-8 md:h-8" />,
  },
];

const Protocol: React.FC = () => {
  return (
    <section className="mt-4 md:mt-24">
      <div className="flex flex-col space-y-4 md:space-y-12">
        <div className="flex justify-center items-center">
          <h2 className="uppercase font-bold tracking-wide text-lg md:text-5xl text-center">
            For the <span className="text-outline">Protocols</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full">
                {detail.icon}
              </div>
              <h2 className="font-semibold text-md md:text-xl">{detail.title}</h2>
              <p className="text-gray-400">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
