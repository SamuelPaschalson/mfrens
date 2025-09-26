import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Airdrop from './pages/Airdrop';
import Claim from './pages/Claim';
import Congratulations from './pages/Congratulations';
import Eligibility from './pages/Eligibility';
import Ended from './pages/Ended';
import Buy from './pages/Buy';
import Mint from './pages/Mint';
import Burn from './pages/Burn';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/claim-mfrens" element={<Claim />} />
          <Route path="/congratulation" element={<Congratulations />} />
          <Route path="/eligible" element={<Eligibility />} />
          <Route path="/ended" element={<Ended />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/burn" element={<Burn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
