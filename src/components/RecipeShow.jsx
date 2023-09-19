import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneRecipe } from "../api/fetch";
import "./RecipeShow.css"
export default function RecipeShow() {
  const [individual, setIndividual] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneRecipe(id)
      .then((data) => {
        console.log("Data received:", data);
        setIndividual(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });
  }, [id]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Name and comment cannot be empty!");
      return;
    }
    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="recipeShow">
            {individual.length > 0 ? (
              individual.map((recipeinfo) => (
                <section
                  className="individualRecipeCard mb-4"
                  key={recipeinfo.idMeal}
                >
                  <h1 className="mealName">{recipeinfo.strMeal}</h1>
                  <div className="mealImage">
                    <img
                      src={recipeinfo.strMealThumb}
                      alt={recipeinfo.strMeal}
                      className="img-fluid"
                    />
                    <a className="youtubeLink" href={recipeinfo.strYoutube}>
                      Youtube Video for {recipeinfo.strMeal}
                    </a>
                  </div>
                  <h2 className="ingredientsTitle">Required Ingredients</h2>
                  <p className="ingredientInfo">{recipeinfo.strMeasure1} {recipeinfo.strIngredient1}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure2} {recipeinfo.strIngredient2}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure3} {recipeinfo.strIngredient3}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure4} {recipeinfo.strIngredient4}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure5} {recipeinfo.strIngredient5}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure6} {recipeinfo.strIngredient6}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure7} {recipeinfo.strIngredient7}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure8} {recipeinfo.strIngredient8}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure9} {recipeinfo.strIngredient9}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure10} {recipeinfo.strIngredient10}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure11} {recipeinfo.strIngredient11}</p>
                  <p className="ingredientInfo">{recipeinfo.strMeasure12} {recipeinfo.strIngredient12}</p>
                  <p className="instructions">{recipeinfo.strInstructions}</p>
                </section>
              ))
            ) : (
              <p className="non-search">No recipe found. Try a different recipe</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-container">
            <h2 className="commentTitle">Leave a Comment On This Recipe</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control mb-2"
                placeholder="Add a comment"
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleCommentSubmit}
            >
              Add Comment
            </button>
            <div>
              <h2 className="commentTitle">Comments:</h2>
              {comments.map((c, index) => (
                <div key={index} className="mb-2">
                  <strong>{c.name}</strong>: {c.comment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}