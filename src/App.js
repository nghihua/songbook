import React from "react";
import Redux from "./pages/Redux.js";
import Context from "./pages/Context.js";
import Home from "./pages/Home.js";
import Auth from "./pages/Auth.js";
import Song from "./pages/Song.js";

import Navbar from "./components//HomeNavbar.js";
import Footer from "./components//Footer.js";
import AudioPlayer from "./components/AudioPlayer.js";

// router
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/context" element={<Context />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
      <AudioPlayer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
