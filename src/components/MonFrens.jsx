import React from 'react';
import DuckWithCakeImage from '../assets/duck_monfrens.png';

const MonFrens = () => {
  return (
    <div className="relative w-full min-h-screen px-[6rem] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Title */}
          <h1
            className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight"
            style={{
              textShadow: `-3px -3px 0 #AF58FF,
                            3px -3px 0 #AF58FF,
                            -3px 3px 0 #AF58FF,
                            3px 3px 0 #AF58FF,
                            0px 4px 10px rgba(0,0,0,0.5)`,
            }}
          >
            WHAT IS <br /> MONFRENS
          </h1>

          {/* Description */}
          <div className="space-y-4 text-[#E6DBF2] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              It will be used by MonFrens ecosystem applications. The total
              supply is 210,000,000,000,000 tokens.
            </p>
            <p>
              MonFrens belongs to everyone in the Monad community and is also a
              necessary key to unlock the future chapters of the MonFrens story.
            </p>
            <p>
              FRENS has a 10% tax, so adjusting your slippage tolerance to
              around 15% is suggested when buying/selling to ensure successful
              transactions.
            </p>
            <p>
              Every time you buy FREN, you will get ranked on Fortuned Board,
              where you will get MON rewards weekly. You can also stake your
              FRENS to earn more.
            </p>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button className="bg-[#E7A924] hover:bg-yellow-500 text-white font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Soon
            </button>
          </div>
        </div>

        {/* Right Side - Duck Character */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={DuckWithCakeImage}
            alt="MonFrens Duck with Cake"
            className="w-64 sm:w-80 md:w-[26rem] lg:w-[32rem] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MonFrens;
