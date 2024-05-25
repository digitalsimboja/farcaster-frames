import { FC } from "react";

const Roadmap: FC = () => {
  const roadmapPhases = [
    {
      phase: "Foundation Building",
      steps: [
        "Launch the platform with basic features.",
        "Build a community on social media and Web3 forums.",
        "Deploy initial quizzes to validate Web3 skills.",
        "Introduce NFTs as rewards for quiz completions.",
      ],
    },
    {
      phase: "Expansion and Growth",
      steps: [
        "Launch advanced, protocol-specific challenges.",
        "Establish a DAO for governance.",
        "Implement a system for peer-to-peer skill validation.",
        "Launch a leaderboard to recognize top performers.",
      ],
    },
    {
      phase: "Advanced Features",
      steps: [
        "Create mentorship programs with mentor NFTs.",
        "Issue NFTs for skills certified by protocols.",
        "Launch a job board for Warpheroes credential holders.",
        "Offer in-depth learning modules with NFT rewards.",
      ],
    },
    {
      phase: "Innovation and Sustainability",
      steps: [
        "Host an annual summit for networking and workshops.",
        "Introduce community funds for new projects.",
        "Host hackathons with existing protocols.",
        "Develop projects for blockchain interoperability.",
        "Launch sustainability initiatives in blockchain.",
      ],
    },
    {
      phase: "Future Vision",
      steps: [
        "Onboard more Web3 protocols and expand challenges.",
        "Expand global presence through partnerships.",
        "Regularly update the platform based on feedback.",
      ],
    },
  ];

  return (
    <section className="mt-8 md:mt-24 px-4 md:px-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold uppercase text-shadow mb-2 text-outline tracking-wide md:tracking-wider">
          Roadmap
        </h2>
        <p className="font-light text-gray-500">
          Here is our peep into the future
        </p>
      </div>
      <div className="mt-4 md:mt-8">
        <div className="flex flex-col space-y-24 md:space-y-32 items-center">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="md:flex md:space-x-12 justify-between">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-500 text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-0 shadow-md shadow-violet-500">
                {index + 1}
              </div>

              <div className="flex flex-col space-y-2 shadow-lg shadow-pink-500 hover:shadow-gray-500 cursor-pointer rounded-lg p-4 md:p-6 md:flex-grow">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                  {phase.phase}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="text-sm md:text-base lg:text-lg"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
