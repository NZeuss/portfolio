import React from 'react';
import './Navbar.css';
import logo from "./assets/images/logo.png"
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-logo"> 
    <Link to="/" className="logo">
          <img className="logo-img"src={logo} alt="Logo" draggable={false}/>
    </Link>
  </div>
  <div className="navbar-right">
    <ul className="navbar-links">
    <li><Link to="/projects/" className='nav-link'>PROJECTS</Link></li>
      <li><Link to="/about/" className='nav-link'>ABOUT ME</Link></li>
    </ul>

  </div>
</nav>
);
};

export default Navbar;