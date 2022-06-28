import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div>
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Favourites</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Characters</a>
              </li>
              </ul>
      </nav>
      </div>
      <div class="main-container">
        <h1>Star Wars API</h1>
        <p>All the Star Wars data you've ever wanted:</p>
        <p><b>Planets, Spaceships, Vehicles, People, Films and Species</b></p>
     </div>
     
     <div class="search-container">
     <h2 class="search-header">Find a Character</h2>
      <form class="search" action='#'>
      <input type="text" placeholder="search" name="search" />
      <button type="submit">Search</button>
      </form>
     </div>
     
      <Outlet />
    </div>
  );
}
