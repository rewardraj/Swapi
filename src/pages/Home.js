import React from 'react'

const home = () => {
  return (
    <div>
    <div className="main-container">
        <h1>Star Wars API</h1>
        <p>All the Star Wars data you've ever wanted:</p>
        <p><b>Planets, Spaceships, Vehicles, People, Films and Species</b></p>
     </div>
     <div className="search-container">
     <h2 className="search-header">Find a Character</h2>
      <form className="search" action='#'>
      <input type="text" placeholder="search" name="search" />
      <button type="submit">Search</button>
      </form>
     </div>
     </div>
  )
}

export default home