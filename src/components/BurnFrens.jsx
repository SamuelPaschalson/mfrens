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
      className="min-h-screen w-full bg-[#5228A3] flex flex-col items-center justify-center px-6 py-12 relative rounded-[2rem] mt-[5rem] mb-[10rem]"
      style={{
        border: '10px solid #FFD54F',
        boxShadow: 'inset 0 0 0 4px #FFD54F',
      }}
    >
      {/* Title */}
      <div className="text-center mb-8">
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
          Burn Frens to earn Monad!
        </h1>
        <button className="border border-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
          View Rules ↗
        </button>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#6A00FF] rounded-lg p-6 px-8 mb-6 border-2 border-[#AF58FF]">
        <h2
          className="text-white text-xl font-bold mb-4 border-b-2 border-[#AF58FF]"
          style={{ borderBottom: '2px', borderColor: '#AF58FF' }}
        >
          Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t-2 border-[#AF58FF]">
          <div className="text-center">
            <p className="text-purple-200 text-sm mb-1">
              Remaining Monad for Mining
            </p>
            <p className="text-white text-2xl font-bold">
              {stats.remainingMonad}
            </p>
          </div>
          <div className="text-center">
            <p className="text-purple-200 text-sm mb-1">Produced Monad</p>
            <p className="text-white text-2xl font-bold">
              {stats.producedMonad}
            </p>
          </div>
          <div className="text-center">
            <p className="text-purple-200 text-sm mb-1">Total Burned FRENS</p>
            <p className="text-white text-2xl font-bold">
              {stats.totalBurnedFrens}
            </p>
          </div>
        </div>
      </div>

      {/* Current Rounds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Current Round of Allocable */}
        <div className="bg-[#6A00FF] rounded-lg p-6 px-12 border-2 border-purple-400">
          <h3 className="text-white text-lg font-bold mb-4">
            Current Round of Allocable
          </h3>
          <div className="text-center">
            <img
              className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
              src={Monad}
              alt=""
            />
            <p className="text-white text-xl font-bold">
              {currentRounds.allocableMonad} MONAD
            </p>
          </div>
        </div>

        {/* Current Round of Burning */}
        <div className="bg-[#6A00FF] rounded-lg p-6 px-12 border-2 border-purple-400">
          <h3 className="text-white text-lg font-bold mb-4">
            Current Round of Burning
          </h3>
          <div className="text-center">
            <img
              className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
              src={Frens}
              alt=""
            />
            <p className="text-white text-xl font-bold">
              {currentRounds.burningFrens} FRENS
            </p>
          </div>
        </div>
      </div>

      {/* User Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My FRENS Being Burned */}
        <div className="bg-[#6A00FF] rounded-lg p-6 px-12 border-2 border-purple-400">
          <h3 className="text-white text-lg font-bold mb-4">
            My FRENS Being Burned
          </h3>
          <div className="text-center mb-4">
            <img
              className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
              src={Frens}
              alt=""
            />
            <p className="text-white text-xl font-bold">
              {userStats.frensBurned} FRENS
            </p>
          </div>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-bold transition-colors">
            Destroy
          </button>
        </div>

        {/* My Rewards */}
        <div className="bg-[#6A00FF] rounded-lg p-6 px-12 border-2 border-purple-400">
          <h3 className="text-white text-lg font-bold mb-4">My Rewards</h3>
          <div className="text-center mb-4">
            <img
              className="w-12 h-12 flex items-center justify-center mx-auto mb-3"
              src={Frens}
              alt=""
            />
            <p className="text-white text-xl font-bold">
              {userStats.rewards} MONAD
            </p>
          </div>
          <button className="w-full bg-transparent border-2 border-purple-300 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition-colors">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurnFrens;
