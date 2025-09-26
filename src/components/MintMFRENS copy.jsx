import React from 'react';

const MintMFRENS = () => {
  return (
    <div className="min-h-screen bg-[#FF9900] flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8 border-4 border-yellow-300 p-8 rounded-2xl shadow-xl bg-[#FF9900]">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 drop-shadow-lg">
          You can mint
          <span className="text-purple-900"> MFRENS</span> now!
        </h1>

        {/* Description */}
        <div className="space-y-4 text-yellow-100 text-lg font-medium">
          <p>
            <span className="text-white font-semibold">MonFrens</span> is a
            social experiment within the Monad ecosystem.
            <br />
            <span className="text-white font-semibold">FRENS</span> is an
            experimental deflationary token. It will be used by
            <br />
            MonFrens ecosystem applications. The total supply is
            <br />
            <span className="text-white font-bold text-xl">
              210.000.000.000.000.000 tokens.
            </span>
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center space-x-3 mt-6 text-4xl sm:text-5xl font-bold">
          {['10', '22', '08'].map((num, i) => (
            <React.Fragment key={i}>
              <div
                className="px-4 py-2"
                style={{
                  border: '4px solid #9333EA',
                  boxShadow: 'inset 0 0 0 3px #9333EA',
                  background: '#F4A623',
                  fontFamily: 'monospace',
                }}
              >
                {num}
              </div>
              {i < 2 && <span className="text-black font-bold">:</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="h-3 bg-yellow-200 rounded-full overflow-hidden">
            <div className="h-full w-[0.05%] bg-purple-500"></div>
          </div>
          <p className="text-right text-sm text-yellow-100 mt-1">
            1000/210.000.000.000.000.000
          </p>
        </div>
        {/* Claim Amount */}
        <div className="w-full max-w-md mx-auto border-2 border-purple-600 bg-[#FF9900] rounded-lg py-4">
          <span className="text-5xl md:text-6xl font-bold text-purple-900">
            100,000
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 ">
          <button className="bg-purple-600 hover:bg-purple-700 w-[75%] text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
            Claim Airdrop
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintMFRENS;
