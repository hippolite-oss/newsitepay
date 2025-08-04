import React, { useState } from 'react';
import './inscription.css';
import { Link } from 'react-router-dom';

const Inscription = () => {
  const [selectedCountry, setSelectedCountry] = useState('fr');

  const countries = [
    { code: 'fr', name: 'France' },
    { code: 'us', name: 'États-Unis' },
    { code: 'de', name: 'Allemagne' },
    { code: 'gb', name: 'Royaume-Uni' },
    { code: 'es', name: 'Espagne' },
    { code: 'it', name: 'Italie' },
    { code: 'ca', name: 'Canada' },
    { code: 'be', name: 'Belgique' },
    { code: 'ch', name: 'Suisse' },
    { code: 'ma', name: 'Maroc' },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className='inscription-container'>
      <header className='inscription-header'>
        <nav className='inscription-nav'>
          <ul className='inscription-nav-list'>
            <li className='country-selector'>
              <div className='country-select-container'>
                <img 
                  src={`https://flagcdn.com/20x15/${selectedCountry}.png`} 
                  alt={`Drapeau ${selectedCountry}`}
                  className='country-flag'
                />
                <select 
                  className='country-select'
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>
            <li className='logo-item'>
              <img 
                src="/assets/p1.png" 
                alt="PayPal Logo" 
                className='paypal-logo'
              />
            </li>
            <li className='login-link-item'>
              <Link to='/connexion' className='login-link'>
                Connectez-vous
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='inscription-main'>
        <h1 className='inscription-title'>Ouvrir un compte PayPal</h1>
        <div className='inscription-form-container'>
          <form className='inscription-form'>
            <input 
              type="email" 
              placeholder='Votre adresse email' 
              className='email-input'
              required 
            />
            <button type='submit' className='submit-button'>
              Suivant
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Inscription;