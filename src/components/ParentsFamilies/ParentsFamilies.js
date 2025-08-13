import React from 'react';
import '../../styles/ParentsFamilies.css';

const ParentsFamilies = () => {
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
          <p>We're here to help your child thrive</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          <div className="content-section">
            <h2>How We Can Help</h2>
            <p>
              Accessible 4 All creates custom solutions for children with disabilities. 
              We work directly with families to understand each child's unique needs and 
              design personalized equipment that promotes independence, learning, and fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsFamilies; 