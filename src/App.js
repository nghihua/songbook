import React from 'react';
import Redux from './components/Redux.js';
import Home from './components/Home.js';
import Navbar from './components/shared/HomeNavbar.js';

// router
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
