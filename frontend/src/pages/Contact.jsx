import React, { useState } from 'react';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(''); // Initial contact info is empty

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {/* Display contact info if it's not empty */}
      {contactInfo ? (
        <p>{contactInfo}</p>
      ) : (
        <p>Contact information will be available soon. Please check back later!</p>
      )}
    </div>
  );
};

export default Contact;
