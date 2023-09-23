import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRecipes } from "../api/fetch";
import "../components/Home.css";

const Home = ({
  recipes,
  setRecipes,
  searchQuery,
  setSearchQuery,
  searchedQuery,
  setSearchedQuery,
}) => {
    useEffect(() => {
        const fetchRecipes = () => {
          if (searchedQuery.trim() === "") {
            getAllRecipes()
              .then((data) => {
                if (data) {
                  setRecipes(data);
                }
              })
              .catch((error) => {
                console.error("Error fetching recipes:", error);
              });
          } else {
            const KEY = import.meta.env.VITE_BASE_API_KEY;
            fetch(
              `https://www.themealdb.com/api/json/v2/${KEY}/search.php?s=${searchedQuery}`
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
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

  const [formData, setFormData] = useState({ name: '', email: '', summary: '', imageUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      idMeal: Math.random().toString(),
      strMeal: formData.name,
      strMealThumb: formData.imageUrl, 
      strInstructions: formData.summary,
    };

    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setFormData({ name: '', email: '', summary: '', imageUrl: '' }); 
  };

  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-input" className="search-label">Search:</label>
        <input
          type="text"
          id="search-input"
          className="search-bar-input"
          placeholder="Search for Recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-bar-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
      <h1 className="recipe">Ingredient Saving Recipes</h1>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <section className="individualCard" key={recipe.idMeal}>
              <h1 className="recipeName">{recipe.strMeal}</h1>
              <Link to={`/RecipeShow/${recipe.idMeal}`}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  style={{ height: "200px" }}
                />
              </Link>
              <p>{recipe.strInstructions}</p>
              <button className="removeButton" onClick={() => handleRemove(recipe.idMeal)}>Remove</button>
            </section>
          ))
        ) : (
          <p className="non-search">
            No recipes found. Try a different search term.
          </p>
        )}
      </div>
      <h2 className="createRecipe">Create A Recipe</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="formDescriptors"htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="formDescriptors" htmlFor="imageUrl">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label className="formDescriptors" htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
