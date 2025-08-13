import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/StudentDashboard.css';

const StudentDashboard = () => {
  const [studentName, setStudentName] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isStudentLoggedIn');
    const username = localStorage.getItem('studentUsername');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    setStudentName(username || 'Student');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('studentUsername');
    navigate('/');
  };

  const trainingModules = [
    {
      id: 1,
      title: 'Safety Guidelines',
      description: 'Essential safety protocols for working with children',
      status: 'completed',
      duration: '30 min'
    },
    {
      id: 2,
      title: 'General 1 Training',
      description: 'Core training for new volunteers',
      status: 'in-progress',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Resources & Tutorials',
      description: 'Additional learning materials and guides',
      status: 'not-started',
      duration: '60 min'
    }
  ];

  const recentActivities = [
    { type: 'Training', description: 'Completed Safety Guidelines module', time: '2 hours ago' },
    { type: 'Project', description: 'Worked on Ride-On Car project', time: '1 day ago' },
    { type: 'Meeting', description: 'Attended weekly team meeting', time: '3 days ago' }
  ];

  const renderOverview = () => (
    <div className="dashboard-section">
      <h2>Welcome back, {studentName}!</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Training Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
          <p>65% Complete</p>
        </div>
        <div className="stat-card">
          <h3>Projects Completed</h3>
          <div className="stat-number">12</div>
          <p>This semester</p>
        </div>
        <div className="stat-card">
          <h3>Hours Volunteered</h3>
          <div className="stat-number">48</div>
          <p>This semester</p>
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <div className="activity-list">
          {recentActivities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">{activity.type.charAt(0)}</div>
              <div className="activity-content">
                <p className="activity-description">{activity.description}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="dashboard-section">
      <h2>Training Modules</h2>
      <div className="training-grid">
        {trainingModules.map((module) => (
          <div key={module.id} className={`training-card ${module.status}`}>
            <div className="training-header">
              <h3>{module.title}</h3>
              <span className={`status-badge ${module.status}`}>
                {module.status.replace('-', ' ')}
              </span>
            </div>
            <p className="training-description">{module.description}</p>
            <div className="training-footer">
              <span className="duration">{module.duration}</span>
              <button className="module-button">
                {module.status === 'completed' ? 'Review' : 
                 module.status === 'in-progress' ? 'Continue' : 'Start'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="dashboard-section">
      <h2>Student Resources</h2>
      <div className="resources-grid">
        <div className="resource-card">
          <h3>Project Guidelines</h3>
          <p>Detailed guidelines for working on adaptive projects</p>
          <button className="resource-button">View Guidelines</button>
        </div>
        <div className="resource-card">
          <h3>Safety Protocols</h3>
          <p>Comprehensive safety information and procedures</p>
          <button className="resource-button">View Protocols</button>
        </div>
        <div className="resource-card">
          <h3>Training Videos</h3>
          <p>Video tutorials for various techniques and procedures</p>
          <button className="resource-button">Watch Videos</button>
        </div>
        <div className="resource-card">
          <h3>Contact Information</h3>
          <p>Important contacts for questions and support</p>
          <button className="resource-button">View Contacts</button>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="dashboard-section">
      <h2>Student Profile</h2>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {studentName.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h3>{studentName}</h3>
            <p>Student Volunteer</p>
          </div>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <label>Member Since:</label>
            <span>Fall 2024</span>
          </div>
          <div className="detail-item">
            <label>Total Hours:</label>
            <span>48 hours</span>
          </div>
          <div className="detail-item">
            <label>Projects Completed:</label>
            <span>12 projects</span>
          </div>
          <div className="detail-item">
            <label>Training Status:</label>
            <span className="status-complete">Complete</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button secondary">Download Certificate</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Student Dashboard</h1>
          <div className="header-actions">
            <span className="welcome-text">Welcome, {studentName}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav className="dashboard-nav">
        <button 
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`nav-tab ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training
        </button>
        <button 
          className={`nav-tab ${activeTab === 'resources' ? 'active' : ''}`}
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </button>
        <button 
          className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'training' && renderTraining()}
        {activeTab === 'resources' && renderResources()}
        {activeTab === 'profile' && renderProfile()}
      </main>
    </div>
  );
};

export default StudentDashboard; 