import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className='till'>Contact & Consultation</h2>
      <div className="container">

        {/* CONTACT & MESSAGE FORM */}
        <div className="card-panel">
          <div className="left-panel dark-panel">
            <h3>Get In Touch</h3>
            <ul className="contact-list">
              <li><i className="fa-solid fa-location-dot"></i>123 Innovation Drive, Tech Park, CA 94103</li>
              <li><i className="fa-solid fa-phone"></i>(555) 123-4567</li>
              <li><i className="fa-solid fa-envelope"></i>info@immersivelens.com</li>
              <li><i className="fa-solid fa-clock"></i>Mon-Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="right-panel">
            <h3>Send Us a Message</h3>
            <form action="https://formsubmit.co/main@immersivelens.io" method="POST">
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <select name="service" required>
                <option value="" disabled selected>Select Service</option>
                <option>Virtual Tours</option>
                <option>3D Modeling</option>
                <option>Virtual Staging</option>
              </select>
              <textarea name="message" placeholder="Your Message" required></textarea>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://okunade.vercel.app/thank-you" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* CONSULTATION SECTION */}
        <div className="card-panel">
          <div className="left-panel light-panel">
            <h3>Schedule a Professional Consultation</h3>
            <p>Our expert team offers personalized consultations to assess your property's unique needs and potential for immersive experiences.</p>
            <div className="features-box">
              <h4>Consultation Includes:</h4>
              <ul className="feature-list">
                <li>✔ Detailed property assessment</li>
                <li>✔ Technology recommendations</li>
                <li>✔ Custom solutions strategy</li>
                <li>✔ ROI analysis & implementation timeline</li>
              </ul>
            </div>
            <div className="price-box">
              <h2>$299 <span>/ hour</span></h2>
              <p>Most consultations require 1–2 hours</p>
            </div>
          </div>

          <div className="right-panel">
            <h3>Book Your Consultation</h3>
            <form action="https://formsubmit.co/main@immersivelens.io" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="phone" placeholder="Phone Number" required />
              <input type="text" name="propertyType" placeholder="Property Type" required />
              <input type="date" name="preferredDate" placeholder="Preferred Date (MM/DD/YYYY)" required />
              <select name="preferredTime" required>
                <option value="" disabled selected>Preferred Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <textarea name="message" placeholder="Tell us about your property and specific needs" required></textarea>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://okunade.vercel.app/thank-you" />
              <button type="submit">Schedule Consultation</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
