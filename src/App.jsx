import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'; 
import RecipeShow from './components/RecipeShow';

function App() {
  return (
    <Router>
      <div className="body">
        <Nav />
        <div className="app_page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/RecipeShow" element={<RecipeShow />} /> 


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
