import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
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
          <img src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" alt="AWS Logo" className="logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wayne_State_Warriors_primary_logo.svg/640px-Wayne_State_Warriors_primary_logo.svg.png" alt="WSU Logo " className="logo" />
        </div>
         <p className="copyright">© 2024 Wayne State AWS Cloud Club</p>
    </footer>
  );
}

export default Footer;

