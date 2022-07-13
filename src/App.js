import React from "react";
import MuiNavbar from './components/MuiNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Favorites from './pages/Favorites';
  
export default function App() {
  return (
    <>
      <Router>
        <MuiNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
}
