import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} ImmersiveLens. All rights reserved.</p>
        <p style={{ fontSize: 14 }}>Built for immersive real estate experiences.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#121440',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
   fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  container: {
    maxWidth: 1000,
    margin: '0 auto'
  }
};

export default Footer;
