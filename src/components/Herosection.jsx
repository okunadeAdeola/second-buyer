import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.text}>
            <h1 style={styles.heading}>Transform Properties into Immersive Experiences</h1>
            <p style={styles.description}>
              We create cutting-edge virtual reality and 3D experiences that help real estate professionals showcase properties like never before.
            </p>
            <div>
              <a href="#services" style={{ ...styles.button, ...styles.primary }} className='dontCall'>Our Services</a>
              <a href="#contact" style={{ ...styles.button, ...styles.secondary }}>Contact Us</a>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="https://via.placeholder.com/600x500"
              alt="Virtual Reality Property Tour"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
   fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
  },
  text: {
    width: '50%',
    paddingRight: 30,
  },
  heading: {
    fontSize: 60,
    color: '#121440',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    borderRadius: 30,
    fontWeight: 600,
    fontSize: 16,
    textDecoration: 'none',
    marginRight: 20,
  },
  primary: {
    backgroundColor: '#AB9973',
    color: '#fff',
  },
 
  secondary: {
    backgroundColor: 'transparent',
    color: '#AB9973',
    border: '2px solid #AB9973',
  },
  imageContainer: {
    width: '50%',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  }
//   .primary[':hover'] = {
//   ...styles.primary,
//   button: { transform: 'scale(1.1)' },
// }
};


export default Hero;
