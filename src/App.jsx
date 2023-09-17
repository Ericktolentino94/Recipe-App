import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'; 
import RecipeShow from './components/RecipeShow';

import CreateRecipe from './components/CreateRecipe';


function App() {
 
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedQuery, setSearchedQuery] = useState(""); 

  return (
    <Router>
      <div className="body">
        <Nav />
        <div className="app_page">
          <Routes>
            <Route path="/" element={<Home 
              recipes={recipes}
              setRecipes={setRecipes}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchedQuery={searchedQuery}
              setSearchedQuery={setSearchedQuery}
            />} />
            <Route path="/about" element={<About />} /> 

            <Route path="/CreateRecipe" element={<CreateRecipe />} />
            <Route path="/RecipeShow/:id" element={<RecipeShow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
