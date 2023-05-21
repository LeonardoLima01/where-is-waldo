import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the timer every second
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the seconds as minutes:seconds
  const formattedTime = new Date(seconds * 1000).toISOString().substr(14, 5);

  return (
    <div className="timer-container">
      <h1>{formattedTime}</h1>
    </div>
  );
}

export default Timer;
