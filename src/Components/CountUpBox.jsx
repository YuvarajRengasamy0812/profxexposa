import React from 'react';
import CountUp from 'react-countup';

function CountUpBox({ end, label }) {
  return (
    <div className="p-2 text-center">
      <h1 className="text-white m-0">
        <CountUp end={end} duration={2} enableScrollSpy scrollSpyOnce />
        <span>+</span>
      </h1>
      <p className="mb-0">{label}</p>
    </div>
  );
}

export default CountUpBox;