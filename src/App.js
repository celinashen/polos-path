import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';

function App() {

  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollAmount = event.deltaY * 1.0;
    container.scrollLeft += scrollAmount;
  };
  return (
    <div className="background-container" onWheel={handleScroll} ref={containerRef}>
      <div className = "background-image">
          <h1 className = "test">GeeksForGeeks</h1>
      </div>
    </div>
  );
}

export default App;
