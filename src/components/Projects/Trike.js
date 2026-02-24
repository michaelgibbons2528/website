import React from 'react';
import '../../styles/Trike.css';

export default function Trike() {
  return (
    <div className="trike-container">
      {/* Hero Section */}
      <div
        className="trike-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Leads_Explaining_Trike.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="trike-hero-content">
          <h1 className="trike-hero-title">Trike Project</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="trike-main">
        {/* Introduction Section */}
        <section className="trike-intro-section">
          <div className="trike-container-inner">
            <h2>Adaptive Trike for Every Child</h2>
            <p>
              Our trike project brings adaptive, pedal-powered mobility to children of all abilities.
              We modify and customize trikes so that kids who need extra support can enjoy the freedom
              and fun of riding with adapted seating, steering, and controls tailored to each child.
            </p>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="trike-overview-section">
          <div className="trike-container-inner">
            <div className="trike-overview-content">
              <div className="trike-overview-text">
                <h2>Project Overview</h2>
                <p>
                  The adaptive trike has given Amarah and her family a completely
                  mechanical way to enjoy the outdoors. The fully weatherproof 
                  design allows Amarah to ride out in all the elements !
                </p>
                <div className="trike-overview-features">
                  <div className="trike-feature">
                    <h3>Safety:</h3>
                    <p>Keeping every child safe while riding is a top priority. By adding a five-point
                       harness, head support, and toe and hand straps, we can ensure that Amarah
                       is secured in the Trike while riding.  
                    </p>
                  </div>
                  <div className="trike-feature">
                    <h3>Adaptive controls:</h3>
                    <p>Amarah has the ability to control the trike through an adaptive steering system. 
                       With Amarah's limited hand strength, we added straps to keep her hands on the 
                       steering system, and when she pressed down on the bar, it would bring the trike to a stop. 

                    </p>
                  </div>
                </div>
              </div>
              <div className="trike-overview-image">
                <img src="/images/4-3_Amarah_Group.JPG" alt="Amarah testing the trike with Dad" />
              </div>
            </div>
          </div>
        </section>

        {/* Amarah Gallery Section */}
        <section className="trike-gallery-section">
          <div className="trike-container-inner">
            <h2>Meet Amarah</h2>
            <div className="trike-gallery">
              <div className="trike-gallery-item">
                <img src="/images/1-1_Amarah_Testing_with_Dad.JPG" alt="Amarah testing the trike with Dad" />
                
              </div>
              <div className="trike-gallery-item">
                <img src="/images/4-3_Amarah_Group.JPG" alt="Amarah and group with the trike" />
                
              </div>
              <div className="trike-gallery-item">
                <img src="/images/3-4_Amarah_Testing.JPG" alt="Amarah testing the trike" />
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
