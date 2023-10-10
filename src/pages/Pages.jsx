import Home from './Home'
import Favorites from '../components/Favorites';
import Recipe from '../components/Recipe';
import Searched from '../components/Searched';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/searched/:search" element={<Searched/>}/>
      </Routes>
  );
}

export default Pages
