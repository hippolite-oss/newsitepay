import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SimpleFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="">À propos</a>
          <a href="">Contact</a>
          <a href="">Confidentialité</a>
          <a href="">Conditions</a>
        </div>
        
        <div className="social-icons">
          <a href=""><FaFacebook /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaLinkedin /></a>
        </div>
        
        <div className="copyright">
          © {new Date().getFullYear()} Votre Société. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;