import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVrCardboard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Menu Icon grouped on left */}
        <div className="logo-and-toggle">
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <a href="#" className="navbar-logo">
            <FontAwesomeIcon icon={faVrCardboard} style={{ marginRight: 8 }} />
            Immersive<span className="highlight">Lens</span>
          </a>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {['Home', 'Services', 'How It Works', 'Pricing', 'Portfolio', 'Contact'].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase().replace(/\s/g, '-')}`} onClick={() => setMenuOpen(false)}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
