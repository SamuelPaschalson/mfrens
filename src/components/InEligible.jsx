import React from 'react';
import frensMascot from '../assets/coin_2e.png'; // <-- replace with the mascot image path

const InEligible = () => {
  return (
    <div
      className="min-h-screen w-[85%] bg-[#FFAE00] flex flex-col items-center justify-center px-6 py-12 relative rounded-[2rem] mt-[5rem] mb-[10rem]"
      style={{
        border: '10px solid #FFD54F',
        boxShadow: 'inset 0 0 0 4px #FFD54F',
      }}
    >
      {/* Title */}
      {/* <h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8"
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #9333EA,
                        2px -2px 0 #9333EA,
                        -2px 2px 0 #9333EA,
                        2px 2px 0 #9333EA,
                        0px 6px 12px rgba(0,0,0,0.4)`,
        }}
      >
        Airdrop is Coming Soon!
      </h1> */}

      <div className="max-w-3xl w-full text-center p-8">
        {/* Purple Inner Box */}
        <div className="bg-[#5B5B5B] border-4 border-yellow-300 rounded-lg py-10 px-6">
          {/* Mascot */}
          <div className="flex justify-center mb-6">
            <img
              src={frensMascot}
              alt="FRENS Mascot"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Claimed */}
          <p
            className="text-white text-4xl md:text-5xl font-bold italic"
            style={{
              color: '#fff',
              textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
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
