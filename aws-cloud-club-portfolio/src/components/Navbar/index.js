import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../img/aws.jpg';
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150; // Pixels after which the navbar will fade out
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(currentScrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
        display: isVisible ? 'flex' : 'none',
      }}>
      <div id="logo">
        <a href="home.html">
          <img src={logo} alt="AWS Logo" className="logo-image" />
        </a>
      </div>
      <div id="links">
        {/* Update internal links to use Link from react-scroll */}
        <Link to="hero-container" smooth={true} duration={500}>Home</Link>
        <Link to="about-section" smooth={true} duration={500}>About</Link>
        <Link to="card-section" smooth={true} duration={500}>Events</Link>
        <Link to="footer" smooth={true} duration={500}>Contact</Link>
        <a href="https://github.com/wsu-awscloudclub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/aws-cloud-club-wayne-state-university" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
