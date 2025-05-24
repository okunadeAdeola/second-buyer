import React from 'react';
import portfolioImage from '../assets/images/image2.jpg'
const portfolioItems = [
  {
    title: 'Luxury Penthouse',
    description: '360° Virtual Tour with custom staging for a high-end penthouse in downtown.',
    // image: {portfolioImage}
  },
  {
    title: 'Modern Villa',
    description: 'Complete 3D modeling and virtual reality experience for a beachfront villa.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Commercial Office',
    description: 'Virtual staging and 360° tour for a commercial office space.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Historic Mansion',
    description: 'Detailed 3D reconstruction of a historic property with before and after views.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Urban Loft',
    description: 'Virtual staging and 360° tour for a modern urban loft space.',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Countryside Retreat',
    description: 'Immersive virtual tour showcasing interior and exterior features.',
    image: '/api/placeholder/400/300'
  }
];

const Portfolio = () => (
  <section id="portfolio" style={{ backgroundColor: '#2A2D7C', color: '#fff', padding: '100px 0', border: '1px solid #fff' }}>
    <div style={styles.container}>
      <div style={styles.title}>
        <h2>Our Portfolio</h2>
      </div>
      <div style={styles.grid}>
        {portfolioItems.map((item, i) => (
          <div key={i} style={styles.item}>
            <img src={portfolioImage} alt={item.title} style={styles.image}  className='portfolioImage'/>
            <div style={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <a href="#" style={styles.button}>View All Projects</a>
      </div>
    </div>
  </section>
);

const styles = {
  container: { maxWidth: 1200, margin: '0 auto', padding: '0 20px' },
  title: { textAlign: 'center', marginBottom: 60 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    height: 300,
    border: '1px solid #ddd'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(77, 62, 252, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    padding: '0 20px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#AB9973',
    color: '#fff',
    padding: '15px 40px',
    borderRadius: 30,
    textDecoration: 'none',
    fontWeight: 600
  }
};

// Add hover effect
styles.item[':hover'] = {
  ...styles.item,
  img: { transform: 'scale(1.1)' },
  overlay: { opacity: 1 }
};

export default Portfolio;
