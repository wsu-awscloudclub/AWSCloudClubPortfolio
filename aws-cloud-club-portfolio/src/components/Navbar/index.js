import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    
    <>
      <nav>
        <div id="logo">
          <a href="home.html">
            <img src="AWS_MODIFIED_LOGO.jpg" alt="AWS Logo" className="logo-image" />
          </a>
        </div>

        <div id="links">
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </div>

        
      </nav>
    </>
  )
}

export default Navbar
