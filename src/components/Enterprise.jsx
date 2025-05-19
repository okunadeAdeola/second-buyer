import React from 'react';
import {
  faBuilding,
  faUsers,
  faCodeBranch,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const features = [
  {
    icon: faBuilding,
    title: 'Multiple Property Management',
    description: 'Manage and visualize up to 50 properties in a single dashboard'
  },
  {
    icon: faUsers,
    title: 'Team Collaboration',
    description: 'Unlimited user accounts with role-based permissions'
  },
  {
    icon: faCodeBranch,
    title: 'API Integration',
    description: 'Seamlessly connect with your existing property management systems'
  },
  {
    icon: faChartLine,
    title: 'Advanced Analytics',
    description: 'Detailed insights on user engagement and conversion metrics'
  }
];

const EnterprisePricing = () => {
  return (
    <section id="enterprise" style={{ backgroundColor: '#F9F7F3', padding: '100px 0',fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: '36px', color: '#121440' }}>Enterprise Solutions</h2>
          <p style={{ color: '#666', maxWidth: 700, margin: '10px auto 0' }}>
            Designed for large real estate agencies, property developers, and management companies.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '10px',
            padding: '50px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            marginBottom: '30px',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px'
          }}
        >
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', color: '#121440' }}>
              Why Choose Enterprise
            </h3>
            <p style={{ marginBottom: '30px', color: '#666', maxWidth: '600px' }}>
              Our enterprise solutions are tailored for companies managing multiple properties and
              needing full control and insight over their visual assets.
            </p>
            <div style={{ marginBottom: '30px' }}>
              {features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', marginBottom: '25px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      backgroundColor: '#F9F7F3',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '20px'
                    }}
                  >
                    <FontAwesomeIcon
                      icon={feature.icon}
                      style={{ color: '#AB9973', fontSize: '24px' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '20px', marginBottom: '5px' }}>{feature.title}</h4>
                    <p style={{ marginBottom: 0, color: '#666' }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              maxWidth: '100%',
              minWidth: '300px',
              flex: 1,
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Enterprise Solution"
              style={{
                maxWidth: '100%',
                borderRadius: '10px',
                marginBottom: '30px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            />
            <div
              style={{
                backgroundColor: '#F9F7F3',
                padding: '30px',
                borderRadius: '10px',
                textAlign: 'center',
                marginBottom: '30px'
              }}
            >
              <h3 style={{ fontSize: '36px', marginBottom: '10px', color: '#AB9973' }}>
                Starting at $35,000/month
              </h3>
              <p style={{ marginBottom: 0 }}>Customized based on your specific requirements</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#AB9973',
                  color: 'white',
                  fontWeight: 600,
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  boxShadow: '0 5px 15px rgba(171, 153, 115, 0.3)'
                }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePricing;
