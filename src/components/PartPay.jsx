import React, { useState } from "react";

const PaystackPaymentForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("7,999"); // $3,999

  const goToPayment = () => {
    if (!email || !amount) {
      alert("Please enter a valid email.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_APP_PAYSTACK_KEY,
      email: email,
      amount: parseFloat(amount) * 100, // amount in kobo
      currency: 'NGN',
      callback: function (response) {
        alert('Payment complete! Reference: ' + response.reference);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });

    handler.openIframe();
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Pay with Paystack</h1>
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
            value={amount}
            readOnly
            style={{ ...styles.input, paddingLeft: "30px" }}
          />
        </div>

        <button onClick={goToPayment} style={styles.button}>
          Subscribe Now
        </button>
      </div>

      {/* Custom focus styles for inputs */}
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
    borderOutline: 'none', // This line has no effect but left untouched as requested
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
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxSizing: "border-box",
  },
};

export default PaystackPaymentForm;
