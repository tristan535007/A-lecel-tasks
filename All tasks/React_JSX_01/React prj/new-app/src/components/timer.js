import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const styles = {
  div: { display: "flex", justifyContent: "space-between", margin: "15px" },
};

function Timer({ secondS, minuteS, hourS }) {
  const [sec, setSec] = useState(secondS);
  const [min, setMin] = useState(minuteS);
  const [hours, setHours] = useState(hourS);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    if (min === 0 && hours > 0) {
      setMin(60);
      setHours((prevHour) => prevHour - 1);
    } else if (sec === 0 && min > 0) {
      setSec(60);
      setMin((prevMin) => prevMin - 1);
    }

    if (pause) {
      const id = setInterval(() => {
        sec !== 0 ? setSec((prevSec) => prevSec - 1) : clearInterval();
      }, 1000);
      return () => clearInterval(id);
    }
  }, [pause, sec]);
  useEffect(() => {
    setSec(secondS);
    setMin(minuteS);
    setHours(hourS);
  }, [secondS, minuteS, hourS]);

  return (
    <Container style={styles.div}>
      <Button onClick={() => setPause(false)}>Pause</Button>
      <Container style={styles.div}>
        <Jumbotron>{hours < 10 ? "0" + hours : hours}</Jumbotron>
        <Jumbotron>{min < 10 ? "0" + min : min}</Jumbotron>
        <Jumbotron>{sec < 10 ? "0" + sec : sec}</Jumbotron>
      </Container>
      <Button onClick={() => setPause(true)}>Start</Button>
    </Container>
  );
}
export default Timer;
