import React from 'react';
import '../../styles/OurMission.css';
import '../../styles/4_As.css';

export default function OurMission() {
  return (
    <div className="mission-container">
      {/* Hero Section */}
      <div className="mission-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Our Mission</h1>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-statement">
        <div className="container">
          <div className="statement-content">
            <h2>Making Dreams Accessible</h2>
            <p>
            Accessible 4 All is a 501(c)(3) non-profit organization and student-led organization dedicated to creating innovative engineering 
            solutions that support children with disabilities. We believe every child deserves the opportunity to play, learn, and grow in an 
            inclusive environment—at no cost to their families. Providing our services completely free is a core part of our mission, ensuring 
            that accessibility is never limited by financial barriers. Through our projects, we bridge the gap between engineering education and 
            real-world impact, making a lasting difference in the lives of families and communities.
            </p>
          </div>
          <div className="statement-image">
            <img src="/images/1-1_Zoras_Car.JPG" alt="Custom ride-on car for child with disabilities" />
          </div>
        </div>
      </div>

      {/* 4 A's Section */}
      <section className="panel-section">
        <div className="panel-1">
          <div className="panel-content">
            <h3>Accessible</h3>
            <img src="/images/1-1_Wilhelm_and_Family.JPG" alt="Project-Ciaran" />
            <p>We provide children with non-discriminatory access to toys and devices they were 
              previously unable to use!</p>
          </div>
          <a href="/projects" className="learn-more red">LEARN MORE: PROJECTS</a>
        </div>
        <div className="panel-2">
          <div className="panel-content">
            <h3>Accommodating</h3>
            <img src="/images/1-1_Giuseppe_meets_Fiona_Family.JPG" alt="Fiona and Family" />
            <p>We work alongside loving families, creating and delivering toys and devices 
              that are customized specifically for their own kid!</p>
          </div>
          <a href="/parents-families" className="learn-more pink">LEARN MORE: PARENTS & FAMILIES</a>
        </div>
        <div className="panel-3">
          <div className="panel-content">
            <h3>Adaptive</h3>
            <img src="/images/1-1_Ciaran_Car_and_Group.JPG" alt="Ciaran Car and Group" />
            <p>We create custom adaptive toys and devices that make play accessible to every child, 
              encouraging creativity and hands-on learning not often found in classrooms!</p>
          </div>
          <a href="/students" className="learn-more blue">LEARN MORE: STUDENTS</a>
        </div>
        <div className="panel-4">
          <div className="panel-content">
            <h3>Adventurous</h3>
            <img src="/images/1-1_Robert_and_Group.JPG" alt="Robert and Group" />
            <p>We inspire children to explore their world with confidence, fostering 
              independence, exploration, and limitless possibility!</p>
          </div>
          <a href="/locations" className="learn-more purple">LEARN MORE: LOCATIONS</a>
        </div>
      </section>

    </div>
  );
} 