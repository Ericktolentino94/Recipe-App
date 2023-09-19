import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneRecipe } from "../api/fetch";
import "./RecipeShow.css";

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
    <div>
      <div className="recipeShow">
        {individual.length > 0 ? (
          individual.map((recipeinfo) => (
            <section className="individualRecipeCard" key={recipeinfo.idMeal}>
              <h1 className="mealName">{recipeinfo.strMeal}</h1>
              <img 
              className="mealImage"
                src={recipeinfo.strMealThumb}
                alt={recipeinfo.strMeal}
                style={{ height: "200px" }}
              />
              <br />
              <a className="youtubeLink" href={recipeinfo.strYoutube}>
                Youtube Video for {recipeinfo.strMeal}
              </a>
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
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Add Comment</button>

        <div>
          <h2>Comments:</h2>
          {comments.map((c, index) => (
            <div key={index}>
              <strong>{c.name}</strong>: {c.comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
