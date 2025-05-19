import React from 'react';

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
  return (
    <section id="how-it-works" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div style={styles.container}>
        <div style={styles.sectionTitle}>
          <h2>How It Works</h2>
        </div>
        <div style={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} style={styles.step}>
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>
                <span>{step.title[0]}</span>
                <span>{step.title[1]}</span>
              </h3>
              <p style={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '0 20px',
   fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 60
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',          // <-- changed here
    gap: '20px',
    // overflowX: 'auto',           // <-- allow horizontal scroll on small screens
    paddingBottom: '10px'
  },
  step: {
    flex: '0 0 30%',             // <-- fixed width, no shrinking
    minWidth: 280,               // <-- optional minimum width for better layout
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '30px 20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  stepNumber: {
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
    margin: '0 auto 20px'
  },
  stepTitle: {
    fontSize: 20,
    marginBottom: 15
  },
  description: {
    color: '#666'
  }
};

export default HowItWorks;
