import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";
import ThemeToggle from '../theme/ThemeToggle';

function NavBar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <div className="logoh1">
              <h1>R<span>ashid</span> </h1>
            </div>
        </div>
      <div className="listItems">
        <Link to="/"className='list'>Home</Link>
        <Link to="/about" className='list'>About</Link>
        <Link to="/skills" className='list'>Skills</Link>
        <Link to="/projects" className='list'>Projects</Link>
      </div>
      <div className="Navbtn">
          <Link to="/contact" className='list'><button className='btn'>Contact</button></Link>
        </div>
        <ThemeToggle />

    </div>
  )
}

export default NavBar
