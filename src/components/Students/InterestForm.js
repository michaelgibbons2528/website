import React, { useState } from 'react';
import '../../styles/InterestForm.css';

export default function InterestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    graduationYear: '',
    interests: [],
    experience: '',
    availability: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL - Student Interest Form dedicated script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxGZCmT5LbE3qZANTuHpCpKIo-P7S88i9c7VIJ3mujICL0xJbCm9oMthcVvf0J1f6Qx/exec';
      
      // Log form data before sending
      console.log('Form data being sent:', formData);
      
      // Create URL parameters - Student Interest Form specific parameters
      const params = new URLSearchParams();
      params.append('firstName', formData.firstName);
      params.append('lastName', formData.lastName);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('university', formData.university);
      params.append('major', formData.major);
      params.append('graduationYear', formData.graduationYear);
      params.append('interests', formData.interests.join(','));
      params.append('experience', formData.experience);
      params.append('availability', formData.availability);
      params.append('message', formData.message);
      params.append('timestamp', new Date().toISOString());
      
      // Log the URL being called for debugging
      const fullURL = `${scriptURL}?${params.toString()}`;
      console.log('Submitting form to:', fullURL);
      
      // Method 1: Try fetch first
      try {
        const response = await fetch(fullURL, {
          method: 'GET',
          mode: 'no-cors'
        });
        console.log('Fetch response:', response);
        
        // Check if we got a response (even with no-cors, we can't read the content)
        if (response.type === 'opaque') {
          console.log('Form submitted successfully (opaque response)');
        }
      } catch (fetchError) {
        console.log('Fetch failed, trying alternative method:', fetchError);
        
        // Method 2: Use window.open as fallback
        const newWindow = window.open(fullURL, '_blank');
        if (newWindow) {
          setTimeout(() => {
            newWindow.close();
          }, 2000);
        }
      }
      
      // Reset form and show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        university: '',
        major: '',
        graduationYear: '',
        interests: [],
        experience: '',
        availability: '',
        message: ''
      });
      
      setSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly at mgibbons@a4all.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="interest-form-container">
        <div className="success-message">
          <h2>Thank You!</h2>
          <p>Your interest form has been submitted successfully. We'll be in touch with you soon!</p>
          <button onClick={() => setSubmitted(false)} className="submit-another-btn">
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="interest-form-container">
      {/* Hero Section */}
      <div 
        className="interest-form-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Robert_Car_Explain.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Student Interest Form</h1>
        </div>
      </div>

      {/* Form Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-intro">
            <h2>Get Involved!</h2>
            <p>
              Ready to make a difference? Fill out this form to let us know about your interests 
              and how you'd like to get involved with A4A.
            </p>
          </div>

          <form className="interest-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Personal Information */}
              <div className="form-group">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="form-group">
                <h3>Academic Information</h3>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="university">School/Institution * </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="major">Major/Field of Study</label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="graduationYear">Expected Graduation Year</label>
                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div className="form-group">
                <h3>Areas of Interest</h3>
                <p>Select all that apply:</p>
                <div className="interests-grid">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value="team-member"
                      checked={formData.interests.includes('team-member')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Team Member</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value="project-lead"
                      checked={formData.interests.includes('project-lead')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Project Lead</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value="executive-board"
                      checked={formData.interests.includes('executive-board')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Executive Board</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value="nonprofit-volunteer"
                      checked={formData.interests.includes('nonprofit-volunteer')}
                      onChange={handleCheckboxChange}
                    />
                    <span>Nonprofit Volunteer</span>
                  </label>
                </div>
              </div>

              {/* Experience & Availability */}
              <div className="form-group">
                <h3>Experience & Availability</h3>
                <div className="form-field">
                  <label htmlFor="experience">Relevant Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant experience you have (engineering, volunteering, working with children, etc.)"
                    rows="3"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="availability">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Availability</option>
                    <option value="1-2 hours/week">1-2 hours/week</option>
                    <option value="3-5 hours/week">3-5 hours/week</option>
                    <option value="5-7 hours/week">5-7 hours/week</option>
                    <option value="7+ hours/week">7+ hours/week</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-group">
                <h3>Additional Information</h3>
                <div className="form-field">
                  <label htmlFor="message">Why are you interested in A4A?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in joining A4A and how you hope to contribute..."
                    rows="4"
                  />
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Interest Form'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
