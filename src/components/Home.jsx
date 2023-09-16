import { useState, useEffect } from "react";
import { getAllRecipes } from "../api/fetch";
import "../components/Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState(""); 

  useEffect(() => {
    if (searchedQuery.trim() === "") {
      
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
    } else {
      
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedQuery}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setRecipes(data.meals);
          } else {
            setRecipes([]); 
          }
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    }
  }, [searchedQuery]);

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
      <button>Create a recipe</button>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <section className="individualCard" key={recipe.idMeal}>
              <h1>{recipe.strMeal}</h1>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{ height: "200px" }}
              />
              <p>{recipe.strInstructions}</p>
              <button onClick={() => handleRemove(recipe.idMeal)}>Remove</button>
            </section>
          ))
        ) : (
          <p className="non-search">No recipes found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
