import React, { useRef, useState } from 'react'
import './style.css'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [active, setActive] = useState(false);
    
    let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);
  
    let timeInterval = useRef(null);
  
    const handleStart = () => {
      if (isRunning) return;
      setIsRunning(true);
      setActive(!active);
      timeInterval.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 10);
      
    };
  
    const handlePause = () => {
      if (!isRunning) return;
      setActive(!active);
      setIsRunning(false);
      clearInterval(timeInterval.current);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      let purple = '#A020F0';
      setBgColor(purple);
      clearInterval(timeInterval.current);
      setTimer(0);
    };
  
    const formatTime = (timer) => {
      const minutes = Math.floor(timer / 6000)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((timer / 100) % 60)
        .toString()
        .padStart(2, "0");
      const milliseconds = (timer % 60).toString().padStart(2, "0");
  
      return { minutes, seconds, milliseconds };
    };
  
    const { minutes, seconds, milliseconds } = formatTime(timer);
  
  return (
    <>
    <div className="App"  style={{ backgroundColor: active ? "black" : "white" }}>
      <h1>Reactjs Stopwatch</h1>
      <div className="timer-container">
        <div className="timer-box">
          <h1>{minutes}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{seconds}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{milliseconds}</h1>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset} style={{background: bgColor}} >Reset</button>
      </div>
    </div>
    </>
  )
}

export default Stopwatch