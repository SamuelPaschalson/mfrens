import React from 'react';
import DuckImage from '../assets/hero.png'; // Skateboarding duck
import BubbleLeft from '../assets/bubble.png'; // small bubble left
import BubbleRight from '../assets/bubble_1.png'; // small bubble right
import BackgroundImage from '../assets/background.png'; // torn yellow bottom edge

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 -mt-5 md:mt-10 z-10">
        <h1
          className="text-white font-extrabold text-5xl sm:text-6xl md:text-8xl xl:text-9xl tracking-wider"
          style={{
            textShadow: `-3px -3px 0 #AF58FF,
                          3px -3px 0 #AF58FF,
                          -3px 3px 0 #AF58FF,
                          3px 3px 0 #AF58FF,
                          0px 4px 10px rgba(0,0,0,0.5)`,
          }}
        >
          FRENS
        </h1>

        <span className="bg-[#E7A924] text-white font-bold text-lg sm:text-xl md:text-2xl px-2 py-1 rounded-full rotate-3 shadow-md -my-2 sm:my-0">
          on
        </span>

        <h1
          className="text-white font-extrabold text-5xl sm:text-6xl md:text-8xl xl:text-9xl tracking-wider"
          style={{
            textShadow: `-3px -3px 0 #AF58FF,
                          3px -3px 0 #AF58FF,
                          -3px 3px 0 #AF58FF,
                          3px 3px 0 #AF58FF,
                          0px 4px 10px rgba(0,0,0,0.5)`,
          }}
        >
          MONAD
        </h1>
      </div>

      {/* Center Character */}
      <div className="relative flex justify-center items-center -mt-8 sm:-mt-16 z-20">
        {/* Left Bubble */}
        <img
          src={BubbleLeft}
          alt="bubble"
          className="absolute left-4 sm:left-20 top-12 w-5 sm:w-8 animate-bounce"
        />

        {/* Duck */}
        <img
          src={DuckImage}
          alt="duck"
          className="relative z-10 w-44 sm:w-60 md:w-80 lg:w-[28rem] object-contain"
        />

        {/* Right Bubble */}
        <img
          src={BubbleRight}
          alt="bubble"
          className="absolute right-6 sm:right-12 w-16 sm:w-20 md:w-28 animate-bounce delay-200 z-20"
        />
      </div>

      {/* Slogan */}
      <p className="mt-6 text-[#E1C5FF] font-bold text-base sm:text-lg md:text-2xl tracking-wide z-10 text-center px-2">
        Built by Nads, with Nads, For Nads
      </p>

      {/* Yellow Bottom Edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-cover bg-bottom z-0"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
    </div>
  );
};

export default Hero;
