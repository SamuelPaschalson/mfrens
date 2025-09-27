import React, { useState } from 'react';
import Monad from '../assets/monad.png';
import Frens from '../assets/frenslogo.png';

const BurnFrens = () => {
  const [stats] = useState({
    remainingMonad: '100,000',
    producedMonad: '100,000',
    totalBurnedFrens: '100,000',
  });

  const [currentRounds] = useState({
    allocableMonad: '120,000,000',
    burningFrens: '120,000,000',
  });

  const [userStats] = useState({
    frensBurned: '120,000,000',
    rewards: '120,000,000',
  });

  return (
    <div
      className="min-h-screen w-full bg-[#5228A3] flex flex-col items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 relative rounded-2xl sm:rounded-3xl md:rounded-[2rem] mt-8 sm:mt-10 md:mt-12 lg:mt-[5rem] mb-8 sm:mb-10 md:mb-12 lg:mb-[10rem]"
      style={{
        border: '4px solid #FFD54F',
        boxShadow: 'inset 0 0 0 2px #FFD54F',
      }}
    >
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 w-full max-w-4xl mx-auto">
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
          Burn Frens to earn Monad!
        </h1>
        <button className="border border-yellow-500 hover:bg-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base">
          View Rules ↗
        </button>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#6A00FF] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-5 md:mb-6 w-full max-w-4xl mx-auto border-2 border-[#AF58FF]">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 pb-2 border-b-2 border-[#AF58FF]">
          Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-3 border-t-2 border-[#AF58FF]">
          <div className="text-center p-2 sm:p-3">
            <p className="text-purple-200 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Remaining Monad for Mining
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold break-words">
              {stats.remainingMonad}
            </p>
          </div>
          <div className="text-center p-2 sm:p-3">
            <p className="text-purple-200 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Produced Monad
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold break-words">
              {stats.producedMonad}
            </p>
          </div>
          <div className="text-center p-2 sm:p-3">
            <p className="text-purple-200 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Total Burned FRENS
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold break-words">
              {stats.totalBurnedFrens}
            </p>
          </div>
        </div>
      </div>

      {/* Current Rounds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6 w-full max-w-4xl mx-auto">
        {/* Current Round of Allocable */}
        <div className="bg-[#6A00FF] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-purple-400">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center">
            Current Round of Allocable
          </h3>
          <div className="text-center">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 object-contain"
              src={Monad}
              alt="Monad"
            />
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold break-words">
              {currentRounds.allocableMonad} MONAD
            </p>
          </div>
        </div>

        {/* Current Round of Burning */}
        <div className="bg-[#6A00FF] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-purple-400">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center">
            Current Round of Burning
          </h3>
          <div className="text-center">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 object-contain"
              src={Frens}
              alt="Frens"
            />
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold break-words">
              {currentRounds.burningFrens} FRENS
            </p>
          </div>
        </div>
      </div>

      {/* User Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl mx-auto">
        {/* My FRENS Being Burned */}
        <div className="bg-[#6A00FF] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-purple-400">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center">
            My FRENS Being Burned
          </h3>
          <div className="text-center mb-3 sm:mb-4">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 object-contain"
              src={Frens}
              alt="Frens"
            />
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold break-words">
              {userStats.frensBurned} FRENS
            </p>
          </div>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base md:text-lg">
            Destroy
          </button>
        </div>

        {/* My Rewards */}
        <div className="bg-[#6A00FF] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-purple-400">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-center">
            My Rewards
          </h3>
          <div className="text-center mb-3 sm:mb-4">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 object-contain"
              src={Monad}
              alt="Monad"
            />
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold break-words">
              {userStats.rewards} MONAD
            </p>
          </div>
          <button className="w-full bg-transparent border-2 border-purple-300 text-white py-2 sm:py-3 rounded-lg font-bold hover:bg-purple-500 transition-colors text-sm sm:text-base md:text-lg">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurnFrens;
