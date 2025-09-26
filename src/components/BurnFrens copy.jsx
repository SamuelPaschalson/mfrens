import { useState } from 'react';

export default function BurnFrens() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Decorative border */}
        <div
          className="border-4 border-yellow-400 rounded-lg p-6"
          style={{
            borderImage:
              'repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 10px, #f59e0b 10px, #f59e0b 20px) 4',
            borderRadius: '12px',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Burn Frens to earn Monad
            </h1>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors">
              View Rules ↗
            </button>
          </div>

          {/* Statistics Section */}
          <div className="bg-purple-600 rounded-lg p-6 mb-6 border-2 border-purple-400">
            <h2 className="text-white text-xl font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <p className="text-purple-200 text-sm mb-1">
                  Total Burned FRENS
                </p>
                <p className="text-white text-2xl font-bold">
                  {stats.totalBurnedFrens}
                </p>
              </div>
            </div>
          </div>

          {/* Current Rounds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Current Round of Allocable */}
            <div className="bg-purple-600 rounded-lg p-6 border-2 border-purple-400">
              <h3 className="text-white text-lg font-bold mb-4">
                Current Round of Allocable
              </h3>
              <div className="text-center">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-300 rounded-full"></div>
                </div>
                <p className="text-white text-xl font-bold">
                  {currentRounds.allocableMonad} MONAD
                </p>
              </div>
            </div>

            {/* Current Round of Burning */}
            <div className="bg-purple-600 rounded-lg p-6 border-2 border-purple-400">
              <h3 className="text-white text-lg font-bold mb-4">
                Current Round of Burning
              </h3>
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                </div>
                <p className="text-white text-xl font-bold">
                  {currentRounds.burningFrens} FRENS
                </p>
              </div>
            </div>
          </div>

          {/* User Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My FRENS Being Burned */}
            <div className="bg-purple-600 rounded-lg p-6 border-2 border-purple-400">
              <h3 className="text-white text-lg font-bold mb-4">
                My FRENS Being Burned
              </h3>
              <div className="text-center mb-4">
                <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                </div>
                <p className="text-white text-xl font-bold">
                  {userStats.frensBurned} FRENS
                </p>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-bold transition-colors">
                Destrog
              </button>
            </div>

            {/* My Rewards */}
            <div className="bg-purple-600 rounded-lg p-6 border-2 border-purple-400">
              <h3 className="text-white text-lg font-bold mb-4">My Rewards</h3>
              <div className="text-center mb-4">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-green-300 rounded-full"></div>
                </div>
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
      </div>
    </div>
  );
}
