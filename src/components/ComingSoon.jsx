import React from 'react';

const ComingSoon = () => {
  return (
    <div
      className="min-h-screen w-full bg-[#FFAE00] flex flex-col items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 relative rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] mt-6 sm:mt-8 md:mt-10 lg:mt-[5rem] mb-6 sm:mb-8 md:mb-10 lg:mb-[10rem]"
      style={{
        border: '4px solid #FFD54F',
        boxShadow: 'inset 0 0 0 2px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 sm:mb-6 md:mb-8 px-2 leading-tight"
        style={{
          color: '#fff',
          textShadow: `-1px -1px 0 #9333EA,
                        1px -1px 0 #9333EA,
                        -1px 1px 0 #9333EA,
                        1px 1px 0 #9333EA,
                        0px 3px 6px rgba(0,0,0,0.4)`,
        }}
      >
        Airdrop is Coming Soon!
      </h1>

      {/* Description */}
      <div className="max-w-4xl w-full text-center text-white space-y-3 sm:space-y-4 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-4">
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
          MonFrens is a social experiment within the Monad ecosystem.{' '}
          <span className="block sm:inline">
            FRENS is an experimental deflationary token.
          </span>{' '}
          <span className="block sm:inline">
            It will be used by MonFrens ecosystem applications.
          </span>{' '}
          <span className="block">The total supply is</span>
          <span className="font-bold text-yellow-200 block sm:inline">
            {' '}
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
          MonFrens belongs to everyone in the Monad community and is also{' '}
          <span className="block sm:inline">
            a necessary key to unlock the future chapters
          </span>{' '}
          <span className="block sm:inline">of the MonFrens story.</span>
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

      {/* Subheading */}
      <h2
        className="mt-6 sm:mt-8 md:mt-10 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center px-2 leading-tight"
        style={{
          color: '#fff',
          textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
        }}
      >
        Earlier Claim, More MFRENS
      </h2>

      {/* Countdown */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        {['10', '22', '08'].map((num, i) => (
          <React.Fragment key={i}>
            <div
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px]"
              style={{
                border: '2px solid #9333EA',
                boxShadow: 'inset 0 0 0 1px #9333EA',
                background: '#F4A623',
                fontFamily: 'monospace',
                textShadow: `-1px -1px 0 #AF58FF,
                          1px -1px 0 #AF58FF,
                          -1px 1px 0 #AF58FF,
                          1px 1px 0 #AF58FF,
                          0px 2px 5px rgba(0,0,0,0.5)`,
              }}
            >
              {num}
            </div>
            {i < 2 && (
              <span
                className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style={{ margin: '0 2px' }}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Claim Text */}
      <p
        className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-center px-2"
        style={{
          color: '#fff',
          textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
        }}
      >
        You can claim:{' '}
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-extrabold ml-1 sm:ml-2">
          1.200T
        </span>
      </p>

      {/* Button */}
      <button
        disabled
        style={{
          color: '#fff',
          textShadow: `-1px -1px 0 #FFEB9CB2,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFEB9CB2`,
        }}
        className="mt-4 sm:mt-6 bg-[#8B5E3C] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md cursor-not-allowed"
      >
        Coming Soon
      </button>
    </div>
  );
};

export default ComingSoon;
