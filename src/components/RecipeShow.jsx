const KEY = import.meta.env.VITE_BASE_API_KEY
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./RecipeShow.css";
// import ErrorMessage from "../errors/ErrorMessage";
import { getOneRecipe } from "../../api/fetch";
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
    fetch(`https://www.themealdb.com/api/json/v2/${KEY}/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        setRecipe(data.meals);
      } else {
        setRecipe([]); 
      }
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}, [id]);
    

return (
    <div>
        <div className="recipeShow">
            <img src= {} />
            <h2 className="title">{}</h2>
        </div>
        <div>
            <commentForm />
        </div>
    </div>

)

}