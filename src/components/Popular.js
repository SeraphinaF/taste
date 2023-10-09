import './popular.css'
import Recipe from './Recipe';
import { useEffect, useState } from "react";

function Popular() {

    const [popular, setPopular] = useState([]);
    const [openRecipe, setOpenRecipe] = useState(false)
    const [selectedRecipeId, setSelectedRecipeId] = useState(null)

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        try {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json();
            console.log(data);

            setPopular(data.recipes);// this is an array thats why: data.recipes
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <div className='container'>
                {popular.map((recipe) => {
                    return (
                        <div className='card' 
                             key={recipe.id}
                             onClick={() => {
                                setSelectedRecipeId(recipe.id)
                                setOpenRecipe(true)
                            }}>
                            <img className='img-card' src={recipe.image} alt={recipe.title} />
                            <p className='title'>{recipe.title}{recipe.id}</p>
                        </div>
                    )
                })}
            </div>
            {/* if openRecipe is true then show the component*/}
            {openRecipe && <Recipe
                recipeId={selectedRecipeId}
                setOpenRecipe={setOpenRecipe}
            />}
        </div>
    )
}

export default Popular
