// src/components/Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 StreamFlix. All rights reserved.</p>
        <p>Contact us at <a href="mailto:support@streamflix.com">support@streamflix.com</a></p>
        <p>Follow us on:
          <a href="https://facebook.com/streamflix" target="_blank" rel="noopener noreferrer"> Facebook</a> |
          <a href="https://twitter.com/streamflix" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://instagram.com/streamflix" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
        <p>Visit our <a href="/about">About Us</a> page or read our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
