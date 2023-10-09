import React, { useEffect } from 'react'

function Searched() {
  const [searchRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results)
  }

  useEffect(()=>{
    getSearched(params.search)
  }, [params.search])
  return (
   
  )
}

export default Searched
