import { useState, useEffect, useParams, useNavigate } from "react";
import { getAllRecipes } from "../api/fetch";

const [recipes, setRecipes] = useState([]);

useEffect(()=> {
    getAllRecipes()
    .then((recipesJSON) => {
        setRecipes()
    })
})

const Home = () => {
    return (
        <div>
            
        </div>
    );
}

export default Home;
