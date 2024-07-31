import React from 'react';

const Progress = ({ progress }) => {
  const radius = 30; // Adjust the radius as needed
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={radius * 2} height={radius * 2} className="relative">
      {/* Add a circle to represent the outline */}
      <circle
        className="circle-outline"
        cx={radius}
        cy={radius}
        r={radius}
        fill="transparent"
        stroke="#01B4E4" // Outline color
        strokeWidth="5"
      />
      <circle
        className="circle-bg"
        cx={radius}
        cy={radius}
        r={radius}
        fill="transparent"
        stroke="#e0e0e0" // Background color
        strokeWidth="5"
      />
      <circle
        className="circle-progress"
        cx={radius}
        cy={radius}
        r={radius}
        fill="transparent"
        stroke="#01B4E4" // Progress color
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text x={radius} y={radius} className="text-center text-gray-700 font-semibold">
        {progress}%
      </text>
    </svg>
  );
};

export default Progress;
