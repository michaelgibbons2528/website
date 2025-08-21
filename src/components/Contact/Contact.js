import React, { useState } from 'react';
import '../../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div 
        className="contact-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Work_on_Project.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We're here to help!</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Have questions about our programs, want to volunteer, or need information about adaptive devices? We'd love to hear from you!</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@a4all.org</p>
              <p>For general inquiries and questions</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <h3>Social Media</h3>
              <p>@rutgersa4a</p>
              <p>Follow us on Instagram for updates</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Rutgers University</p>
              <p>New Brunswick, New Jersey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
                <button 
                  className="submit-another-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
