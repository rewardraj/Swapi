import { useEffect, useState } from "react";
import MuiNavbar from './components/MuiNavbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Favourites from './pages/Favourites';




export default function App() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setCharacter(data.results);
    }

    fetchCharacter();


  }, [])

  return (
    <div>
      <Router>
        <MuiNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/character" element={<Character />}>
          </Route>
          <Route path="/favorites" element={<Favourites />}></Route>

        </Routes>
      </Router>
 





    </div>
  );
}
