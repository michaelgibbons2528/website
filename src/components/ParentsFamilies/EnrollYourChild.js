import React, { useState } from 'react';
import '../../styles/EnrollYourChild.css';

const EnrollYourChild = () => {
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    childFirstName: '',
    childLastName: '',
    phoneNumber: '',
    email: '',
    permission: '',
    childAge: '',
    ptGroup: '',
    childHeight: '',
    childWeight: '',
    healthConditions: '',
    childInterests: '',
    adaptiveTechnologyInterest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyFvbFRoGNpivh8zMDqC2BUjUmaTYus8zK_ALCg_EkN6XEuqIxCoZbJWqCJsLfK0ht8/exec';
      
      // Log form data before sending
      console.log('Form data being sent:', formData);
      
      // Create URL parameters
      const params = new URLSearchParams();
      params.append('parentFirstName', formData.parentFirstName);
      params.append('parentLastName', formData.parentLastName);
      params.append('childFirstName', formData.childFirstName);
      params.append('childLastName', formData.childLastName);
      params.append('phoneNumber', formData.phoneNumber);
      params.append('email', formData.email);
      params.append('permission', formData.permission);
      params.append('childAge', formData.childAge);
      params.append('ptGroup', formData.ptGroup);
      params.append('childHeight', formData.childHeight);
      params.append('childWeight', formData.childWeight);
      params.append('healthConditions', formData.healthConditions);
      params.append('childInterests', formData.childInterests);
      params.append('adaptiveTechnologyInterest', formData.adaptiveTechnologyInterest);
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
        parentFirstName: '',
        parentLastName: '',
        childFirstName: '',
        childLastName: '',
        phoneNumber: '',
        email: '',
        permission: '',
        childAge: '',
        ptGroup: '',
        childHeight: '',
        childWeight: '',
        healthConditions: '',
        childInterests: '',
        adaptiveTechnologyInterest: ''
      });
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly at mgibbons@a4all.org');
    }
  };

  return (
    <div className="enroll-container">
      {/* Hero Section */}
      <div 
        className="enroll-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Fall_2024_Cars.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Enroll Your Child</h1>
        </div>
      </div>

      {/* Title Section */}
      <section className="enroll-title-section">
        <div className="container">
          <h2>Enrollment Form</h2>
          <p>Please fill out the form below to enroll your child with A4A. We'll review your information and get back to you within 48 hours.</p>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="enroll-form-section">
        <div className="container">
          <div className="form-container">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your enrollment request has been submitted successfully! We've received your information and will get back to you within 48 hours. You'll also receive a confirmation email shortly.</p>
                <button 
                  className="submit-another-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Enrollment
                </button>
              </div>
            ) : (
              <form className="enroll-form" onSubmit={handleSubmit}>
                {/* Parent Information Section */}
                <div className="form-section">
                  <h3 className="section-title">Parent/Guardian Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="parentFirstName">First Name *</label>
                      <input
                        type="text"
                        id="parentFirstName"
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="parentLastName">Last Name *</label>
                      <input
                        type="text"
                        id="parentLastName"
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                  </div>
                </div>

                {/* Child Information Section */}
                <div className="form-section">
                  <h3 className="section-title">Child Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="childFirstName">Child's First Name *</label>
                      <input
                        type="text"
                        id="childFirstName"
                        name="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="childLastName">Child's Last Name *</label>
                      <input
                        type="text"
                        id="childLastName"
                        name="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                                         <div className="form-group">
                       <label htmlFor="childAge">Child's Age *</label>
                       <select
                         id="childAge"
                         name="childAge"
                         value={formData.childAge}
                         onChange={handleInputChange}
                         required
                         className="age-select"
                       >
                         <option value="">Choose</option>
                         <option value="0">0</option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                         <option value="7">7</option>
                         <option value="8">8</option>
                         <option value="9">9</option>
                         <option value="10">10</option>
                         <option value="11">11</option>
                         <option value="12">12</option>
                         <option value="13">13</option>
                         <option value="14">14</option>
                         <option value="15">15</option>
                         <option value="16">16</option>
                         <option value="17">17</option>
                         <option value="18">18</option>
                       </select>
                     </div>
                    
                    <div className="form-group">
                      <label htmlFor="ptGroup">How did you hear about us? *</label>
                      <input
                        type="text"
                        id="ptGroup"
                        name="ptGroup"
                        value={formData.ptGroup}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="childHeight">Child's Height *</label>
                      <input
                        type="text"
                        id="childHeight"
                        name="childHeight"
                        value={formData.childHeight}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="childWeight">Child's Weight *</label>
                      <input
                        type="text"
                        id="childWeight"
                        name="childWeight"
                        value={formData.childWeight}
                        onChange={handleInputChange}
                        required
                        placeholder="Your answer"
                      />
                    </div>
                  </div>
                </div>

                {/* Child's Needs Section */}
                <div className="form-section">
                  <h3 className="section-title">Child's Needs & Interests</h3>
                  <div className="form-group">
                    <label htmlFor="healthConditions">What health/mobility condition(s) does your child have? *</label>
                    <textarea
                      id="healthConditions"
                      name="healthConditions"
                      value={formData.healthConditions}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your child's health or mobility conditions..."
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="childInterests">What is your child interested in? (e.g., dinosaurs, trains, cars, animals) *</label>
                    <input
                      type="text"
                      id="childInterests"
                      name="childInterests"
                      value={formData.childInterests}
                      onChange={handleInputChange}
                      required
                      placeholder="Your answer"
                    />
                  </div>
                </div>

                {/* Permission Section */}
                <div className="form-section">
                  <h3 className="section-title">Permission & Additional Information</h3>
                  <div className="form-group">
                    <label>Do you, as the parent(s), provide permission that we can work with you and your child to modify a toy for them? *</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="permission"
                          value="Yes"
                          checked={formData.permission === 'Yes'}
                          onChange={handleInputChange}
                          required
                        />
                        Yes
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="permission"
                          value="No"
                          checked={formData.permission === 'No'}
                          onChange={handleInputChange}
                          required
                        />
                        No
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="adaptiveTechnologyInterest">Would you be interested in any other form of adaptive technology/toys?</label>
                    <input
                      type="text"
                      id="adaptiveTechnologyInterest"
                      name="adaptiveTechnologyInterest"
                      value={formData.adaptiveTechnologyInterest}
                      onChange={handleInputChange}
                      placeholder="Your answer (optional)"
                    />
                  </div>
                </div>
                
                <button type="submit" className="submit-btn">
                  Submit Enrollment
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EnrollYourChild;
