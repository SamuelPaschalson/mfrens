import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClaimDropdownOpen, setIsClaimDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsClaimDropdownOpen(false); // Reset dropdown when menu is toggled
  };

  const toggleClaimDropdown = () => {
    setIsClaimDropdownOpen(!isClaimDropdownOpen);
  };

  return (
    <nav className="w-full text-white p-2 md:p-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="hover:text-blue-400 transition-colors py-2">
            Home
          </Link>
          <Link
            to="/burn"
            className="hover:text-blue-400 transition-colors py-2"
          >
            Burn
          </Link>

          {/* Claim NFT Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-400 transition-colors flex items-center py-2">
              Claim NFT
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-[#AF58FF] border border-[#FFAE00] p-2 rounded-md shadow-lg z-20 w-48 top-full">
              <Link
                to="/airdrop"
                className="block px-4 py-2 hover:text-[#FFAE00] rounded-md"
              >
                Mon Claimers
              </Link>
              <Link
                to="/mint"
                className="block px-4 py-2 hover:text-[#FFAE00] rounded-md"
              >
                NFT Claimers
              </Link>
            </div>
          </div>

          <Link to="#" className="hover:text-blue-400 transition-colors py-2">
            Fortune Wheel
          </Link>
          <Link to="#" className="hover:text-blue-400 transition-colors py-2">
            Leaderboard
          </Link>
          <Link to="#" className="hover:text-blue-400 transition-colors py-2">
            Docs
          </Link>
        </div>

        {/* Buy Frens Button - Desktop */}
        <div className="hidden md:block">
          <button className="bg-[#FFAE00] border border-md border-[#FFDE97] hover:bg-[#FFAE00] px-8 py-2 rounded-[50px] font-medium transition-colors">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#4a1fa3] rounded-lg mx-4 mb-4 shadow-lg overflow-hidden">
          <div className="flex flex-col py-2">
            <Link
              to="/"
              className="hover:bg-[#3f1a8a] transition-colors py-3 px-6"
            >
              Home
            </Link>
            <Link
              to="/burn"
              className="hover:bg-[#3f1a8a] transition-colors py-3 px-6"
            >
              Burn
            </Link>

            {/* Mobile Claim NFT Dropdown */}
            <div className="border-b border-[#3f1a8a]">
              <button
                onClick={toggleClaimDropdown}
                className="flex items-center justify-between w-full hover:bg-[#3f1a8a] transition-colors py-3 px-6"
              >
                <span>Claim NFT</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isClaimDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isClaimDropdownOpen && (
                <div className="bg-[#3f1a8a]">
                  <Link
                    to="/airdrop"
                    className="block hover:text-[#FFAE00] transition-colors py-3 px-10"
                  >
                    Mon Claimers
                  </Link>
                  <Link
                    to="/mint"
                    className="block hover:text-[#FFAE00] transition-colors py-3 px-10"
                  >
                    NFT Claimers
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="#"
              className="hover:bg-[#3f1a8a] transition-colors py-3 px-6"
            >
              Fortune Wheel
            </Link>
            <Link
              to="#"
              className="hover:bg-[#3f1a8a] transition-colors py-3 px-6"
            >
              Leaderboard
            </Link>
            <Link
              to="#"
              className="hover:bg-[#3f1a8a] transition-colors py-3 px-6"
            >
              Docs
            </Link>

            {/* Buy Frens Button - Mobile */}
            <div className="px-6 py-4 mt-2">
              <button className="w-full bg-[#FFAE00] border border-[#FFDE97] hover:bg-[#e69c00] px-4 py-3 rounded-md font-medium transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
