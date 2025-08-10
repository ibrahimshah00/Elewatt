


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side (Logo) */}
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Elewatt Logo" className="logo-img" />
        </div>
      </div>

      {/* Desktop Center */}
      <div className="navbar-center desktop-only">
        <a href="/" className="nav-link">Accueil</a>
        <a href="/" className="nav-link">À propos</a>
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

      {/* Desktop Right */}
      <div className="navbar-right desktop-only">
        <button className="quote-btn" onClick={() => navigate('/contact')}>
          DEVIS GRATUIT
        </button>
      </div>

      {/* Mobile Drawer Button */}
      <div className="mobile-only menu-icon" onClick={() => setDrawerOpen(true)}>
        <FaBars />
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <FaTimes className="close-icon" onClick={() => setDrawerOpen(false)} />
        </div>
        <a href="/" onClick={() => setDrawerOpen(false)}>Accueil</a>
        <a href="/" onClick={() => setDrawerOpen(false)}>À propos</a>
        <div className="drawer-dropdown">
          <span>Services</span>
          <Link to="/depannages" onClick={() => setDrawerOpen(false)}>Dépannages électrique</Link>
          <a href="/installation" onClick={() => setDrawerOpen(false)}>Installation électrique</a>
          <a href="/conformite" onClick={() => setDrawerOpen(false)}>Mise en conformité</a>
          <a href="/eclairage" onClick={() => setDrawerOpen(false)}>Installation d'éclairage</a>
        </div>
        <button className="quote-btn" onClick={() => { setDrawerOpen(false); navigate('/contact'); }}>
          DEVIS GRATUIT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
