import React, { useState } from 'react';
import './header.css';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

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
            <button className="myButton">Connexion</button>
            <button className="miButton">Ouvrir un compte</button>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <span>Menu Particuliers</span>
            <FaTimes className="close-icon" onClick={toggleDropdown} />
          </div>
          <ul>
            <li>Comment PayPal fonctionne</li>
            <li>Toutes les possibilités de votre compte</li>
            <li>Payer en ligne</li>
            <li>Des paiements au-delà des frontières</li>
            <li>Envoyer des paiements</li>
            <li>Envoyez des paiements à l'étranger</li>
            <li>Rechercher des offres</li>
            <li>Payez avec PayPal et faites des économies</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
