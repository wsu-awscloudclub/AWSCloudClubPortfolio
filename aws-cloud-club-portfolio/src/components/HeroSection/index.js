import React from "react";
import { Link } from 'react-scroll'; // Import Link component from react-scroll
import logo from "../img/aws.jpg";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={logo} alt="Logo" className="hero-logo" />
      <h1>Welcome to the AWS Cloud Club</h1>
      <h2>Empowering your cloud journey</h2>
      <Link
        to="card-section" // ID of the target section you want to scroll to
        smooth={true} // Enable smooth scrolling
        duration={500} // Duration of the scroll animation in milliseconds
        className="hero-button" // Apply the same class for styling
        style={{ cursor: 'pointer' }} 
      >
        Explore Now
      </Link>
    </div>
  );
};

export default HeroSection;
