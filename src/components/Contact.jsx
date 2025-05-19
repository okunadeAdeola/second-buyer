import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#F9F7F3', padding: '100px 0' }}>
      <div style={styles.container}>
        <div style={styles.contactBox}>
          <div style={styles.info}>
            <h3>Contact Us</h3>
            <p>Have questions or want to request a quote? We’re here to help you bring your property vision to life.</p>
            <p><strong>Email:</strong> support@immersivelens.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
          <form style={styles.form}>
            <h3>Send a Message</h3>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <textarea placeholder="Your Message" style={{ ...styles.input, minHeight: 120 }}></textarea>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: { maxWidth: 1000, margin: '0 auto', padding: '0 20px' },
  contactBox: {
    display: 'flex',
    // flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  },
  info: {
    width: '40%',
    backgroundColor: '#121440',
    color: '#fff',
    padding: 40
  },
  form: {
    width: '60%',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  input: {
    padding: 15,
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #eee'
  },
  button: {
    backgroundColor: '#AB9973',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: 30,
    fontWeight: 600,
    cursor: 'pointer'
  }
};

export default Contact;
