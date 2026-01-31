import React, { useState } from 'react';
import './footer.css';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaShieldAlt,
  FaCreditCard,
  FaGlobe,
  FaQuestionCircle
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section principale */}
        <div className="footer-main">
          {/* À propos de PayPal */}
          <div className="footer-section">
            <h3 className="footer-title">PayPal</h3>
            <p className="footer-description">
              La solution de paiement la plus sûre et la plus pratique au monde. 
              Envoyez, recevez et gérez votre argent en toute sécurité.
            </p>
            <div className="contact-info">
              <p><FaPhone className="contact-icon" /> +33 1 23 45 67 89</p>
              <p><FaEnvelope className="contact-icon" /> support@paypal.fr</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Paris, France</p>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <div className="footer-links">
              <a href="#"><FaCreditCard className="link-icon" /> Paiements en ligne</a>
              <a href="#"><FaShieldAlt className="link-icon" /> Protection acheteur</a>
              <a href="#"><FaGlobe className="link-icon" /> Paiements internationaux</a>
              <a href="#"><FaPhone className="link-icon" /> PayPal Mobile</a>
              <a href="#"><FaCreditCard className="link-icon" /> Cartes de crédit</a>
            </div>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Support</h4>
            <div className="footer-links">
              <a href="#"><FaQuestionCircle className="link-icon" /> Centre d'aide</a>
              <a href="#"><FaEnvelope className="link-icon" /> Nous contacter</a>
              <a href="#"><FaShieldAlt className="link-icon" /> Sécurité</a>
              <a href="#"><FaGlobe className="link-icon" /> Communauté</a>
              <a href="#"><FaPhone className="link-icon" /> Support téléphonique</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Restez informé</h4>
            <p className="newsletter-text">
              Recevez les dernières actualités et offres spéciales PayPal directement dans votre boîte mail.
            </p>
            {!subscribed ? (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  S'abonner
                </button>
              </form>
            ) : (
              <div className="subscription-success">
                ✓ Merci pour votre inscription !
              </div>
            )}
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer-divider"></div>

        {/* Section basse */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="copyright">
              © {new Date().getFullYear()} PayPal. Tous droits réservés.
            </div>
            <div className="legal-links">
              <a href="#">Confidentialité</a>
              <a href="#">Conditions d'utilisation</a>
              <a href="#">Cookies</a>
              <a href="#">Mentions légales</a>
            </div>
          </div>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Retour en haut">
            <FaArrowUp />
          </button>
        </div>

        {/* Badges de sécurité */}
        <div className="security-badges">
          <div className="badge">
            <FaShieldAlt />
            <span>Paiements sécurisés</span>
          </div>
          <div className="badge">
            <FaCreditCard />
            <span>Toutes cartes acceptées</span>
          </div>
          <div className="badge">
            <FaGlobe />
            <span>200+ pays</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;