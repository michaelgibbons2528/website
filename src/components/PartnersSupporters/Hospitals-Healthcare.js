import React from 'react';
import '../../styles/Hospitals.css';

export default function Hospitals() {
  const hospitals = [
    {
      name: "RWJ Children's Specialized Hospital",
      type: "Healthcare Partner",
      description: "Partnering with RWJ Children's Specialized Hospital to provide adaptive technology solutions and support for children with disabilities. We work closely with healthcare professionals to identify children who could benefit from our custom adaptive devices and provide ongoing support.",
      website: "https://www.rwjbh.org/childrens-specialized-hospital/",
      logo: "/images/1-1_Childrens_Specialized.png",
      location: "New Brunswick, NJ",
      services: ["Patient referrals", "Healthcare professional collaboration", "Adaptive technology solutions", "Family support services", "Clinical assessments", "Ongoing care coordination"]
    }
  ];

  const benefits = [
    {
      title: "For Healthcare Providers",
      items: [
        "Enhanced patient care options",
        "Access to custom adaptive devices",
        "Collaborative care coordination",
        "Professional development opportunities",
        "Research partnerships"
      ]
    },
    {
      title: "For Patients & Families",
      items: [
        "Access to custom adaptive devices",
        "Comprehensive care coordination",
        "Family support services",
        "Educational resources",
        "Ongoing assistance"
      ]
    },
    {
      title: "For Our Organization",
      items: [
        "Clinical expertise and guidance",
        "Patient referrals and connections",
        "Professional validation",
        "Research opportunities",
        "Community impact expansion"
      ]
    }
  ];

  return (
    <div className="hospitals-container">
      {/* Hero Section */}
      <div className="hospitals-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Work_on_Project.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Hospitals & Healthcare Providers</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="hospitals-intro">
        <div className="container">
          <h2>Advancing Healthcare Through Innovation</h2>
          <p>
            We collaborate with healthcare institutions to provide adaptive technology solutions 
            and support for children with disabilities and their families. Our partnerships 
            bridge the gap between medical care and assistive technology.
          </p>
        </div>
      </div>

      {/* Hospitals Section */}
      <div className="hospitals-section">
        <div className="container">
          <h2>Our Healthcare Partners</h2>
          <div className="hospitals-grid">
            {hospitals.map((hospital, index) => (
              <div key={index} className="hospital-card">
                <div className="hospital-logo">
                  <img src={hospital.logo} alt={`${hospital.name} logo`} />
                </div>
                <div className="hospital-info">
                  <h3>
                    {hospital.website ? (
                      <a 
                        href={hospital.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {hospital.name}
                      </a>
                    ) : (
                      hospital.name
                    )}
                  </h3>
                  <span className="hospital-type">{hospital.type}</span>
                  <p className="hospital-location">{hospital.location}</p>
                  <p>{hospital.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2>Benefits of Healthcare Partnerships</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <ul>
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities Section */}
      <div className="partnership-section">
        <div className="container">
          <h2>Interested in Partnering With Us?</h2>
          <p>
            We're always looking to expand our network of healthcare partners. 
            Whether you're a hospital, clinic, or healthcare organization, 
            we'd love to discuss how we can work together to improve the lives 
            of children with disabilities.
          </p>
          
          <div className="partnership-options">
            <div className="partnership-option">
              <h3>For Hospitals</h3>
              <ul>
                <li>Provide adaptive technology solutions</li>
                <li>Support patient care coordination</li>
                <li>Offer staff training and education</li>
                <li>Collaborate on research initiatives</li>
                <li>Enhance patient outcomes</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Clinics</h3>
              <ul>
                <li>Access to custom adaptive devices</li>
                <li>Patient referral network</li>
                <li>Professional development opportunities</li>
                <li>Resource sharing and collaboration</li>
                <li>Community outreach support</li>
              </ul>
            </div>
            
            <div className="partnership-option">
              <h3>For Healthcare Organizations</h3>
              <ul>
                <li>Strategic partnerships</li>
                <li>Research collaborations</li>
                <li>Professional training programs</li>
                <li>Community health initiatives</li>
                <li>Innovation and technology integration</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-section">
            <h3>Contact Us to Get Started</h3>
            <p>
              Ready to bring our adaptive technology solutions to your healthcare institution? 
              Contact us to discuss partnership opportunities and how we can customize 
              our services to meet your patients' needs.
            </p>
            <a href="mailto:info@a4all.org?subject=Healthcare Partnership Inquiry" className="contact-button">
              Contact Us About Healthcare Partnerships
            </a>
            <p className="contact-note">
              We'll respond within 2-3 business days to discuss how we can work together.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="impact-section">
        <div className="container">
          <h2>Healthcare Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>100+</h3>
              <p>Patients Served</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Healthcare Partners</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Custom Devices Created</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Healthcare Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
