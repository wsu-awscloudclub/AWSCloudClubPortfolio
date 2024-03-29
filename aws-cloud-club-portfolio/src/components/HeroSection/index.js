import React from "react";
import logo from "../img/aws.jpg";
import './HeroSection.css';

const HeroSection = () => {
  const heroStyles = {
    background: 'linear-gradient(to bottom, #000000, #98EC65)', // Black to light green gradient
    color: '#ffffff', // Text color
    textAlign: 'center', // Center align text
    minHeight: '100vh', // Set minimum height to viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem', // Padding for content
  };

  const logoStyles = {
    width: '300px', // Adjust size as needed
    marginBottom: '1rem', // Add margin below logo
  };

  return (
    <div style={heroStyles}>
      <img src={logo} alt="Logo" style={logoStyles} />
      <h1>Welcome to the AWS Cloud Club</h1>
      <h2>Empowering your cloud journey</h2>
      <button>Explore Now</button>
    </div>
  );
};

export default HeroSection;
