import React from "react";
import clamp from '../../utils/clamp';

import './style.css';

const ConicProgress = ({ color, className = '', size = 100, progress }) => {
  const conicProgress = clamp(progress, 0, 100);  
  const fillSize = conicProgress * size / 100;

  return (
    <div className={className} style={{ height: `${size}px`, width: `${size}px` }}>
      <div className="conic-progress-shape" style={{ height: `${size}px`, width: `${size}px` }}>
        <div style={{ height: `${size}px`, width: `${size}px` }} className="conic-progress-full-circle">
          <div style={{ backgroundColor: color, height: `${fillSize}px`, width: `${fillSize}px` }} className="conic-progress-fill" />
        </div>
      </div>
    </div>
  )
}

export default ConicProgress;
