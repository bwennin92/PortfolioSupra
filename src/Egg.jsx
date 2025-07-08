import React, { useState } from 'react';

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 80 + 5}%`,
});

export default function Egg() {
  const [pos, setPos] = useState(getRandomPosition());
  const [zooming, setZooming] = useState(false);

  const handleClick = () => {
    setZooming(true);
    setTimeout(() => {
      setPos(getRandomPosition());
      setZooming(false);
    }, 400); // Duration of zoom animation
  };

  return (
    <div
      className={`digital-egg${zooming ? ' zooming' : ''}`}
      style={{
        position: 'fixed',
        ...pos,
        zIndex: 100,
        transition: zooming
          ? 'transform 0.4s cubic-bezier(.5,2,.5,1), top 0.4s, left 0.4s'
          : 'top 0.4s, left 0.4s',
        transform: zooming ? 'scale(1.5) rotate(20deg)' : 'scale(1)',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      title="Click me!"
    >
      <svg width="60" height="80" viewBox="0 0 60 80">
        <ellipse
          cx="30"
          cy="40"
          rx="25"
          ry="35"
          fill="#0ff"
          stroke="#23243a"
          strokeWidth="4"
          filter="url(#glow)"
        />
        <ellipse
          cx="30"
          cy="50"
          rx="10"
          ry="5"
          fill="#fff"
          opacity="0.4"
        />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      <span className="egg-text">Easter Egg</span>
    </div>
  );
}