// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <h3>Email</h3>
                <p>info@candleglow.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span>📞</span>
              <div>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span>📍</span>
              <div>
                <h3>Address</h3>
                <p>123 Candle Street<br />Waxville, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form">
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;