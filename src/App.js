import React from 'react';
import Redux from './components/Redux.js';
import Home from './components/Home.js';
import Auth from './components/Auth.js';
import Song from './components/Song.js';

import Navbar from './components/shared/HomeNavbar.js';
import Footer from './components/shared/Footer.js';
import AudioPlayer from './components/shared/AudioPlayer.js';

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
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/song" element={<Song />} />
      </Routes>
      <AudioPlayer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
