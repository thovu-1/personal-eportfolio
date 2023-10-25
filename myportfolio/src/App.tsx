import './styles/portfolio.css';

import React from 'react';
import Home from './Home';
import PortfolioItem1 from './PortfolioItems/PortfolioItem1';
import {Route, Routes} from 'react-router-dom';
import PortfolioItem2 from './PortfolioItems/PortfolioItem2';
import PortfolioItem3 from './PortfolioItems/PortfolioItem3';

function App() {

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/PortfolioItem1" element={<PortfolioItem1/>}/>
        <Route path="/PortfolioItem2" element={<PortfolioItem2/>}/>
        <Route path="/PortfolioItem3" element={<PortfolioItem3/>}/>
      </Routes>
    </div>
  );
}

export default App;
