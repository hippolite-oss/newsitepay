
import { Link } from 'react-router-dom';

const Connexion = () => {
  

  return (
    <div className='connexion-container'>
      <div className='connexion-header'>
        <h1 className='connexion-title'>PayPal</h1>
        <p className='connexion-subtitle'>Connectez-vous à votre compte</p>
      </div>
      
      <form className='connexion-form' >
        <div className='form-group'>
          <input 
            type="email" 
            placeholder="Email ou numéro de mobile" 
            className='form-input'
            required
          />
        </div>
        
        <div className='form-group'>
          <input 
            type="password" 
            placeholder="Mot de passe" 
            className='form-input'
            required
          />
        </div>
        
        <div className='form-options'>
          <Link to='#' className='forgot-password'>
            Mot de passe oublié ?
          </Link>
        </div>
        
        <button type='submit' className='submit-btn'>
          Se connecter
        </button>
      </form>
      
      <div className='separator'>
        <span className='separator-text'>OU</span>
      </div>
      
      <div className='create-account'>
        <Link to='/Inscription' className='create-account-btn'>
          Créer un nouveau compte
        </Link>
      </div>
    </div>
  );
}

export default Connexion;