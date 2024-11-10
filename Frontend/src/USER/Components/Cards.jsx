import React from 'react';

function Cards({ title, content, imageUrl }) {
  return (
    <div className="card" style={cardStyle}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="card-img" 
        style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#fff', textAlign: 'center' }}>{title}</h5>
        <p className="card-text" style={{ color: '#fff' }}>{content}</p>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '18rem',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',  
  backgroundColor: '#000',
  border: '2px solid #fff',
};

export default Cards;
