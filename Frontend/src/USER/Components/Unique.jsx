import React from 'react';

function Unique({ titles, content }) {
  // Add a check to ensure content is an array
  if (!Array.isArray(content)) {
    console.error("Content is not an array:", content);
    return null; // Return null or handle the error gracefully
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '40px', textAlign: 'center' }}>
      <h2>{titles}</h2>
      {content.map((paragraph, index) => (
        <p key={index} style={{ margin: '20px 0' }}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Unique;
