import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="ImmersiveLens Logo" width={50} height={50} className="logo-icon" />
          <span className="logo-text">ImmersiveLens</span>
        </a>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-item" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="navbar-item" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#enterprise" className="navbar-item" onClick={() => setIsOpen(false)}>Enterprise</a>
          <a href="#how-it-works" className="navbar-item" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
