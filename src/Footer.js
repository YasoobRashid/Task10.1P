import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section explore">
        <h3>Explore</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
        </ul>
      </div>

      <div className="footer-section support">
        <h3>Support</h3>
        <ul>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Stay Connected</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="dev-deakin">DEV@Deakin</p>
        <ul className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
