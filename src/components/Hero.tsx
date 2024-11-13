import React from "react";
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // Import the CSS file for Hero component

const Hero = () => {
  const navigate = useNavigate();

  const handleViewWorkClick = () => {
    navigate('/project');
  };

  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting Timeless Beauty in Stone
          </h1>
          <p className="hero-text">
            Premium granite installations that transform your space into a
            masterpiece of elegance and durability.
          </p>
          <button
            onClick={handleViewWorkClick}
            className="hero-button"
          >
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;