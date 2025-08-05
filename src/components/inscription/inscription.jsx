import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './inscription.css';

const countries = [
  { code: 'bj', name: 'Bénin' },
  { code: 'ci', name: 'Côte d’Ivoire' },
  { code: 'gh', name: 'Ghana' },
  { code: 'tg', name: 'Togo' },
  { code: 'bf', name: 'Burkina Faso' },
  { code: 'ne', name: 'Niger' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'us', name: 'États-Unis' },
  { code: 'de', name: 'Allemagne' },
  { code: 'gb', name: 'Royaume-Uni' },
  { code: 'es', name: 'Espagne' },
  { code: 'it', name: 'Italie' },
  { code: 'ca', name: 'Canada' },
  { code: 'be', name: 'Belgique' },
  { code: 'ch', name: 'Suisse' },
  { code: 'ma', name: 'Maroc' },
  { code: 'fr', name: 'France' },
  { code: 'dz', name: 'Algérie' },
  { code: 'ma', name: 'Maroc' },
  { code: 'eg', name: 'Égypte' },
  { code: 'tn', name: 'Tunisie' },
  { code: 'ru', name: 'Russie' },
  { code: 'cn', name: 'Chine' },
  { code: 'jp', name: 'Japon' },
  { code: 'in', name: 'Inde' },
  { code: 'ml', name: 'Mali' },
  { code: 'gn', name: 'Guinée' },
  { code: 'cg', name: 'Congo' },
  { code: 'rw', name: 'Rwanda' },
  { code: 'bw', name: 'Botswana' },
  { code: 'zm', name: 'Zambie' },
  { code: 'zw', name: 'Zimbabwe' },
  { code: 'na', name: 'Namibie' },
  { code: 'et', name: 'Éthiopie' },
  { code: 'td', name: 'Tchad' },
  { code: 'sd', name: 'Soudan' },
  { code: 'ly', name: 'Libye' },
  { code: 'jo', name: 'Jordanie' },
  { code: 'lb', name: 'Liban' },
  { code: 'tr', name: 'Turquie' },
  { code: 'se', name: 'Suède' },
  { code: 'no', name: 'Norvège' },
  { code: 'fi', name: 'Finlande' },
  { code: 'dk', name: 'Danemark' },
  { code: 'pl', name: 'Pologne' },
  { code: 'nl', name: 'Pays-Bas' },
  { code: 'be', name: 'Belgique' },
  { code: 'at', name: 'Autriche' },
  { code: 'sk', name: 'Slovaquie' },
  { code: 'hu', name: 'Hongrie' },
  { code: 'ro', name: 'Roumanie' },
  { code: 'bg', name: 'Bulgarie' },
  { code: 'gr', name: 'Grèce' },
  { code: 'pt', name: 'Portugal' },
  { code: 'ie', name: 'Irlande' },
  { code: 'is', name: 'Islande' },
];


function Header({ selectedCountry, onCountryChange }) {
  return (
    <header className="inscription-header">
      <div className="header-content">
        {/* Sélecteur de pays */}
        <div className="flag-selector-wrapper">
          <div className="select-flag-pos">
            <img
  className="flag-icon"
  src={`https://flagcdn.com/w40/${selectedCountry}.png`}
  alt=""
  aria-hidden="true"
/>

            <select
              className="country-select-modern"
              value={selectedCountry}
              aria-label="Choisir le pays"
              onChange={onCountryChange}
            >
              {countries.map(({ code, name }) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Logo PayPal */}
        <img
          className="paypal-logo"
          src="/assets/p1.png"
          alt="PayPal"
        />
        {/* Lien de connexion */}
        <Link className="header-link" to="/connexion">
          Connectez-vous
        </Link>
      </div>
    </header>
  );
}

export default function Inscription() {
  const [selectedCountry, setSelectedCountry] = useState('bj');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="inscription-container">
      <Header
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
      />

      <main className="inscription-main">
        <h1 className="inscription-title">Ouvrir un compte PayPal</h1>
        <div className="inscription-form-container">
          <form className="inscription-form">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="email-input"
              required
            />
            <button type="submit" className="submit-button">
              Suivant
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
