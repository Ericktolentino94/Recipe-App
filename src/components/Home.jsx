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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <img
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
            />
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
