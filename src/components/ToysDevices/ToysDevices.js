import React, { useState } from 'react';
import '../../styles/ToysDevices.css';

const ToysDevices = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    toyDeviceName: '',
    description: '',
    whyNeeded: '',
    currentChallenges: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      email: '',
      phone: '',
      toyDeviceName: '',
      description: '',
      whyNeeded: '',
      currentChallenges: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="toys-devices-container">
      {/* Hero Section */}
      <div 
        className="toys-devices-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/1-1_Electronics.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Toys & Devices</h1>
          <p className="hero-subtitle">
            Help us create the perfect accessible toys and devices for your child. 
            Share your ideas and recommendations to make play accessible for all children.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="toys-devices-main">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <h2>Your Ideas Matter</h2>
            <p>
              At Accessible 4 All, we believe every child deserves the opportunity to play, learn, and grow. 
              We want to hear from you about what toys and devices would make a difference in your child's life. 
              Your recommendations help us understand the real needs of families and guide our future projects.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="form-section">
          <div className="container">
            <div className="form-content">
              <div className="form-header">
                <h2>Submit Your Recommendation</h2>
                <p>
                  Tell us about a toy or device that would help your child. We'll review your submission 
                  and may reach out to discuss how we can help bring your idea to life.
                </p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <h3>Thank You!</h3>
                  <p>
                    Your recommendation has been submitted successfully. Our team will review your submission 
                    and may contact you for more information. We appreciate you taking the time to help us 
                    create better accessible solutions for children.
                  </p>
                  <button 
                    className="submit-another-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Recommendation
                  </button>
                </div>
              ) : (
                <form className="recommendation-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="parentName">Parent/Guardian Name *</label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="childName">Child's Name *</label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="childAge">Child's Age *</label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        min="0"
                        max="18"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="toyDeviceName">Toy or Device Name *</label>
                      <input
                        type="text"
                        id="toyDeviceName"
                        name="toyDeviceName"
                        value={formData.toyDeviceName}
                        onChange={handleChange}
                        placeholder="e.g., Accessible Building Blocks, Modified Ride-On Car"
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="description">Description of the Toy/Device *</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe what this toy or device would look like and how it would work..."
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="whyNeeded">Why is this needed? *</label>
                      <textarea
                        id="whyNeeded"
                        name="whyNeeded"
                        value={formData.whyNeeded}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Explain how this would help your child and what benefits it would provide..."
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="currentChallenges">Current Challenges</label>
                      <textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Describe any challenges your child currently faces with existing toys or devices..."
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="additionalInfo">Additional Information</label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Any other details that might help us understand your child's needs better..."
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="submit-btn">
                      Submit Recommendation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="examples-section">
          <div className="container">
            <h2>Examples of What We've Created</h2>
            <div className="examples-grid">
              <div className="example-card">
                <img src="/images/4-3_Isaiah_Car_and_Family.JPG" alt="Custom ride-on car" />
                <h3>Custom Ride-On Cars</h3>
                <p>Modified battery-powered cars with adaptive controls and seating for children with mobility challenges.</p>
              </div>
              <div className="example-card">
                <img src="/images/1-1_Project_Braylon.jpg" alt="Montessori board" />
                <h3>Giant Montessori Boards</h3>
                <p>Large-scale learning boards that develop fine motor skills and cognitive development.</p>
              </div>
              <div className="example-card">
                <img src="/images/1-1_Project_Robert.jpg" alt="Dog treat project" />
                <h3>Accessible Dog Treat Tools</h3>
                <p>Custom tools for making dog treats that help develop motor skills and coordination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2>Have Questions?</h2>
            <p>
              If you have questions about our process or want to discuss your idea before submitting, 
              please don't hesitate to reach out to us.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@accessible4all.org</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Rutgers University, New Brunswick, NJ</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToysDevices; 