// SpinningText.jsx
import React, { useEffect } from 'react';

const Spinning = ({ text = "Welcome to React" }) => {
  return (
    <h2 className="spinning-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="spin"
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};

export default Spinning;
