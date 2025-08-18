import React from 'react';
import '../../styles/GoodieBag.css';

export default function GoodieBag() {
  return (
    <div className="goodie-bag-container">
      {/* Hero Section */}
      <div
        className="goodie-bag-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Halloween_Gifts.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Goodie Bag Project</h1>
        </div>
      </div>

      <div className="goodie-bag-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Packed with Joy!</h2>
            <p>
              Our Goodie Bag Project is a great way to take a break from school and have fun! We assemble the goodie bags, 
              
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 