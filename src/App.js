import React, { useState } from 'react';

import './App.css';
import ConicProgress from './components/ConicProgress';
import QuarterProgressBar from './components/QuarterProgressBar';

const App = () => {
  const [progressChange, setProgressChange] = useState(25);
  const [progressSelfAffirmation, setProgressSelfAffirmation] = useState(50);
  const [progressContinuity, setProgressContinuity] = useState(90);
  const [progressOverAchievement, setProgressOverAchievement] = useState(75);

  const conicSize = 400;
  const circleSize = 490;

  return (
    <div className="app">
      <div className="figure-wrapper">
        <div className="conic-progress-wrapper" style={{ height: `${conicSize}px`, width: `${conicSize}px` }}>
          <ConicProgress className="conic-progress conic-0" color="lightgreen" size={conicSize} progress={90} />
          <ConicProgress className="conic-progress conic-1" color="yellow" size={conicSize} progress={75} />
          <ConicProgress className="conic-progress conic-2" color="lightsalmon" size={conicSize} progress={25} />
          <ConicProgress className="conic-progress conic-3" color="lightcoral" size={conicSize} progress={40} />
          <ConicProgress className="conic-progress conic-4" color="pink" size={conicSize} progress={50} />
          <ConicProgress className="conic-progress conic-5" color="purple" size={conicSize} progress={60} />
          <ConicProgress className="conic-progress conic-6" color="darkblue" size={conicSize} progress={70} />
          <ConicProgress className="conic-progress conic-7" color="blue" size={conicSize} progress={75} />
          <ConicProgress className="conic-progress conic-8" color="teal" size={conicSize} progress={90} />
          <ConicProgress className="conic-progress conic-9" color="mediumseagreen" size={conicSize} progress={100} />
        </div>

        <div className="quarter-progress-bar-wrapper" style={{ height: `${circleSize}px`, width: `${circleSize}px` }}>
          <QuarterProgressBar size={circleSize} color="purple" className="quarter-progress-bar progress-change" progress={progressChange} />
          <QuarterProgressBar size={circleSize} color="blue" className="quarter-progress-bar progress-self-affirmation" progress={progressSelfAffirmation} />
          <QuarterProgressBar size={circleSize} color="seagreen" className="quarter-progress-bar progress-continuity" progress={progressContinuity} />
          <QuarterProgressBar size={circleSize} color="yellow" className="quarter-progress-bar progress-over-achievement" progress={progressOverAchievement} />
        </div>
      </div>

      <div className="inputs-wrapper">
        <label>
          <span style={{ color: "red" }}>changement</span>
          <input type="number" value={progressChange} onChange={(e) => setProgressChange(e.target.value)} /></label>
        <label>
          <span style={{ color: "blue" }}>affirmation de soi</span>
          <input type="number" value={progressSelfAffirmation} onChange={(e) => setProgressSelfAffirmation(e.target.value)} /></label>
        <label>
          <span style={{ color: "orange" }}>continuité</span>
          <input type="number" value={progressContinuity} onChange={(e) => setProgressContinuity(e.target.value)} /></label>
        <label>
          <span style={{ color: "purple" }}>dépassement de soi</span>
          <input type="number" value={progressOverAchievement} onChange={(e) => setProgressOverAchievement(e.target.value)} /></label>
      </div>
    </div>
  );
}

export default App;
