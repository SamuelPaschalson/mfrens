import React from 'react';
import frensMascot from '../assets/hero.png'; // <-- replace with the mascot image path

const Congratulation = () => {
  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto bg-[#FFAE00] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-20 relative rounded-xl sm:rounded-2xl mt-4 sm:mt-8 md:mt-20 mb-8 sm:mb-16 md:mb-40"
      style={{
        border: '6px solid #FFD54F',
        boxShadow: 'inset 0 0 0 3px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12"
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #9333EA,
                        2px -2px 0 #9333EA,
                        -2px 2px 0 #9333EA,
                        2px 2px 0 #9333EA,
                        0px 6px 12px rgba(0,0,0,0.4)`,
        }}
      >
        Congratulations
      </h1>

      {/* Purple Inner Box */}
      <div className="bg-[#6A00FF] border-2 sm:border-4 border-yellow-300 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col justify-center items-center">
        {/* Mascot */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={frensMascot}
            alt="FRENS Mascot"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-cover"
          />
        </div>

        {/* FRENS Label */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-center"
          style={{
            color: '#FFAE00',
            textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
          }}
        >
          FRENS
        </h2>

        {/* Amount */}
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-center break-all"
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
          }}
        >
          1,000,000,000,000
        </p>

        {/* Claimed */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic text-center"
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
          }}
        >
          Claimed!!!
        </p>
      </div>
    </div>
  );
};

export default Congratulation;
