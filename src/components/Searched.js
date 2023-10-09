import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import Header from './Header';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Searched() {
  const [searchRecipes, setSearchedRecipes] = useState([]);
  const [openRecipe, setOpenRecipe] = useState(false)
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)
  const navigate = useNavigate();

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  return (
    <div>
      <Header />
      <Searchbar />
      <div className='back-to-pop' onClick={() => navigate ('/')}>Go back</div>
      <div className='container'>
        {searchRecipes.map((item) => (
          <div className="card"
            key={item.id}
            onClick={() => {
              setSelectedRecipeId(item.id)
              setOpenRecipe(true)
            }}>
            <img className='img-card' src={item.image} alt={item.title} />
            <p className='title'>{item.title}{item.id}</p>
          </div>
        ))}
      </div>
      {/* if openRecipe is true then show the component*/}
      {openRecipe && <Recipe
        recipeId={selectedRecipeId}
        setOpenRecipe={setOpenRecipe}
      />}
    </div>
  );
}

export default Searched
