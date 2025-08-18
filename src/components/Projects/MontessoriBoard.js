import React from 'react';
import '../../styles/MontessoriBoard.css';

export default function MontessoriBoard() {
  return (
    <div className="montessori-container">
      {/* Hero Section */}
      <div 
        className="montessori-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Work_on_Project.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Giant Montessori Board</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="montessori-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>A Wall Full of Fun!</h2>
            <p>
              We are currently working on a Montessori Board for Hiawatha Elementary School. The board will span the back of the wall, and 
              each piece will be detachable, allowing children to bring them to their desks to play with. We are excited to continue working
              on this project through the Fall 2025 school year! 
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 