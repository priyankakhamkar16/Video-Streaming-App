// src/components/FeatureBox.js
import React from 'react';
import './styles/FeatureBox.css';

const FeatureBox = ({ image, title, description }) => {
  return (
    <div className="feature-box">
      <img src={image} alt={title} className="feature-image" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureBox;
