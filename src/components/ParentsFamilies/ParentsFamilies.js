import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/ParentsFamilies.css';

const ParentsFamilies = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    childNeeds: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Child Enrollment Request

Child Information:
- Name: ${formData.childName}
- Age: ${formData.childAge}

Parent/Guardian Information:
- Name: ${formData.parentName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Child's Needs:
${formData.childNeeds}

Additional Information:
${formData.additionalInfo}
    `;

    // Create mailto link
    const mailtoLink = `mailto:mgibbons@a4all.org?subject=New Child Enrollment Request - ${formData.childName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink);
    
    // Reset form
    setFormData({
      childName: '',
      childAge: '',
      parentName: '',
      email: '',
      phone: '',
      childNeeds: '',
      additionalInfo: ''
    });
    
    alert('Thank you for your enrollment request! An email has been opened with your information. Please send the email to complete your enrollment.');
  };

  return (
    <div className="parents-families-page">
      {/* Hero Section */}
      <div 
        className="hero-section"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/4-3_Ciaran_Family.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Parents & Families</h1>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2>You've Found Your Community</h2>
            <p>
              At Accessible 4 All, we understand that every child is unique, and every family's journey is different. 
              We're here to create custom solutions that make your child's world more accessible, engaging, and full of possibilities.
            </p>
                         <div className="welcome-features">
               <div className="feature">
                 <div className="feature-icon">Personalized</div>
                 <p>We work directly with your family to understand your child's specific needs and preferences.</p>
               </div>
               <div className="feature">
                 <div className="feature-icon">Custom Solutions</div>
                 <p>From ride-on cars to learning tools, we design equipment that fits your child perfectly.</p>
               </div>
               <div className="feature">
                 <div className="feature-icon">Completely Free</div>
                 <p>All our services and equipment are provided at no cost to families and institutions.</p>
               </div>
             </div>
                     </div>
         </div>
       </div>

       {/* Enroll Your Child Section */}
       <div className="enroll-section">
         <div className="container">
           <div className="enroll-content">
             <h2>Enroll Your Child</h2>
             <p>
               Ready to get started? Fill out the form below to enroll your child in our program. 
               We'll review your information and get back to you within 48 hours to discuss how we can help your family.
             </p>
             
             <form className="enroll-form" onSubmit={handleSubmit}>
               <div className="form-section">
                 <h3>Child Information</h3>
                 <div className="form-row">
                   <div className="form-group">
                     <label htmlFor="childName">Child's First Name *</label>
                     <input
                       type="text"
                       id="childName"
                       name="childName"
                       value={formData.childName}
                       onChange={handleInputChange}
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
                       onChange={handleInputChange}
                       min="0"
                       max="18"
                       required
                     />
                   </div>
                 </div>
               </div>

               <div className="form-section">
                 <h3>Parent/Guardian Information</h3>
                 <div className="form-row">
                   <div className="form-group">
                     <label htmlFor="parentName">Your Name *</label>
                     <input
                       type="text"
                       id="parentName"
                       name="parentName"
                       value={formData.parentName}
                       onChange={handleInputChange}
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
                       onChange={handleInputChange}
                       required
                     />
                   </div>
                 </div>
                 <div className="form-group">
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

               <div className="form-section">
                 <h3>Child's Needs</h3>
                 <div className="form-group">
                   <label htmlFor="childNeeds">Please describe your child's needs and what type of equipment or support you're looking for *</label>
                   <textarea
                     id="childNeeds"
                     name="childNeeds"
                     value={formData.childNeeds}
                     onChange={handleInputChange}
                     rows="4"
                     required
                     placeholder="For example: My child needs a custom ride-on car with special controls due to limited mobility..."
                   ></textarea>
                 </div>
                 <div className="form-group">
                   <label htmlFor="additionalInfo">Additional Information</label>
                   <textarea
                     id="additionalInfo"
                     name="additionalInfo"
                     value={formData.additionalInfo}
                     onChange={handleInputChange}
                     rows="3"
                     placeholder="Any other information you'd like us to know about your child or family situation..."
                   ></textarea>
                 </div>
               </div>

               <div className="form-submit">
                 <button type="submit" className="enroll-btn">
                   Submit Enrollment Request
                 </button>
                 <p className="form-note">
                   * Required fields. All information will be sent to mgibbons@a4all.org
                 </p>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   );
 };

export default ParentsFamilies; 