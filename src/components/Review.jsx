import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ backgroundColor: '#F4F3FF', padding: '100px 0' }}>
      <div style={styles.container}>
        <div style={styles.title}>
          <h2>What Our Clients Say</h2>
        </div>

        <div style={styles.testimonial}>
          <p style={styles.quote}>
            ImmersiveLens has completely transformed our property marketing. Virtual tours have increased our engagement by 300% and helped us close deals much faster!
          </p>
          <div style={styles.author}>
            <img src="/api/placeholder/80/80" alt="Sarah Johnson" style={styles.avatar} />
            <h4>Sarah Johnson</h4>
            <p>Real Estate Agent, Luxe Properties</p>
          </div>
        </div>

        <div style={styles.stats}>
          {[
            ['150+', 'Happy Clients'],
            ['500+', 'Properties Digitized'],
            ['40%', 'Faster Sales'],
            ['95%', 'Client Satisfaction']
          ].map(([number, label], i) => (
            <div key={i} style={styles.stat}>
              <div style={styles.statNumber}>{number}</div>
              <div style={styles.statText}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: { maxWidth: 1000, margin: '0 auto', padding: '0 20px', textAlign: 'center' },
  title: { marginBottom: 60 },
  testimonial: {
    maxWidth: 800,
    margin: '0 auto 40px',
    fontSize: 18,
    // fontStyle: 'italic',
    color: '#333',
    position: 'relative',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  quote: {
    position: 'relative',
    padding: '0 50px'
  },
  author: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: 15
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 40,
    marginTop: 40
  },
  stat: { textAlign: 'center' },
  statNumber: {
    fontSize: 36,
    fontWeight: 700,
    color: '#AB9973'
  },
  statText: {
    fontSize: 14,
    color: '#666'
  }
};

export default Testimonials;
