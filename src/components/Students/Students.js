import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
      id: 'leadership',
      title: 'Leadership Roles',
      subtitle: 'Take Initiative',
      description: 'Develop leadership skills by taking on executive board positions, project management roles, or team lead responsibilities within our organization.',
      image: '/images/4-3_Ciaran_and_Group.JPG',
      link: '/get-involved',
      color: '#a30000',
      features: ['Executive Board', 'Project Management', 'Team Leadership', 'Strategic Planning']
    },
    {
      id: 'training',
      title: 'Training & Development',
      subtitle: 'Learn & Grow',
      description: 'Access comprehensive training programs, workshops, and mentorship opportunities to develop both technical and professional skills.',
      image: '/images/4-3_Work_on_Project.jpg',
      link: '/training',
      color: '#0066cc',
      features: ['Technical Training', 'Workshops', 'Mentorship', 'Skill Building']
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
      name: 'Kavya Patel',
      role: 'Social Chair of Rutgers A4A',
      image: '/images/4-3_Kavya_Story.jpg',
      quote: '"To me, A4A represents the connection between engineering and applying it to make a real world impact."',
      year: '2027',
      major: 'Biochemical Engineering'
    },
    {
      name: 'Jason Ho',
      role: 'Vice President of Rutgers A4A',
      image: '/images/4-3_Jason_Story.jpg',
      quote: '"I joined A4A because it allowed me to use my engineering skill for a tangible, positive impact on people\'s lives."',
      year: '2027',
      major: 'Mechanical Engineering'
    },
    {
      name: 'Aaron Clarion',
      role: 'Former Vice President of Rutgers A4A',
      image: '/images/4-3_Aaron_Story.jpg',
      quote: '"I always liked being able to give back and to use what I know to do something beneficial."',
      year: '2025',
      major: 'Computer Engineering'
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
        </div>
      </div>

      {/* Why Join A4A Section */}
      <section className="why-join-section">
        <div className="container">
          <div className="why-join-content">
            <h2>Why Join A4A as a Student?</h2>
            <p className="why-join-description">
              Joining Accessible 4 All as a student offers you the unique opportunity to apply your engineering skills 
              to real-world problems while making a meaningful impact in children's lives. Our organization bridges 
              the gap between academic learning and practical application, providing you with hands-on experience 
              that goes beyond the classroom.
            </p>
            <div className="why-join-highlights">
              <div className="highlight-item">
                <h3>Real-World Engineering Experience</h3>
                <p>
                  Work on actual projects that directly impact children and families in your community. 
                  Design, prototype, and implement adaptive devices that solve real accessibility challenges.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Professional Skill Development</h3>
                <p>
                  Develop essential engineering skills through hands-on design and prototyping, while also 
                  building leadership, communication, and project management abilities that are valuable in any career.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Meaningful Community Impact</h3>
                <p>
                  Make a tangible difference in the lives of children with disabilities and their families. 
                  See the direct results of your work and the joy it brings to those you help.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Networking and Mentorship</h3>
                <p>
                  Connect with like-minded students, professionals, and families. Build relationships that 
                  can support your academic and professional growth while contributing to a supportive community.
                </p>
              </div>
            </div>
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


    </div>
  );
} 