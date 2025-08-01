import React from 'react';
import '../../styles/FindUs.css';

const FindUs = () => {
  return (
    <div className="find-us-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Find Us</h1>
          <p>Visit our facilities and experience our accessible environment</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Location Section */}
        <section className="location-section">
          <div className="container">
            <h2>Our Location</h2>
            <div className="location-grid">
              <div className="location-info">
                <div className="location-card">
                  <h3>Rutgers University</h3>
                  <div className="address">
                    <p><strong>Address:</strong></p>
                    <p>Rutgers University</p>
                    <p>New Brunswick, NJ 08901</p>
                    <p>United States</p>
                  </div>
                  <div className="contact-info">
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Email:</strong> info@accessible4all.org</p>
                    <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-content">
                    <h3>Interactive Map</h3>
                    <p>Map will be embedded here</p>
                    <div className="map-buttons">
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Open in Google Maps
                      </a>
                      <a href="https://maps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Open in Apple Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="accessibility-section">
          <div className="container">
            <h2>Accessibility Features</h2>
            <div className="accessibility-grid">
              <div className="accessibility-card">
                <div className="accessibility-icon">♿</div>
                <h3>Wheelchair Accessible</h3>
                <p>Ramps, elevators, and wide doorways throughout our facility</p>
              </div>
              <div className="accessibility-card">
                <div className="accessibility-icon">🅿️</div>
                <h3>Accessible Parking</h3>
                <p>Designated accessible parking spaces near the entrance</p>
              </div>
              <div className="accessibility-card">
                <div className="accessibility-icon">🚪</div>
                <h3>Automatic Doors</h3>
                <p>Automatic door openers at all main entrances</p>
              </div>
              <div className="accessibility-card">
                <div className="accessibility-icon">🛁</div>
                <h3>Accessible Restrooms</h3>
                <p>Fully accessible restrooms with changing tables</p>
              </div>
              <div className="accessibility-card">
                <div className="accessibility-icon">🎧</div>
                <h3>Assistive Technology</h3>
                <p>Screen readers, hearing loops, and other assistive devices available</p>
              </div>
              <div className="accessibility-card">
                <div className="accessibility-icon">🐕</div>
                <h3>Service Animals Welcome</h3>
                <p>Service animals are welcome throughout our facility</p>
              </div>
            </div>
          </div>
        </section>

        {/* Directions Section */}
        <section className="directions-section">
          <div className="container">
            <h2>Getting Here</h2>
            <div className="directions-grid">
              <div className="direction-card">
                <h3>By Car</h3>
                <div className="direction-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <p>Take Route 18 to Rutgers University</p>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <p>Exit at College Avenue</p>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <p>Follow signs to our building</p>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <p>Use accessible parking near the main entrance</p>
                  </div>
                </div>
              </div>
              <div className="direction-card">
                <h3>By Public Transit</h3>
                <div className="direction-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <p>Take NJ Transit to New Brunswick Station</p>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <p>Transfer to Rutgers bus or walk 10 minutes</p>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <p>All buses are wheelchair accessible</p>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <p>Ask driver for assistance if needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Information Section */}
        <section className="visit-info-section">
          <div className="container">
            <h2>Planning Your Visit</h2>
            <div className="visit-grid">
              <div className="visit-card">
                <h3>Before You Visit</h3>
                <ul>
                  <li>Call ahead to confirm availability</li>
                  <li>Let us know about any specific accessibility needs</li>
                  <li>Bring any relevant medical documentation</li>
                  <li>Plan for a 1-2 hour consultation</li>
                </ul>
              </div>
              <div className="visit-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Photo ID</li>
                  <li>Insurance information (if applicable)</li>
                  <li>List of current medications</li>
                  <li>Any existing mobility devices</li>
                </ul>
              </div>
              <div className="visit-card">
                <h3>During Your Visit</h3>
                <ul>
                  <li>Free parking available</li>
                  <li>Complimentary refreshments</li>
                  <li>Wi-Fi access</li>
                  <li>Child-friendly waiting area</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2>Need Help Finding Us?</h2>
            <p>
              Our team is here to help you plan your visit. Contact us for directions, 
              accessibility information, or to schedule your appointment.
            </p>
            <div className="contact-buttons">
              <a href="tel:+15551234567" className="btn-primary">Call Us</a>
              <a href="mailto:info@accessible4all.org" className="btn-secondary">Email Us</a>
              <a href="/contact" className="btn-tertiary">Contact Form</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindUs; 