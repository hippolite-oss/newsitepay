import React, { useState } from 'react';
import './header.css';
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDropdown = () => {
    setMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

          {/* Bouton Hamburger Mobile */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Zone visible seulement sur desktop */}
          <div className="header-middle desktop-only" onClick={toggleDropdown}>
            <span className="header-middle-text">Particuliers</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {/* Menu Desktop */}
          <ul className="header-menu desktop-only">
            <Link to="/connexion">
              <button className="myButton">Connexion</button>
            </Link>

            <Link to="/inscription">
              <button className="miButton">Ouvrir un compte</button>
            </Link>
          </ul>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div onClick={toggleDropdown} className="mobile-submenu">
              Particuliers <FaChevronDown />
            </div>

            {menuOpen && (
              <div className="dropdown-mobile-content">
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
                <button onClick={closeDropdown} className="close-submenu-btn">Fermer</button>
              </div>
            )}

            <Link to="/connexion">
              <button className="myButton">Connexion</button>
            </Link>

            <Link to="/inscription">
              <button className="miButton">Ouvrir un compte</button>
            </Link>
          </div>
        )}
      </nav>

      {/* Menu Desktop Dropdown */}
      {menuOpen && (
        <div className="dropdown-menu desktop-only">
          <div className="dropdown-header">
            <FaTimes className="close-icon" onClick={closeDropdown} />
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
