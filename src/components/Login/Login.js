import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple validation
    if (!credentials.username || !credentials.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Simulate authentication (replace with actual authentication logic)
    try {
      // For demo purposes, accept any username/password combination
      // In production, this would connect to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // Store authentication state (you might want to use localStorage or a state management solution)
      localStorage.setItem('isStudentLoggedIn', 'true');
      localStorage.setItem('studentUsername', credentials.username);
      
      // Redirect to student dashboard
      navigate('/student-dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/images/4-3_Temp_Logo.png" alt="A4A Logo" className="login-logo" />
          <h1>Student Login</h1>
          <p>Access your student resources and training materials</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Enter your username or email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? Contact your administrator</p>
          <a href="/" className="back-link">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Login; 