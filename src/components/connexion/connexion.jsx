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
          Créer un nouveau compte
        </Link>
      </div>
    </div>
  );
}

export default Connexion;