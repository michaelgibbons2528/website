import React from 'react';
import '../../styles/HighChair.css';

export default function HighChair() {
  return (
    <div className="high-chair-container">
      {/* Hero Section */}
      <div
        className="high-chair-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Ahmad_Group.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="high-chair-hero-content">
          <h1 className="high-chair-hero-title">High Chair Project</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="high-chair-main">
        <section className="high-chair-intro-section">
          <div className="high-chair-container-inner">
            <h2>2-in-1 Adaptive High Chair</h2>
            <p>
              Our high chair project creates safe, supportive seating so children with physical and developmental
              needs can join family meals and activities. We work with families to customize high chairs with
              proper support, positioning, and safety features tailored to each child.
            </p>
          </div>
        </section>

        {/* Ahmad Gallery Section */}
        <section className="high-chair-gallery-section high-chair-meet-ahmad">
          <div className="high-chair-container-inner">
            <h2>Meet Ahmad</h2>
            <p className="high-chair-gallery-intro">
              Ahmad and his family worked with A4A on an adaptive high chair. Here he is with the group.
            </p>
            <div className="high-chair-gallery">
              <div className="high-chair-gallery-item">
                <img src="/images/4-3_Ahmad_Group.JPG" alt="Ahmad and group with the high chair project" />
                <span className="high-chair-gallery-caption">Ahmad and the group</span>
              </div>
            </div>
          </div>
        </section>

        {/* High Chair Project Photos */}
        <section className="high-chair-gallery-section">
          <div className="high-chair-container-inner">
            <h2>Project Photos</h2>
            <div className="high-chair-gallery high-chair-gallery-four">
              <div className="high-chair-gallery-item">
                <img src="/images/4-3_HighChair_Down.JPG" alt="High chair down position" />
                <span className="high-chair-gallery-caption">Activity Chair</span>
              </div>
              <div className="high-chair-gallery-item">
                <img src="/images/4-3_HighChair_Halfway.JPG" alt="High chair halfway position" />
              </div>
              <div className="high-chair-gallery-item">
                <img src="/images/4-3_HighChair_3_4.JPG" alt="High chair 3/4 view" />
              </div>
              <div className="high-chair-gallery-item">
                <img src="/images/4-3_HighChair_Up.JPG" alt="High chair up position" />
                <span className="high-chair-gallery-caption">High Chair</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
