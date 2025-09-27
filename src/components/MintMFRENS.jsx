import { useState } from 'react';

export default function MintMFRENS() {
  const [mintAmount, setMintAmount] = useState(1);

  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 relative rounded-xl sm:rounded-2xl mt-4 sm:mt-8 md:mt-20 mb-8 sm:mb-16 md:mb-40"
      style={{
        background: '#FFAE00',
        border: '6px solid #FFD54F',
        boxShadow: 'inset 0 0 0 3px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-8 w-full max-w-5xl leading-tight"
        style={{
          color: '#fff',
          textShadow: `-2px -2px 0 #9333EA,
                       2px -2px 0 #9333EA,
                       -2px 2px 0 #9333EA,
                       2px 2px 0 #9333EA,
                       0px 6px 12px rgba(0,0,0,0.5)`,
        }}
      >
        You can mint MonFrens NFT now!
      </h1>

      {/* Description */}
      <div className="w-full max-w-5xl text-center text-white space-y-3 sm:space-y-4 md:space-y-6 font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
        <p
          style={{
            textShadow: `-1px -1px 0 #171616cb,
                         1px -1px 0 #171616cb,
                         -1px 1px 0 #171616cb,
                         1px 1px 0 #171616cb`,
          }}
        >
          A total of 73,500,000,000,000,000 FRENS will be airdropped to those
          that hold the MonFrens NFT. FRENS tokens that have not been claimed
          within 60 days will be added to the community treasury. The FRENS will
          be used for development, rewards and burns.
        </p>
      </div>

      {/* Countdown */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        {['48', '00', '00'].map((num, i) => (
          <span
            key={i}
            className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-sm sm:rounded-md"
            style={{
              border: '2px solid #9333EA',
              boxShadow: 'inset 0 0 0 1px #9333EA',
              background: '#F4A623',
              fontFamily: 'monospace',
              textShadow: `-2px -2px 0 #AF58FF,
                           2px -2px 0 #AF58FF,
                           -2px 2px 0 #AF58FF,
                           2px 2px 0 #AF58FF,
                           0px 3px 8px rgba(0,0,0,0.4)`,
            }}
          >
            {num}
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6">
        <p className="text-right text-xs sm:text-sm text-black mb-2">
          x minted / total supply
        </p>
        <div className="h-2 sm:h-3 bg-yellow-200 rounded-full overflow-hidden">
          <div className="h-full w-[0.05%] bg-purple-500"></div>
        </div>
      </div>

      {/* Mint Input */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-4 sm:mt-6 flex items-center justify-between bg-[#FFDD55B2] border-2 sm:border-4 border-purple-600 rounded-xl px-4 sm:px-6 py-3 sm:py-4">
        <input
          type="number"
          min="1"
          max="10"
          value={mintAmount}
          onChange={(e) => {
            let val = Number(e.target.value);
            if (val > 10) val = 10;
            if (val < 1) val = 1;
            setMintAmount(val);
          }}
          className="w-16 sm:w-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-transparent focus:outline-none text-black"
        />
        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold">
          Max: 10
        </span>
      </div>

      {/* Wallet Button */}
      <button className="mt-4 sm:mt-6 bg-[#6A00FF] text-white px-8 sm:px-12 md:px-16 lg:px-24 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl shadow-md hover:bg-purple-700 transition w-full max-w-xs sm:max-w-sm md:max-w-md">
        Connect Wallet
      </button>
    </div>
  );
}
