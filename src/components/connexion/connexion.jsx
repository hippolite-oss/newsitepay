import { Link } from 'react-router-dom';
import './connex.css';

const Connexion = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
  };

  return (
    <div className='connexion-container'>
      <div className='connexion-header'>
        <img 
          src="assets/p2.png" 
          alt="Logo de l'application" 
          className='logo'
        />
      </div>
      
      <form className='connexion-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input 
            type="email" 
            placeholder="Email ou numéro de mobile" 
            className='form-input'
            required
          />
        </div>
        
        <div className='forgot-link-container'>
          <Link to='/mot-de-passe-oublie' className='forgot-link'>
            Adresse email ou numéro oublié ?
          </Link>
        </div>
        
        <button type='submit' className='submit-btn'>
          Suivant
        </button>
      </form>
      
      <div className='separator'>
        <span className='separator-line'></span>
        <span className='separator-text'>OU</span>
        <span className='separator-line'></span>
      </div>
      
      <div className='create-account-container'>
        <Link to='/inscription' className='create-account-btn'>
          Créer un compte
        </Link>
      </div>

      <div className='connexion-footer'>
        <div className="language-selector">
          <select>
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>
        
        <div className="footer-links">
          <Link to='/conditions-utilisation' className='footer-link'>Conditions</Link>
          <Link to='/politique-confidentialite' className='footer-link'>Confidentialité</Link>
          <Link to='/aide' className='footer-link'>Aide</Link>
        </div>
        
        <p className='footer-text'>
          © {new Date().getFullYear()} VotreApplication, Inc.
        </p>
      </div>
    </div>
  );
}

export default Connexion;