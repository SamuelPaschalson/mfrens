import React from 'react';
import monfrens from '../assets/monfrens.png';
import coin_2e from '../assets/coin_2e.png';
import juj from '../assets/juj.png';
import rectangle from '../assets/Rectangle.png';

const MonCard = () => {
  const cards = [
    {
      id: 1,
      title: 'MonFrens',
      image: monfrens,
      subtitle: 'Get Started',
      isAvailable: true,
      bgColor: 'bg-orange-400',
      hasCharacter: true,
    },
    {
      id: 2,
      title: 'Frens',
      subtitle: 'Coming Soon!',
      image: rectangle,
      isAvailable: false,
      bgColor: 'bg-yellow-400',
      hasCharacter: false,
    },
    {
      id: 3,
      title: 'Migos',
      subtitle: 'Coming Soon!',
      image: juj,
      isAvailable: false,
      bgColor: 'bg-yellow-300',
      hasCharacter: false,
    },
    {
      id: 4,
      title: 'MonFrens',
      subtitle: 'Coming Soon!',
      image: coin_2e,
      isAvailable: false,
      bgColor: 'bg-yellow-200',
      hasCharacter: false,
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {/* Card Container */}
              <div
                className={`${card.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 aspect-[4/5] relative overflow-hidden`}
                style={{
                  border: '4px solid #FDE047',
                  borderStyle: 'dashed',
                }}
              >
                {/* Character Image (only for first card) */}
                {card.hasCharacter && (
                  <div className="absolute inset-2 sm:inset-3 md:inset-4 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt="MonFrens Character"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Locked Overlay for unavailable cards */}
                {!card.isAvailable && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center rounded-xl sm:rounded-2xl">
                    <div className="text-center">
                      <div className="absolute inset-2 sm:inset-3 md:inset-4 flex items-center justify-center">
                        <img
                          src={card.image}
                          alt="MonFrens Character"
                          className="w-full h-full object-contain opacity-10"
                        />
                      </div>
                      {/* Lock Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto z-20 relative">
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
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
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-left">
                  <h3 className="text-black text-base sm:text-lg md:text-xl font-bold mb-1">
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-semibold ${
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl sm:rounded-2xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center max-w-5xl mx-auto px-4">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
            MonFrens is a social experiment within the Monad ecosystem.
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium mt-1 sm:mt-2">
            FRENS is an experimental deflationary token.
          </p>
        </div>

        {/* Decorative elements - responsive positioning */}
        <div className="absolute top-12 sm:top-16 md:top-20 left-8 sm:left-12 md:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 sm:top-32 md:top-40 right-12 sm:right-20 md:right-32 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-12 sm:left-20 md:left-32 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 right-8 sm:right-12 md:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
};

export default MonCard;
