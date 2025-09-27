import React from 'react';
import monfrensLogo from '../assets/frenslogo.png'; // <-- replace with the MonFrens logo image path

const Footer = () => {
  return (
    <footer className="bg-[#421C71] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img src={monfrensLogo} className="w-8 h-8 mr-3" alt="" />
            <h1
              className="text-2xl font-bold text-[#ff]"
              style={{
                color: '#fff',
                textShadow: `-1px -1px 0 #FFAE00,
                        1px -1px 0 #171616cb,
                        -1px 1px 0 #171616cb,
                        1px 1px 0 #FFAE00`,
              }}
            >
              MonFrens
            </h1>
          </div>
          <p className="text-gray-300 text-sm max-w-md">
            MonFrens is a social experiment within the Mondi ecosystem.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Whitepaper
              </div>
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                FAQs
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Lucky Drop
              </div>
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Earn
              </div>
            </div>
          </div>

          {/* Press Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Press</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Terms of Use
              </div>
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </div>
              <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                Brand
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-purple-600">
          <p className="text-gray-400 text-sm">
            ©2025 Monfrems. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
