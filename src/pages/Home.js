import React from 'react'

const home = () => {
  return (
    <div>
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
     </div>
  )
}

export default home