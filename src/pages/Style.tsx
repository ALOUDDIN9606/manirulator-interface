// src/App.tsx
import React, { useState } from 'react';
import './App.css'; // CSS faylini import qilish

const App = () => {
  const [speed, setSpeed] = useState(5);

  return (
    <div className="container">
      <div className="header">Manipulator Interface</div>

      <button onClick={() => alert('Started execution!')}>Start Execution</button>

      <div>
        <label htmlFor="speed">Speed: {speed}s</label>
        <input
            type="range"
            id="speed"
            min="1"
            max="10"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))} 
        />
      </div>

      {/* Kartalar */}
      <div className="content">
        <div className="card">Original Command</div>
        <div className="card">Optimized Command</div>
        <div className="card">Timestamp</div>
      </div>
    </div>
  );
};

export default App;
