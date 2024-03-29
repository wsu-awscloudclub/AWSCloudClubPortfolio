import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../img/AWS_MODIFIED_LOGO.jpg'; // Import the logo image
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="logo">
        <a href="home.html">
          {/* Use the logo variable as the src attribute */}
          <img src={logo} alt="AWS Logo" className="logo-image" />
        </a>
      </div>
    <>
    </>
      <div id="links">
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        {/* GitHub link */}
        <a href="https://github.com/wsu-awscloudclub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        {/* LinkedIn link */}
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;