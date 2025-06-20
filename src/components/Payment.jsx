// import React from 'react';
// import axios from 'axios';

// const products = [
//   { name: 'Basic Tour', price: 3000, quantity: 1 },
//   { name: 'Premium Tour', price: 3500, quantity: 1 },
//   { name: 'Pro Tour + Hosting', price: 4000, quantity: 1 },
// ];

// const StripePayment = () => {
//   const handlePayment = async (product) => {
//     try {
//       const res = await axios.post('https://buyer-backend-1.onrender.com/create-checkout-session', {
//         items: [product],
//       });
//       window.location.href = res.data.url;
//     } catch (error) {
//       console.error('Payment error:', error);
//       alert('Failed to start payment. Please try again.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Choose Your Tour Plan</h1>
//       <div style={styles.products}>
//         {products.map((product, idx) => (
//           <div key={idx} style={styles.card}>
//             <h3>{product.name}</h3>
//             <p>${(product.price).toFixed(2)}</p>
//             <button onClick={() => handlePayment(product)} style={styles.button}>
//               Pay Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Responsive styles */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .products-wrapper {
//               flex-direction: column;
//               align-items: center;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '40px 20px',
//     fontFamily: 'Arial, sans-serif',
//     textAlign: 'center',
//   },
//   products: {
//     display: 'flex',
//     flexWrap: 'wrap',          // <-- allow wrapping on small screens
//     justifyContent: 'center',
//     gap: '30px',
//     marginTop: '30px',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
//     width: '100%',
//     maxWidth: '220px',         // <-- make width flexible
//     boxSizing: 'border-box',
//   },
//   button: {
//     marginTop: '15px',
//     padding: '10px',
//     width: '100%',
//     fontSize: '16px',
//     backgroundColor: '#6772e5',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
// };

// export default StripePayment;
import React from 'react';

const products = [
  {
    name: 'Basic Tour',
    price: '$3,999',
    url: 'https://buy.stripe.com/test_example1' 
  },
  {
    name: 'Premium Tour',
    price: '$7,999',
    url: 'https://buy.stripe.com/test_example2'
  },
  {
    name: 'Enterprise',
    price: '$14,999',
    url: 'https://buy.stripe.com/test_example3'
  }
];

const Payment = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Your Plan</h2>
      <p style={styles.subtitle}>Select the package that fits your needs</p>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{product.name}</h3>
            <p style={styles.cardPrice}>{product.price}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <button style={styles.button}>Subscribe Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    textAlign: 'center',
    background: '#f9fafe'
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '40px'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    width: '280px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#333',
  },
  cardPrice: {
    fontSize: '20px',
    color: '#1a73e8',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#1a73e8',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default Payment;
