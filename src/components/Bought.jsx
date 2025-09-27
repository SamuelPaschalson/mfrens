import React from 'react';
import frensMascot from '../assets/Rectangle.png';

const Bought = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6">
      <div className="w-full max-w-4xl mx-auto text-center p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Purple Inner Box */}
        <div className="bg-[#323232] border-2 sm:border-3 md:border-4 border-yellow-300 rounded-lg py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-4 md:px-5 lg:px-6">
          {/* Claimed Text */}
          <p
            className="text-white font-bold italic mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight"
            style={{
              color: '#fff',
              textShadow: `-1px -1px 0 #FFEB9CB2,
                         1px -1px 0 #171616cb,
                         -1px 1px 0 #171616cb,
                         1px 1px 0 #FFEB9CB2`,
            }}
          >
            Holding MonFrens NFT boosts your claim by X%. Minted out?
          </p>

          {/* Mascot */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <img
              src={frensMascot}
              alt="FRENS Mascot"
              className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              disabled
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-2xl shadow-md transition duration-200 text-sm sm:text-base md:text-lg w-full sm:w-auto min-w-[140px]"
            >
              Buy on secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bought;
