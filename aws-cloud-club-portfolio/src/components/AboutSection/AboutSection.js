import React, { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const topics = [
    { title: 'Who We Are', description: 'We are the AWS Cloud Club at Wayne State University, a group of passionate individuals dedicated to exploring and learning about cloud computing technologies.' },
    { title: 'What We Do', description: 'Our club organizes workshops, events, and provides resources to help members expand their skills and knowledge in Amazon Web Services and cloud computing.' },
    { title: 'Our Goals', description: 'Our primary goal is to empower students with practical knowledge in cloud computing and AWS services. We also aim to build a strong community of cloud enthusiasts.' },
    { title: 'The Team', description: 'Our team consists of students from various backgrounds who share a common interest in cloud computing. We welcome new members who are eager to learn and contribute to our community.' }
  ];

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="about-section">
      <div className="container">
        <h1>About Us</h1>
        <div className="card-container">
          {topics.map((topic, index) => (
            <div key={index} className={`card ${index === activeCardIndex ? 'active' : ''}`} onClick={() => handleCardClick(index)}>
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
