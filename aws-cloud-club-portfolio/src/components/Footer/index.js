import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faDiscord, faMeetup, facomments } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://web.groupme.com/join_group/95690303/BEox3UGa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={facomments} className="icon" />
        </a>
        <a href="https://www.meetup.com/aws-cloud-club-at-wayne-state/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMeetup} className="icon" />
        </a>
        <a href="https://www.instagram.com/awscloudwsu/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://discord.com/invite/mQy6uQghTT" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
        </a>
        
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/join_us">Become a Member</a>
      </div>
      <div className="newsletter-signup">
        <p>Subscribe to our newsletter for updates:</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="logo-container">
          <img src="https://media.licdn.com/dms/image/D560BAQGV-F31g-N5Cg/company-logo_200_200/0/1696183988983?e=1718236800&v=beta&t=DKGiWuAI1AW4SLDgIQSteb6k3wXLoOkjedc6kJ22VYs" alt="Club Logo" className="logo" />
          <img src="https://d3sxshmncs10te.cloudfront.net/icon/premium/png-512/4488889.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcxMDY1MzExNiwicSI6bnVsbCwiaWF0IjoxNzEwMzkzOTE2fQ__.3c806d4076bb795f58bd767997febd05b23c851eaf5bd385615a13398f71f382" alt="AWS Logo" className="logo" />
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/302495982_488615826604779_4341638918318599601_n.png?stp=dst-png_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rHbPi8QJLY0AX87Drt8&_nc_ht=scontent-ord5-2.xx&oh=00_AfAWj5E46OOE-jl4bNyjxuEoiXu5tYnJPiD1ZWZBqYUPbA&oe=65F7F8BB" alt="WSU Logo " className="logo" />
        </div>
         <p className="copyright">© 2024 Wayne State AWS Cloud Club</p>
    </footer>
  );
}

export default Footer;

