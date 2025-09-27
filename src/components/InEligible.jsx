import React from 'react';
import frensMascot from '../assets/coin_2e.png'; // <-- replace with the mascot image path

const InEligible = () => {
  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto bg-[#FFAE00] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 relative rounded-xl sm:rounded-2xl mt-4 sm:mt-8 md:mt-20 mb-8 sm:mb-16 md:mb-40"
      style={{
        border: '6px solid #FFD54F',
        boxShadow: 'inset 0 0 0 3px #FFD54F',
      }}
    >
      {/* Container for the message */}
      <div className="w-full max-w-5xl text-center px-2 sm:px-4 md:px-8">
        {/* Gray Inner Box */}
        <div className="bg-[#5B5B5B] border-2 sm:border-4 border-yellow-300 rounded-lg py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mascot */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <img
              src={frensMascot}
              alt="FRENS Mascot"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain"
            />
          </div>

          {/* Message */}
          <p
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold italic leading-tight sm:leading-snug"
            style={{
              color: '#fff',
              textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
            }}
          >
            You were not Eligible for Monad airdrop
          </p>
        </div>
      </div>
    </div>
  );
};

export default InEligible;
