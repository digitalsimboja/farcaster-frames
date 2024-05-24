import { MdQuiz } from "react-icons/md";

const Protocol: React.FC = () => {
  return (
    <section className="mt-4 md:mt-24">
      <div className="flex flex-col space-y-4 md:space-y-12">
        <div className="flex justify-center items-center">
          <h2 className="uppercase font-bold tracking-wide text-lg md:text-5xl text-center">
            For <span className="text-outline">Protocols</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full">
              <MdQuiz className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full">
              <MdQuiz className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full">
              <MdQuiz className="text-black w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
