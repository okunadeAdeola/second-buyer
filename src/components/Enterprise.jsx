import React from 'react';
import {
  faBuilding,
  faUsers,
  faCodeBranch,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EnterprisePricing.css';

const features = [
  {
    icon: faBuilding,
    title: 'Multiple Property Management',
    description: 'Manage and visualize up to 50 properties in a single dashboard'
  },
  {
    icon: faUsers,
    title: 'Team Collaboration',
    description: 'Unlimited user accounts with role-based permissions'
  },
  {
    icon: faCodeBranch,
    title: 'API Integration',
    description: 'Seamlessly connect with your existing property management systems'
  },
  {
    icon: faChartLine,
    title: 'Advanced Analytics',
    description: 'Detailed insights on user engagement and conversion metrics'
  }
];

const EnterprisePricing = () => {
  return (
    <section id="enterprise" className="enterprise-section">
      <div className="enterprise-container">
        <div className="enterprise-header">
          <h2>Enterprise Solutions</h2>
          <p>
            Designed for large real estate agencies, property developers, and management companies.
          </p>
        </div>

        <div className="enterprise-content">
          <div className="enterprise-left">
            <h3>Why Choose Enterprise</h3>
            <p>
              Our enterprise solutions are tailored for companies managing multiple properties and
              needing full control and insight over their visual assets.
            </p>

            {features.map((feature, idx) => (
              <div key={idx} className="enterprise-feature">
                <div className="enterprise-icon">
                  <FontAwesomeIcon icon={feature.icon} className="icon" />
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="enterprise-right">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Enterprise Solution"
              className="enterprise-image"
            />
            <div className="enterprise-price-box">
              <h3>Starting at $35,000/month</h3>
              <p>Customized based on your specific requirements</p>
            </div>
            <div className="enterprise-button-wrapper">
              <a href="#contact" className="enterprise-button">Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePricing;