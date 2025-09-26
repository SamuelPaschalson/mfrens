import { useState } from 'react';

export default function MintMFRENS() {
  const [mintAmount, setMintAmount] = useState(1);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 relative rounded-[2rem] mt-[5rem] mb-[10rem]"
      style={{
        background: '#FFAE00',
        border: '12px solid #FFD54F',
        boxShadow: 'inset 0 0 0 5px #FFD54F',
      }}
    >
      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 w-[90%]"
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
      <div className="max-w-3xl text-center text-white space-y-4 font-semibold text-lg sm:text-xl mb-6">
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
      <div className="flex items-center justify-center space-x-3 mt-4 text-4xl sm:text-5xl font-bold">
        {['48', '00', '00'].map((num, i) => (
          <span
            key={i}
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
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mx-auto mt-6">
        <p className="text-right text-sm text-black">x minted / total supply</p>
        <div className="h-3 bg-yellow-200 rounded-full overflow-hidden">
          <div className="h-full w-[0.05%] bg-purple-500"></div>
        </div>
      </div>

      {/* Mint Input */}
      <div className="w-full max-w-lg mx-auto mt-6 flex items-center justify-between bg-[#FFDD55B2] border-4 border-purple-600 rounded-xl px-6 py-4">
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
          className="w-20 text-3xl md:text-4xl font-bold text-center bg-transparent focus:outline-none text-black"
        />
        <span className="text-lg md:text-xl text-black font-semibold">
          Max: 10
        </span>
      </div>

      {/* Wallet Button */}
      <button className="mt-6 bg-[#6A00FF] text-white px-[6rem] py-3 rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition">
        Connect Wallet
      </button>
    </div>
  );
}
