import React, { useState } from 'react';

const About = () => {
  const [description, setDescription] = useState(''); // Initial description is empty

  return (
    <div className="about-page">
      <h1>About the Bookstore</h1>
      {/* Display the description if it's not empty */}
      {description ? (
        <p>{description}</p>
      ) : (
        <p>No information available at the moment.</p>
      )}
    </div>
  );
};

export default About;
