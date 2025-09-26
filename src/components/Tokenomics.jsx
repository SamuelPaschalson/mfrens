import React from 'react';

const Tokenomics = () => {
  const tokenomicsData = [
    { title: 'Development', bgColor: 'bg-[#C97E6C]' },
    { title: 'Staking Rewards', bgColor: 'bg-[#B7C97E]' },
    { title: 'Burn', bgColor: 'bg-[#C9C5C5]' },
    { title: 'Fren/Mon Liquidity', bgColor: 'bg-[#B4A7D6]' },
    { title: 'Fortune Board', bgColor: 'bg-[#C9A66C]' },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      {/* Title */}
      <h1
        className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl mb-10 text-center"
        style={{
          textShadow: `-3px -3px 0 #9333EA,
                        3px -3px 0 #9333EA,
                        -3px 3px 0 #9333EA,
                        3px 3px 0 #9333EA,
                        0px 6px 12px rgba(0,0,0,0.4)`,
        }}
      >
        TOKENOMICS
      </h1>

      {/* Tax info pill */}
      <div className="bg-[#9333EA] px-8 py-3 rounded-full shadow-lg mb-12 border border-purple-700">
        <p className="text-white font-semibold text-lg sm:text-xl">
          10% tax in each transaction
        </p>
      </div>

      {/* Tokenomics Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl w-full">
        {tokenomicsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-6 rounded-[16px] flex items-center justify-center text-center`}
            style={{
              border: '4px solid #FFD54F',
              boxShadow: 'inset 0 0 0 3px #FFD54F, 2px 2px 8px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          >
            <h3 className="text-black font-bold text-lg">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
