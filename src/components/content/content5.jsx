import React from 'react';
import './content5.css';
import { Link } from 'react-router-dom'; // Corrigé l'import pour Link

const Content5 = () => {
  return (
    <div className="content5-container">
      <div className="content5-text">
        <h2>Votre argent au bon endroit.</h2>
      </div>
      <div className="content5-button">
        <Link to="/inscription" className="content5-link">
          Ouvrir un compte gratuitement
        </Link>
      </div>
    </div>
  );
};

export default Content5;
