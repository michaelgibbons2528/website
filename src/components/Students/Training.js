import React from 'react';
import '../../styles/Training.css';

const Training = () => {
  return (
    <div className="training-container">
      {/* Hero Section */}
      <div 
        className="training-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Work_on_Project.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">General 1 Training</h1>
        </div>
      </div>

      {/* Coming Soon Section */}
      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <h2>Coming Soon...</h2>
            <p>Training modules are currently under development. Check back soon for comprehensive tool training resources!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training; 