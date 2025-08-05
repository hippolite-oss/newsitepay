import React from 'react';
import './content1.css';

const Content1 = () => {
  return (
    <div className="content1-container">
      <div className="content1-text">
        <p>
          Rapide et facile.<br />
          Des millions d'utilisateurs dans le monde ont choisi PayPal pour une bonne raison : sa simplicité. Payez avec votre adresse email et votre mot de passe plus rapidement qu'en sortant votre portefeuille.
        </p>
        <p className="content1-highlight">
          <a href="#">Payez sur eBay.</a>
          <a href="#">Payez sur des sites.</a>
        </p>
      </div>
    </div>
  );
};

export default Content1;
