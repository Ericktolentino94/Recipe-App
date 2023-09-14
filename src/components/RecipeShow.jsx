import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./RecipeShow.css";

export default function RecipeShow({recipe}) {
    return (
        <article className="recipe">
            <Link to="/videoShow">
                <img src={recipe.snippet.thumbnails.default.url} alt="thumbnail" />
                <h3 className="title">{video.snippet.title}</h3>
            </Link>
            <p className="description">{video.snippet.title}</p>
       
        </article>
    )
}