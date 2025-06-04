import React from 'react';
import {Link} from 'react-router-dom';
const Success = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Payment Successful!</h1>
      <p style={styles.message}>Thank you for your purchase. You will receive a confirmation email shortly.</p>
      <Link to='/'><button style={{backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px'}}>Go Back</button></Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    color: '#28a745',
  },
  message: {
    fontSize: '18px',
    marginTop: '20px',
  },
  button: {
      
  }
};

export default Success;
