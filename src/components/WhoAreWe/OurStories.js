import React from 'react';
import '../../styles/OurStories.css';

export default function OurStories() {
  return (
    <div className="stories-container">
      {/* Hero Section */}
      <div className="stories-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Stories</h1>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="stories-section">
        <div className="container">
          <div className="stories-intro">
            <h2>Student Stories</h2>
            <p>
              Our student engineers share their experiences of learning, growth, and the profound impact 
              of applying their skills for A4A. These stories showcase the 
              transformative power of compassionate engineering.
            </p>
          </div>

          <div className="stories-grid">
            {/* Story 1 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/1-1_Engineer_Kickoff.jpg" alt="Sarah working on engineering project" />
                <div className="story-overlay">
                  <span className="story-number">01</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Sarah's First Project: A Life-Changing Experience</h3>
                <div className="story-meta">
                  <span className="major">Major: Mechanical Engineering</span>
                  <span className="project">Project: Custom Ride-On Car</span>
                </div>
                <p className="story-excerpt">
                  "When I joined A4A, I never imagined how much it would change my perspective on engineering. 
                  Working on my first custom ride-on car project opened my eyes to the real impact 
                  engineering can have on people's lives."
                </p>
                <div className="story-quote">
                  <blockquote>
                    "The moment I saw the child's face light up when they first drove the car I helped build, 
                    I realized this is what engineering is really about - making a difference in people's lives."
                  </blockquote>
                  <cite>- Sarah Chen, Junior</cite>
                </div>
                <div className="story-impact">
                  <h4>What I Learned:</h4>
                  <ul>
                    <li>Real-world application of engineering principles</li>
                    <li>The importance of user-centered design</li>
                    <li>How to work directly with families and understand their needs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/1-1_Project_Robert.jpg" alt="Marcus designing adaptive equipment" />
                <div className="story-overlay">
                  <span className="story-number">02</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Marcus: From Theory to Real-World Impact</h3>
                <div className="story-meta">
                  <span className="major">Major: Biomedical Engineering</span>
                  <span className="project">Project: Adaptive Equipment Design</span>
                </div>
                <p className="story-excerpt">
                  "As a biomedical engineering student, I was always interested in helping people, 
                  but A4A showed me how to apply my knowledge in a tangible way. Designing adaptive 
                  equipment has taught me more than any textbook ever could."
                </p>
                <div className="story-quote">
                  <blockquote>
                    "Working with families to understand their specific needs has completely changed 
                    how I approach engineering problems. It's not just about the technical solution, 
                    it's about the human impact."
                  </blockquote>
                  <cite>- Marcus Rodriguez, Senior</cite>
                </div>
                <div className="story-impact">
                  <h4>What I Learned:</h4>
                  <ul>
                    <li>How to conduct user research and needs assessment</li>
                    <li>Iterative design process with real feedback</li>
                    <li>Collaboration with healthcare professionals and families</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/1-1_Dean_Cadena_and_Membs.JPG" alt="Emily collaborating with team" />
                <div className="story-overlay">
                  <span className="story-number">03</span>
                </div>
              </div>
              <div className="story-content">
                <h3>Emily: Leading a Team Project</h3>
                <div className="story-meta">
                  <span className="major">Major: Electrical Engineering</span>
                  <span className="project">Project: Educational Tools Development</span>
                </div>
                <p className="story-excerpt">
                  "Leading a team of engineers to develop educational tools for children with 
                  disabilities has been the most rewarding experience of my college career. 
                  It's taught me that leadership is about serving others."
                </p>
                <div className="story-quote">
                  <blockquote>
                    "The collaborative environment at A4A has shown me how diverse perspectives 
                    lead to better solutions. Every team member brings something unique to the table."
                  </blockquote>
                  <cite>- Emily Thompson, Team Lead</cite>
                </div>
                <div className="story-impact">
                  <h4>What I Learned:</h4>
                  <ul>
                    <li>Project management and team leadership skills</li>
                    <li>How to integrate multiple engineering disciplines</li>
                    <li>The value of diverse perspectives in problem-solving</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="story-card">
              <div className="story-image">
                <img src="/images/1-1_Donations.jpg" alt="David presenting project" />
                <div className="story-overlay">
                  <span className="story-number">04</span>
                </div>
              </div>
              <div className="story-content">
                <h3>David: Finding My Purpose in Engineering</h3>
                <div className="story-meta">
                  <span className="major">Major: Computer Science</span>
                  <span className="project">Project: Interactive Learning Systems</span>
                </div>
                <p className="story-excerpt">
                  "I came to college thinking I'd work in tech, but A4A showed me how to use 
                  my programming skills to make a real difference. Creating interactive learning 
                  systems for children has given me a sense of purpose I never expected."
                </p>
                <div className="story-quote">
                  <blockquote>
                    "The feedback from families and seeing children engage with the systems I built 
                    has been incredibly rewarding. It's made me realize that technology should serve people, 
                    not the other way around."
                  </blockquote>
                  <cite>- David Park, Graduate Student</cite>
                </div>
                <div className="story-impact">
                  <h4>What I Learned:</h4>
                  <ul>
                    <li>How to design technology for accessibility and inclusion</li>
                    <li>The importance of user testing with diverse populations</li>
                    <li>How to balance technical innovation with practical needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="stories-cta">
            <h3>Share Your Story</h3>
            <p>
              Every student engineer has a unique journey. If you'd like to share your experience 
              with A4A and how it has impacted your learning and career goals, we'd love to hear from you.
            </p>
            <button className="cta-button">Contact Us to Share Your Story</button>
          </div>
        </div>
      </div>
    </div>
  );
} 