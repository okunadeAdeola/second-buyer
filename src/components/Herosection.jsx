import React from 'react';
import './Hero.css'; // ⬅️ Link external CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Properties into Immersive Experiences</h1>
            <p>
              We create cutting-edge virtual reality and 3D experiences that help real estate professionals showcase properties like never before.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn primary dontCall">Our Services</a>
              <a href="#contact" className="btn secondary">Contact Us</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://via.placeholder.com/600x500"
              alt="Virtual Reality Property Tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
