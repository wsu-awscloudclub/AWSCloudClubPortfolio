import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    
    <>
      <nav>
        <div id="logo">
          <a href="home.html">
            <img src="AWS_MODIFIED_LOGO.jpg" alt="AWS Logo" className="logo-image"/>
          </a>
        </div>
        
        <div>
          <ul id="links">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
