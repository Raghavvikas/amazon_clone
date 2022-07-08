import './App.css';
import React from 'react';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  console.log("abc");
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
