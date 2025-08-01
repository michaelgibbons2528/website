import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Students.css';

export default function Students() {
  const studentOpportunities = [
    {
      id: 'volunteer',
      title: 'Volunteer Opportunities',
      subtitle: 'Make a Direct Impact',
      description: 'Join our project teams and work directly with families to create adaptive devices. Gain hands-on engineering experience while making a real difference in children\'s lives.',
      image: '/images/4-3_Wilhelm_and_Group.JPG',
      link: '/volunteer-opportunities',
      color: '#5a3696',
      features: ['Hands-on Engineering', 'Family Interaction', 'Project Management', 'Skill Development']
    },
    {
      id: 'safety',
      title: 'Safety Guidelines',
      subtitle: 'Learn Best Practices',
      description: 'Essential safety protocols and guidelines for working with children and families. Ensure all projects meet the highest standards of safety and quality.',
      image: '/images/1-1_Robert_Seat_Wood.jpg',
      link: '/safety-guidelines',
      color: '#1565c0',
      features: ['Safety Protocols', 'Quality Standards', 'Child Protection', 'Best Practices']
    },
    {
      id: 'training',
      title: 'Training & Resources',
      subtitle: 'Build Your Skills',
      description: 'Comprehensive training materials, tutorials, and resources to help you develop the skills needed for adaptive device design and family collaboration.',
      image: '/images/4-3_Engineer_Kickoff.jpg',
      link: '/resources-tutorials',
      color: '#2196f3',
      features: ['Technical Training', 'Design Resources', 'Tutorial Videos', 'Mentorship']
    }
  ];

  const studentBenefits = [
    {
      icon: '🎯',
      title: 'Real-World Experience',
      description: 'Work on actual projects that directly impact children and families in your community.'
    },
    {
      icon: '🔧',
      title: 'Engineering Skills',
      description: 'Develop practical engineering skills through hands-on design and prototyping.'
    },
    {
      icon: '👥',
      title: 'Leadership Development',
      description: 'Take on leadership roles and develop project management and communication skills.'
    },
    {
      icon: '📚',
      title: 'Professional Growth',
      description: 'Build your resume with meaningful experience and develop a strong professional network.'
    }
  ];

  const currentStudents = [
    {
      name: 'Sarah Chen',
      role: 'Project Team Lead',
      image: '/images/4-3_Ciaran_and_Group.JPG',
      quote: '"A4A has given me the most rewarding engineering experience of my college career. Seeing the impact on families is incredible."',
      year: 'Senior',
      major: 'Mechanical Engineering'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Chapter President',
      image: '/images/4-3_Luca_and_Group.JPG',
      quote: '"I started as a volunteer and now I\'m helping lead our chapter. The hands-on experience has been life-changing."',
      year: 'Junior',
      major: 'Electrical Engineering'
    },
    {
      name: 'Emily Johnson',
      role: 'Safety Coordinator',
      image: '/images/4-3_Rutgers_Spring_2025_Everyone.JPG',
      quote: '"Working with families and ensuring safety has taught me so much about responsible engineering."',
      year: 'Senior',
      major: 'Biomedical Engineering'
    }
  ];

  return (
    <div className="students-container">
      {/* Hero Section */}
      <div 
        className="students-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Robert_Car_Explain.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Students</h1>
          <p className="hero-subtitle">
            Join our mission to create accessible technology for children with disabilities. 
            Gain hands-on engineering experience while making a real difference in families' lives.
          </p>
        </div>
      </div>

      {/* Why Join A4A Section */}
      <section className="why-join-section">
        <div className="container">
          <h2>Why Join A4A as a Student?</h2>
          <div className="benefits-grid">
            {studentBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="opportunities-section">
        <div className="container">
          <h2>Student Opportunities</h2>
          <div className="opportunities-grid">
            {studentOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="opportunity-card">
                <div className="opportunity-image-container">
                  <img src={opportunity.image} alt={opportunity.title} className="opportunity-image" />
                  <div className="opportunity-overlay" style={{ backgroundColor: opportunity.color + '20' }}>
                    <div className="opportunity-badge" style={{ backgroundColor: opportunity.color }}>
                      {opportunity.subtitle}
                    </div>
                  </div>
                </div>
                <div className="opportunity-content">
                  <h3 className="opportunity-title" style={{ color: opportunity.color }}>
                    {opportunity.title}
                  </h3>
                  <p className="opportunity-description">
                    {opportunity.description}
                  </p>
                  <div className="opportunity-features">
                    {opportunity.features.map((feature, index) => (
                      <span key={index} className="opportunity-feature" style={{ backgroundColor: opportunity.color + '15' }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <NavLink to={opportunity.link} className="opportunity-link" style={{ backgroundColor: opportunity.color }}>
                    Learn More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Students Section */}
      <section className="current-students-section">
        <div className="container">
          <h2>Meet Our Current Students</h2>
          <div className="students-grid">
            {currentStudents.map((student, index) => (
              <div key={index} className="student-card">
                <div className="student-image">
                  <img src={student.image} alt={student.name} />
                </div>
                <div className="student-content">
                  <h3>{student.name}</h3>
                  <div className="student-details">
                    <span className="student-role">{student.role}</span>
                    <span className="student-year">{student.year} • {student.major}</span>
                  </div>
                  <blockquote className="student-quote">
                    "{student.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development Section */}
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

      {/* How to Get Started Section */}
      <section className="get-started-section">
        <div className="container">
          <div className="get-started-content">
            <div className="get-started-text">
              <h2>How to Get Started</h2>
              <p>
                Joining A4A is easy and rewarding. Whether you're an engineering student, 
                interested in community service, or just want to make a difference, 
                we have a place for you.
              </p>
              <div className="get-started-steps">
                <div className="get-started-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Contact Us</h4>
                    <p>Send us an email or reach out through social media to express your interest.</p>
                  </div>
                </div>
                <div className="get-started-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Meet the Team</h4>
                    <p>We'll schedule a meeting to discuss opportunities and find the best fit for you.</p>
                  </div>
                </div>
                <div className="get-started-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Start Contributing</h4>
                    <p>Begin working on projects and making a real impact in children's lives.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="get-started-actions">
              <a href="mailto:info@a4all.org?subject=Join A4A as Student" className="get-started-button primary">Get Started Today</a>
              <a href="https://www.instagram.com/rutgersa4a/" className="get-started-button secondary">Follow Our Work</a>
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
            <a href="mailto:info@a4all.org?subject=Join A4A as Student" className="cta-button primary">Join Our Team</a>
            <NavLink to="/donate" className="cta-button secondary">Support Our Work</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
} 