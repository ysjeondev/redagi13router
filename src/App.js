import React from 'react';
import {Routes, Route} from 'react-router-dom'
import About  from './About';
import Home from './Home';
import Info from './info';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
