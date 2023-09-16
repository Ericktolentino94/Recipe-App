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
        .then((recipeData) => {
            setVideo(recipeData.items);
        }
    )})
    
}
return(
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