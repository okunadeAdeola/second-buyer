import React, { useState, useEffect } from 'react';

const steps = [
  {
    number: '1',
    title: ['Capture', 'Your Property'],
    description: 'Our team uses advanced cameras and 3D scanners to capture every detail of your property.'
  },
  {
    number: '2',
    title: ['Transform', '& Enhance'],
    description: 'We process the data to create immersive virtual experiences, adding enhancements and staging as needed.'
  },
  {
    number: '3',
    title: ['Share', '& Sell'],
    description: 'Share your virtual property experience with potential buyers worldwide and close deals faster.'
  }
];

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 20px',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  };

  const stepsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: '20px',
    paddingBottom: '10px',
  };

  const stepStyle = {
    flex: isMobile ? '0 0 100%' : '0 0 30%',
    minWidth: 280,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: isMobile ? '20px 15px' : '30px 20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  const stepNumberStyle = {
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: '#AB9973',
    color: '#fff',
    fontSize: 24,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  };

  const stepTitleStyle = {
    fontSize: isMobile ? 18 : 20,
    marginBottom: 15,
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: isMobile ? 14 : 16,
  };

  return (
    <section id="how-it-works" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2>How It Works</h2>
        </div>
        <div style={stepsStyle}>
          {steps.map((step, index) => (
            <div key={index} style={stepStyle}>
              <div style={stepNumberStyle}>{step.number}</div>
              <h3 style={stepTitleStyle}>
                <span>{step.title[0]}</span><br />
                <span>{step.title[1]}</span>
              </h3>
              <p style={descriptionStyle}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
