import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../api/fetch";
import "../components/Home.css";
import CreateRecipe from "./CreateRecipe";

const Home = ({
  recipes,
  setRecipes,
  searchQuery,
  setSearchQuery,
  searchedQuery,
  setSearchedQuery,
}) => {
  useEffect(() => {
    const fetchRecipes = async () => {
      if (searchedQuery.trim() === "") {
       
        try {
          const data = await getAllRecipes();
          console.log("Fetched data:", data);
          if (data) {
            setRecipes(data);
          }
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      } else {
       
        const KEY = import.meta.env.VITE_BASE_API_KEY;
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v2/${KEY}/search.php?s=${searchedQuery}`
          );
          const data = await response.json();
          if (data.meals) {
            setRecipes(data.meals);
          } else {
            setRecipes([]);
          }
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      }
    };

    fetchRecipes();
  }, [searchedQuery, setRecipes]);

  const handleSearch = () => {
    setSearchedQuery(searchQuery);
  };

  const handleRemove = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.idMeal !== recipeId);
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Recipes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <button onClick={handleSearch} className="btn">
        Search
      </button>
      <h1>Recipes</h1>
      <Link to="/CreateRecipe">Create a recipe</Link>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <section className="individualCard" key={recipe.idMeal}>
              <h1>{recipe.strMeal}</h1>
              <Link to={`/RecipeShow/${recipe.idMeal}`}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  style={{ height: "200px" }}
                />
              </Link>
              <p>{recipe.strInstructions}</p>
              <button onClick={() => handleRemove(recipe.idMeal)}>Remove</button>
            </section>
          ))
        ) : (
          <p className="non-search">
            No recipes found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
