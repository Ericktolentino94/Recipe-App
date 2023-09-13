import { useState, useEffect } from "react";
import { getAllRecipes } from "../api/fetch";

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
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <section key={recipe.idMeal}>
              <h1>{recipe.strMeal}</h1>
            <img
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;
