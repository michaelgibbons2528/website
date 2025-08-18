import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/GetInvolved.css';

export default function GetInvolved() {
  return (
    <div className="get-involved-container">
      {/* Hero Section */}
      <div className="get-involved-hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Get Involved</h1>
          <p>Join us in making a difference in children's lives</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="get-involved-intro">
        <div className="container">
          <h2>Ways to Get Involved</h2>
          <p>
            There are many ways you can support our mission and help make technology accessible 
            for children with disabilities. Whether you're a student, professional, or community member, 
            your involvement can make a real difference.
          </p>
        </div>
      </div>

      {/* Involvement Options */}
      <div className="involvement-options">
        <div className="container">
          <div className="options-grid">
            <div className="option-card">
              <h3>For Students</h3>
              <p>
                Join our student engineering teams and work on real-world projects that make a difference. 
                Gain hands-on experience while helping children with disabilities.
              </p>
              <NavLink to="/students" className="option-link">Learn More</NavLink>
            </div>

            <div className="option-card">
              <h3>For Families</h3>
              <p>
                If you have a child with disabilities who could benefit from our services, 
                we'd love to work with you to create custom solutions.
              </p>
              <NavLink to="/parents-families" className="option-link">Learn More</NavLink>
            </div>

            <div className="option-card">
              <h3>For Partners</h3>
              <p>
                Partner with us to expand our reach and impact. We work with schools, 
                hospitals, and organizations to serve more families.
              </p>
              <NavLink to="/partners-supporters" className="option-link">Learn More</NavLink>
            </div>

            <div className="option-card">
              <h3>Donate</h3>
              <p>
                Support our mission through financial contributions. Your donations help us 
                purchase materials, tools, and equipment for our projects.
              </p>
              <NavLink to="/donate" className="option-link">Donate Now</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us to learn more about how you can get involved and make a difference 
            in the lives of children with disabilities.
          </p>
          <div className="contact-buttons">
            <a href="mailto:info@a4all.org" className="contact-button primary">
              Contact Us
            </a>
            <a href="https://www.instagram.com/rutgersa4a/" target="_blank" rel="noopener noreferrer" className="contact-button secondary">
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
