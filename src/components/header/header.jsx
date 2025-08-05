import React, { useState } from 'react';
import './header.css';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="header">
        <div className="header-container">
          <img
            src="/assets/PayPal-Logo.png"
            alt="Logo PayPal"
            className="header-logo-image"
          />

          <div className="header-middle" onClick={toggleDropdown}>
            <span className="header-middle-text">Particuliers</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          <ul className="header-menu">
            <Link to="/connexion">
              <button className="myButton">Connexion</button>
            </Link>

            <Link to="/inscription">
              <button className="miButton">Ouvrir un compte</button>
            </Link>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <FaTimes className="close-icon" onClick={toggleDropdown} />
          </div>

          <div className="dropdown-content-wrapper">
            <ul>
              <li>Comment PayPal fonctionne</li>
              <li>Toutes les possibilités de votre compte</li>
            </ul>
            <ul>
              <li>Payer en ligne</li>
              <li>Des paiements au-delà des frontières</li>
            </ul>
            <ul>
              <li>Envoyer des paiements</li>
              <li>Envoyez des paiements à l'étranger</li>
            </ul>
            <ul>
              <li>Rechercher des offres</li>
              <li>Payez avec PayPal et faites des économies</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
