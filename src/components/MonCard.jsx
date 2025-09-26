import React from 'react';
import monfrens from '../assets/monfrens.png';

const MonCard = () => {
  const cards = [
    {
      id: 1,
      title: 'MonFrens',
      subtitle: 'Get Started',
      isAvailable: true,
      bgColor: 'bg-orange-400',
      hasCharacter: true,
    },
    {
      id: 2,
      title: 'Frens',
      subtitle: 'Coming Soon!',
      isAvailable: false,
      bgColor: 'bg-yellow-400',
      hasCharacter: false,
    },
    {
      id: 3,
      title: 'Migos',
      subtitle: 'Coming Soon!',
      isAvailable: false,
      bgColor: 'bg-yellow-300',
      hasCharacter: false,
    },
    {
      id: 4,
      title: 'MonFrens',
      subtitle: 'Coming Soon!',
      isAvailable: false,
      bgColor: 'bg-yellow-200',
      hasCharacter: false,
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {/* Card Container */}
              <div
                className={`${card.bgColor} rounded-2xl p-6 aspect-[4/5] relative overflow-hidden`}
                style={{
                  border: '6px solid #FDE047',
                  borderStyle: 'dashed',
                }}
              >
                {/* Character Image (only for first card) */}
                {card.hasCharacter && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={monfrens}
                      alt="MonFrens Character"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Locked Overlay for unavailable cards */}
                {!card.isAvailable && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="absolute inset-2 flex items-center justify-center">
                        <img
                          src={monfrens}
                          alt="MonFrens Character"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Lock Icon */}
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto z-20">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="absolute bottom-0 left-4 right-0 p-4 text-left">
                  <h3 className="text-black text-xl font-bold mb-1">
                    {card.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold ${
                      card.isAvailable
                        ? 'text-purple-700 underline cursor-pointer hover:text-purple-800'
                        : 'text-gray-700'
                    }`}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Hover effect for available card */}
                {card.isAvailable && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium">
            MonFrens is a social experiment within the Monad ecosystem.
          </p>
          <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium mt-2">
            FRENS is an experimental deflationary token.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
};

export default MonCard;
