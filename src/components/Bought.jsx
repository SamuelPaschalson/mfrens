import React from 'react';
import frensMascot from '../assets/Rectangle.png'; // <-- replace with the mascot image path

const Bought = () => {
  return (
    <div className="min-h-screen w-full rounded rounded-[16px] flex items-center justify-center py-4 px-6">
      <div className="max-w-3xl w-full text-center p-8">
        {/* Purple Inner Box */}
        <div className="bg-[#323232] border-4 border-yellow-300 rounded-lg py-10 px-6">
          {/* Claimed */}
          <p
            className="text-white text-4xl md:text-5xl font-bold italic px-2"
            style={{
              color: '#fff',
              textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
            }}
          >
            Holding MonFrens NFT boosts your claim by X%. Minted out?
          </p>
          {/* Mascot */}
          <div className="flex justify-center">
            <img
              src={frensMascot}
              alt="FRENS Mascot"
              className="w-64 h-64 object-contain"
            />
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              disabled
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-[8rem] rounded-[16px] shadow-md transition duration-200"
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
