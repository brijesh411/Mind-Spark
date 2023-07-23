import React from 'react';
import { useState } from 'react';
import './animation.css';
import hat from './hat.gif'
const Animation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleHovered = () => {
    isHovered(false);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="yap-hat-box">
      <img
        src={hat}
        alt="A hat"
        className="yap-hat"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onAnimationEnd={handleHovered}
      />
    </div>
  );
};

export default Animation;
