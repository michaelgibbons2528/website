import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/PartnersSupporters.css';

export default function PartnersSupporters() {

  const partnershipTypes = [
    {
      title: "Funding Partners",
      description: "Organizations that provide financial support for our programs and projects.",
      benefits: ["Tax-deductible donations", "Impact reporting", "Recognition opportunities", "Project sponsorship"]
    },
    {
      title: "Technical Partners",
      description: "Companies and organizations that provide technical expertise and resources.",
      benefits: ["Equipment donations", "Expert consultation", "Facility access", "Training support"]
    },
    {
      title: "Community Partners",
      description: "Local organizations that help us reach families and provide community support.",
      benefits: ["Family referrals", "Volunteer recruitment", "Event hosting", "Awareness campaigns"]
    }
  ];

  return (
    <div className="partners-supporters-container">
      {/* Hero Section */}
      <div className="partners-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Wheelchair_Basketball.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Partners & Supporters</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="partners-intro">
        <div className="container">
          <h2>Our Network of Support</h2>
          <p>
            Our success depends on the collaboration and support of various organizations, 
            institutions, and individuals who believe in our mission. Together, we create 
            lasting impact in the lives of children and families through innovative partnerships.
          </p>
          <div className="partnership-links">
            <NavLink to="/schools-educational-programs" className="partnership-link">
              Schools & Educational Programs
            </NavLink>
            <NavLink to="/hospitals-healthcare-providers" className="partnership-link">
              Hospitals & Healthcare Providers
            </NavLink>
          </div>
        </div>
      </div>



      {/* Partnership Types Section */}
      <div className="partnership-types-section">
        <div className="container">
          <h2>Types of Partnerships</h2>
          <div className="partnership-types-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-type-card">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="benefits-list">
                  <h4>Benefits:</h4>
                  <ul>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
} 