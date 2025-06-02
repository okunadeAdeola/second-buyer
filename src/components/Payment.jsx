import React, { useState } from "react";

const StripePaymentForm = () => {
  const [email, setEmail] = useState("");
  const stripeLink = "https://buy.stripe.com/test_5kQ9AV9bBeEK3g7cgXb7y00"; // Replace with buyer's actual link

  const goToPayment = () => {
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // You can store the email locally or send to backend if needed
    window.location.href = stripeLink;
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Pay with Stripe</h1>
      <div id="paymentForm" style={styles.paymentForm}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email-address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />

        <label htmlFor="amount">Amount</label>
        <div style={styles.amountWrapper}>
          <span style={styles.dollar}>$</span>
          <input
            type="text"
            id="amount"
            value="3999"
            readOnly
            style={{ ...styles.input, paddingLeft: "30px" }}
          />
        </div>

        <button onClick={goToPayment} style={styles.button}>
          Subscribe Now
        </button>
      </div>

      <style>
        {`
          #email-address:focus,
          #amount:focus {
            outline: none;
            border-color: #888;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  h1: {
    textAlign: "center",
    color: "#333",
    marginTop: "50px",
  },
  paymentForm: {
    width: "400px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  amountWrapper: {
    position: "relative",
    marginBottom: "20px",
  },
  dollar: {
    position: "absolute",
    top: "30%",
    left: "15px",
    transform: "translateY(-50%)",
    fontSize: "16px",
    color: "#555",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6772e5",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxSizing: "border-box",
  },
};

export default StripePaymentForm;
