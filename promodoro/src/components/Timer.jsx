import { React, useState, useEffect, useRef } from "react";

function Timer({ time, title }) {
  const [timer, setTimer] = useState(time);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        const [mins, secs] = timer.split(":").map(Number);
        let totalSeconds = mins * 60 + secs;
        if (totalSeconds > 0) {
          totalSeconds -= 1;
        } else {
          clearInterval(intervalRef.current);
          return;
        }
        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds % 60;
        const formattedTimer = `${String(newMinutes).padStart(2, "0")}:${String(
          newSeconds
        ).padStart(2, "0")}`;
        setTimer(formattedTimer);
      }, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [isRunning, timer]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };
  const restart = () => {
    setIsRunning(false);
    setTimer(time);
  };

  return (
    <div className="timerWrapper">
      <h1 className="timerTitle">{title}</h1>
      <h1>{timer}</h1>
      <div className="buttons">
        <button id="startBtn" onClick={start}>
          Start
        </button>
        <button id="restartBtn" onClick={restart}>
          Restart
        </button>
        <button id="pauseBtn" onClick={pause}>
          Pause
        </button>
      </div>
    </div>
  );
}

export default Timer;
