import React from 'react';
import './Footer.css';

// PUBLIC_INTERFACE
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Notes App</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About</a>
          <a href="/privacy" className="footer-link">Privacy</a>
          <a href="/terms" className="footer-link">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
