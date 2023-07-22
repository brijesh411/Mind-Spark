import React from 'react';
import { useState } from 'react';
import './animation.css';
import dog from './dog.png'
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
    <div className="yap-dog-box">
      <img
        src={dog}
        alt="A dog"
        className="yap-dog"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onAnimationEnd={handleHovered}
      />
    </div>
  );
};

export default Animation;
