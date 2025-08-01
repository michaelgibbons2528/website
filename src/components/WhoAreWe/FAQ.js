import React, { useState } from 'react';
import '../../styles/FAQ.css';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Accessible 4 All (A4A)?",
      answer: "Accessible 4 All is a student-led organization at Rutgers University dedicated to creating innovative engineering solutions for children with disabilities. We design and build custom adaptive equipment, including ride-on cars, educational tools, and mobility devices to help children play, learn, and explore independently."
    },
    {
      question: "How can my child receive help from A4A?",
      answer: "We work directly with families to assess each child's specific needs and create personalized solutions. The process typically involves an initial consultation, needs assessment, design phase, and delivery. Contact us through our website or social media to start the process."
    },
    {
      question: "What types of equipment do you provide?",
      answer: "We specialize in custom ride-on cars, adaptive educational tools, mobility devices, and other assistive technology. Each project is tailored to the individual child's needs, abilities, and interests. Our most popular items include modified ride-on cars, giant Montessori boards, and interactive learning devices."
    },
    {
      question: "How much do your services cost?",
      answer: "All of our services are provided completely free of charge to families. We believe that every child deserves access to adaptive equipment regardless of financial circumstances. Our work is supported through donations, grants, and the dedication of our student volunteers."
    },
    {
      question: "Who can volunteer with A4A?",
      answer: "We welcome students from all engineering disciplines, as well as students interested in helping children with disabilities. No prior experience is required - we provide training and mentorship. Volunteers can help with design, building, family outreach, fundraising, and administrative tasks."
    },
    {
      question: "What skills do I need to volunteer?",
      answer: "We welcome volunteers with various skill levels! Engineering students can apply their technical knowledge, while others can help with project management, family communication, fundraising, or social media. The most important qualities are enthusiasm, empathy, and a desire to help others."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and our current capacity. Simple modifications might take a few weeks, while complex custom designs can take 1-2 months. We work closely with families to set realistic expectations and provide regular updates throughout the process."
    },
    {
      question: "Do you work with healthcare professionals?",
      answer: "Yes! We collaborate with physical therapists, occupational therapists, and other healthcare providers to ensure our solutions meet each child's therapeutic and developmental needs. We value their expertise and often incorporate their recommendations into our designs."
    },
    {
      question: "Can you help children with any type of disability?",
      answer: "We work with children who have various physical and developmental disabilities, including cerebral palsy, autism, Down syndrome, mobility challenges, and other conditions. Each child's needs are unique, and we design solutions accordingly."
    },
    {
      question: "How can I donate to support A4A?",
      answer: "We accept monetary donations to help cover materials, tools, and operational costs. You can also donate materials, tools, or your time as a volunteer. Contact us to learn about current donation needs and how your contribution can make a difference."
    },
    {
      question: "Do you provide ongoing support after delivery?",
      answer: "Yes, we provide follow-up support to ensure the equipment continues to meet the child's needs as they grow and develop. We offer maintenance, adjustments, and modifications as needed. We also stay in touch with families to learn about the impact of our work."
    },
    {
      question: "How can I spread the word about A4A?",
      answer: "You can help by sharing our social media posts, telling families who might benefit from our services, connecting us with healthcare providers, or inviting us to speak at community events. Word-of-mouth referrals are one of our most valuable ways of reaching families in need."
    }
  ];

  return (
    <div className="faq-container">
      {/* Hero Section */}
      <div className="faq-hero" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/4-3_Rutgers_Spring_2025_Everyone.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p className="hero-subtitle">
              Find answers to common questions about Accessible 4 All, our services, 
              and how we can help children with disabilities and their families.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <div className="faq-intro">
            <h2>Common Questions</h2>
            <p>
              Can't find what you're looking for? Contact us directly and we'll be happy to help!
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openQuestion === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="faq-contact">
            <h3>Still Have Questions?</h3>
            <p>
              We're here to help! If you couldn't find the answer you're looking for, 
              please don't hesitate to reach out to us directly.
            </p>
            <div className="contact-options">
              <div className="contact-option">
                <h4>📧 Email Us</h4>
                <p>Send us a detailed message and we'll get back to you within 24 hours.</p>
                <button className="contact-button">Send Email</button>
              </div>
              <div className="contact-option">
                <h4>📱 Social Media</h4>
                <p>Connect with us on Instagram for quick questions and updates.</p>
                <a 
                  href="https://www.instagram.com/rutgersa4a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  Follow on Instagram
                </a>
              </div>
              <div className="contact-option">
                <h4>🎓 Student Volunteers</h4>
                <p>Interested in joining our team? Learn about volunteer opportunities.</p>
                <button className="contact-button">Get Involved</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 