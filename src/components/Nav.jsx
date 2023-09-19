import React from 'react';
import { Link } from "react-router-dom";
import "../components/Nav.css"

const Nav = () => {
    return (
        <nav className="nav-bar">
      <img
        className="header-logo"
        src="https://static.vecteezy.com/system/resources/previews/007/559/224/original/recipe-food-logo-design-template-free-vector.jpg"
        height="200px"
        width="300px"
        alt="Recipe Logo"
      />
      <h1>Produce Saver</h1>

      <ul>
        <li className='home'>
          <Link to="/">Home</Link>
        </li>
        <li className='about'>
          <Link to ="/about">About</Link>
        </li>
      </ul>
    </nav>
    );
}

export default Nav;
