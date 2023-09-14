import { useState, useEffect } from "react";
import { getAllRecipes } from "../api/fetch";
import "../components/Home.css"


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then((data) => {
        console.log("Fetched data:", data);
        if (data) {
          setRecipes(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <div>
        <input
        type="text"
        placeholder="Search for Recipes"
        value=""
        className="search-bar"
      />
      <button className="btn">
        Search
      </button>
      <h1>Recipes</h1>
        <button>Create a recipe</button>
      <div>
        {recipes.map((recipe) => (
          <section className="individualCard" key={recipe.idMeal}>
              <h1>{recipe.strMeal}</h1>
            <img
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
              style={{height:"200px"}}
              />
            <p>{recipe.strInstructions}</p>
            <button>Remove</button>
            <button>Leave comment</button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
