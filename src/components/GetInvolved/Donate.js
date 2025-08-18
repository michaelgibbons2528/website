import React from 'react';
import '../../styles/Donate.css';

export default function Donate() {
  return (
    <div className="donate-container">
      {/* Hero Section */}
      <div
        className="donate-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Zora_and_Dad.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Make a Difference Today</h1>
          <p className="hero-subtitle">Your donation helps us create adaptive devices and opportunities for children with disabilities</p>
        </div>
      </div>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="donation-form-container">
          <div style={{position:"relative",overflow:"hidden",height:"1200px",width:"100%"}}>
            <iframe 
              title='Donation form powered by Zeffy' 
              style={{position: "absolute", border: 0, top:0, left:0, bottom:0, right:0, width:"100%", height:"100%"}} 
              src='https://www.zeffy.com/embed/donation-form/donate-to-a4a' 
              allowpaymentrequest 
              allowTransparency="true"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🎯</div>
              <h3>Direct Impact</h3>
              <p>100% of your donation goes directly to helping children and families. We're a volunteer-run organization with minimal overhead.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">👥</div>
              <h3>Community Support</h3>
              <p>Your donation supports both the children we help and the students who gain valuable engineering experience.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🔧</div>
              <h3>Sustainable Solutions</h3>
              <p>We create lasting solutions that families can use for years, making your donation's impact long-lasting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help Section */}
      <section className="other-ways-section">
        <div className="container">
          <h2>Other Ways to Help</h2>
          <div className="ways-grid">
            <div className="way-card">
              <h3>Volunteer Your Time</h3>
              <p>Join our team of volunteers and help create adaptive devices for children in need.</p>
              <a href="/volunteer-opportunities" className="way-link">Learn More</a>
            </div>
            <div className="way-card">
              <h3>Spread the Word</h3>
              <p>Share our mission with friends, family, and on social media to help us reach more families.</p>
              <a href="https://www.instagram.com/rutgersa4a/" className="way-link">Follow Us</a>
            </div>
            <div className="way-card">
              <h3>Partner With Us</h3>
              <p>Schools, organizations, and businesses can partner with us to expand our impact.</p>
              <a href="/partners-supporters" className="way-link">Partner</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Questions About Donating?</h2>
            <p>We're here to help! Contact us with any questions about donations, our programs, or how your support makes a difference.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@a4all.org</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>@rutgersa4a</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 