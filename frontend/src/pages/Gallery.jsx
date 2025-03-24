import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    'url(https://tse1.mm.bing.net/th?id=OIP.0GTKyiEWPI0n_AQg_MYTbQHaEk&pid=Api&P=0&h=180)', 
    'url(https://s26162.pcdn.co/wp-content/uploads/2017/08/livraria-lello.jpg)',
  ];

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const handleClick = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="gallery"
      style={{
        height: '100vh',
        backgroundImage: images[backgroundIndex],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <button onClick={handleClick} style={buttonStyle}>
        Turn on the light
      </button>
    </div>
  );
};


const buttonStyle = {
  position: 'absolute',
  top: '250px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px 20px',
  fontSize: '18px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default Gallery;
