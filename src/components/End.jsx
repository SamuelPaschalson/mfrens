import React from 'react';

const End = () => {
  return (
    <div
      className="min-h-screen w-full bg-[#FFAE00] flex flex-col items-center justify-center px-6 py-12 relative rounded-[2rem] mt-[5rem] mb-[10rem]"
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
        Airdrop has ended!
      </h1>

      {/* Description */}
      <div className="max-w-3xl text-center text-white space-y-4 font-semibold text-xl sm:text-2xl">
        <p
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #171616cb,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #171616cb`,
          }}
        >
          MonFrens is a social experiment within the Monad ecosystem. <br />
          FRENS is an experimental deflationary token. It will be used by <br />
          MonFrens ecosystem applications. The total supply is <br />
          <span className="font-bold text-yellow-200">
            210.000.000.000.000.000 tokens.
          </span>
        </p>

        <p
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #171616cb,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #171616cb`,
          }}
        >
          MonFrens belongs to everyone in the Monad community and is also <br />
          a necessary key to unlock the future chapters of the MonFrens story.
        </p>

        <p
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #171616cb,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #171616cb`,
          }}
        >
          FRENS has a <span className="font-bold text-yellow-200">10% tax</span>
          , so adjusting your slippage tolerance to around{' '}
          <span className="font-bold text-yellow-200">15%</span> is suggested
          when buying/selling to ensure your successful transactions.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mx-auto mb-[2rem]">
        <p className="text-right text-sm text-yellow-100 mt-1">
          1000/210.000.000.000.000.000
        </p>
        <div className="h-3 bg-yellow-200 rounded-full overflow-hidden">
          <div className="h-full w-[0.05%] bg-purple-500"></div>
        </div>
      </div>

      {/* Claim Amount */}
      <div className="w-full max-w-lg mx-auto border-2 border-purple-600 bg-[#FFDD55B2] rounded-xl py-4">
        <span className="text-3xl md:text-4xl font-medium text-black px-4">
          100,000
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <button
          disabled
          className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-[8rem] rounded-[16px] shadow-md transition duration-200"
        >
          Ended
        </button>
      </div>
    </div>
  );
};

export default End;
