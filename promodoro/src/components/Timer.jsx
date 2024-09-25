import { React, useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState("00:15");

  useEffect(() => {
    const interval = setInterval(() => {
      const [mins, secs] = timer.split(":").map(Number); //convert everything from string to number
      let totalSeconds = mins * 60 + secs; //convert everything from minutes to seconds to get total seconds
      if (totalSeconds > 0) {
        totalSeconds -= 1;
      } else {
        clearInterval(interval);
        return;
      } //we count down 1 second
      const newMinutes = Math.floor(totalSeconds / 60); //we convert back to minutes using .floor to round down to nearest minutes
      const newSeconds = totalSeconds % 60; // we get remainder of seconds that don't perfectly divde by 60
      const formattedTimer = `${String(newMinutes).padStart(2, "0")}:${String(
        newSeconds
      ).padStart(2, "0")}`; //we format to string again using pad, adding a 0 if needed to fill in the 00:00 desired format.
      setTimer(formattedTimer); // we update timer with new time
    }, 1000 /*automatically happens every 1000 milisecond*/);

    return () => clearInterval(interval); // using clearInterval to stop timer created by setInterval
  }, [timer]);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
}

export default Timer;
