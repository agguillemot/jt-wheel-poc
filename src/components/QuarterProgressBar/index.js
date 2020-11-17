import React from "react";
import ProgressBar from '../ProgressBar/ProgressBar';
import clamp from '../../utils/clamp';

const QuarterProgressBar = ({ className, color, size, progress }) => {
  // get percentage on a quarter of circle and clamp its value between 0 and 100
  const realPercentage = clamp(progress * 25 / 100, 0, 100);

  return (
    <ProgressBar
      className={className}
      progress={realPercentage}
      size={size}
      strokeWidth={45}
      circleOneStroke='transparent'
      circleTwoStroke={color}
    />
  )
}

export default QuarterProgressBar;
