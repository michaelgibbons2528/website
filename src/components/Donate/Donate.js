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
        </div>
      </div>
    </div>
  );
} 