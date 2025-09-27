import React from 'react';

const End = () => {
  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto bg-[#FFAE00] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 relative rounded-xl sm:rounded-2xl mt-4 sm:mt-8 md:mt-20 mb-8 sm:mb-16 md:mb-40"
      style={{
        border: '6px solid #FFD54F',
        boxShadow: 'inset 0 0 0 3px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12"
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
      <div className="w-full max-w-5xl text-center text-white space-y-4 sm:space-y-6 md:space-y-8 font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-12">
        <p
          className="leading-relaxed"
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #171616cb,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #171616cb`,
          }}
        >
          MonFrens is a social experiment within the Monad ecosystem. FRENS is
          an experimental deflationary token. It will be used by MonFrens
          ecosystem applications. The total supply is{' '}
          <span className="font-bold text-yellow-200 break-all">
            210.000.000.000.000.000 tokens.
          </span>
        </p>

        <p
          className="leading-relaxed"
          style={{
            color: '#fff',
            textShadow: `-1px -1px 0 #171616cb,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #171616cb`,
          }}
        >
          MonFrens belongs to everyone in the Monad community and is also a
          necessary key to unlock the future chapters of the MonFrens story.
        </p>

        <p
          className="leading-relaxed"
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
      <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12">
        <p className="text-right text-xs sm:text-sm text-yellow-100 mt-1 mb-2 break-all">
          1000/210.000.000.000.000.000
        </p>
        <div className="h-2 sm:h-3 bg-yellow-200 rounded-full overflow-hidden">
          <div className="h-full w-[0.05%] bg-purple-500"></div>
        </div>
      </div>

      {/* Claim Amount */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto border-2 border-purple-600 bg-[#FFDD55B2] rounded-xl py-3 sm:py-4 md:py-5 mb-6 sm:mb-8">
        <div className="text-center">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-black px-4">
            100,000
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
        <button
          disabled
          className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-3 sm:py-4 px-8 sm:px-16 md:px-20 lg:px-32 rounded-2xl shadow-md transition duration-200 text-sm sm:text-base md:text-lg cursor-not-allowed opacity-75"
        >
          Ended
        </button>
      </div>
    </div>
  );
};

export default End;
