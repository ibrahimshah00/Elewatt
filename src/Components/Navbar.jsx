import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// ...
<Link to="/depannages">Dépannages électrique</Link>

import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
   const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
       <div className="logo">
          <img src={logo} alt="Elewatt Logo" className="logo-img" />
          
          </div>

        <div className="phone">
          <a href="tel:+32472611952">0472 61 19 52</a>
        </div>
      </div>

      <div className="navbar-center">
        <a href="/" className="nav-link">Accueil</a>
        <a href="/" className="nav-link">Àpropos</a>

        <div className="dropdown">
          <span className="nav-link">Services ▾</span>
          <div className="dropdown-content">
             <Link to="/depannages">Dépannages électrique</Link>
            <a href="/installation">Installation électrique</a>
            <a href="/conformite">Mise en conformité</a>
            <a href="/eclairage">Installation d'éclairage</a>
          </div>
        </div>
      </div>

      <div className="navbar-right">
         <button className="quote-btn" onClick={() => navigate('/contact')}>
        DEVIS GRATUIT
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
