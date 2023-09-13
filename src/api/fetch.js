const _BASE_URL = `www.themealdb.com/api/json/v1/1/search.php?`

export function getAllRecipes() {
    return fetch (`${_BASE_URL}f=a`)
}