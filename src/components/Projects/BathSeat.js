import React, { useState } from 'react';
import '../../styles/BathSeat.css';

export default function BathSeat() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bath-seat-container">
      {/* Hero Section */}
      <div 
        className="bath-seat-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Bath_Seat_Prototype.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Bath Seat Project</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bath-seat-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>A Safe and Comfortable Bath</h2>
            <p>
              Our bath seat project focuses on creating safe, comfortable, and accessible bathing solutions 
              for children of all abilities. Through iterative design and testing, we've developed a 
              comprehensive bath seat that provides both safety and independence.
            </p>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="overview-section">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Project Overview</h2>
                <p>
                  Understanding the needs of children with physical and developmental disabilities, we have 
                  created a bath seat that is safe, comfortable, and accessible. 
                </p>
                <div className="overview-features">
                  <div className="feature">
                    <h3>Safety:</h3>
                    <p>Non-slip base and five-point harness to prevent any accidents</p>
                  </div>
                  <div className="feature">
                    <h3>Comfort:</h3>
                    <p>Fully adjustable back, leg, and head support</p>
                  </div>
                  <div className="feature">
                    <h3>Maintenance:</h3>
                    <p>Durable PVC pipes for waterproof, long-lasting use</p>
                  </div>
                </div>
              </div>
              <div className="overview-image">
                <img src="/images/1-1_Bath_Seat.JPG" alt="Bath seat project overview" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Journey Timeline */}
        <section className="timeline-section">
          <div className="container">
            <h2>Project Journey</h2>
            <div className="timeline">
              <div className="timeline-dots">
                <div 
                  className={`timeline-dot ${activeStep === 1 ? 'active' : ''}`}
                  onClick={() => setActiveStep(1)}
                >
                  1
                </div>
                <div 
                  className={`timeline-dot ${activeStep === 2 ? 'active' : ''}`}
                  onClick={() => setActiveStep(2)}
                >
                  2
                </div>
                <div 
                  className={`timeline-dot ${activeStep === 3 ? 'active' : ''}`}
                  onClick={() => setActiveStep(3)}
                >
                  3
                </div>
                <div 
                  className={`timeline-dot ${activeStep === 4 ? 'active' : ''}`}
                  onClick={() => setActiveStep(4)}
                >
                  4
                </div>

              </div>
              
              <div className="timeline-content">
                {activeStep === 1 && (
                  <div className="timeline-card">
                    <div className="card-text">
                      <h3>Base and Support Components</h3>
                      <p>
                        The project began with two separate components: the base structure and the seat support. 
                        The base structure (landscape orientation) provides stability and foundation, while the 
                        seat support (horizontal orientation) offers comfort and positioning.
                      </p>
                    </div>
                    <div className="card-images">
                                             <div className="image-container">
                         <img src="/images/4-3_Bath_Seat_1.jpg" alt="Base structure" />
                         <span className="image-label">Base Structure</span>
                       </div>
                       <div className="image-container">
                         <img src="/images/3-4_Bath_Seat_2.jpg" alt="Seat support" />
                         <span className="image-label">Support Structure</span>
                       </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="timeline-card">
                    <div className="card-text">
                      <h3>First Prototype</h3>
                      <p>
                        Combining the base and support components, we created our first prototype. 
                        This initial version demonstrated the basic concept and helped us identify 
                        areas for improvement in safety and comfort.
                      </p>
                    </div>
                    <div className="card-image">
                      <img src="/images/3-4_Bath_Seat_3.jpg" alt="First prototype" />
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="timeline-card">
                    <div className="card-text">
                      <h3>Second Prototype with Adjustable PVC</h3>
                      <p>
                        The second prototype introduced adjustable PVC attachments, allowing for 
                        customization to different users' needs. This version improved flexibility 
                        and adaptability while maintaining safety standards.
                      </p>
                    </div>
                    <div className="card-image">
                      <img src="/images/3-4_Bath_Seat_4.jpg" alt="Second prototype" />
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="timeline-card">
                    <div className="card-text">
                      <h3>Final Product</h3>
                      <p>
                        The final product incorporates all lessons learned from previous iterations. 
                        It features a painted finish, comfortable headrest, and refined safety features. 
                        This version represents the culmination of our design process.
                      </p>
                    </div>
                    <div className="card-image">
                      <img src="/images/3-4_Bath_Seat_5.jpg" alt="Final product" />
                    </div>
                  </div>
                )}
                

              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}
