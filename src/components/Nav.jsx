import React from 'react';
import { Link } from "react-router-dom";
import "../components/Nav.css"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <div>
      </div>
      <div className='nav-cont'>
      <ul>
        <li className='home'>
          <Link to="/">Home</Link>
        </li>
        <li className='about'>
          <Link to ="/about">About</Link>
        </li>
      </ul>
      </div>
    </nav>
    );
}

export default Nav;
