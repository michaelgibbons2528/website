import React from 'react';
import '../../styles/OurMission.css';

export default function OurMission() {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <div className="mission-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Mission</h1>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-statement">
        <div className="container">
          <div className="statement-content">
            <h2>Making Dreams Accessible</h2>
            <p>
            Accessible 4 All is a student-led organization dedicated to creating innovative engineering solutions 
            that empower children with disabilities. We believe every child deserves the opportunity to play, learn, 
            and grow in an inclusive environment. Through our projects, we bridge the gap between engineering education 
            and real-world impact, making a difference in the lives of families and communities.
            </p>
          </div>
          <div className="statement-image">
            <img src="/images/1-1_Zoras_Car.JPG" alt="Custom ride-on car for child with disabilities" />
          </div>
        </div>
      </div>








    </div>
  );
} 