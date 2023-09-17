const KEY = import.meta.env.VITE_BASE_API_KEY
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./RecipeShow.css";
// import ErrorMessage from "../errors/ErrorMessage";
import { getOneRecipe } from "../api/fetch";
// import {commentForm} from "./CommentForm";

export default function RecipeShow() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

useEffect(() => {
    getOneRecipe(id)
        .then((data) => {
            setRecipe(data)
        })
    // fetch(`https://www.themealdb.com/api/json/v2/${KEY}/lookup.php?i=${id}`)
    // .then((response) => response.json())
    // .then((data) => {
    //   if (data.meals) {
    //     setRecipe(data.meals);
    //   } else {
    //     setRecipe([]); 
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error fetching recipes:", error);
    // });
}, [id]);
    

return (
    <div>
        <div className="recipeShow">
        {recipe.length > 0 ? (
          recipe.map((recipeinfo) => (
            <section className="individualRecipeCard" key={recipeinfo.idMeal}>
                <h1>{recipeinfo.strMeal}</h1>
              <img
                src={recipeinfo.strMealThumb}
                alt={recipeinfo.strMeal}
                style={{ height: "200px" }}
              />
              <a href={recipeinfo.strYoutube}>Youtube Video for {recipeinfo.strMeal}</a>
              <p>{recipeinfo.strMeasure1} {recipeinfo.strIngredient1}</p>
              <p>{recipeinfo.strMeasure2} {recipeinfo.strIngredient2}</p>
              <p>{recipeinfo.strMeasure3} {recipeinfo.strIngredient3}</p>
              <p>{recipeinfo.strMeasure4} {recipeinfo.strIngredient4}</p>
              <p>{recipeinfo.strMeasure5} {recipeinfo.strIngredient5}</p>
              <p>{recipeinfo.strMeasure6} {recipeinfo.strIngredient6}</p>
              <p>{recipeinfo.strMeasure7} {recipeinfo.strIngredient7}</p>
              <p>{recipeinfo.strMeasure8} {recipeinfo.strIngredient8}</p>
              <p>{recipeinfo.strMeasure9} {recipeinfo.strIngredient9}</p>
              <p>{recipeinfo.strMeasure10} {recipeinfo.strIngredient10}</p>
              <p>{recipeinfo.strMeasure11} {recipeinfo.strIngredient11}</p>
              <p>{recipeinfo.strMeasure12} {recipeinfo.strIngredient12}</p>
            </section>
          ))
        ) : (
          <p className="non-search">No recipe found. Try a different recipe</p>
        )}
        </div>
        <div>
            <commentForm />
        </div>
    </div>

)

}