import React, { useState, useEffect } from "react";

export const TimerContainer = ({ seconds, refresh, render: Render }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  useEffect(() => {
    let startPointTime = Date.now();
    let difference;
    let id = setInterval(() => {
      difference = timeLeft - (Date.now() - startPointTime) / 1000;
    //   console.log(Math.floor(difference));
      setTimeLeft(Math.floor(difference));
      if (Math.floor(difference) === 0) {
        clearInterval(id);
      }
    }, refresh);
  }, []);

  return <Render seconds={timeLeft} />;
};
