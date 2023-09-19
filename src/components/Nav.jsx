import React from 'react';
import { Link } from "react-router-dom";
import "../components/Nav.css"

const Nav = () => {
    return (
        <nav className="nav-bar">
            <div>
      <img
        className="header-logo"
        src="https://b2066476.smushcdn.com/2066476/wp-content/uploads/2018/10/25698-TSET-19-04-SYF-Website-Refresh_Header_5FoodGroups_F.jpg?lossy=1&strip=1&webp=1"
        height="200px"
        width="300px"
        alt="Recipe Logo"
      />
      </div>
      <div className='nav-cont'>
      <h1 className='navhead'>The Recipe App</h1>

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
