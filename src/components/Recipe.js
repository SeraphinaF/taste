import './recipe.css'
import { useEffect, useState } from "react"

function Recipe({ setOpenRecipe, recipeId }) {
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            const detailData = await data.json();
            setDetails(detailData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [recipeId]);

    return (
        <div className='modal-bg'>
            <div className='modal-container'>
                <div className='modal-input'>
                    <img className="details-img" src={details.image} alt="recipe title" />
                    <button
                        className='close-btn'
                        onClick={() => {
                            setOpenRecipe(false)
                        }}
                    >X</button>
                    <div className='recipe-content' >
                        <h1 className='modal-title'>{details.title}</h1>
                        <p className='recipe-inst' dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                        <ul>
                            {details.extendedIngredients ? (
                                details.extendedIngredients.map((ingredient) =>
                                    <li key={ingredient.id}>{ingredient.original}</li>
                                )
                            ) : (
                                <li>No ingredients available</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Recipe;
