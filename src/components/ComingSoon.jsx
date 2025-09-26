import React from 'react';

const ComingSoon = () => {
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
        Airdrop is Coming Soon!
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

      {/* Subheading */}
      <h2
        className="mt-10 text-4xl sm:text-6xl font-extrabold text-center"
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
        }}
      >
        Earlier Claim, More MFRENS
      </h2>

      {/* Countdown */}
      <div className="flex items-center justify-center space-x-3 mt-6 text-4xl sm:text-5xl font-bold">
        {['10', '22', '08'].map((num, i) => (
          <React.Fragment key={i}>
            <div
              className="px-4 py-2"
              style={{
                border: '4px solid #9333EA',
                boxShadow: 'inset 0 0 0 3px #9333EA',
                background: '#F4A623',
                fontFamily: 'monospace',
                textShadow: `-3px -3px 0 #AF58FF,
                          3px -3px 0 #AF58FF,
                          -3px 3px 0 #AF58FF,
                          3px 3px 0 #AF58FF,
                          0px 4px 10px rgba(0,0,0,0.5)`,
              }}
            >
              {num}
            </div>
            {i < 2 && <span className="text-black font-bold">:</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Claim Text */}
      <p
        className="mt-6 text-3xl sm:text-4xl text-white font-bold tracking-[5px]"
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
        }}
      >
        You can claim:{' '}
        <span className="text-2xl sm:text-3xl text-white font-extrabold">
          1.200T
        </span>
      </p>

      {/* Button */}
      <button
        disabled
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #FFEB9CB2,
                        2px -2px 0 #171616cb,
                        -2px 2px 0 #171616cb,
                        2px 2px 0 #FFEB9CB2`,
        }}
        className="mt-6 bg-[#8B5E3C] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md cursor-not-allowed"
      >
        Coming Soon
      </button>
    </div>
  );
};

export default ComingSoon;
