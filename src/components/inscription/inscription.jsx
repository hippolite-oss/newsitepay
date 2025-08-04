import React from 'react'
import './inscription.css';
import { Link } from 'react-router-dom';
const inscription = () => {
  return (
    <div className='inscription-container'>
        <header>
           <nav>
  <ul>
    <li><select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        </select></li>
    <li><img src=" logopapal.jmg "  /></li>
    <li> <Link to='/Inscription '>Connectez-vous</Link> </li>
  </ul>
</nav>
 
        </header>

        <h1>Ouvrir un compte PayPal</h1>
        <div className='inscription-form'>
            <form>
                <input type="email" placeholder='Votre adresse email' required /><br />
                <Link >
                    <button type='submit'>Suivant</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default inscription