import React from 'react';
import axios from 'axios';

const products = [
  { name: 'Basic Tour', price: 4900, quantity: 1 },
  { name: 'Premium Tour', price: 9900, quantity: 1 },
  { name: 'Pro Tour + Hosting', price: 14900, quantity: 1 },
];

const StripePayment = () => {
  const handlePayment = async (product) => {
    try {
      const res = await axios.post('https://buyer-backend-1.onrender.com/create-checkout-session', {
        items: [product],
      });
      window.location.href = res.data.url;
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to start payment. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Choose Your Tour Plan</h1>
      <div style={styles.products}>
        {products.map((product, idx) => (
          <div key={idx} style={styles.card}>
            <h3>{product.name}</h3>
            <p>${(product.price / 100).toFixed(2)}</p>
            <button onClick={() => handlePayment(product)} style={styles.button}>
              Pay Now
            </button>
          </div>
        ))}
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .products-wrapper {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',          // <-- allow wrapping on small screens
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '220px',         // <-- make width flexible
    boxSizing: 'border-box',
  },
  button: {
    marginTop: '15px',
    padding: '10px',
    width: '100%',
    fontSize: '16px',
    backgroundColor: '#6772e5',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default StripePayment;
