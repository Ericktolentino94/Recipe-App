const KEY = import.meta.env.VITE_BASE_API_KEY
const _BASE_URL = `https://www.themealdb.com/api/json/v2/${KEY}/`;

export function getAllRecipes() {
  const endpoint = "search.php?s=curry";
  const url = `${_BASE_URL}${endpoint}`;

  return fetch(url)
    .then((response) => {
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.meals) {
        return data.meals;
      } else {
        throw new Error("Invalid API response: 'meals' property not found.");
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

export function getOneRecipe(id) {
  const endpoint =`lookup.php?i=${id}`
  const url = `${_BASE_URL}${endpoint}`
  return fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.meals && Array.isArray(data.meals)) {
      return data.meals;
    } 
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    throw error;
  });
}
