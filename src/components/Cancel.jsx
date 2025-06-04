import React from 'react';
import { Link } from 'react-router-dom';
const Cancel = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❌ Payment Cancelled</h1>
      <p style={styles.message}>You have cancelled the transaction. If this was a mistake, you can try again.</p>
      <Link to='/payment'><button style={{backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px'}}>Go Back</button></Link>
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
    color: '#dc3545',
  },
  message: {
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default Cancel;
