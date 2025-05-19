import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVrCardboard,
  faCube,
  faPencilRuler,
  faMobileAlt,
  faChartLine,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faVrCardboard,
    title: 'Virtual Reality Tours',
    description: 'Immersive 360° tours that allow potential buyers to experience properties from anywhere in the world.'
  },
  {
    icon: faCube,
    title: '3D Modeling',
    description: 'Detailed 3D models of properties with accurate dimensions and realistic textures.'
  },
  {
    icon: faPencilRuler,
    title: 'Virtual Staging',
    description: 'Digitally furnish empty properties to help buyers visualize the potential of each space.'
  },
  {
    icon: faMobileAlt,
    title: 'Mobile Apps',
    description: 'Custom mobile applications for iOS and Android that showcase your property portfolio.'
  },
  {
    icon: faChartLine,
    title: 'Analytics',
    description: 'Comprehensive data on how users interact with your virtual properties.'
  },
  {
    icon: faCloudUploadAlt,
    title: 'Cloud Hosting',
    description: 'Secure and reliable cloud hosting for all your virtual property experiences.'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ backgroundColor: '#F9F7F3', padding: '100px 0' }}>
      <div style={styles.container}>
        <div style={styles.sectionTitle}>
          <h2>Our Services</h2>
        </div>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>
                <FontAwesomeIcon icon={service.icon} style={{ fontSize: 30 }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
   fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 60
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '40px 30px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: '0.3s ease'
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#AB9973',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px'
  }
};

export default Services;
