import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './main.css';
import App from './App';
import Favourites from './routes/Favourites';
import Character from './routes/Character';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="favourites" element={<Favourites />} />
      <Route path="character" element={<Character />}>
        <Route
          index
          // element={
          //   <main style={{ padding: '1rem' }}>
          //   </main>
          // }
        />
      </Route>
    
    </Route>
  </Routes>
</BrowserRouter>,
root
);

