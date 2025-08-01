import React from 'react';
import '../../styles/GetInvolved.css';

export default function GetInvolved() {
  return (
    <div className="get-involved-container">
      {/* Hero Section */}
      <div
        className="get-involved-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_C119_Last_Minute.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Join Our Mission</h1>
          <p className="hero-subtitle">
            Be part of something bigger. Help us create accessible toys and devices that transform children's lives
          </p>
        </div>
      </div>

      <div className="get-involved-main">
        {/* Why Join Section */}
        <section className="why-join-section">
          <div className="container">
            <h2>Why Join A4A?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🎯</div>
                <h3>Real Impact</h3>
                <p>See the direct impact of your work on children's lives. Every project you help with makes a real difference.</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🔧</div>
                <h3>Hands-On Experience</h3>
                <p>Gain practical engineering skills while working on meaningful projects that help real families.</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">👥</div>
                <h3>Community</h3>
                <p>Join a passionate community of students, engineers, and families working together for a common cause.</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">📚</div>
                <h3>Learning & Growth</h3>
                <p>Learn new skills, solve real problems, and grow both personally and professionally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities-section">
          <div className="container">
            <h2>How You Can Get Involved</h2>
            <div className="opportunities-grid">
              <div className="opportunity-card">
                <div className="opportunity-image">
                  <img src="/images/4-3_Wilhelm_and_Group.JPG" alt="Students working on projects" />
                </div>
                <div className="opportunity-content">
                  <h3>Project Team Member</h3>
                  <p>Join our project teams and work directly on creating adaptive devices for children. You'll learn engineering skills while making a real impact.</p>
                  <ul className="opportunity-details">
                    <li>Hands-on engineering experience</li>
                    <li>Work with real families</li>
                    <li>Learn new technical skills</li>
                    <li>See projects from start to finish</li>
                  </ul>
                  <a href="mailto:info@a4all.org?subject=Join Project Team" className="opportunity-button primary">Join a Team</a>
                </div>
              </div>
              
              <div className="opportunity-card">
                <div className="opportunity-image">
                  <img src="/images/4-3_Engineer_Kickoff.jpg" alt="Leadership and organization" />
                </div>
                <div className="opportunity-content">
                  <h3>Leadership & Organization</h3>
                  <p>Take on leadership roles in project management, outreach, fundraising, or chapter development. Build your leadership skills.</p>
                  <ul className="opportunity-details">
                    <li>Project management experience</li>
                    <li>Leadership development</li>
                    <li>Event planning and coordination</li>
                    <li>Community outreach skills</li>
                  </ul>
                  <a href="mailto:info@a4all.org?subject=Leadership Role" className="opportunity-button secondary">Take Leadership</a>
                </div>
              </div>
              
              <div className="opportunity-card">
                <div className="opportunity-image">
                  <img src="/images/4-3_Rutgers_Spring_2025_Everyone.JPG" alt="Chapter development" />
                </div>
                <div className="opportunity-content">
                  <h3>Start a Chapter</h3>
                  <p>Bring A4A to your university or community. We'll help you establish a new chapter and expand our mission.</p>
                  <ul className="opportunity-details">
                    <li>Chapter development experience</li>
                    <li>Network building</li>
                    <li>Mentorship and guidance</li>
                    <li>Expand our mission reach</li>
                  </ul>
                  <a href="mailto:info@a4all.org?subject=Start Chapter" className="opportunity-button primary">Start a Chapter</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills You'll Learn Section */}
        <section className="skills-section">
          <div className="container">
            <h2>Skills You'll Develop</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-icon">🔧</span>
                    <span>Mechanical Design</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">⚡</span>
                    <span>Electrical Systems</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🎛️</span>
                    <span>Control Systems</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🛠️</span>
                    <span>Prototyping</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Professional Skills</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-icon">👥</span>
                    <span>Team Collaboration</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">💬</span>
                    <span>Client Communication</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">📋</span>
                    <span>Project Management</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🎯</span>
                    <span>Problem Solving</span>
                  </div>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Leadership Skills</h3>
                <div className="skill-items">
                  <div className="skill-item">
                    <span className="skill-icon">🎤</span>
                    <span>Public Speaking</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">🤝</span>
                    <span>Networking</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">📢</span>
                    <span>Outreach & Marketing</span>
                  </div>
                  <div className="skill-item">
                    <span className="skill-icon">💰</span>
                    <span>Fundraising</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Stories Section */}
        <section className="stories-section">
          <div className="container">
            <h2>Student Stories</h2>
            <div className="stories-grid">
              <div className="story-card">
                <div className="story-image">
                  <img src="/images/4-3_Ciaran_and_Group.JPG" alt="Student working on project" />
                </div>
                <div className="story-content">
                  <h3>Sarah's Journey</h3>
                  <p>"Joining A4A was the best decision I made in college. I learned more practical engineering skills here than in any class, and seeing the impact on families was incredibly rewarding."</p>
                  <div className="story-role">
                    <span className="role-label">Role:</span>
                    <span className="role-value">Project Team Lead</span>
                  </div>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-image">
                  <img src="/images/4-3_Luca_and_Group.JPG" alt="Student with completed project" />
                </div>
                <div className="story-content">
                  <h3>Mike's Experience</h3>
                  <p>"I started as a volunteer and now I'm helping lead our chapter. The hands-on experience and the opportunity to make a real difference has been life-changing."</p>
                  <div className="story-role">
                    <span className="role-label">Role:</span>
                    <span className="role-value">Chapter President</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="requirements-section">
          <div className="container">
            <h2>What We're Looking For</h2>
            <div className="requirements-grid">
              <div className="requirement-card">
                <div className="requirement-icon">❤️</div>
                <h3>Passion</h3>
                <p>A genuine desire to help children and families. No prior experience required - we'll teach you everything you need to know.</p>
              </div>
              <div className="requirement-card">
                <div className="requirement-icon">⏰</div>
                <h3>Commitment</h3>
                <p>Dedication to our mission and willingness to learn. We value reliability and follow-through.</p>
              </div>
              <div className="requirement-card">
                <div className="requirement-icon">🤝</div>
                <h3>Teamwork</h3>
                <p>Ability to work well with others and contribute to a collaborative environment.</p>
              </div>
              <div className="requirement-card">
                <div className="requirement-icon">🎓</div>
                <h3>Learning Mindset</h3>
                <p>Eagerness to learn new skills and take on challenges. We provide training and mentorship.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="join-section">
          <div className="container">
            <div className="join-content">
              <div className="join-text">
                <h2>Ready to Get Started?</h2>
                <p>
                  Joining A4A is easy and rewarding. Whether you're an engineering student, 
                  interested in community service, or just want to make a difference, 
                  we have a place for you.
                </p>
                <div className="join-steps">
                  <div className="join-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Contact Us</h4>
                      <p>Send us an email or reach out through social media to express your interest.</p>
                    </div>
                  </div>
                  <div className="join-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Meet the Team</h4>
                      <p>We'll schedule a meeting to discuss opportunities and find the best fit for you.</p>
                    </div>
                  </div>
                  <div className="join-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Start Contributing</h4>
                      <p>Begin working on projects and making a real impact in children's lives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="join-actions">
                <a href="mailto:info@a4all.org?subject=Join A4A" className="join-button primary">Get Started Today</a>
                <a href="https://www.instagram.com/rutgersa4a/" className="join-button secondary">Follow Our Work</a>
                <div className="contact-info">
                  <p>Questions? Contact us:</p>
                  <p>📧 info@a4all.org</p>
                  <p>📱 @rutgersa4a</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Make a Difference Today</h2>
            <p>
              Join hundreds of students who are already making an impact. 
              Your skills, passion, and dedication can help us reach more families 
              and create more opportunities for children with disabilities.
            </p>
            <div className="cta-buttons">
              <a href="mailto:info@a4all.org?subject=Join A4A" className="cta-button primary">Join Our Team</a>
              <a href="/donate" className="cta-button secondary">Support Our Work</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 