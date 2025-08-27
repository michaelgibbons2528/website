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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
      // Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxSr__f4xD2_-mPz4OiewbAhz3MSJWs1FMzRReDq0KRoT9niX6UTMSv9pMmiOzwyNAwJg/exec';
      
      // Log form data before sending
      console.log('Form data being sent:', formData);
      
      // Create URL parameters
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('subject', formData.subject);
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
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly at mgibbons@a4all.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div 
        className="contact-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_First_Meeting.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Questions, Comments, & Concerns?</h2>
            <p>Send us a message! Please fill out this form and we'll get back to you within 24-48 hours.</p>
            
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
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Unable to fill out the form? Find us on social media or email us directly. We'd love to hear from you!</p>
          
          <div className="contact-methods">          
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <h3>Social Media</h3>
              <p>@rutgersa4a</p>
              <p>Follow us on Instagram for updates</p>
            </div>
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>mgibbons@a4all.org</p>
            <p>For general inquiries and questions</p>
          </div>
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <h3>Locations</h3>
              <p>Rutgers University</p>
              <p>New Brunswick, New Jersey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
