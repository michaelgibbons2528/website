import React from 'react';
import '../../styles/MontessoriBoard.css';

export default function MontessoriBoard() {
  return (
    <div className="montessori-container">
      {/* Hero Section */}
      <div 
        className="montessori-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Montessori_Board_Present.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Classroom Montessori Board</h1>
        </div>
      </div>

      {/* Introduction Section - full-width grey background */}
      <section className="intro-section">
        <div className="container">
          <h2>A Wall Full of Fun!</h2>
          <p>
            Working with Hiawatha Elementary School, we have built a Large Montesorri Board for children to play with. With six detachable boards, children can pick and choose which boards to play with, or keep them all together for everyone to enjoy!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="montessori-main">
        {/* Board Photos Gallery */}
        <section className="montessori-gallery-section">
          <div className="container">
            <h2>Project Photos</h2>
            <div className="montessori-gallery">
              <div className="montessori-gallery-item">
                <img src="/images/4-3_Montessori_Board_Present.JPG" alt="Montessori board presentation" />
                <span className="montessori-gallery-caption">Montessori Board Backing</span>
              </div>
              <div className="montessori-gallery-item">
                <img src="/images/3-4_Board_1_Present.JPG" alt="Board 1 presentation" />
                <span className="montessori-gallery-caption">Sensory Integration Board</span>
              </div>
              <div className="montessori-gallery-item">
                <img src="/images/3-4_Board_2_Present.JPG" alt="Board 2 presentation" />
                <span className="montessori-gallery-caption">Motor Control Board</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 