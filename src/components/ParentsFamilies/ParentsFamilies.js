import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/ParentsFamilies.css';

export default function ParentsFamilies() {
  return (
    <div className="parents-families-page">
      {/* Hero Section */}
      <div 
        className="hero-section"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Ciaran_Family.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Parents & Families</h1>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-title">
              <h2>You've Found Your Community</h2>
            </div>
            <div className="welcome-main">
              <div className="welcome-top">
                <div className="welcome-text">
                  <p>
                    At Accessible 4 All, we understand that every child is unique, and every family's journey is different. 
                    We're here to create custom solutions that make your child's world more accessible, engaging, and full of possibilities.
                  </p>
                  <p>
                    Whether your child needs a custom ride-on car to experience the joy of independent movement, 
                    adaptive learning tools to explore and grow, or specialized equipment to make daily activities easier, 
                    we're here to turn possibilities into reality. Our student engineers work with love, creativity, and 
                    dedication to ensure every child can thrive in their own unique way.
                  </p>
                </div>
                <div className="welcome-image-container">
                  <img 
                    src="/images/1-1_Maya_Hugging_Fiona_Mom.JPG" 
                    alt="Maya hugging" 
                    className="welcome-image"
                  />
                </div>
              </div>
              <div className="welcome-features">
                <div className="feature">
                  <div className="feature-icon">Personalized</div>
                  <p>We work directly with your family to understand your child's specific needs and preferences.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">Completely Free</div>
                  <p>All our services and equipment are provided at no cost to families and institutions.</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">Custom Solutions</div>
                  <p>From ride-on cars to learning tools, we design equipment that fits your child perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Involved Section */}
      <div className="what-we-do-section">
        <div className="container">
          <div className="what-we-do-content">
            <h2>How to Get Involved</h2>
            <p className="section-description">
              Ready to get started? Our enrollment process is simple and designed to understand your child's unique needs.
            </p>
            
            <div className="cta-container">
              <div className="cta-content">
                <h3>Enroll Your Child Today</h3>
                <p>Complete our comprehensive enrollment form to tell us about your child's specific needs and what type of product would help your child thrive.</p>
                <NavLink to="/enroll-your-child" className="cta-button">
                  Start Enrollment Process
                </NavLink>
              </div>
              <div className="cta-image">
                <img 
                  src="/images/4-3_B_4_Express.JPG" 
                  alt="Child and family" 
                  className="cta-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Journey With Us Section */}
      <div className="journey-section">
        <div className="container">
          <div className="journey-content">
            <h2>Your Journey With Us</h2>
            <p className="journey-description">
            To respect your family’s time, we’ve streamlined our process to keep things easy and efficient, so we can focus on designing the best product for your child while keeping you informed every step of the way. 
            </p>
            <div className="process-steps">
                             <div className="step">
                 <div className="step-number">1</div>
                 <h4>Contact Us</h4>
                 <p>Fill out our <NavLink to="/enroll-your-child">enrollment form</NavLink> to tell us about your child's needs.</p>
               </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h4>Consultation</h4>
                <p>We'll virtually meet with you and your child to understand your child's specific needs and discuss potential solutions.</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h4>Design & Build</h4>
                <p>Throughout the semester, our student engineers will design and create custom equipment specifically for your child.</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h4>Showcase</h4>
                <p>At the end of the semester, we’ll host a Showcase to celebrate our students’ work and present your child’s product. You can pick it up there or have it delivered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 