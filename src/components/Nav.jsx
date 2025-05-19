import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div style={styles.container}>
        <a href="#" style={styles.logo}>
          <FontAwesomeIcon icon={faVrCardboard} style={{ marginRight: 8 }} />
          Immersive<span style={{ color: '#AB9973' }}>Lens</span>
        </a>
        <ul style={styles.navLinks}>
          {['Home', 'Services', 'How It Works', 'Pricing', 'Portfolio', 'Contact'].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase().replace(/\s/g, '-')}`} style={styles.navLink}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.05)',
    padding: '20px 0',
    zIndex: 1000,
   fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#121440',
    display: 'flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: 30,
  },
  navLink: {
    color: '#121440',
    fontWeight: 500,
    fontSize: 16,
    textDecoration: 'none',
  }
};

export default Navbar;
