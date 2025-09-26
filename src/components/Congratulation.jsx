import React from 'react';
import frensMascot from '../assets/hero.png'; // <-- replace with the mascot image path

const Congratulation = () => {
  return (
    <div
      className="min-h-screen w-[75%] bg-[#FFAE00] flex flex-col items-center justify-center px-2 py-[5rem] relative rounded-[2rem] mt-[5rem] mb-[10rem]"
      style={{
        border: '10px solid #FFD54F',
        boxShadow: 'inset 0 0 0 4px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
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
        Congratulations
      </h1>

      {/* Purple Inner Box */}
      <div className="bg-[#6A00FF] border-4 border-yellow-300 rounded-lg py-10 px-[6rem] justify-center items-center">
        {/* Mascot */}
        <div className="flex justify-center">
          <img
            src={frensMascot}
            alt="FRENS Mascot"
            className="w-36 h-36 object-cover"
          />
        </div>

        {/* FRENS Label */}
        <h2
          className="text-yellow-300 text-5xl font-extrabold mb-2 text-center"
          style={{
            color: '#FFAE00',
            textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
          }}
        >
          FRENS
        </h2>

        {/* Amount */}
        <p
          className="text-yellow-200 text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{
            color: '#fff',
            textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
          }}
        >
          1,000,000,000,000
        </p>

        {/* Claimed */}
        <p
          className="text-white text-3xl md:text-4xl font-bold italic text-center"
          style={{
            color: '#fff',
            textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
          }}
        >
          Claimed!!!
        </p>
      </div>
    </div>
  );
};

export default Congratulation;
