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
          <div style={{position:"relative",overflow:"hidden",height:"600px",width:"100%"}}>
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
    </div>
  );
} 