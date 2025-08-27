import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Students.css';

export default function Students() {
  const navigate = useNavigate();

  const volunteerRoles = [
    {
      id: 'team-member',
      title: 'Team Member',
      description: 'Learn the basics of hands-on engineering, and work directly with a family to create a project for their child.',
      image: '/images/4-3_Center_Stage_Students.JPG',
      color: '#5a3696',
      requirements: ['Willingness to learn!'],
      timeCommitment: '1-2 hours/week',
    },
    {
      id: 'project-lead',
      title: 'Project Lead',
      description: 'Lead a team of volunteers to create a project for a family.',
      image: '/images/4-3_Anika_Explaining.jpg',
      color: '#1565c0',
      requirements: ['Leadership', 'Organization'],
      timeCommitment: '3-5 hours/week',
    },
    {
      id: 'executive-board',
      title: 'Executive Board',
      description: 'Help run the organization, and help with the day to day operations of the organization.',
      image: '/images/4-3_Gaby_Talking_Dan_Spiro.jpg',
      color: '#2196f3',
      requirements: ['Leadership', 'Organization', 'Teamwork'],
      timeCommitment: '5-7 hours/week',
    },
    {
      id: 'nonprofit-volunteer',
      title: 'Nonprofit Volunteer',
      description: 'Expand A4A\'s reach by volunteering with our non-profit team. By expanding our reach, we can help more students get involved in our projects, which directly increases the number of children and families we can help.',
      image: '/images/4-3_Everyone_Watching.JPG',
      color: '#4caf50',
      requirements: ['Networking', 'Presenting', 'Marketing', 'Community Engagement'],
      timeCommitment: '7+ hours/week',
    }
  ];

  const currentStudents = [
    {
      name: 'Kavya Patel',
      role: 'Social Chair of Rutgers A4A',
      image: '/images/4-3_Kavya_Story.jpg',
      quote: '"To me, A4A represents the connection between engineering and applying it to make a real world impact."',
      year: '2027',
      major: 'Biochemical Engineering',
      storyId: 'kavya'
    },
    {
      name: 'Jason Ho',
      role: 'Vice President of Rutgers A4A',
      image: '/images/4-3_Jason_Story.jpg',
      quote: '"I joined A4A because it allowed me to use my engineering skill for a tangible, positive impact on people\'s lives."',
      year: '2027',
      major: 'Mechanical Engineering',
      storyId: 'jason'
    },
    {
      name: 'Aaron Clarion',
      role: 'Former Vice President of Rutgers A4A',
      image: '/images/4-3_Aaron_Story.jpg',
      quote: '"I always liked being able to give back and to use what I know to do something beneficial."',
      year: '2025',
      major: 'Computer Engineering',
      storyId: 'aaron'
    }
  ];

  const handleStudentClick = (studentId) => {
    navigate('/our-stories', { state: { scrollToStudent: studentId } });
  };

  return (
    <div className="students-container">
      {/* Hero Section */}
      <div 
        className="students-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Luca_Explain.JPG')",
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
              Accessible 4 All as a student gives you the unique opportunity to apply your skills to real-world problems while making a meaningful impact in children's lives.
              No matter what your interests are, we want to help teach you various skills that will be valuable in your future. 
            </p>
            <div className="why-join-highlights">
              <div className="highlight-item">
                <h3>Real-World Experience</h3>
                <p>
                Explore different areas of engineering, from mechanical, electrical, biomedical, and more. We will guide you through the basics of hands-on engineering, then
                give you the opportunity to freely design and build projects that make a meaningful impact for children and families in your community.
                </p>
              </div>
              <div className="highlight-item">
                <h3>We've Got a Spot for Everyone</h3>
                <p>
                No matter your background or experience, A4A has a place for you. Our projects use a wide range of skills, and as long as you are willing to learn,
                you'll find a way to contribute. You will develop both technical abilities and leadership experience, gaining skills that are valuable in any path you choose.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Meaningful Community Impact</h3>
                <p>
                Be apart of a community that is passionate about creating projects to directly improve the lives of children and families in your community. By the end 
                of the project, you will see the joy and gratitude firsthand, and knowing your work makes a real difference in a child's life is a feeling like no other.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Lifelong Connections</h3>
                <p>
                  Whether you have a passion for engineering, healthcare, or community service, you will be able to form meaningful friendships 
                  while expanding ?your network with peers and mentors who share your passions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="roles-section">
        <div className="container">
          <h2>Volunteer Roles</h2>
          <p className="section-subtitle">
            Here's everything it takes for an A4A chapter to be successful. Be apart of a committed team of students who are passionate about helping children and families!
          </p>
          <div className="roles-grid">
            {volunteerRoles.map((role) => (
              <div key={role.id} className="role-card">
                <div className="role-image-container">
                  <img src={role.image} alt={role.title} className="role-image" />
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
                  </div>
                  <div className="role-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {role.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  <NavLink to="/interest-form" className="role-link" style={{ backgroundColor: role.color }}>
                    Interested? Click Here!
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
              <div 
                key={index} 
                className="student-card"
                onClick={() => handleStudentClick(student.storyId)}
                style={{ cursor: 'pointer' }}
              >
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