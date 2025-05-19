import React from 'react';
import './Contact.css'; // import your CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Have questions or want to request a quote? We’re here to help you bring your property vision to life.</p>
            <p><strong>Email:</strong> support@immersivelens.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
          <form className="contact-form">
            <h3>Send a Message</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
