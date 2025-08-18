import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/VolunteerOpportunities.css';

export default function VolunteerOpportunities() {
  const volunteerRoles = [
    {
      id: 'project-engineer',
      title: 'Project Engineer',
      subtitle: 'Design & Build',
      description: 'Work directly with families to design and build custom adaptive equipment. Use your engineering skills to create solutions that make a real difference in children\'s lives.',
      image: '/images/4-3_Engineer_Kickoff.jpg',
      color: '#5a3696',
      requirements: ['Engineering background preferred', 'Creative problem-solving', 'Attention to detail', 'Team collaboration'],
      timeCommitment: '5-10 hours/week',
      impact: 'Direct family impact'
    },
    {
      id: 'family-liaison',
      title: 'Family Liaison',
      subtitle: 'Support & Communication',
      description: 'Serve as the primary point of contact for families, ensuring smooth communication and project coordination. Help families feel supported throughout the entire process.',
      image: '/images/4-3_Wilhelm_and_Group.JPG',
      color: '#1565c0',
      requirements: ['Excellent communication skills', 'Empathy and patience', 'Organization skills', 'Bilingual a plus'],
      timeCommitment: '3-5 hours/week',
      impact: 'Family support & coordination'
    },
    {
      id: 'safety-coordinator',
      title: 'Safety Coordinator',
      subtitle: 'Quality & Standards',
      description: 'Ensure all projects meet the highest safety standards. Review designs, conduct safety assessments, and maintain quality control protocols.',
      image: '/images/4-3_C119_Last_Minute.jpg',
      color: '#2196f3',
      requirements: ['Safety certification preferred', 'Attention to detail', 'Quality assurance experience', 'Documentation skills'],
      timeCommitment: '4-6 hours/week',
      impact: 'Safety & quality assurance'
    },
    {
      id: 'outreach-specialist',
      title: 'Outreach Specialist',
      subtitle: 'Community & Partnerships',
      description: 'Help expand A4A\'s reach by building relationships with healthcare providers, schools, and community organizations.',
      image: '/images/4-3_Rutgers_Spring_2025_Everyone.JPG',
      color: '#4caf50',
      requirements: ['Networking skills', 'Presentation abilities', 'Marketing experience', 'Community engagement'],
      timeCommitment: '3-7 hours/week',
      impact: 'Community expansion'
    }
  ];

  const volunteerBenefits = [
    {
      icon: '🎯',
      title: 'Real Impact',
      description: 'See the direct impact of your work on children and families in your community.'
    },
    {
      icon: '🔧',
      title: 'Skill Development',
      description: 'Develop new skills in engineering, communication, and project management.'
    },
    {
      icon: '👥',
      title: 'Networking',
      description: 'Connect with professionals in healthcare, engineering, and community service.'
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Gain hands-on experience with adaptive technology and assistive devices.'
    }
  ];

  const currentVolunteers = [
    {
      name: 'Kavya Patel',
      role: 'Social Chair',
      image: '/images/4-3_Kavya_Story.jpg',
      quote: '"To me, A4A represents the connection between engineering and applying it to make a real world impact. Seeing the impact of our work firsthand during the showcases made me realize our work at A4A wasn\'t just a project but something that brings joy, opportunity and independence to real families."',
      timeWithA4A: '2 years',
      projectsCompleted: 'Project Ciaran & Fiona'
    },
    {
      name: 'Jason Ho',
      role: 'Vice President',
      image: '/images/4-3_Jason_Story.jpg',
      quote: '"I joined A4A because it allowed me to use my engineering skill for a tangible, positive impact on people\'s lives. It\'s not just about making projects - it\'s about understanding someone\'s needs and creating something that empowers them."',
      timeWithA4A: '2 years',
      projectsCompleted: 'Project Wilhelm & Montessori Board'
    },
    {
      name: 'Aaron Clarion',
      role: 'Former Vice President',
      image: '/images/4-3_Aaron_Story.jpg',
      quote: '"I always liked being able to give back and to use what I know to do something beneficial. Everything involving A4A has been rewarding for me and is an experience I wouldn\'t trade for anything else."',
      timeWithA4A: '3 years',
      projectsCompleted: 'Project Elyas'
    }
  ];

  return (
    <div className="volunteer-container">
      {/* Hero Section */}
      <div 
        className="volunteer-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Rutgers_Fall_2024_EVERYONE.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Volunteer Opportunities</h1>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <section className="why-volunteer-section">
        <div className="container">
          <div className="why-volunteer-content">
            <div className="why-volunteer-text">
              <h2>Why Volunteer with A4A?</h2>
              <p>
                Volunteering with A4A offers a unique opportunity to make a real, tangible impact in your community. 
                You'll work directly with families to design and build custom adaptive equipment that transforms 
                children's lives. Our volunteers gain hands-on experience in engineering, project management, and 
                family support while developing meaningful relationships with healthcare professionals and community 
                leaders. Whether you're an experienced engineer or someone passionate about helping others, you'll 
                find a role that matches your skills and interests. Every project you work on directly improves 
                a child's quality of life, making your contribution truly meaningful and rewarding.
              </p>
            </div>
            <div className="why-volunteer-image">
              <img src="/images/4-3_Dean_Cadena_and_Membs.JPG" alt="A4A volunteers working together" />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="roles-section">
        <div className="container">
          <h2>Volunteer Roles</h2>
          <p className="section-subtitle">
            We have various opportunities to match your skills and interests. 
            No prior experience required - we provide training and mentorship.
          </p>
          <div className="roles-grid">
            {volunteerRoles.map((role) => (
              <div key={role.id} className="role-card">
                <div className="role-image-container">
                  <img src={role.image} alt={role.title} className="role-image" />
                  <div className="role-overlay" style={{ backgroundColor: role.color + '20' }}>
                    <div className="role-badge" style={{ backgroundColor: role.color }}>
                      {role.subtitle}
                    </div>
                  </div>
                </div>
                <div className="role-content">
                  <h3 className="role-title" style={{ color: role.color }}>
                    {role.title}
                  </h3>
                  <p className="role-description">
                    {role.description}
                  </p>
                  <div className="role-details">
                    <div className="detail-row">
                      <span className="detail-label">Time Commitment:</span>
                      <span className="detail-value">{role.timeCommitment}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Impact:</span>
                      <span className="detail-value">{role.impact}</span>
                    </div>
                  </div>
                  <div className="role-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {role.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  <NavLink to="/get-involved" className="role-link" style={{ backgroundColor: role.color }}>
                    Apply for This Role
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Volunteers Section */}
      <section className="current-volunteers-section">
        <div className="container">
          <h2>Meet Our Volunteers</h2>
          <div className="volunteers-grid">
            {currentVolunteers.map((volunteer, index) => (
              <div key={index} className="volunteer-card">
                <div className="volunteer-image">
                  <img src={volunteer.image} alt={volunteer.name} />
                </div>
                <div className="volunteer-content">
                  <h3>{volunteer.name}</h3>
                  <div className="volunteer-details">
                    <span className="volunteer-role">{volunteer.role}</span>
                    <span className="volunteer-time">{volunteer.timeWithA4A} • {volunteer.projectsCompleted} projects</span>
                  </div>
                  <blockquote className="volunteer-quote">
                    "{volunteer.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="application-section">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Contact Us</h4>
                <p>Send us an email expressing your interest and preferred role. We'll schedule an initial conversation.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Orientation</h4>
                <p>Attend our volunteer orientation to learn about our mission, safety protocols, and available opportunities.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Training</h4>
                <p>Receive role-specific training and mentorship from experienced volunteers and staff.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Start Contributing</h4>
                <p>Begin working on projects and making a real impact in children's lives.</p>
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
              <p>A genuine desire to help children and families. We value enthusiasm and commitment to our mission.</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">⏰</div>
              <h3>Reliability</h3>
              <p>Consistent attendance and follow-through. Families depend on us, so reliability is crucial.</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">🤝</div>
              <h3>Teamwork</h3>
              <p>Ability to work well with others in a collaborative environment. We succeed together.</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">🎓</div>
              <h3>Learning Mindset</h3>
              <p>Willingness to learn new skills and adapt to different project requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to Make a Difference?</h2>
              <p>
                Join our team of dedicated volunteers and help us create accessible technology 
                for children with disabilities. Your skills, passion, and time can make a 
                real impact in families' lives.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@a4all.org</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>@rutgersa4a</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Rutgers University, New Brunswick</span>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <a href="mailto:info@a4all.org?subject=Volunteer Interest" className="contact-button primary">
                Get Started Today
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>
            Every volunteer brings unique skills and perspectives to our team. 
            Whether you're an experienced engineer or just starting your journey, 
            we have a place for you at A4A.
          </p>
          <div className="cta-buttons">
            <a href="mailto:info@a4all.org?subject=Volunteer Application" className="cta-button primary">
              Apply to Volunteer
            </a>
            <NavLink to="/donate" className="cta-button secondary">
              Support Our Work
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
} 